<template>
  <nuxt-link :to="'/blog/' + path">
    <div>
      <p>{{ path }} . {{ title }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Post',
  props: {
    path: {
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
