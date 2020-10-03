<template>
  <div class="container">
    <h1 class="title">Post</h1>
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { POSTS } from '~/mock'

export default {
  data() {
    return {
      post: {},
    }
  },
  created() {
    this.post = POSTS.find((post) => post.path === this.$route.params.id)
  },
  head() {
    return {
      title: 'Empathy | ' + this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.title,
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
