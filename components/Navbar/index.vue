<template>
  <div class="navbar">
    <header class="container-lg flex">
      <NuxtLink class="navbar__logo" to="/"
        ><img src="~/assets/logo-rafaelmelon.svg" alt="logo rafaelmelon"
      /></NuxtLink>
      <nav class="flex center">
        <ul class="flex">
          <li v-for="item of antagonisms" :key="item.id">
            <NuxtLink :to="'/antagonism/' + item.path">{{
              item.name
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
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
  background-color: $primary;
  header {
    justify-content: space-between;
    align-items: stretch;
    nav {
      ul {
        margin-right: 1rem;
        li {
          a {
            color: $dark;
            padding: 1rem;
            &:hover {
              color: $black;
            }
          }
        }
      }
    }
  }
  &__logo {
    margin: 0 1rem;
    padding: 0.5rem;
    img {
      animation: 1s appear;
      margin: auto;
      width: 50px;
    }
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
