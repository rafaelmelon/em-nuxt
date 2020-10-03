<template>
  <div class="container">
    <h1 class="title">Antagonist</h1>
    <div>{{ antagonist.description }}</div>
  </div>
</template>

<script>
import { ANTAGONIMS } from '~/mock'

export default {
  data() {
    return {
      antagonist: {},
    }
  },
  created() {
    const { id, antagonist } = this.$route.params

    const antagonism = ANTAGONIMS.find((item) => item.path === id)
    this.antagonist = antagonism.antagonists.find(
      (item) => item.path === antagonist
    )
  },
  head() {
    return {
      title: 'Empathy | ' + this.antagonist.description,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.antagonist.description,
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
