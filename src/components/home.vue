<template>
  <div class="home">
    <h1>{{ msg }}</h1>

    <span @mouseover="buttonActive = !buttonActive" @mouseleave="buttonActive = !buttonActive">
      <router-link to="abutton">a button</router-link>
      </span> //

    <span @mouseover="desreverActive = !desreverActive" @mouseleave="desreverActive = !desreverActive">
      <router-link to="desrever">desrever</router-link>
      </span> //

    <span @mouseover="txtActive = !txtActive" @mouseleave="txtActive = !txtActive">
        <router-link to="txtreckr">txtreckr</router-link>
      </span> //

    <span @mouseover="zipActive = !zipActive" @mouseleave="zipActive = !zipActive">
      <router-link to="zipcoma">zipcoma</router-link>
      </span> // 

    <span @mouseover="chuckbase = !chuckbase" @mouseleave="chuckbase = !chuckbase">
      <router-link to="chuckbase">chuckbase</router-link>
      </span> // 

    <span @mouseover="whatevil = !whatevil" @mouseleave="whatevil = !whatevil">
      <router-link to="whatevil">whatevil</router-link>
      </span>

    <div class="fade-container">
      <transition name="fade">
        <h5 v-if="buttonActive">*click*<br>+1</h5>
      </transition>
      <transition name="fade">
        <h5 v-if="desreverActive">make it sdrawkcab</h5>
      </transition>
      <transition name="fade">
        <h5 v-if="txtActive">not finished</h5>
      </transition>
      <transition name="fade">
        <h5 v-if="zipActive">u liek comaz?</h5>
      </transition>
      <transition name="fade">
        <h5 v-if="chuckbase" key="chuckbase">how does it feel?</h5>
      </transition>
      <transition name="fade">
        <h5 v-if="whatevil" key="whatevil">who knows?</h5>
      </transition>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: 'cool things are here',
        buttonActive: false,
        desreverActive: false,
        txtActive: false,
        zipActive: false,
        chuckbase: false,
        whatevil: false
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s;
  }
  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
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
    color: #24305e;
  }
  a:hover {
    text-decoration: none;
    color: #fc4445;
  }
  .hidden {
    display: none;
  }
  .txtreckr:hover>.hidden {
    display: inline;
  }
  /* #f98ca4: #f98ca4;
  #4ad9db: #4ad9db;
  #65f283: #65f283;
  #f5b10b: #f5b10b;
  #2f3e9c: #2f3e9c;
  #9e132c: #9e132c;
  #6e1f58: #6e1f58; */
  /* $outline: 2px; */
  /* html,
  body {
  	width: 100%;
  	height: 100%;
  	background: linear-gradient(
  		10deg,
  		rgba(244, 235, 160, 1) 43%,
  		rgba(192, 250, 202, 1) 43%
  	);
  } */
  h5 {
    font-family: 'CoreCircus', sans-serif;
    text-transform: uppercase;
    font-size: 80px;
    text-align: center;
    line-height: 1;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
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
