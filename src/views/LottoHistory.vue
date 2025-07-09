<template>
  <div class="history-container">
    <h2>📊 추첨 결과 히스토리</h2>
    <ul v-if="history.length">
      <li v-for="item in history" :key="item.id">
        <span class="numbers">{{ item.numbers.join(', ') }}</span>
        <span class="bonus">(보너스: {{ item.bonus }})</span>
      </li>
    </ul>
    <p v-else>저장된 기록이 없습니다.</p>
    <button @click="clearHistory" class="clear-btn">히스토리 초기화</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [],
    };
  },
  mounted() {
    const saved = localStorage.getItem('lottoHistory');
    this.history = saved ? JSON.parse(saved) : [];
  },
  methods: {
    clearHistory() {
      if (confirm('정말로 삭제하시겠습니까?')) {
        localStorage.removeItem('lottoHistory');
        this.history = [];
      }
    },
  },
};
</script>

<style scoped>
.history-container {
  padding: 2rem;
  max-width: 700px;
  margin: auto;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
}
.numbers {
  font-weight: bold;
  color: #2f3b52;
}
.clear-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
}
</style>
