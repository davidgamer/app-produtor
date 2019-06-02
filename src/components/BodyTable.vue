<template>
  <tbody>
    <tr @click="criou(pr.name)" v-for="pr in bodyTdata" :key="pr.id">
      <th scope="row">{{ pr.id }}</th>
      <td>{{ pr.name }}</td>
      <td>{{ pr.cpf }}</td>
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
    criou(nome) {
      alert("Você clicou em " + nome);
    }
  }
};
</script>
