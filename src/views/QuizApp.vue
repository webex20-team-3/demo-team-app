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
      <button>
        {{ "白" }}
      </button>
      <button>
        {{ "黒" }}
      </button>
      <button>
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
