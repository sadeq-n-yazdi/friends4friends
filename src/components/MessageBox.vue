<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    message: String,
    type: String,
  },
});
</script>

<template>
  <div class="message" :class="type">
    {{ message }}
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
div.message {
  border: 1px crimson solid;
  border-radius: 5px;
  padding: 1cm;
  display: flex;

  &.info {
    background-color: darkslategray;
    color: goldenrod;
    border-color: teal;
  }
  &.error {
    background-color: coral;
    color: navy;
    border-color: tomato;
  }
  &.success {
    background-color: seagreen;
    color: snow;
    border-color: forestgreen;
  }
}
</style>
