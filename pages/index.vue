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

        <div
          class="picker-selectors picker-grid"
          v-for="i in birds"
          :key="i.id"
        >
          <b-form-select :value="null" :options="colorTypes"> </b-form-select>

          <b-form-select :value="null" :options="foodTypes"> </b-form-select>

          <div class="picker-number-input">
            <b-form-input type="number" min="0" max="31"></b-form-input>
          </div>

          <div class="picker-number-input">
            <b-form-input type="number" min="0" max="31"></b-form-input>
          </div>
        </div>
      </div>

      <div class="remaining-points">
        <div class="title">
          <h5>Pontos Restantes</h5>
        </div>

        <!-- Color Section-->
        <div class="section">
          <BECard
            v-for="color in colorTypes"
            :key="color.value"
            :attr="color.text"
            :value="color.valuesAssigned"
            :maxValue="color.maxValues"
          />
        </div>

        <!-- Feed Section-->
        <div class="section">
          <BECard
            v-for="food in foodTypes"
            :key="food.value"
            :attr="food.text"
            :value="food.valuesAssigned"
            :maxValue="food.maxValues"
          />
        </div>

        <!-- Size Section-->
        <div class="section">
          <BECard attr="Branco" value="4" maxValue="5" />
        </div>

        <!-- Speed Section-->
        <div class="section">
          <BECard attr="Branco" value="4" maxValue="5" />
        </div>
      </div>
    </div>
    <div class="button-continue">
      <div>
        <b-button variant="success" size="lg">Começar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BECard from '~/components/be-card';
export default {
  components: {
    BECard
  },
  computed: {
    ...mapState({
      foodTypes: state => state.birds.foodTypes,
      colorTypes: state => state.birds.colorTypes
    }),
    birds: function() {
      return this.$store.state.birds.list;
    }
  },
  async fetch({ store }) {
    store.dispatch('birds/init');
  }
};
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
  overflow-y: auto;

  & .picker-grid {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 1fr;
    grid-column-gap: 36px;
    justify-items: center;

    &.picker-titles h5 {
      text-align: center;
      margin-bottom: 34px;
    }

    &.picker-selectors {
      margin-bottom: 17px;

      & .picker-number-input {
        padding: 0 10px;
      }
    }
  }
}

.remaining-points {
  flex-grow: 1;

  & .title {
    text-align: center;
    margin-bottom: 30px;
  }

  & .section {
    margin-bottom: 35px;
  }
}

.button-continue {
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 48px 96px 0 0;
}
</style>
