const gulp = require("gulp");
const config = require("./gulp.paths.json");

// плагины галпа отдельно подключать не нужно,
// используем в пайпе как $gp.имяПлагина (без приставки gulp-)
const $gp = require("gulp-load-plugins")();

const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const $webpack = require("webpack-stream");
const webpack = require("webpack");
const mergeStream = require("merge-stream");
const moduleImporter = require("sass-module-importer");
const del = require("del");

const autoprefixer = require('autoprefixer');

// стили
gulp.task("styles", () => {
  const plugins = [
    require('postcss-easy-import')({
      extensions : '.scss'
    }),
    autoprefixer({
      browsers: ["last 2 versions"],
      cascade: false
    }),
    require("postcss-advanced-variables"),
    require("postcss-nested"),
    require("postcss-rgb"),
    
    // require("postcss-inline-svg")({
    //   removeFill: true,
    //   path: "./src/assets/img"
    // }),
    // require("postcss-svgo")
  ];

  return gulp
    .src(`${config.SRC_DIR}/styles/main.scss`)
    .pipe($gp.plumber())
    .pipe($gp.sourcemaps.init())
    .pipe($gp.postcss(plugins))
    .pipe($gp.sourcemaps.write('.'))
    .pipe($gp.rename('main.min.css'))
    .pipe(gulp.dest(`${config.DIST_DIR}`))
    .pipe(reload({ stream: true }));
});

// переносим шрифты
gulp.task("fonts", () => {
  return gulp
    .src(`${config.SRC_DIR}/fonts/**`)
    .pipe(gulp.dest(`${config.DIST_DIR}/assets/fonts/`));
});

// очистка
gulp.task("clean", () => {
  return del(config.ROOT_PATH);
});

// собираем скрипты webpack
gulp.task("scripts", () => {
  return gulp
    .src([
      `${config.SRC_DIR}/scripts/about.js`,
      `${config.SRC_DIR}/scripts/auth.js`,
      `${config.SRC_DIR}/scripts/works.js`
    ])
    .pipe($gp.plumber())
    .pipe($webpack(require("./webpack.mp.config"), webpack))
    .pipe(gulp.dest(`${config.DIST_DIR}`))
    .pipe(reload({ stream: true }));
});

//рендерим странички

gulp.task("pug", () => {
  return gulp
    .src(`${config.VIEWS_DIR}/pages/*.pug`)
    .pipe($gp.plumber())
    .pipe($gp.pug())
    .pipe(gulp.dest(`${config.DIST_DIR}`))
    .pipe(reload({ stream: true }));
});

// dev сервер + livereload (встроенный)
gulp.task("server", () => {
  browserSync.init({
    server: {
      baseDir: `${config.DIST_DIR}`
    },
    open: false
  });
});

// спрайт иконок + инлайн svg
gulp.task("svg", done => {
  const prettySvgs = () => {
    return gulp
      .src(`${config.SRC_DIR}/images/icons/*.svg`)
      .pipe(
        $gp.svgmin({
          js2svg: {
            pretty: true
          }
        })
      )
      .pipe(
        $gp.cheerio({
          run($) {
            $("[fill], [stroke], [style], [width], [height]")
              .removeAttr("fill")
              .removeAttr("stroke")
              .removeAttr("style")
              .removeAttr("width")
              .removeAttr("height");
          },
          parserOptions: { xmlMode: true }
        })
      )
      .pipe($gp.replace("&gt;", ">"));
  };

  let svgSprite = prettySvgs()
    .pipe(
      $gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg"
          }
        }
      })
    )
    .pipe(gulp.dest(`${config.DIST_DIR}/assets/images/icons`));

  let svgInline = prettySvgs().pipe(
    $gp.sassInlineSvg({
      destDir: `${config.SRC_DIR}/styles/icons/`
    })
  );

  return mergeStream(svgSprite, svgInline);
});

// просто переносим картинки
gulp.task("images", () => {
  return gulp
    .src([
      `${config.SRC_DIR}/images/**/*.*`,
      `!${config.SRC_DIR}/images/icons/*.*`
    ])
    .pipe(gulp.dest(`${config.DIST_DIR}/assets/images/`));
});

// галповский вотчер
gulp.task("watch", () => {
  gulp.watch(`${config.SRC_DIR}/styles/**/*.scss`, gulp.series("styles"));
  gulp.watch(`${config.SRC_DIR}/images/**/*.*`, gulp.series("images"));
  gulp.watch(`${config.SRC_DIR}/scripts/**/*.js`, gulp.series("scripts"));
  gulp.watch(`${config.SRC_DIR}/fonts/*`, gulp.series("fonts"));
  gulp.watch(`${config.VIEWS_DIR}/**/*.pug`, gulp.series("pug"));
});

gulp.task(
  "build",
  gulp.series(
    "svg",
    gulp.parallel("styles", "pug", "images", "fonts", "scripts")
  )
);

// GULP:RUN
gulp.task(
  "default",
  gulp.series(
    "clean",
    "svg",
    gulp.parallel("styles", "pug", "images", "fonts", "scripts"),
    gulp.parallel("watch", "server")
  )
);
