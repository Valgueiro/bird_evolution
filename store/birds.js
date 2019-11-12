const INITIAL_BIRD_NUMBER = 10;

export const state = () => ({
  list: [],
  foodTypes: ['Carnívoro', 'Herbívoro', 'Onívoro'],
  colorTypes: ['Branco', 'Preto', 'Marrom', 'Amarelo Claro']
});

export const mutations = {
  add(state, bird) {
    state.list.push(bird);
  },
  remove(state, { bird }) {
    state.list.splice(state.list.indexOf(bird), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  }
};

export const actions = {
  createInitialBirds({ commit, state }) {
    if (state.list.length == 0) {
      for (let i = 0; i < INITIAL_BIRD_NUMBER; i++) {
        const bird = { id: i };
        commit('add', bird);
      }
    }
  }
};

export const getters = {
  foodTypesOptions: state => {
    return state.foodTypes.map(food => {
      return { value: food, text: food };
    });
  },
  colorTypesOptions: state => {
    return state.colorTypes.map(color => {
      return { value: color, text: color };
    });
  }
};
