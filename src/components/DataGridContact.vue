<template>
  <DataTable :value="contacts" tableStyle="min-width: 50rem">
    <template #header>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="text-xl font-bold">Lista de contatos</span>
        <Button icon="pi pi-refresh" rounded raised />
      </div>
    </template>
    <Column field="namePessoa" header="Nome"></Column>
    <Column field="favorite" header="Favorito"> </Column>
    <Column field="contact" header="Contato"></Column>
    <template #footer>
      Total de {{ contacts ? contacts.length : 0 }} contatos.
    </template>
  </DataTable>
</template>
<script setup lang="ts">
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { onMounted, ref } from "vue";
import { apiAxios } from "../api/api";
const contacts = ref();

onMounted(() => {
  getAllContacts();
});

const getAllContacts = async () => {
  const response = await apiAxios.get("/contact");
  contacts.value = response.data;
  console.log(contacts);
  console.log(response.data);
};
</script>
