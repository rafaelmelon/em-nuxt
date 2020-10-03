<template>
  <header class="navbar">
    <nuxt-link class="navbar__logo" to="/"
      ><img src="~/assets/logo-empathy.gif"
    /></nuxt-link>
    <nav class="navbar__navigation">
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

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #35495e;
  &__logo {
    margin: 0 1rem;
    img {
      animation: 1s appear;
      margin: auto;
      width: 150px;
    }
  }
  &__navigation {
    ul {
      display: flex;
      li {
        a {
          border-radius: 4px;
          border: 1px solid #3b8070;
          color: #3b8070;
          padding: 1rem;
          margin-right: 1rem;
          &:last-child {
            margin-right: 1rem;
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
