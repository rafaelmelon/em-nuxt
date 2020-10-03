<template>
  <main class="container">
    <section>
      <h1 class="h1">{{ post.name }}</h1>
    </section>
    <section>
      <p>{{ post.content }}</p>
    </section>
  </main>
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
      title: 'Empathy | ' + this.post.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.name,
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>
