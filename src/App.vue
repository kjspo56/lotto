<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import LottoGenerator from './views/LottoGenerator.vue';

export default {
  components: {
    Header,
    Footer,
    LottoGenerator,
  },
};
</script>

<style scoped>
.container {
  padding: 1rem 2rem;
  max-width: 800px;
  margin: auto;
}
</style>
