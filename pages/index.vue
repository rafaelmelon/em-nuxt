<template>
  <main class="container-md">
    <section class="header">
      <h1 class="h1">Empathy</h1>
      <p class="p">Welcome to Empathy comparison page.</p>
    </section>
    <section>
      <Card
        v-for="item of antagonisms"
        :key="item.id"
        :antagonism="item"
        :show="false"
      />
      <div class="flex center">
        <a href="/blog" class="button--grey">Read the Blog</a>
      </div>
    </section>
  </main>
</template>

<script>
import { ANTAGONIMS } from '~/mock'
import { Card } from '~/components'

export default {
  components: {
    Card,
  },
  data() {
    return {
      antagonisms: [],
    }
  },
  created() {
    this.antagonisms = ANTAGONIMS
  },
  head() {
    return {
      title: 'Empathy | Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>
