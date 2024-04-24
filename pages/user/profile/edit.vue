<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
import { useForm } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
import { useToastStore } from "~/stores/Toast.store";
const { data: user } = <any>useAuth();

const name = ref(user.value.user.name);
const email = ref(user.value.user.email);
const telepon = ref(user.value.user.telp);
const toastStore = useToastStore();

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  telp: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric")
    .max(14, "Phone number must be at most 14 characters")
    .required("Phone number is required"),
});
const { handleSubmit } = useForm<FormData>({
  validationSchema: schema,
})
const onSubmit = handleSubmit(async() => {
  try {
    const payload = {
      id:user.value.user.id,
      name:name.value,
      email:email.value,
      telp:telepon.value,
    }
    const res = await axios.put('/api/v1/profile', payload)
    if(res.data){
       toastStore.success({text:"Berhasil Ubah Profil"})
       useRouter().push("/user/profile");
    }
  } catch (error) {
    console.log(error);
  }
})

</script>
<template>
  <Toast/>
  <Header title="Ubah Profil" />
  <div class="px-6 flex flex-col gap-4 mt-3">
    <div classs="">
      <label class="text-brg-primary-dark font-semibold text-sm">Profil</label>
      <div class="w-[100px] h-[100px] mx-auto mt-4">
        <NuxtImg
          src="{{user.user.avatar}}"
          width="100"
          height="100"
          class="h-full w-full object-cover rounded-full"
        />
      </div>
      <div class="flex justify-center">
        <div
          class="w-[86px] relative flex justify-center items-center bg-brg-primary rounded-2xl text-white px-1 py-2"
        >
          ubah
          <InputFile wrapperClass="!absolute top-0 left-0 opacity-0" />
        </div>
      </div>
    </div>

    <div class="">
      <InputValidation
        v-model="name"
        name="name"
        label="Nama Lengkap"
        labelClass="text-sm font-semibold"
      />
    </div>

    <div class="">
      <InputValidation v-model="email" name="email" label="Email" labelClass="text-sm font-semibold" />
    </div>

    <div class="">
      <InputValidation
        v-model="telepon"
        name="telp"
        label="telepon"
        labelClass="text-sm font-semibold"
      />
    </div>

    <ButtonLarge label="Simpan" @click="onSubmit" class="mx-auto mt-10 mb-10" />
  </div>
</template>
