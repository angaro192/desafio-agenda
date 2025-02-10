<script setup lang="ts">
import axios from "axios";
import { Button, Dialog, InputText } from "primevue";
import { computed, ref, watch } from "vue";

export type ContactFormType = {
  name: string;
  email: string;
  contact: string;
  zipCode: string;
  address: string;
};

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

const initialValue = ref<ContactFormType>({
  name: "",
  email: "",
  contact: "",
  zipCode: "",
  address: "",
});

const handleZipCodeChange = (contactValue: ContactFormType) => {
  if (contactValue.zipCode.length >= 9) {
    const zipCodeFormated = contactValue.zipCode.replace("-", "");
    axios
      .get(`https://viacep.com.br/ws/${zipCodeFormated}/json/`)
      .then((result) => {
        if (result.status === 200) {
          initialValue.value.address = `${result.data.logradouro}, ${
            result.data.localidade
          }, ${result.data.uf.toUpperCase()}`;
        }
      });
  }
};

watch(
  initialValue,
  (contactValue: ContactFormType) => {
    handleZipCodeChange(contactValue);
  },
  { deep: true }
);
</script>

<template>
  <Dialog
    v-model:visible="props.visible"
    modal
    header="Novo contato"
    :style="{ width: '25rem' }"
  >
    <Form :initialValues="initialValue">
      <div class="flex items-center gap-4 mb-4">
        <label for="name" class="font-semibold w-24">Nome</label>
        <InputText
          id="name"
          v-model="initialValue.name"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <InputText
          id="email"
          v-model="initialValue.email"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="contact" class="font-semibold w-24">Contato</label>
        <InputText
          id="contact"
          v-model="initialValue.contact"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-2">
        <label for="zipCode" class="font-semibold w-24">CEP</label>
        <InputText
          id="zipCode"
          v-model="initialValue.zipCode"
          v-mask="'#####-###'"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex justify-end gap-2 mb-8">
        <p v-if="initialValue.address">{{ initialValue.address }}</p>
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
    </Form>
  </Dialog>
</template>
