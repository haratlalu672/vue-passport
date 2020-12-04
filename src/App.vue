<template>
  <navigation />
  <router-view />
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navigation },
};
</script>

<style>
body {
  background: lightgray !important;
}
</style>