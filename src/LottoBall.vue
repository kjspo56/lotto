<template>
  <div class="ball" :style="styleObject">{{number}}</div>
</template>

<script>
  export default {
    name: 'LottoBall',
    props: {
      number: Number,
    },
    computed: {
      styleObject() {
        let background;
        if (this.number <= 10) {
          background = '#EB0000'; //red
        } else if (this.number <= 20) {
          background = '#FF8200'; //orange
        } else if (this.number <= 30) {
          background = '#FFD228'; //Yellow
        } else if (this.number <= 40) {
          background = '#1E82FF'; //blue
        } else {
          background = '#329632'; //green
        }
        return {
          background,
        };
      }
    },
  }
</script>

<style>
  .ball {
    display: inline-block;
    border: 1px solid black;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    margin-right: 20px;
  }
</style>