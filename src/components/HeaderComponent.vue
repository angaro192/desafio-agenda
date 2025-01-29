<script setup lang="ts">
import Button from "primevue/button";
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
  </header>
</template>
