<template>
  <tbody>
    <tr v-for="pr in bodyTdata" :key="pr.id">
      <td>{{ pr.name }}</td>
      <td>{{ pr.cpf }}</td>
      <td>
        <button @click="enableEdit(pr)" class="btn btn-outline-warning">Editar</button>
      </td>
      <td>
        <button @click="excluir(pr.id)" class="btn btn-outline-danger">Deletar</button>
      </td>
    </tr>
  </tbody>
</template>
<script>
import { type } from "os";
export default {
  props: {
    bodyTdata: {
      type: Array,
      required: true
    }
  },
  methods: {
    enableEdit(pr) {
      this.$emit("enableEdit", true);
      this.$emit("toEdit", pr);
    },
    excluir(id) {
      this.$store.dispatch("deleteProdutor", id);
    }
  }
};
</script>
