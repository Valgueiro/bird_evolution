<template>
  <div class="index">
    <h1 class="title">Escolha sua população inicial de pássaros:</h1>

    <div class="grid">
      <div class="bird_picker">picker</div>

      <div class="remaining_points">uhuhu</div>
    </div>
    <div class="button-continue">
      <div>
        <b-button variant="success" size="lg">Começar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.index {
  padding: 48px 0;
}

.title {
  margin-bottom: 48px;
  text-align: center;
}
.grid {
  display: flex;
  height: calc(100vh - 288px);
}

.bird_picker {
  flex-grow: 3;
  border-right: 1px solid black;
}

.remaining_points {
  flex-grow: 1;
}

.button-continue {
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 48px 96px 0 0;
}
</style>
