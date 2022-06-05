<script setup lang="ts">
import MessageBox from "@/components/MessageBox.vue";
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <message-box type="info"> Not implemented! </message-box>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
