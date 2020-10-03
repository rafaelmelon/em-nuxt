<template>
  <div class="container">
    <h1 class="title">Blog</h1>
    <Post
      v-for="item of posts"
      :key="item.id"
      :path="item.path"
      :title="item.title"
    />
  </div>
</template>

<script>
import { POSTS } from '~/mock'
import { Post } from '~/components'

export default {
  components: {
    Post,
  },
  data() {
    return {
      post: [],
    }
  },
  created() {
    this.posts = POSTS
  },
  head() {
    return {
      title: 'Empathy | Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Section to show posts',
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
