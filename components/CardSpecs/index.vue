<template>
  <div class="specs">
    <ul>
      <li v-for="(spec, i) in antagonistSpecs" :key="i">
        <p class="p">{{ spec.name }}</p>
        <div class="specs__spec">
          <div :style="{ width: spec.initValue + '%' }">
            <label>{{ spec.initValue + '%' }}</label>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardSpecs',
  props: {
    specs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      intervalId: '',
      increment: 1,
      antagonistSpecs: this.specs.map(({ name, value }) => ({
        name,
        initValue: 0,
        value,
      })),
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.setLevel(this.increment)
    }, 10)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
  methods: {
    setLevel(increment) {
      this.antagonistSpecs.forEach((data) => {
        data.initValue = Math.min(
          Math.floor(data.initValue + increment),
          data.value
        )
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.specs {
  width: 100%;
  &__spec {
    margin: 0.5em 0 0.5em;
    border: 0.1em solid darken(#e9e9e9, 25%);
    border-radius: 3px;
    background: lighten(#e9e9e9, 25%);
    list-style: none;
    overflow: hidden;
    div {
      position: relative;
      height: 1.4em;
      background: #e9e9e9;
      font-size: 1.2em;
      label:first-child {
        position: absolute;
        left: 8px;
      }
      label:last-child {
        position: absolute;
        right: 8px;
      }
    }
  }
}
</style>
