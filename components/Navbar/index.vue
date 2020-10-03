<template>
  <header>
    <nuxt-link to="/"
      ><img class="logo" src="~/assets/logo-empathy.gif"
    /></nuxt-link>
    <nav>
      <ul>
        <li v-for="item of antagonisms" :key="item.id">
          <nuxt-link :to="'/antagonism/' + item.path">{{
            item.title
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

<style>
.logo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
