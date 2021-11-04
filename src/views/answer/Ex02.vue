<template>
  <div class="ex">
    <p>名前：{{ myName }}</p>
    <p>年齢：{{ myAge }}歳</p>
    <p>10年後の年齢：{{ my10YearsAge }}歳</p>
    <p>
      趣味：
      <span v-for="myHobby of myHobbys" v-bind:key="myHobby">{{
        myHobby + " "
      }}</span>
    </p>
    <br />
    <div><a v-bind:href="url">自社ページへリンク</a></div>
    <br />
    <div><img v-bind:src="imageUrl" /></div>
    <button type="button" v-on:click="onclick" v-bind:disabled="canNotClick">
      ボタン
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Ex02 extends Vue {
  private myName = "";
  private myAge = 0;
  private my10YearsAge = 0;
  private myHobbys = new Array<string>();
  private url = "";
  private imageUrl = "";
  private canNotClick = false;

  onclick(): void {
    this.myName = "椎葉渉";
    this.myAge = 27;
    this.my10YearsAge = this.myAge + 10;
    this.myHobbys = ["スイム", "バイク", "ラン"];
    this.url = "https://www.rakus-partners.co.jp/";
    this.imageUrl = "img/12345.png";
    this.canNotClick = true;
  }
}
</script>

<style scoped>
.ex {
  border: solid;
  text-align: left;
}
</style>
