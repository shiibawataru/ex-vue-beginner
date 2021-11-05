<template>
  <div class="ex">
    <div class="errorMessage" v-if="myName === ''">
      名前が入力されていません
    </div>
    <div class="myInfo">
      名前：<br />
      <input type="text" id="myName" v-model="myName" />
    </div>
    <div class="errorMessage" v-if="myAge === ''">年齢が入力されていません</div>
    <div class="myInfo">
      年齢：<br />
      <input type="number" v-model="myAge" />
    </div>
    <div class="errorMessage" v-if="myComment === ''">
      コメントが入力されていません
    </div>
    <div class="myInfo">
      コメント：<br />
      <textarea
        id="myComment"
        v-model="myComment"
        cols="20"
        rows="5"
      ></textarea>
    </div>
    <br />
    <hr />

    入力値：<br />
    名前：{{ myName }}<br />
    年齢：{{ myAge }}<br />
    コメント：
    <pre>{{ myComment }}</pre>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Ex05 extends Vue {
  private myName = "";
  private myAge = "";
  private myComment = "";
  private canShow = false;
}
</script>

<style scoped>
.ex {
  border: solid;
  text-align: left;
}
.errorMessage {
  color: red;
}
</style>
