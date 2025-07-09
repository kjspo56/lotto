<template>
  <div class="ball" :style="styleObject">{{ number }}</div>
</template>

<script>
export default {
  props: { number: Number },
  computed: {
    styleObject() {
      let background = '#ccc';
      if (this.number <= 10) background = '#EB0000';
      else if (this.number <= 20) background = '#FF8200';
      else if (this.number <= 30) background = '#FFD228';
      else if (this.number <= 40) background = '#1E82FF';
      else background = '#329632';

      return {
        background,
        color: '#fff',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
      };
    },
  },
};
</script>

<style scoped>
.ball {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 0 8px;
  transition: transform 0.3s ease;
}
.ball:hover {
  transform: scale(1.1);
}
</style>
