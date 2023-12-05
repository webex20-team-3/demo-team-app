<template>
  <h1>Vue クイズ</h1>
  <div class="app">
    <h2>Q. {{ "ホッキョクグマの肌は何色でしょう？" }}</h2>
    <img
      class="quiz-image"
      src="https://via.placeholder.com/300x300"
      alt="ホッキョクグマの肌は何色でしょう？"
    />
    <div class="container">
      <button
        v-for="(choice, i) in quiz.choices"
        v-bind:key="i"
        v-on:click="choiced(choice)"
      >
        {{ "白" }}
      </button>
      <button
        v-for="(choice, i) in quiz.choices"
        v-bind:key="i"
        v-on:click="choiced(choice)"
      >
        >
        {{ "黒" }}
      </button>
      <button
        v-for="(choice, i) in quiz.choices"
        v-bind:key="i"
        v-on:click="choiced(choice)"
      >
        >
        {{ "ベージュ" }}
      </button>
    </div>
    <div>{{ "黒" }}</div>
  </div>
</template>

<script>
data() {
    return {
        quiz: {
        text: "ホッキョクグマの肌は何色でしょう",
        image: "sirokuma.jpg",
        choices: [
          {
            text: "白",
            isCorrect: false,
            feedback:
              "残念！白ではありません！",
          },
          {
            text: "黒",
            isCorrect: true,
            feedback:
              "正解！本来の肌の色は黒く透明の毛が生えていますが光の影響で白くみえています。",
          },
          {
            text: "ベージュ",
            isCorrect: false,
            feedback: "残念！ベージュではありません！",
          },
        ],
      },
    }
  }
  methods: {
    choiced(choice) {
      this.feedback = choice.feedback

      if (choice.isCorrect) {
      }
    },
  },
</script>

<style>
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.quiz-image {
  height: 300px;
  width: 300px;
  object-fit: contain;
}

.container {
  display: flex;
  height: 2em;
  width: 300px;
  padding: 1em;
  justify-content: space-around;
}
</style>
