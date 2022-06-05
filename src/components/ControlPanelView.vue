<script lang="ts">
import MessageBox from "@/components/MessageBox.vue";

export default {
  props: ["msg"],
  components: {
    MessageBox,
  },
};
</script>

<template>
  <div>
    <h1>Control Panel</h1>

    <message-box type="warning"> Not implemented! </message-box>
  </div>
</template>

<style scoped></style>
