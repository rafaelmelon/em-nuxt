<template>
  <header class="navbar">
    <nuxt-link class="navbar__logo" to="/"
      ><img src="~/assets/logo-rafaelmelon.svg" alt="logo rafaelmelon"
    /></nuxt-link>
    <nav>
      <ul>
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
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: 1px solid $base-font-color;
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
    display: flex;
    align-items: center;
    ul {
      display: flex;
      margin-right: 1rem;
      li {
        a {
          color: $base-font-color;
          padding: 1rem;
          &:hover {
            color: black;
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
