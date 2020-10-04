<template>
  <main class="container-md">
    <section class="header">
      <h1 class="h1">Blog</h1>
      <p class="p">
        Lorem markdownum, sororum, et magis repagula innumeris amicitur.
        Furialibus armento pensandum diripuit mora pendere.
      </p>
    </section>
    <section class="blog">
      <ul class="blog__grid flex">
        <li v-for="article of articles" :key="article.slug">
          <Post :article="article" />
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { Post } from '~/components'

export default {
  components: {
    Post,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
    }
  },
  head() {
    return {
      title: 'Empathy | Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog page description',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.blog {
  &__grid {
    flex-wrap: wrap;
    li {
      margin-bottom: 2rem;
      background-color: $light-gray;
      border-radius: $radius;
      overflow: hidden;
      transition: background-color 0.2s ease;
      &:hover {
        background-color: $primary;
      }
    }
  }
}
</style>
