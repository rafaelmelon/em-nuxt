<template>
  <article class="card">
    <header v-if="!show" class="card__header">
      <h2 class="h2">{{ antagonism.name }}</h2>
      <p class="p">{{ antagonism.description }}</p>
    </header>
    <div class="card__items">
      <ul>
        <li v-for="item of antagonism.antagonists" :key="item.id">
          <nuxt-link :to="`/antagonism/${antagonism.path}/${item.path}`">
            <div class="card__item">
              <h3 class="h3">{{ item.name }}</h3>
              <img
                :src="require(`~/assets/logos/${item.imgPath}`)"
                :alt="item.name"
              />
            </div>
            <CardSpecs v-if="show" :specs="item.specs" />
          </nuxt-link>
        </li>
      </ul>
    </div>
    <footer v-if="!show" class="card__actions">
      <nuxt-link class="button--grey" :to="`/antagonism/${antagonism.path}`">{{
        `Compare ${antagonism.name}`
      }}</nuxt-link>
    </footer>
  </article>
</template>

<script>
import { CardSpecs } from '~/components'

export default {
  name: 'Card',
  components: {
    CardSpecs,
  },
  props: {
    antagonism: {
      type: Object,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 2rem;
  background-color: $light-gray;
  border-radius: $radius;
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem 0 1rem;
  }
  &__item {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 200px;
    padding: 1rem;
    min-width: 200px;
  }
  &__items {
    padding: 1rem;
    > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      > li {
        a {
          min-height: 200px;
          min-width: 200px;
          padding: 1rem;
          margin: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: $radius;
          border: 1px solid $dark;
          background-color: $white;
          transition: background-color 0.2s ease;
          &:hover {
            background-color: $primary;
          }
          img {
            width: 100%;
            max-width: 100px;
          }
        }
      }
    }
  }
  &__actions {
    padding: 1rem;
    display: flex;
    justify-content: center;
  }
  &__footer {
    padding: 1rem;
  }
}
</style>
