<script setup lang="ts">
import { Button, Dialog, InputText } from "primevue";
import { computed } from "vue";

const props = defineProps<{
  visible: boolean;
}>();

const statusModal = computed({
  get: () => props.visible,
  set: (value: boolean) => {
    emit("getVisible", value);
  },
});

const emit = defineEmits<{
  (e: "getVisible", value: boolean): void;
}>();
</script>

<template>
  <Dialog
    v-model:visible="props.visible"
    modal
    header="Novo contato"
    :style="{ width: '25rem' }"
  >
    <div class="flex items-center gap-4 mb-4">
      <label for="username" class="font-semibold w-24">Nome</label>
      <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <label for="email" class="font-semibold w-24">Email</label>
      <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <label for="phoneNumber" class="font-semibold w-24">Contato</label>
      <InputText id="phoneNumber" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <label for="address" class="font-semibold w-24">Endereço</label>
      <InputText id="address" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
      <Button
        type="button"
        label="Cancelar"
        severity="secondary"
        @click="emit('getVisible', false)"
      ></Button>
      <Button
        type="button"
        label="Salvar"
        @click="emit('getVisible', false)"
      ></Button>
    </div>
  </Dialog>
</template>
