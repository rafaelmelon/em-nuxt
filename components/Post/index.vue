<template>
  <nuxt-link :to="'/blog/' + path">
    <div>
      <p>{{ path }} . {{ name }}</p>
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
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
