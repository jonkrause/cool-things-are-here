<template>
  <div class="whatevil">
    <div class="main-container">
      <div class="controls">
        <div class="slidecontainer">
          <h4>Font Size</h4>
          <div class="sliderForm">
            <input type="range" min="0" max="100" value="50" class="slider" v-model="fontSize">
            <input type="number" min="0" max="100" v-model="fontSize">
            <div class="clearButton" @click="fontSize=56">Reset</div>
          </div>
          <h4>Font Weight</h4>
          <div class="sliderForm">
            <input type="range" min="100" max="900" value="50" class="slider" step="100" v-model="fontWeight">
            <input type="number" min="0" max="900" step="100" v-model="fontWeight">
            <div class="clearButton" @click="fontWeight=100">Reset</div>
          </div>
          <h4>Letter Spacing</h4>
          <div class="sliderForm">
            <input type="range" min="-50" max="100" value="0" class="slider" v-model="letterSpacing">
            <input type="number" min="-50" max="100" v-model="letterSpacing">
            <div class="clearButton" @click="letterSpacing=0">Reset</div>
          </div>
          <h4>Shadow X</h4>
          <div class="sliderForm">
            <input type="range" min="-100" max="100" value="0" step="0.1" class="slider" v-model="shadowX">
            <input type="number" min="-100" max="100" v-model="shadowX">
            <div class="clearButton" @click="shadowX=0">Reset</div>
          </div>
          <h4>Shadow Y</h4>
          <div class="sliderForm">
            <input type="range" min="-100" max="100" value="0" step="0.1" class="slider" v-model="shadowY">
            <input type="number" min="-100" max="100" v-model="shadowY">
            <div class="clearButton" @click="shadowY=0">Reset</div>
          </div>
          <h4>Shadow Spread</h4>
          <div class="sliderForm">
            <input type="range" min="0" max="100" value="0" class="slider" v-model="shadowSpread">
            <input type="number" min="0" max="100" v-model="shadowSpread">
            <div class="clearButton" @click="shadowSpread=0">Reset</div>
          </div>
        </div>
      </div>
      <div class="settings">
        <div class="inputs">
          <input v-model="previewText" placeholder="Type Here..." class="textInput">
          <h4>Edit Text</h4>
          <select v-model="currentFont">
                <option v-for="fonts in fontList" :key="fonts.family" :value="fonts.family">{{fonts.family}}</option>
              </select>
          <h4>Select Font</h4>
          <!-- <h4 class="cssTitle">CSS</h4> -->
          <div class="copyText">
            {{cssImport}}<br> .class {
            <div style="margin-left:15px" class="liveCode">
              font-size: {{fontSize}}px;<br> font-weight: {{fontWeight}};<br> letter-spacing: {{letterSpacing}}px;<br> text-shadow: {{shadowX}}px {{shadowY}}px {{shadowSpread}}px {{shadowColor}};<br> font-family: '{{cssFont}}';<br> color: {{textColor}};
            </div>
            }<br>
          </div>
        </div>
        <div class="colors">
          <div class="textColorDiv">
            <verte picker="square" model="rgb" value="#0abab5" v-model="textColor"></verte>
            <small>Text Color</small>
          </div>
          <div class="shadowColorDiv">
            <verte picker="square" model="rgb" value="#0abab5" v-model="shadowColor"></verte>
            <small>Shadow Color</small>
          </div>
          <div class="previewBackgroundDiv">
            <verte picker="square" model="rgb" value="#ffffff" v-model="previewBackground"></verte>
            <small>Background Color</small>
          </div>
          <div class="quickButtons">
            <input type="checkbox" v-model="transitionPreview" :class="{transitionPreview: transitionPreview}"><small>Animate Changes</small>
            <div class="clearButton" @click="clearAll">Clear All Settings</div>
            <div class="clearButton" @click="randomFont">Random Font</div>
            <div class="clearButton" @click="randomStyles">Random Font Styles</div>
            <div class="clearButton" @click="randomColor">Random Colors</div>
            <div class="clearButton" @click="randomValues">Random Everything</div>
          </div>
        </div>
      </div>
      <div :class="{transitionPreview: transitionPreview}" class="preview" :style="{backgroundColor:previewBackground}">
        <p :style="{ 
                  fontSize: fontSize + 'px', 
                  fontWeight: fontWeight,
                  letterSpacing: letterSpacing + 'px', 
                  textShadow: shadowX + 'px ' + shadowY + 'px ' + shadowSpread + 'px ' + shadowColor, 
                  fontFamily: currentFont,
                  color: textColor
                  }">
          {{previewText}}<br>
        </p>
      </div>
    </div>
    <div class="details">
      <strong>currentFont:</strong> {{currentFont}}<br> <strong>cssFont:</strong> {{cssFont}}<br> <strong>newFontUrl:</strong> {{newFontUrl}}<br> <strong>cssImport:</strong> {{cssImport}} {{spaceReplace}}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Verte from 'verte'
  import 'verte/dist/verte.css'
  export default {
    components: {
      Verte
    },
    name: 'whatevil',
    data() {
      return {
        previewText: 'wtfzlol',
        previewBackground: '#ffffff',
        title: 'what evil',
        fontList: [],
        currentFont: 'Poppins',
        currentFontCategory: 'sans-serif',
        cssFont: null,
        fontUrl: 'https://fonts.googleapis.com/css?family=',
        newFontUrl: null,
        cssImport: null,
        fontSize: 47,
        fontWeight: 100,
        fontColor: '000000',
        textColor: '#f3090b',
        letterSpacing: 23,
        shadowX: -7,
        shadowY: 0,
        shadowSpread: 0,
        shadowColor: '#2c2c2c',
        fontOrder: 'popularity',
        transitionPreview: false
      }
    },
    created() {
      axios
        .get(
          'https://www.googleapis.com/webfonts/v1/webfonts?sort=' +
          this.fontOrder +
          '&key=AIzaSyBAd2Zzw-ARDak1lWaF-9AM1er7e8HlK-o'
        )
        .then(response => {
          this.fontList = response.data.items
          this.currentFontObj = response.data.items[13]
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
    methods: {
      clearAll() {
        this.fontSize = 47
        this.fontWeight = 100
        this.letterSpacing = 0
        this.shadowX = 0
        this.shadowY = 0
        this.shadowSpread = 0
        this.fontColor = '#000000'
        this.textColor = '#000000'
        this.shadowColor = '#000000'
        this.previewBackground = '#ffffff'
      },
      randomValues() {
        let weightArray = [100, 200, 300, 400, 500, 600, 700, 800, 900]
        let randomWeight = weightArray[Math.floor(weightArray.length * Math.random())]
        let randomFont = this.fontList[Math.floor(this.fontList.length * Math.random())]
        let hex = '0123456789abcdef'
        let randomFontColor = '#'
        let randomShadowColor = '#'
        let randomBackgroundColor = '#'
        for (var i = 0; i < 6; i++) {
          randomFontColor += hex[Math.floor(Math.random() * 16)]
          randomShadowColor += hex[Math.floor(Math.random() * 16)]
          randomBackgroundColor += hex[Math.floor(Math.random() * 16)]
        }
        this.textColor = randomFontColor
        this.shadowColor = randomShadowColor
        this.previewBackground = randomBackgroundColor
        this.currentFont = randomFont.family
        this.cssFont = randomFont.family
        console.log(randomFont.family)
        this.fontSize = Math.floor(Math.random() * 100 + 1)
        this.fontWeight = randomWeight
        this.letterSpacing = Math.floor(Math.random() * 100 + 1)
        this.shadowX = Math.floor(Math.random() * 201) - 100
        this.shadowY = Math.floor(Math.random() * 201) - 100
        this.shadowSpread = Math.floor(Math.random() * 30 + 1)
        this.fontColor = '#000000'
      },
      randomFont() {
        let randomFont = this.fontList[Math.floor(this.fontList.length * Math.random())]
        this.currentFont = randomFont.family
        this.cssFont = randomFont.family
      },
      randomStyles() {
        let weightArray = [100, 200, 300, 400, 500, 600, 700, 800, 900]
        let randomWeight = weightArray[Math.floor(weightArray.length * Math.random())]
        this.fontSize = Math.floor(Math.random() * 100 + 1)
        this.fontWeight = randomWeight
        this.letterSpacing = Math.floor(Math.random() * 100 + 1)
        this.shadowX = Math.floor(Math.random() * 201) - 100
        this.shadowY = Math.floor(Math.random() * 201) - 100
        this.shadowSpread = Math.floor(Math.random() * 30 + 1)
      },
      randomColor() {
        let hex = '0123456789abcdef'
        let randomFontColor = '#'
        let randomShadowColor = '#'
        let randomBackgroundColor = '#'
        for (var i = 0; i < 6; i++) {
          randomFontColor += hex[Math.floor(Math.random() * 16)]
          randomShadowColor += hex[Math.floor(Math.random() * 16)]
          randomBackgroundColor += hex[Math.floor(Math.random() * 16)]
        }
        this.textColor = randomFontColor
        this.shadowColor = randomShadowColor
        this.previewBackground = randomBackgroundColor
      }
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
          ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i);'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-auto-columns: min-content; */
    grid-template-rows: auto;
    height: 100vh;
    grid-template-areas: 'preview preview' 'controls settings';
    grid-column-gap: 10px;
    grid-row-gap: 5px;
  }
  .controls {
    grid-area: controls;
    grid-column: 1;
    grid-row: 3;
    background-color: #fff;
    overflow: auto;
    padding: 11px 40px 40px 40px;
    line-height: 10px;
  }
  .controls h4 {
    text-align: left;
    margin: 0;
  }
  .inputs {
    grid-area: inputs;
  }
  .inputs h4 {
    margin-top: 5px;
    margin-bottom: 20px;
    transition: 0.2s;
  }
  .colors {
    grid-area: colors;
    grid-column: 2;
    grid-row: 1;
    margin-top: 1.33em;
    /* background-color: skyblue; */
  }
  .textColorDiv,
  .shadowColorDiv,
  .previewBackgroundDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .settings {
    grid-area: settings;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'inputs colors';
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    grid-column: 2;
    grid-row: 3;
    /* background-color: pink; */
    text-align: left;
  }
  .preview {
    grid-area: preview;
    grid-row: 1;
    padding: 20px;
    margin-top: -30px;
    height: 280px;
    overflow: hidden;
    /* background-color: #a2a2a2; */
  }
  .preview p {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .verte {
    justify-content: left;
    filter: drop-shadow(-1px 1px 0.5px rgba(0, 0, 0, 0.2)) !important;
  }
  h2,
  h4 {
    font-weight: 100;
    margin-bottom: 5px;
  }
  small {
    margin-left: 10px;
  }
  .previewParagraph {
    margin: 0 !important;
  }
  .textInput {
    width: 75%;
    padding: 6px;
    font-size: 18px;
    letter-spacing: 0.2px;
    font-weight: 100;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid lightgray;
    transition: 0.2s;
  }
  .textInput:focus {
    border-bottom: 1px solid #efefef;
    padding-bottom: 10px;
    outline: 0;
    outline-offset: 0;
    transition: 0.2s;
  }
  .textInput:focus+h4 {
    font-size: 14px;
    color: #a2a2a2;
    margin-top: 0;
    letter-spacing: 0.5px;
    transition: 0.2s;
  }
  select {
    font-size: 14px;
    padding: 7px 7px 7px 8px;
    letter-spacing: 0.6px;
    width: 75%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #efefef;
    line-height: 1;
    outline: 0;
    color: #2c2c2c;
    border-color: #a2a2a2;
    border-radius: 0px;
    background: linear-gradient(#a2a282, #a2a2a2) no-repeat, linear-gradient(-135deg, rgba(255, 255, 255, 0) 50%, white 50%) no-repeat, linear-gradient(-225deg, rgba(255, 255, 255, 0) 50%, white 50%) no-repeat, linear-gradient(#3f3f3f, #3f3f3f) no-repeat;
    background-color: white;
    background-size: 1px 100%, 20px 20px, 20px 20px, 20px 60%;
    background-position: right 20px center, right bottom, right bottom, right bottom;
  }
  .cssTitle {
    border-bottom: 1px solid #efefef;
    padding-bottom: 6px;
  }
  .copyText {
    font-size: 12px;
    margin-top: 0;
  }
  .details {
    font-size: 12px;
    /* width: 500px; */
    margin: 0 auto;
    text-align: left;
    display: none;
  }
  .quickButtons {
    // border-left: 1px solid #efefef;
    padding: 10px 0 0 0;
  }
  .clearButton {
    width: 175px;
    margin-top: 12px;
    margin-bottom: 12px;
    cursor: pointer;
    background: #f6f6f6;
    text-align: center;
    letter-spacing: .5px;
    border-radius: 0;
    padding: 6px 5px;
    font-size: 12px;
    transition: .25s;
  }
  .clearButton:hover {
    background: #e6e6e6;
    transition: .25s;
  }
  .slidecontainer {
    text-align: left;
    margin: 0 auto;
    /* width: 500px; */
  }
  .slider {
    width: 100%;
    margin-right: 20px;
  }
  .sliderForm {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  input[type="number"] {
    background-color: #fff;
    color: #2c2c2c;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #efefef;
    letter-spacing: 0.6px;
    margin-right: 20px;
  }
  .transitionPreview p {
    transition: .3s;
  }
</style>