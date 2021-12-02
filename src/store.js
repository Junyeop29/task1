import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    items: [],
    item: null,
  },
  mutations: {
    setItems: (state, { items }) => {
      state.items = items;
    },
    setItem: (state, { item }) => {
      state.item = item;
    },
    doOrderItems: (state, { orderKey }) => {
      const orderItems = [...state.items];
      const eventMap = {
        author: (a, b) => {
          const x = a.author.toLowerCase();
          const y = b.author.toLowerCase();

          if (x < y) {
            return -1
          }
          if (x > y) {
            return 1
          }
          return 0
        },
        width: (a, b) => {
          return b.width - a.width
        },
        height: (a, b) => {
          return b.height - a.height
        },
      }

      orderItems.sort(eventMap[orderKey]);
      state.items = orderItems;
    }

  },
  actions: {
    setItemsAsync: async ({ commit }, { page, limit }) => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
      commit('setItems', { items: response.data })
    },
    setItemAsync: async ({ commit }, { id }) => {
      const response = await axios.get(`https://picsum.photos/id/${id}/info`);
      commit('setItem', { item: response.data })
    }
  }
})

export default store;
