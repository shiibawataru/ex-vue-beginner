<template>
  <div class="ex">
    <form>
      <input type="text" v-model.number="num1" /> <br />
      <input type="text" v-model.number="num2" /> <br />
      <input type="text" v-model.number="num3" /> <br />
      税抜き価格：{{ totalPrice.toLocaleString() }}円 <br />
      税込価格：{{ totalPriceIncludeTax.toLocaleString() }}円
      <!-- ここで計算させるとMVVMのVIEWで計算させることになるため下で計算 -->
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

  get totalPrice(): number {
    return this.num1 + this.num2 + this.num3;
  }
  get totalPriceIncludeTax(): number {
    return (this.num1 + this.num2 + this.num3) * 1.1;
  }
}
</script>

<style scoped>
.ex {
  border: solid;
  text-align: left;
}
</style>
