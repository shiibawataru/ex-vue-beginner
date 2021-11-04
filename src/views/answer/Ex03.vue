<template>
  <div class="ex">
    <form>
      <input type="text" v-model.number="num1" /> +
      <input type="text" v-model.number="num2" /> =
      {{ num1 + num2 }}
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Ex03 extends Vue {
  private num1 = 0;
  private num2 = 0;
}
</script>

<style scoped>
.ex {
  border: solid;
  text-align: left;
}
</style>
