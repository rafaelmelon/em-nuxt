<template>
  <main class="container">
    <section>
      <h1 class="h1">Blog</h1>
      <p class="p">Welcome to the Blog.</p>
    </section>
    <section>
      <Post
        v-for="item of posts"
        :key="item.id"
        :path="item.path"
        :name="item.name"
      />
    </section>
  </main>
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
