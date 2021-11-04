<template>
  <div class="ex">
    <form>
      <input type="text" v-model.number="num1" /> <br />
      <input type="text" v-model.number="num2" /> <br />
      <input type="text" v-model.number="num3" /> <br />
      税抜き価格：{{ (num1 + num2 + num3).toLocaleString() }}円 <br />
      税込価格：{{ ((num1 + num2 + num3) * 1.1).toLocaleString() }}円
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Ex04 extends Vue {
  private num1 = 0;
  private num2 = 0;
  private num3 = 0;
}
</script>

<style scoped>
.ex {
  border: solid;
  text-align: left;
}
</style>
