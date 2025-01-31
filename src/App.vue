<script setup lang="ts">
// import InputGroup from "primevue/inputgroup";
// import InputGroupAddon from "primevue/inputgroupaddon";
// import InputText from "primevue/inputtext";
// import InputNumber from "primevue/inputnumber";
// import Select from "primevue/select";
import CardContact from "./components/CardContact.vue";
import DataGridContact from "./components/DataGridContact.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark");
}
</script>

<template>
  <!-- <div class="grid grid-cols-6">
    
  </div> -->
  <HeaderComponent />
  <div class="p-4">
    <span class="text-xl font-bold">Contatos favoritos</span>
    <CardContact />
  </div>
  <div class="p-4">
    <DataGridContact />
  </div>
</template>
