<template>
  <div class="ex">
    <p>名前：{{ myName }}</p>
    <p>年齢：{{ myAge }}</p>
    <p>10年後の年齢：{{ myAge + 10 }}</p>
    趣味：
    <span v-for="myHobby of myHobbys" v-bind:key="myHobby">{{
      myHobby + " "
    }}</span
    ><br />
    <br />
    <div><a v-bind:href="url">自社ページへリンク</a></div>
    <br />
    <div><img v-bind:src="imageUrl" /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Ex01 extends Vue {
  private myName = "椎葉渉";
  private myAge = 27;
  private myHobbys = ["スイム", "バイク", "ラン"];
  private url = "https://www.rakus-partners.co.jp/";
  private imageUrl = "img/12345.png";
}
</script>

<style scoped>
.ex {
  border: solid;
  text-align: left;
}
</style>
