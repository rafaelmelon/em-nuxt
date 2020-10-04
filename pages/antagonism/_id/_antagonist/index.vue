<template>
  <main class="container-md">
    <section class="header">
      <h1 class="h1">{{ antagonist.name }}</h1>
    </section>
    <section>
      <article>
        <p class="p">{{ antagonist.description }}</p>
        <p class="p">{{ antagonist.description }}</p>
      </article>
    </section>
  </main>
</template>

<script>
import { ANTAGONIMS } from '~/mock'

export default {
  data() {
    return {
      antagonist: {},
    }
  },
  created() {
    const { id, antagonist } = this.$route.params

    const antagonism = ANTAGONIMS.find((item) => item.path === id)
    this.antagonist = antagonism.antagonists.find(
      (item) => item.path === antagonist
    )
  },
  head() {
    return {
      title: 'Empathy | ' + this.antagonist.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.antagonist.description,
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>
