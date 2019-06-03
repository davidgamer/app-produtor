<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="h4 title">Produtores</h1>
        <div class="d-flex justify-content-start p-2">
          <button
            type="button"
            @click="isCreating = !isCreating"
            class="btn btn-outline-success"
          >Adicionar</button>
        </div>
        <div class="mx-auto">
          <transition name="slide-fade">
            <ProdutorCreate v-if="isCreating" v-on:cancelNew="notSave($event)" :lastID="ultimoID"></ProdutorCreate>
          </transition>
          <div class="mx-auto">
            <transition name="slide-fade">
              <ProdutoEdit
                v-if="isEditing"
                :produtor="toEditData"
                v-on:cancelEdit="notEdit($event)"
              ></ProdutoEdit>
            </transition>
          </div>
        </div>
        <table class="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th>Edição</th>
              <th>Exclusão</th>
            </tr>
          </thead>
          <BodyTable
            v-on:enableEdit="canEdit($event)"
            v-on:toEdit="putData($event)"
            :bodyTdata="produtor"
          ></BodyTable>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import ProdutorCreate from "@/components/ProdutorCreate.vue";
import BodyTable from "@/components/BodyTable.vue";
import ProdutoEdit from "@/components/ProdutoEdit.vue";
export default {
  name: "about",
  components: {
    ProdutorCreate,
    BodyTable,
    ProdutoEdit
  },
  data() {
    return {
      isCreating: false,
      isEditing: false,
      reloadList: false,
      toEditData: {}
    };
  },
  created() {
    this.getRothData();
  },
  computed: {
    produtor() {
      return this.$store.getters.getProdutores;
    }
  },
  methods: {
    getRothData() {
      let vm = this;
      this.$store.dispatch("fetchProdutores");
    },
    notSave(event) {
      this.isCreating = event;
    },
    canEdit(event) {
      this.isEditing = event;
    },
    notEdit(event) {
      this.isEditing = event;
    },
    putData(event) {
      this.toEditData = event;
    }
  }
};
</script>