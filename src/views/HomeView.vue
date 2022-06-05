<script setup lang="ts">
import ProfileBox from "@/components/ProfileBox.vue";
</script>

<template>
  <main>
    <ProfileBox
      v-for="person in $store.state.people"
      :key="person.uid"
      :info="person"
    >
      {{ person.notes }}
    </ProfileBox>
  </main>
</template>
