<template>
  <div class="desrever">
    <h1>{{ title }}</h1>
    <textarea class="textBox" rows="10" cols="60" v-model="tempText" placeholder="Text goes here..."></textarea>
    <br>
    <button @click="alertCopy" v-clipboard:copy="finalText">copy text</button>
    <br>
    <p>{{ tempText }}</p>
    <hr>
    <p>{{ finalText }}</p>
    <p>{{ desrever }}</p>
    
  </div>
</template>

<script>
export default {
  name: 'desrever',
  data() {
    return {
      title: 'DESREVER',
      tempText: '',
      finalText: ''
    }
  },
  mounted: function() {
    console.log('wtfzlol')
  },
  computed: {
    desrever: function() {
      this.finalText = this.tempText
        .split('')
        .reverse()
        .join('')
    }
  },
  methods: {
    alertCopy() {
      this.$swal({
        text: 'copied to clipboard',
        timer: 800,
        showConfirmButton: false,
        backdrop: `rgba(0, 0, 123, 0.5)`
      })
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
