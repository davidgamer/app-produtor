<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="card m-3">
        <h5 class="h5">Novo Produtor</h5>
        <form class="form p-5">
          <div class="form-group">
            <label for="cpfinput">CPF:</label>
            <input
              v-model="novoProdutor.cpf"
              type="text"
              class="form-control"
              name="cpf"
              id="cpfinput"
              placeholder="111-111-111-15"
              maxlength="11"
            >
          </div>
          <div class="form-group">
            <label for="nameinput">Nome:</label>
            <input
              v-model="novoProdutor.name"
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="joão da silva"
            >
          </div>
          <div class="form-group justify-content-around">
            <button
              type="button"
              @click="storeCliente(novoProdutor)"
              class="btn btn-outline-success"
            >Salvar</button>
            <button @click="cancelNew()" type="button" class="btn btn-outline-danger">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    lastID: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      novoProdutor: {
        name: "",
        cpf: 0
      }
    };
  },
  methods: {
    cancelNew() {
      this.$emit("cancelNew", false);
    },
    storeCliente(data) {
      this.$store.dispatch("insertProdutores", data);
    }
  }
};
</script>