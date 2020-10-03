<template>
  <nuxt-link :to="'/antagonism/' + path">
    <div>
      <p>{{ path }} . {{ description }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Antagonism',
  props: {
    path: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
