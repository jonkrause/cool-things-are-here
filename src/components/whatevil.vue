<template>
  <div class="whatevil">
    {{title}}<br>
    <button @click="fontSize++">fontSize++</button>
    <button @click="fontSize--">fontSize--</button>
    <button @click="letterSpacing++">Spacing++</button>
    <button @click="letterSpacing--">Spacing--</button><br>
    <div class="slidecontainer">
      <input type="range" min="0" max="100" value="50" class="slider" v-model="fontSize">
      <input type="range" min="100" max="900" value="50" class="slider" step="100" v-model="fontWeight">
      <input type="range" min="-50" max="100" value="0" class="slider" v-model="letterSpacing">
      <input type="range" min="-100" max="100" value="0" class="slider" v-model="shadowX">
      <input type="range" min="-100" max="100" value="0" class="slider" v-model="shadowY">
      <input type="range" min="0" max="100" value="0" class="slider" v-model="shadowSpread">
      <select v-model="currentFont">
        <option v-for="fonts in fontList" :key="fonts.family" :value="fonts.family">{{fonts.family}}</option>
      </select>
      <input v-model="previewText" placeholder="Type Here..."><br>
    </div>
    <br>


    <p :style="{ 
      fontSize: fontSize + 'px', 
      fontWeight: fontWeight,
      letterSpacing: letterSpacing + 'px', 
      textShadow: shadowX + 'px ' + shadowY + 'px ' + shadowSpread + 'px ' + '#000', 
      fontFamily: currentFont
      }">

        {{previewText}}<br>
      <!-- fontSize: {{fontSize}}px -->
    </p>
      currentFont:<br>{{currentFont}}<br>
      cssFont:<br>{{cssFont}}<br>
      {{spaceReplace}}
    newFontUrl:<br>{{newFontUrl}}<br>
    cssImport:<br>{{cssImport}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'whatevil',
  data() {
    return {
      previewText: 'BB&D',
      title: 'what evil',
      fontList: [],
      currentFont: 'Open Sans',
      cssFont: null,
      fontUrl: 'https://fonts.googleapis.com/css?family=',
      newFontUrl: null,
      cssImport: null,
      fontSize: 22,
      fontWeight: 100,
      fontColor: '000000',
      letterSpacing: 0,
      shadowX: 0,
      shadowY: 0,
      shadowSpread: 0,
      shadowColor: 'rgba(0, 0, 0, 1)'
    }
  },
  created() {
    axios
      .get(
        'https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity' +
          ''
      )
      .then(response => {
        this.fontList = response.data.items
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  mounted() {
    // var newStyles = document.createElement('style')
    // document.head.append(newStyles)
    // newStyles.innerHTML = "@import url(" + this.fontUrl + this.cssFont + ");"
  },
  computed: {
    spaceReplace() {
      this.cssFont = this.currentFont.replace(/ /g, '+')
      this.newFontUrl = this.fontUrl + this.cssFont
      this.cssImport =
        '@font-face{font-family:' +
        this.currentFont +
        ';src:url(' +
        this.newFontUrl +
        ');}'

      var newStyles = document.createElement('style')
      document.head.append(newStyles)
      newStyles.innerHTML =
        '@import url(' +
        this.fontUrl +
        this.cssFont +
        ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i,);'
    }
  }
}
</script>

<style scoped>
.slidecontainer {
  text-align: center;
  margin: 0 auto;
  width: 500px;
}

.slider {
  width: 100%;
}
</style>