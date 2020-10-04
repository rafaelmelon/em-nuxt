<template>
  <header class="navbar flex">
    <nuxt-link class="navbar__logo" to="/"
      ><img src="~/assets/logo-rafaelmelon.svg" alt="logo rafaelmelon"
    /></nuxt-link>
    <nav class="flex center">
      <ul class="flex">
        <li v-for="item of antagonisms" :key="item.id">
          <nuxt-link :to="'/antagonism/' + item.path">{{
            item.name
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ANTAGONIMS } from '~/mock'

export default {
  name: 'Navbar',
  data() {
    return {
      antagonisms: [],
    }
  },
  created() {
    this.antagonisms = ANTAGONIMS
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  justify-content: space-between;
  align-items: stretch;
  background-color: $primary;
  &__logo {
    margin: 0 1rem;
    padding: 0.5rem;
    img {
      animation: 1s appear;
      margin: auto;
      width: 50px;
    }
  }
  nav {
    ul {
      margin-right: 1rem;
      li {
        a {
          color: $dark;
          padding: 1rem;
          &:hover {
            color: $white;
          }
        }
      }
    }
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
