<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        budget
      </h1>
      <h2 class="subtitle">
        Budget Managment
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <button @click="googleSignIn">
          Test
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  methods: {
    googleSignIn () {
      this.provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(this.provider).then((result) => {
        // store the user ore wathever
        this.$router.push('/home')
      }).catch((e) => {
        this.$snotify.error(e.message)
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
