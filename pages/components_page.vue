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
    <br>
    <m-select
      label="label"
      :options="options"
    />
  </div>
</template>

<script>
import MInput from '../components/molecules/validated-input'
import MSelect from '../components/molecules/select'

export default {
  name: 'PAtomsPage',
  components: { MSelect, MInput },
  data: () => ({
    text: '',
    options: [
      {
        value: 0,
        label: 'zero'
      },
      {
        value: 1,
        label: 'one'
      },
    ]
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
