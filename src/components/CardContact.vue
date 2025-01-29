<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import { defineProps } from "vue";
const product = {
  name: "Augusto Almeida",
  category: "Celular",
  price: 1500,
  image: "https://picsum.photos/200/200",
};
</script>

<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <div class="flex flex-wrap p-2 items-center gap-4">
        <img
          class="w-16 shrink-0 rounded"
          :src="product.image"
          :alt="product.name"
        />
        <div class="flex-1 flex flex-col gap-1">
          <span class="font-bold">{{ product.name }}</span>
          <div class="flex items-center gap-2">
            <span>{{ product.category }}</span>
          </div>
        </div>
        <i class="pi pi-star text-sm"></i>
      </div>
    </template>
    <template #content>
      <p class="m-0">Rua barreiros, Igarassu, PE, 53620-000</p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button
          label="Enviar e-mail"
          icon="pi pi-envelope"
          size="small"
          severity="secondary"
          outlined
          class="w-full"
        />
        <Button
          label="Iniciar chamada"
          icon="pi pi-phone"
          size="small"
          severity="secondary"
          outlined
          class="w-full"
        />
      </div>
    </template>
  </Card>
</template>
