<template>
  <h1>Vue メモ</h1>
  <div class="memo-list">
    <ul class="memo-list__container">
      <li v-for="(memo, index) in memos" v-bind:key="index" class="memo">
        <input type="checkbox" v-model="memo.checked" />
        <div v-if="memo.checked" class="memo_text memo__text--done">
          {{ memo.text }}
        </div>
        <div v-else class="memo_text">
          {{ memo.text }}
        </div>
        <button @click="deleteMemo(index)" class="memo__delete">削除</button>
      </li>
    </ul>
    <div class="add-memo-field">
      <input type="text" class="add-memo-field__input" v-model="inputText" />
      <button class="add-memo-field__button" @click="add">追加</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
      memos: [],
    }
  },
  methods: {
    createMemo: function () {
      const memo = { text: this.inputText, checked: false }
      this.memos.push(memo)
    },
    deleteMemo: function (index) {
      this.memos.splice(index, 1)
    },
    add: function () {
      if (this.inputText) {
        this.createMemo()
        console.log(this.memos.text)
        this.inputText = ""
      }
    },
  },
}
</script>

<style scoped>
.memo-list {
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 512px;
  margin-left: auto;
  margin-right: auto;
}
/* container */
.memo-list__container {
  padding: 0;
}
/* card */
.memo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
}

.memo:hover {
  color: white;
  background-color: #b23b61;
}
.memo__text {
  margin-left: 2rem;
  text-align: left;
}

.memo__text--done {
  text-decoration-line: line-through;
}
.memo__delete {
  margin-left: 1rem;
  padding: 0.5rem 0.5rem;
  border: solid 1px black;
  border-radius: 5px;
  background-color: white;
}

.memo__delete:hover {
  background-color: #b2ae3b;
  border-radius: 5px;
}

.add-memo-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.add-memo-field__input {
  padding: 10px;
}
.add-memo-field__button {
  padding: 0.5rem 0.5rem;
  border: solid 1px black;
  border-radius: 5px;
  background-color: white;
}

.add-memo-field__button:hover {
  background-color: #b2ae3b;
  border-radius: 5px;
}
</style>
