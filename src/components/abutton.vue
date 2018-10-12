<template>
  <div class="abutton">
    <h1>{{ title }}</h1>
    <p class="subtitle">it's like, a button, you can click...</p>
    <div class="loader" v-if="loading"></div>
    <div class="counter" v-else>
      <div class="num-style">{{addComma}}</div>
    </div>
    <button @click="addOne">+ 1</button>
  </div>
</template>

<script>
  import {db} from '../main'
  export default {
    name: 'abutton',
    data() {
      return {
        title: "let's click a thing",
        count: 0,
        liveCount: null,
        loading: null,
        withComma: null
      }
    },
    beforeMount: function() {      
      this.liveCount = db.collection('counter').doc('count')
    },
    firestore() {
      return {
        liveCount: db.collection('counter').doc('count')
      }
    },
    computed: {
      addComma: function() {
        return new Intl.NumberFormat('en-IN').format(this.liveCount.count)
      }
    },
    methods: {
      addOne() {
        this.count = this.count + 1
        db.collection('counter').doc('count').update({ count: this.liveCount.count + 1 })
      }
    }
  }
</script>

<style scoped>
  .noFlash {
    display: none;
  }

  .flash {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: pink;
    transition: all 0.5s ease-in-out;
  }
  
  button {
    width: 150px;
    background-color: #24305e;
    color: #fff;
    border: 0;
    font-size: 25px;
    font-weight: 600;
    padding: 5px 5px 5px 5px;
    letter-spacing: 1px;
    cursor: pointer;
  }
  button:active {
    color: #fc4445;
  }
  .counter {
    font-size: 4em;
    font-weight: 600;
    padding: 25px 0 50px 0;
  }
  .subtitle {
    margin-top: -20px;
  }
  .loader {
    color: #f98ca4;
    font-size: 50px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 72px auto;
    position: relative;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  }
  @-webkit-keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @-webkit-keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .num-style {
    font-family: 'CoreCircus', sans-serif;
    text-transform: uppercase;
    font-size: 80px;
    text-align: center;
    line-height: 1;
    /* margin: 0;
    top: 50%;
    left: 50%; */
    padding: 25px 0 50px 0;
    transform: translate(-50%, -50%);
    /* position: absolute; */
    display: inline;
    color: #f98ca4;
    text-shadow: -1px -1px 0 #6e1f58, 1px -1px 0 #6e1f58, -1px 1px 0 #6e1f58, 1px 1px 0 #6e1f58, 1px 0px 0px #65f283, 0px 1px 0px #65f283, 2px 1px 0px #65f283, 1px 2px 0px #65f283, 3px 2px 0px #65f283, 2px 3px 0px #65f283, 4px 3px 0px #65f283, 3px 4px 0px #65f283, 5px 4px 0px #65f283, 3px 5px 0px #6e1f58, 6px 5px 0px #6e1f58, -1px 2px 0 black, 0 3px 0 #6e1f58, 1px 4px 0 #6e1f58, 2px 5px 0px #6e1f58, 2px -1px 0 #6e1f58, 3px 0 0 #6e1f58, 4px 1px 0 #6e1f58, 5px 2px 0px #6e1f58, 6px 3px 0 #6e1f58, 7px 4px 0 #6e1f58, 10px 10px 4px #dac249;
    &:after,
    &:before {
      content: attr(data-heading);
      position: absolute;
      overflow: hidden;
      left: 0;
      width: 100%;
      top: 0;
      z-index: 5;
    }
    &:before {
      text-shadow: -1px -1px 0 #9e132c, 1px -1px 0 #9e132c, -1px 1px 0 #9e132c, 1px 1px 0 #9e132c, 1px 0px 0px #f5b10b, 0px 1px 0px #f5b10b, 2px 1px 0px #f5b10b, 1px 2px 0px #f5b10b, 3px 2px 0px #f5b10b, 2px 3px 0px #f5b10b, 4px 3px 0px #f5b10b, 3px 4px 0px #f5b10b, 5px 4px 0px #f5b10b, 3px 5px 0px #9e132c, 6px 5px 0px #9e132c, -1px 2px 0 black, 0 3px 0 #9e132c, 1px 4px 0 #9e132c, 2px 5px 0px #9e132c, 2px -1px 0 #9e132c, 3px 0 0 #2f3e9c, 4px 1px 0 #9e132c, 5px 2px 0px #9e132c, 6px 3px 0 #9e132c, 7px 4px 0 #9e132c, 10px 10px 4px rgba(#6af177, 0.8);
      color: #65f283;
      height: 66%;
    }
    &:after {
      height: 33%;
      color: #4ad9db;
      text-shadow: -1px -1px 0 #2f3e9c, 1px -1px 0 #2f3e9c, -1px 1px 0 #2f3e9c, 1px 1px 0 #2f3e9c, 1px 0px 0px #f98ca4, 0px 1px 0px #f98ca4, 2px 1px 0px #f98ca4, 1px 2px 0px #f98ca4, 3px 2px 0px #f98ca4, 2px 3px 0px #f98ca4, 4px 3px 0px #f98ca4, 3px 4px 0px #f98ca4, 5px 4px 0px #f98ca4, 3px 5px 0px #2f3e9c, 6px 5px 0px #2f3e9c, -1px 2px 0 black, 0 3px 0 #2f3e9c, 1px 4px 0 #2f3e9c, 2px 5px 0px #2f3e9c, 2px -1px 0 #2f3e9c, 3px 0 0 #2f3e9c, 4px 1px 0 #2f3e9c, 5px 2px 0px #2f3e9c, 6px 3px 0 #2f3e9c, 7px 4px 0 #2f3e9c;
    }
  }
  @font-face {
    font-family: 'CoreCircus2DDot1';
    src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.eot');
    src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.eot?#iefix') format('embedded-opentype'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.woff2') format('woff2'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.woff') format('woff'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.ttf') format('truetype');
  }
  @font-face {
    font-family: 'CoreCircus';
    src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.eot');
    src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.eot?#iefix') format('embedded-opentype'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.woff2') format('woff2'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.woff') format('woff'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.ttf') format('truetype');
  }
  @font-face {
    font-family: 'CoreCircusPierrot4';
    src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_13_0.eot');
    src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_13_0.eot?#iefix') format('embedded-opentype'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_13_0.woff2') format('woff2'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_13_0.woff') format('woff'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_13_0.ttf') format('truetype');
  }
</style>

