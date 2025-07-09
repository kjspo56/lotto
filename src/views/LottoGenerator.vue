<template>
  <div class="lotto-wrapper">
    <div class="title">🎯 이번 주 당첨 번호</div>
    <transition-group name="fade" tag="div" class="ball-list">
      <LottoBall
        v-for="ball in winBalls"
        :key="ball"
        :number="ball"
      />
    </transition-group>

    <div class="bonus-title">💫 보너스 번호</div>
    <LottoBall v-if="bonus" :number="bonus" />

    <button v-if="redo" @click="onClickRedo" class="retry-btn">다시 추첨</button>
  </div>
</template>

<script>
import LottoBall from '../components/LottoBall.vue';
import { getWinNumbers } from '../utils/lotto';

export default {
  components: { LottoBall },
  data() {
    return {
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
      timeouts: [],
    };
  },
  methods: {
    showBalls() {
      for (let i = 0; i < 6; i++) {
        this.timeouts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 500);
      }
      this.timeouts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 3500);
    },
    onClickRedo() {
      this.saveResult();  //저장 먼저
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
      this.showBalls();
    },
    saveResult() {
      const history = JSON.parse(localStorage.getItem('lottoHistory') || '[]');
      const result = {
        id: Date.now(),
        numbers: this.winNumbers.slice(0, 6),
        bonus: this.winNumbers[6],
      };
      history.push(result);
      localStorage.setItem('lottoHistory', JSON.stringify(history));
    },
  },
  mounted() {
    this.showBalls();
  },
  beforeDestroy() {
    this.timeouts.forEach(clearTimeout);
  },
};
</script>

<style scoped>
.lotto-wrapper {
  text-align: center;
  background-color: #f9f9fb;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.bonus-title {
  margin-top: 2rem;
  font-weight: 600;
}
.ball-list {
  margin-top: 1rem;
}
.retry-btn {
  margin-top: 2rem;
  background: #2f3b52;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.retry-btn:hover {
  background: #1e2a3a;
}
.fade-enter-active {
  transition: all 0.4s ease;
}
.fade-enter-from {
  transform: scale(0);
  opacity: 0;
}
</style>
