<template>
  <div>
    <div class="be-card">
      <div>
        {{attr}}
      </div>
      <div>{{value}}<span v-if="maxValue">/{{maxValue}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BECard',
  props: ['attr', 'value', 'maxValue']
};
</script>

<style scoped>
.be-card {
  padding: 0.25rem 1rem;
  box-sizing: border-box;
  margin: 17px 34px;

  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;


  display: flex;
  justify-content: space-between
}
</style>
