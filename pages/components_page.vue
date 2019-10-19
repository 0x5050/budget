<template>
  <div>
    Input with validation (max 5 chars)
    <m-input
      placeholder="Name"
      :validation-message="validation"
      :value="text"
      @input="setText"
    />
    input: {{ text }}
  </div>
</template>

<script>
import MInput from '../components/molecules/validated-input'

export default {
  name: 'PAtomsPage',
  components: { MInput },
  data: () => ({
    text: '',
    validationMessage: '',
  }),
  computed: {
    validation() {
      const max_chars = 5
      return this.text.length >= max_chars ? 'Error message' : ''
    }
  },
  methods: {
    setText (text) {
      this.text = text
    }
  },
}
</script>
