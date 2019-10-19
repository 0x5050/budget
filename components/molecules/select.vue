<template>
  <div class="m-input-container">
    <div
      class="m-input-label"
      style="opacity: 1;"
    >
      {{ label }}
    </div>
    <a-select
      v-model="_value"
      :options="options"
    />
  </div>
</template>

<script>
import ASelect from '../atoms/select'
export default {
  name: 'MSelect',
  components: { ASelect },
  props: {
    options: { type: Array, default: () => [] },
    value: { type: Number, default: null },
    label: { type: String, default: '' },
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
