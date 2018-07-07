<template lang="pug">
  .admpanel
    admpanel-header
    admpanel-menu
    admpanel-content
</template>
<script>
import admpanelHeader from "./admpanelHeader";
import admpanelMenu from "./admpanelMenu";
import admpanelContent from "./admpanelContent";

export default {
  components: {
    admpanelHeader,
    admpanelMenu,
    admpanelContent
  }
};
</script>

<style lang="scss" scoped>
.admpanel {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
}
</style>
