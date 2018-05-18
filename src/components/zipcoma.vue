<template>
  <div class="zipcoma">
    <h1>{{ title }}</h1>
    <!-- <textarea class="textBox" rows="10" cols="60" v-model="tempText" placeholder="Text goes here..."></textarea> -->
    <input type="text" class="textBox" v-model="tempText" placeholder="Text goes here...">
    <br><br>
    <!-- <button @click="setText">run it!</button>  -->
    <button @click="alertCopy" v-clipboard:copy="withCommas">copy text</button><br>
    <br>
    <p>{{ tempText }}</p>
    <hr>
    <div v-if="tempArray.length > 1">
      {{finalString}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zipcoma',
    data() {
      return {
        title: 'zipcoma',
        tempText: '',
        tempArray: [],
        useAnd: false,
        newString: '',
        finalString: ''
      }
    },
    mounted: function() {
      console.log('wtfzlol')
    },
    computed: {
      withCommas: function() {
        this.tempArray = this.tempText.split(' ')
        if (this.tempArray.length < 1) {
        } else {
          this.newString = this.tempText.replace(/[ \r\n]/g, ', ')
          let commaSpot = this.newString.lastIndexOf(',')
          let andVar = ' and'
          let res = [
            this.newString.slice(0, commaSpot),
            andVar,
            this.newString.slice(commaSpot + 1)
          ].join('')
          this.finalString = res
          return res
        }
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
  .textBox {
    width: 250px;
    height: 15px;
    font-size: 13px;
    padding: 2px;
    padding-left: 3px;
  }
</style>
