const INITIAL_BIRD_NUMBER = 10;
const FOOD_TYPES = ['Carnívoro', 'Herbívoro', 'Onívoro'];
const COLOR_TYPES = ['Branco', 'Preto', 'Marrom', 'Amarelo Claro'];

export const state = () => ({
  list: [],
  foodTypes: [],
  colorTypes: [],
  sizeUsed: 0,
  velocityUsed: 0
});

export const mutations = {
  add(state, bird) {
    state.list.push(bird);
  },

  setlist(state, list) {
    state.list = list;
  },
  setColorTypes(state, colorTypes) {
    state.colorTypes = colorTypes;
  },
  setFoodTypes(state, foodTypes) {
    state.foodTypes = foodTypes;
  }
};

export const actions = {
  init({ commit, state }) {
    if (state.list.length == 0) {
      const birds = [];
      for (let i = 0; i < INITIAL_BIRD_NUMBER; i++) {
        birds.push({ id: i });
      }
      commit('setlist', birds);
    }

    if (state.foodTypes.length == 0) {
      const foodOptions = FOOD_TYPES.map(type => {
        return {
          value: type,
          valuesAssigned: 0,
          maxValues: 5,
          text: type
        };
      });

      commit('setFoodTypes', foodOptions);
    }

    if (state.colorTypes.length == 0) {
      const colorOptions = COLOR_TYPES.map(type => {
        return {
          value: type,
          valuesAssigned: 0,
          maxValues: 5,
          text: type
        };
      });

      commit('setColorTypes', colorOptions);
    }
  }
};

export const getters = {};
