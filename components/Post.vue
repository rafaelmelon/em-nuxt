<template>
  <nuxt-link :to="'/blog/' + id">
    <div>
      <p>{{ id }} . {{ title }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Post',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
