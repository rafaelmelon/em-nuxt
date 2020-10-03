<template>
  <article>
    <header>
      {{ antagonism.title }}
    </header>
    <div>
      <ul>
        <li v-for="item of antagonists" :key="item.id">
          <nuxt-link :to="`/antagonism/${antagonism.path}/${item.path}`">
            <img
              :src="require(`~/assets/logos/${item.imgPath}`)"
              :alt="item.name"
              height="50"
              width="50"
            />
            <h3>{{ item.name }}</h3>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div>
      <nuxt-link :to="`/antagonism/${antagonism.path}`">Visit</nuxt-link>
    </div>
    <footer>
      {{ antagonism.description }}
    </footer>
  </article>
</template>

<script>
export default {
  name: 'Antagonism',
  props: {
    antagonism: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      antagonists: this.antagonism.antagonists,
    }
  },
}
</script>
