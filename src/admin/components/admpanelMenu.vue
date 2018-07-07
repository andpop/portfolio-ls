<template lang="pug">
  nav.nav
    ul.menu
      li.menu__item 
        a(href="#").menu__link tab1
      li.menu__item.menu__item--active 
        a(href="#").menu__link tab2
      li.menu__item
        a(href="#").menu__link tab3
</template>
<style lang="scss" scoped>
.nav {
  background-color: #f0efe9;
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 16px;
}
.menu {
  display: flex;
  justify-content: flex-start;
  text-transform: uppercase;

  &__item {
    width: 190px;
    height: 62px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid #fff;

    &:hover {
      background-color: #ffffff;
    }
  }

  &__item--active {
    background-color: #ffffff;

    .menu__link {
      color: #0548be;
    }
  }

  &__link {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #474b57;
    text-align: center;
    line-height: 62px;

    &:hover {
      color: #0548be;
    }
  }
}
</style>
