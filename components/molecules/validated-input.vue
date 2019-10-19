<template>
  <div class="m-input-container">
    <div
      class="m-input-label"
      :class="value ? 'f-animation' : ''"
    >
      {{ placeholder }}
    </div>
    <a-input
      v-model="_value"
      :placeholder="placeholder"
      :class-feature="validationMessage ? 'f-validation' : ''"
    />
    <div class="m-input-validation-message">
      {{ validationMessage }}
    </div>
  </div>
</template>
<script>
import AInput from '@/components/atoms/input'
export default {
  name: 'MInput',
  components: { AInput },
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    validationMessage: { type: String, default: '' }
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
  },
}
</script>
