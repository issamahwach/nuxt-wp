<template>
    <div>

    <!--Header-->
    <div
      class="
        bg-gray-100
        px-2
        lg:px-36
        py-4
        flex flex-row
        justify-between
        items-center
        shadow-md
      "
    >
        <NuxtLink to="/" class="text-2xl font-bold text-purple-800">NUXTWP</NuxtLink>
      <div>
        <MenuPrimary />
      </div>
    </div>

    <NuxtPage />
    </div>
</template>