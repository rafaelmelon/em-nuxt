<template>
  <main class="container-md">
    <section class="header">
      <h1 class="h1">Blog</h1>
      <p class="p">Welcome to the Blog.</p>
    </section>
    <section class="blog">
      <ul class="blog__grid">
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img
              :src="require(`~/assets/articles/${article.img}`)"
              :alt="article.alt"
            />
            <article>
              <h2 class="h2">{{ article.title }}</h2>
              <p class="p">by {{ article.author.name }}</p>
              <p v-if="article.createdAt" class="p">
                {{ new Date(article.createdAt).toDateString() }}
              </p>
              <p class="p">{{ article.description }}</p>
            </article>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
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
    display: flex;
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
      img {
        width: 100%;
      }
      article {
        padding: 1rem;
      }
    }
  }
}
</style>
