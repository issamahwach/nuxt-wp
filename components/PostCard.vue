<script lang="ts" setup>

const props = defineProps({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  _embedded: { type: Object, required: false },
  excerpt: { type: String, required: true },
})


</script>
<template>
    <NuxtLink :to="'/posts/' + props.slug"  class="max-w-sm border rounded-md shadow-md">
          <img v-if="props._embedded && props._embedded['wp:featuredmedia']" :src="props._embedded['wp:featuredmedia'][0].source_url" class="w-full h-64 object-cover rounded-t-md"/>
          <div v-else class="w-full h-64 bg-gray-400 rounded-md"></div>
          <div class="px-2 py-2">
            <div class="font-semibold">
              {{ props.title }}
            </div>
            <div class="mt-2" v-html="props.excerpt"></div>
            
          </div>
        </NuxtLink>
</template>