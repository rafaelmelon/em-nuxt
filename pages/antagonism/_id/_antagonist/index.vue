<template>
  <main class="container">
    <section>
      <h1 class="h1">{{ antagonist.name }}</h1>
      <img
        :src="require(`~/assets/logos/${antagonist.imgPath}`)"
        :alt="antagonist.name"
      />
      <p class="p">{{ antagonist.description }}</p>
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
      title: 'Empathy | ' + this.antagonist.description,
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
