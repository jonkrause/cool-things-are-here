<template>
  <div class="txtreckr">
    <h1>{{ title }}</h1>
    <p>
      (pleast note: txtreckr is not 100% functional yet)
    </p>
    <textarea class="textBox" rows="10" cols="60" v-model="msgText" placeholder="Text goes here..."></textarea><br>

    <button @click="reck">speak</button>
    <button @click="loadVoices">loadVoices</button>
    <select v-model="selectedVoice">
      <option v-for="voice in voices" :key="voice.name">{{voice.name}}</option>
    </select>
    {{selectedVoice}}

  </div>
</template>

<script>
export default {
  name: 'txtreckr',
  data() {
    return {
      title: 'txtreckr',
      voices: [],
      msgText: null,
      loading: null,
      selectedVoice: null
    }
  },
  beforeCreate: function() {
    console.log('txtreckr created')
  },
  computed: {

  },
  methods: {
    loadVoices() {
      this.voices = window.speechSynthesis.getVoices()
    },
    reck: function() {
      let msg = new SpeechSynthesisUtterance(this.msgText)
      let voices = window.speechSynthesis.getVoices()
      msg.voice = this.selectedVoice
      window.speechSynthesis.speak(msg)
    },
    getVoices() {

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
