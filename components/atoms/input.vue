<template>
  <input
    v-model="_value"
    class="a-input"
    :class="classFeature"
    :placeholder="placeholder"
  >
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    classFeature: { type: String, default: '' },
  },
  computed: {
    _value: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  }
}
</script>
