<script lang="ts" setup>
const {params} = useRoute();
const {data: categories} = await useWpApi().getCategory<any>(params.slug as string);

const {data: posts} = await useWpApi().getPosts<any>(categories.value[0].id);
</script>

<template>
  <div>
    <div class="container">
      <h2 class="text-lg font-semibold">Posts in category: {{ categories[0].name }}</h2>
       <div v-if="posts?.length" class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <PostCard v-for="(item, index) in posts" :key="index" :slug="item.slug" :title="item.title.rendered" :excerpt="item.excerpt.rendered" :_embedded="item._embedded"/>
      </div>
      
    </div>
  </div>
</template>
