<template>
  <div class="index">
    <h1 class="title">Escolha sua população inicial de pássaros:</h1>

    <div class="info">
      <div class="bird-picker">
        <div class="picker-titles picker-grid">
          <h5>Cor</h5>
          <h5>Alimentação</h5>
          <h5>Tamanho</h5>
          <h5>Velocidade</h5>
        </div>

        <div class="picker-selectors picker-grid" v-for="i in [1,2,3,4,5,6,7,8,9,10]" :key="i">
          <b-form-select
            :value="null"
            :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
          >
          </b-form-select>

          <b-form-select
            :value="null"
            :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
          >
          </b-form-select>

          <b-form-select
            :value="null"
            :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
          >
          </b-form-select>

          <b-form-select
            :value="null"
            :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
          >
          </b-form-select>
        </div>
      </div>

      <div class="remaining-points">uhuhu</div>
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
.info {
  display: flex;
  height: calc(100vh - 288px);
}

.bird-picker {
  flex-grow: 1.25;
  border-right: 1px solid black;
  padding: 0 48px;

  & .picker-grid {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 1fr;
    grid-column-gap: 24px;
    justify-items: center;

    &.picker-titles h5{
      text-align: center;
      margin-bottom: 17px;
    }

    &.picker-selectors{
      margin-bottom: 17px;
    }
  }
}

.remaining-points {
  flex-grow: 1;
}

.button-continue {
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 48px 96px 0 0;
}
</style>
