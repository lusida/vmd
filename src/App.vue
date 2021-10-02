<template>
  <div id="app">
    <Vditor />
  </div>
</template>

<script>
import Vditor from "./components/Vditor.vue";
export default {
  components: { Vditor },
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
