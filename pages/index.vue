<template>
  <div class="container">
    <section>
      <h1 class="title">Empathy</h1>
    </section>
    <section class="antagonisms">
      <ul>
        <li>
          <Antagonism
            v-for="item of antagonisms"
            :key="item.id"
            :antagonism="item"
          />
        </li>
      </ul>
    </section>
    <section class="links">
      <a href="/blog" class="button--green"> Blog </a>
    </section>
  </div>
</template>

<script>
import { ANTAGONIMS } from '~/mock'
import { Antagonism } from '~/components'

export default {
  components: {
    Antagonism,
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
          content: 'Website to show comparatives',
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
