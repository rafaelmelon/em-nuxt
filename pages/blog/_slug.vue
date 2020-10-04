<template>
  <main class="container-md">
    <section class="header">
      <h1 class="h1">{{ article.title }}</h1>
      <p class="p">by {{ article.author.name }}</p>
      <p class="p">{{ new Date(article.createdAt).toDateString() }}</p>
      <img
        :src="require(`~/assets/articles/${article.img}`)"
        :alt="article.alt"
      />
    </section>
    <section>
      <article>
        <nuxt-content :document="article" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  head() {
    return {
      title: 'Empathy | ' + 'Post',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'content',
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
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
