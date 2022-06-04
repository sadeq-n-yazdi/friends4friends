<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import ProfileBox from "@/components/ProfileBox.vue";
</script>

<template>
  <main>
    <ProfileBox
      address="Sheffield, UK"
      company="Educational Publishing"
      email="me@example.com"
      href="person/001"
      img="/assets/img/avatar/001.png"
      name="John Doe"
      phone="+44 7749 373636"
      profession="👨‍💻 Senior Fullstack Developer"
      uid="004"
      website="https://example.com"
    >
      He will be happy to help anyone to improve their skills specially in
      codding.
    </ProfileBox>

    <ProfileBox
      name="Jane Doe"
      img="assets/img/avatar/000.webp"
      uid="000"
      address="Tehran, Iran"
      company="Samayesh"
      email="jane.doe@gmail.com"
    >
    </ProfileBox>

<!--    <TheWelcome />-->
  </main>
</template>
