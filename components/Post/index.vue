<template>
  <NuxtLink
    class="post"
    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
  >
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
</template>

<script>
export default {
  name: 'Post',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.post {
  img {
    width: 100%;
  }
  article {
    padding: 1rem;
  }
}
</style>
