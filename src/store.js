import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtores: []
  },
  mutations: {
    setProdutores(state, produtores) {
      state.produtores = produtores;
    },
    injectProdutor(state, produtor) {
      state.produtores.push(produtor);
    },
    removeProdutor(state, payload) {
      const index = state.produtores.findIndex(p => p.id === payload);
      state.produtores.splice(index, 1);
    }
  },
  getters: {
    getProdutores(state) {
      return state.produtores;
    }
  },
  actions: {
    fetchProdutores(context) {
      let url = "https://my-json-server.typicode.com/pedroskakum/fake-api/db/";
      fetch(url)
        .then(res => res.json())
        .then(res => {
          context.commit("setProdutores", res.grower);
        });
    },
    insertProdutores(context, data) {
      this.displayData = JSON.stringify(data);
      let h = new Headers();
      h.append("Content-Type", "application/json");
      let url =
        "https://my-json-server.typicode.com/pedroskakum/fake-api/grower";
      let fetchData = {
        method: "POST",
        body: JSON.stringify(data),
        headers: h
      };
      fetch(url, fetchData)
        .then(res => res.json())
        .then(res => {
          context.commit("injectProdutor", res);
        });
    },
    updateProdutor(context, data) {
      this.displayData = JSON.stringify(data);
      let h = new Headers();
      h.append("Content-Type", "application/json");
      let url =
        "https://my-json-server.typicode.com/pedroskakum/fake-api/grower/" +
        data.id;
      let fetchData = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: h
      };
      fetch(url, fetchData)
        .then(res => res.json())
        .then(res => {
          context.commit("removeProdutor", data.id);
          context.commit("injectProdutor", res);
        });
    },
    deleteProdutor(context, id) {
      let h = new Headers();
      h.append("Content-Type", "application/json");
      let url =
        "https://my-json-server.typicode.com/pedroskakum/fake-api/grower/" + id;
      let fetchData = {
        method: "DELETE",
        headers: h
      };
      fetch(url, fetchData)
        .then(res => res.json())
        .then(res => {
          context.commit("removeProdutor", id);
        });
    }
  }
});
