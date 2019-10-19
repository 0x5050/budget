<template>
  <select
    v-model="_value"
    class="a-select"
  >
    <option
      v-for="option of options"
      :key="option.value"
      :disabled="option.value === undefined"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'ASelect',
  props: {
    value: { type: Number, default: null },
    options: { type: Array, default: () => [] }
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
