<script setup lang="ts">
import Button from "primevue/button";
import { reactive } from "vue";
import ModalAddContact from "./ModalAddContact.vue";

const viewModalAddContact = reactive({
  visible: false,
});

function changeModal(value: boolean) {
  viewModalAddContact.visible = value;
}
</script>

<template>
  <header>
    <div
      class="flex md:flex md:flex-grow flex-row justify-between space-x-1 p-4"
    >
      <div class="">Contatos</div>
      <div class="space-x-3">
        <Button
          type="button"
          variant="outlined"
          severity="secondary"
          label="Adicionar contato"
          size="small"
          icon="pi pi-plus"
          @click="changeModal(true)"
        />
        <Button
          type="button"
          variant="outlined"
          severity="secondary"
          size="small"
          icon="pi pi-filter"
        />
        <Button
          type="button"
          variant="outlined"
          severity="secondary"
          size="small"
          icon="pi pi-search"
        />
      </div>
    </div>
    <ModalAddContact
      :visible="viewModalAddContact.visible"
      @getVisible="changeModal"
    />
  </header>
</template>
