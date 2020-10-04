<template>
  <article class="card">
    <header class="card__header">
      <h2 class="h2">{{ antagonism.name }}</h2>
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
            <CardSpecs :specs="item.specs" />
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="card__actions">
      <nuxt-link class="button--green" :to="`/antagonism/${antagonism.path}`">{{
        `Compare ${antagonism.name}`
      }}</nuxt-link>
    </div>
    <footer class="card__footer">
      <p class="p">{{ antagonism.description }}</p>
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
  },
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 4px;
  margin-bottom: 2rem;
  border: 1px solid #35495e;
  &__header {
    padding: 1rem;
  }
  &__item {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 200px;
    background-color: #f4f4f4;
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
          border-radius: 4px;
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
