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
        <hr>
        <div class="mx-auto">
          <transition name="slide-fade">
            <ProdutorCreate v-if="isCreating" v-on:cancelNew="notSave($event)"></ProdutorCreate>
          </transition>
        </div>
        <table class="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
            </tr>
          </thead>
          <BodyTable :bodyTdata="grower"></BodyTable>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import ProdutorCreate from "@/components/ProdutorCreate.vue";
import BodyTable from "@/components/BodyTable.vue";
export default {
  name: "about",
  components: {
    ProdutorCreate,
    BodyTable
  },

  data() {
    return {
      apiData: {
        type: Object,
        required: true
      },
      grower: [],
      isCreating: false
    };
  },
  created() {
    this.getRothData();
  },
  methods: {
    getRothData() {
      let url = "https://my-json-server.typicode.com/pedroskakum/fake-api/db/";
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.apiData = res;
          this.grower = this.apiData.grower;
        });
    },
    notSave(event) {
      this.isCreating = event;
    }
  }
};
</script>