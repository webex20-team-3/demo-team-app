<template>
  <h1>Vue クイズ</h1>
  <div class="app">
    <h2>ホッキョクグマの肌は何色でしょう？</h2>
    <img
      id="quiz-image"
      src="https://via.placeholder.com/300x300"
      alt="ホッキョクグマの肌は何色でしょうか？"
    />
    <div class="container">
      <button id="quizchoice1">白</button>
      <button id="quizchoice2">黒</button>
      <button id="quizchoice3">ベージュ</button>
    </div>
    <div id="quizresult"></div>
  </div>
</template>

<script>
const quizchoice1 = document.getElementById("quizchoice1")
const quizchoice2 = document.getElementById("quizchoice2")
const quizchoice3 = document.getElementById("quizchoice3")
const quizresult = document.getElementById("quizresult")

quizchoice1.onclick = function () {
  quizresult.textContent = "違います！"
}
quizchoice2.onclick = function () {
  quizresult.textContent = "正解です！"
}
quizchoice3.onclick = function () {
  quizresult.textContent = "違います！"
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
