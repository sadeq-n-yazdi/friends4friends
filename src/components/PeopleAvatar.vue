<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["name", "uid", "src"],
  computed: {},
});
</script>

<template>
  <div :id="`avatar-${uid}`" class="avatar float-center">
    <img :src="src" :alt="name" class="border-gray round-5p box-100" />
  </div>
</template>

<style scoped>
.avatar {
  border-radius: 50%;
  background-color: #fff;
  display: inline-block;
  vertical-align: middle;
  padding-right: 0;
  margin-right: 0;
}

.avatar img {
  padding-right: 0;
  margin-right: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>

<style>
.border-gray {
  border-color: #ccc;
  border-style: solid;
  border-width: 1px;
}

.round-5p {
  border-radius: 5px;
}

.box-100 {
  width: 100px;
  height: 100px;
}
</style>
