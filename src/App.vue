<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { store } from "@/store";
</script>

<template>
  <header>
    <div id="user" v-if="store.state.user">
      <div style="display: none">
        <div>#{{ store.state.user.uid }}</div>

        <div>{{ store.state.user.username }}</div>

        <div>{{ store.state.user.name }}</div>
      </div>
    </div>
    <img
      alt="Friends4Friends logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/panel">Administration</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "@/assets/base";
@import "@/assets/user.scss";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;

  [lang="fa"] & {
    direction: rtl;
    /*font-family: Vazirmatn, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;*/
    font-family: "Vazir Code Hack", "Vazir Code", Vazirmatn,
      "Noto Naskh Arabic UI", "Noto Naskh Arabic", "Fira Code Retina",
      "JetBrainsMonoExtraBold Nerd Font Mono", "Inconsolata for Powerline",
      "Droid Sans Mono", "Liberation Mono", monospace;
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  flex-wrap: wrap;
  display: flex;
  align-items: stretch;
  align-content: center;
  justify-items: stretch;
  justify-content: center;

  a.router-link-exact-active {
    color: var(--color-text);
  }
  a.router-link-exact-active:hover {
    background-color: transparent;
  }

  a {
    display: inline-flex;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  a:first-of-type {
    border: 0;
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 0.1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
