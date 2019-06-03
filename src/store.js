import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtores: [],
    newprodutor: ""
  },
  mutations: {
    setProdutores(state, produtores) {
      state.produtores = produtores;
    },
    injectProdutor(state, produtor) {
      state.produtores.push(produtor);
    },
    updateProdutor(state, produtor) {
      var todos = state.produtor;
      todos.splice(produtor.indexOf(produtor), 1);
      state.produtor = produtor;
      state.newprodutor = produtor;
    },
    removeProdutor(state, produtor) {
      var todos = state.todos;
      todos.splice(todos.indexOf(todo), 1);
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
    }
  }
});
