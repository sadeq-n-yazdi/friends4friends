<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    <h1>Control Panel</h1>

    <div v-if="msg" class="info">{{ msg }}</div>
  </div>
</template>

<style scoped>
div.info {
  background-color: darkslategray;
  color: goldenrod;
  border: 1px crimson solid;
  border-radius: 5px;
  padding: 1cm;
  display: flex;
}
</style>