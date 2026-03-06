<script setup lang="ts">
import type { Persona } from '~/types';

const props = defineProps<{
  persona: Persona;
}>();

// 直接使用 persona 資料中的圖片，如果沒有則使用預設圖片
const imageUrl = computed(() => {
  return props.persona.image || "https://placehold.co/400x400/png?text=Pocket+Dog";
});
</script>

<template>
  <div class="w-full max-w-[350px] aspect-square flex items-center justify-center relative bg-white rounded-[3rem] border border-slate-100 shadow-inner overflow-hidden group">
    <img 
      :src="imageUrl" 
      :alt="persona.title" 
      class="w-full h-full object-contain animate-float mix-blend-multiply" 
    />
  </div>
</template>

<style scoped>
@keyframes float { 
  0%, 100% { transform: translateY(0); } 
  50% { transform: translateY(-20px); } 
}
.animate-float { animation: float 5s ease-in-out infinite; }
</style>
