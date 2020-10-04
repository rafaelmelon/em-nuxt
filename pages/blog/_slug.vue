<template>
  <main class="container-md">
    <section class="header">
      <img
        :src="require(`~/assets/articles/${article.img}`)"
        :alt="article.alt"
      />
      <p class="p">by {{ article.author.name }}</p>
      <p v-if="article.createdAt" class="p">
        {{ new Date(article.createdAt).toDateString() }}
      </p>
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
      title: `Empathy | ${this.article.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
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
.nuxt-content h1 {
  display: block;
  letter-spacing: 1px;
  line-height: 1;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 100px;
  color: #333;
}

.nuxt-content h2 {
  display: block;
  letter-spacing: 1px;
  line-height: 1;
  margin-bottom: 1rem;
  font-weight: 300;
  font-size: 50px;
  color: #333;
}

.nuxt-content h3 {
  display: block;
  letter-spacing: 1px;
  line-height: 1;
  margin-bottom: 1rem;
  font-weight: 300;
  font-size: 20px;
  color: #333;
}

.nuxt-content p {
  display: block;
  letter-spacing: 1px;
  line-height: 1;
  margin-bottom: 1rem;
  font-weight: 300;
  font-size: 14px;
  color: #333;
}
</style>
