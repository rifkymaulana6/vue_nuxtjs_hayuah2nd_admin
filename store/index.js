export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async getProducts() {
    let res = await this.$axios.get("/products");
    return res;
  },
};
