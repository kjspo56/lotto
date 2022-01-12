<template>
  <div>
    <Header></Header>  
    <div>당첨 숫자</div>
    <div id="root">
      <lotto-ball v-for="ball in winBalls" :key="ball" v-bind:number="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClickRedo">한번 더!</button>
    <Footer></Footer>
  </div>
</template>

<script>
import LottoBall from './LottoBall';
import Header from './components/Header';
import Footer from './components/Footer';


function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);

  const shuffle = []; //번호를 담ㄴ믄 용도
  while (candidate.length > 0) {
    //splice는 배열을 하나씩 빼주면서 랜덤으로 채운것들을 하나씩 뽑아서 shuffle에 넣어준다
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0],
    );
  }

  //맨 마지막 번호는 보너스 번호
  const bonusNumber = shuffle[shuffle.length - 1];

  //정답 번호를 앞에서부터 6개를 뽑은 후 오름차순 정리 한다
  // c - p 일 경우 내림차순
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

  // 승리한 번호의 배열(spread) 과 보너스 번호를 한 배열로 리턴해준다
 return [...winNumbers, bonusNumber];
 
}


const timeouts = [];



export default {
  components: {
    // 'lotto-ball': LottoBall,
    //뷰에서 PascalCase는 자동으로 kebab-case 로 바꿔준다
    'Header': Header,
    'lotto-ball': LottoBall,
    'Footer': Footer
  },
  data() {
    return {
      winNumbers: getWinNumbers(),
      //하나씩 1초마다 winBalls 에 넣어준다 winBalls는 시각적인 용도
      winBalls: [],
      bonus: null,
      redo: false,
    };
  },

  computed: {},
  methods: {
    //재실행 절차
    onClickRedo() {
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
      this.showBalls();
    },
    showBalls() {
      //먼저 보너스를 제외한 공을 뽑는다
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeouts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 500);
      }
      timeouts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 3000);
    },
    addData(){
      localStorage.setItem(this.winNumbers);
    }
  },
  mounted() {
    this.showBalls();
  },
  beforeDestroy() {
    timeouts.forEach(t => clearTimeout(t));
  },

};


</script>

<style>
body{
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>