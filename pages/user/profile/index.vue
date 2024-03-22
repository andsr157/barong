<template>
  <Header title="Profil" />
  <div class="h-[600px]">
    <div
      class="h-[238px] bg-brg-primary rounded-br-3xl rounded-bl-3xl flex flex-col justify-center items-center"
    >
      <div
        class="w-[98px] h-[98px] rounded-full border-[3px] overflow-y-hidden"
      >
        <NuxtImg
          src="/assets/dummy-profile-user.jpeg"
          width="98"
          height="98"
          class="object-cover w-full h-full"
        />
      </div>
      <h1 class="font-semibold text-white text-sm">Puan tek</h1>
      <h1 class="text-[11px] text-white font-light">+628965189113</h1>
      <h1 class="text-[11px] text-white font-light">puantek123@gmail.com</h1>
    </div>
    <div class="px-6 mt-[34px] flex flex-col gap-[15px]">
      <NuxtLink class="flex items-center gap-2" to="/user/profile/edit_profile">
        <Icon name="mdi:account-edit" class="w-5 h-5 text-brg-primary-dark" />
        <h1 class="font-semibold text-sm text-brg-primary-dark">Ubah Profil</h1>
      </NuxtLink>
      <NuxtLink class="flex items-center gap-2" to="/user/profile/address">
        <Icon
          name="uil:map-marker-edit"
          class="w-5 h-5 text-brg-primary-dark"
        />
        <h1 class="font-semibold text-sm text-brg-primary-dark">Alamat</h1>
      </NuxtLink>
      <NuxtLink class="flex items-center gap-2" to="/user/profile/edit_kata_sandi">
        <Icon
          name="ooui:edit-lock"
          class="w-5 h-5 text-brg-primary-dark"
        />
        <h1 class="font-semibold text-sm text-brg-primary-dark">Ubah Kata Sandi</h1>
      </NuxtLink>
    </div>
    <div class="px-6 mt-[34px] flex flex-col gap-[15px]">
      <NuxtLink class="flex items-center gap-2" to="/term_n_condition">
        <Icon name="charm:notes-tick" class="w-5 h-5 text-brg-primary-dark" />
        <h1 class="font-semibold text-sm text-brg-primary-dark">
          Syarat dan Ketentuan
        </h1>
      </NuxtLink>
      <NuxtLink class="flex items-center gap-2">
        <Icon name="mdi:logout" class="w-5 h-5 text-brg-red" />
        <h1 class="font-semibold text-sm text-brg-red">Keluar</h1>
      </NuxtLink>
    </div>
  </div>
</template>
