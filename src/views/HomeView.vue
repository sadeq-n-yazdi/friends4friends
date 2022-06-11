<script setup lang="ts">
import ProfileBox from "@/components/ProfileBox.vue";
import { store } from "@/store/index";
</script>

<template>
  <main>
    <main>
      <ProfileBox v-for="person in store.state.people" :key="person.id" :info="person">
        {{ person.notes }}
      </ProfileBox>
    </main>
  </main>
</template>
