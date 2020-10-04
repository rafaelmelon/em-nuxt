<template>
  <main class="container-md">
    <section class="header">
      <h1 class="h1">{{ antagonism.name }}</h1>
      <p class="p">{{ antagonism.description }}</p>
    </section>
    <section>
      <Card :antagonism="antagonism" :show="true" />
    </section>
  </main>
</template>

<script>
import { ANTAGONIMS } from '~/mock'

export default {
  data() {
    return {
      antagonism: {},
    }
  },
  created() {
    this.antagonism = ANTAGONIMS.find(
      (antagonism) => antagonism.path === this.$route.params.id
    )
  },
  head() {
    return {
      title: 'Empathy | ' + this.antagonism.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.antagonism.description,
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>
