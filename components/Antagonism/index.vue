<template>
  <nuxt-link :to="'/antagonism/' + antagonism.path">
    <article>
      <header>
        {{ antagonism.title }}
      </header>
      <div>
        <div>
          {{ antagonism.antagonists[0].name }}
        </div>
        <div>VS</div>
        <div>
          {{ antagonism.antagonists[1].name }}
        </div>
      </div>
      <footer>
        {{ antagonism.description }}
      </footer>
    </article>
  </nuxt-link>
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
}
</script>
