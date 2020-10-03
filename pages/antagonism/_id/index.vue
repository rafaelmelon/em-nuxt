<template>
  <div class="container">
    <h1 class="title">Antagonism</h1>
    <ul>
      <li v-for="item of antagonism.antagonists" :key="item.id">
        <nuxt-link :to="'/antagonism/' + antagonism.path + '/' + item.path">
          <div>
            <p>{{ item.id }} . {{ item.name }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ANTAGONIMS } from '~/mock'

export default {
  data() {
    return {
      antagonism: {},
    }
  },
  created() {
    this.antagonism = ANTAGONIMS.find(
      (antagonism) => antagonism.path === this.$route.params.id
    )
  },
  head() {
    return {
      title: 'Empathy | ' + this.antagonism.description,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.antagonism.description,
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
