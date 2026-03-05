<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import type { Persona } from '~/types';

const props = defineProps<{
  persona: Persona;
}>();

const DEFAULT_IMAGE = "https://placehold.co/400x400/png?text=Pocket+Dog";
const imageUrl = ref<string | null>(null);
const loading = ref(true);

const generateImage = async () => {
  loading.value = true;
  try {
    const breed = props.persona.title.replace("口袋", "");
    const { data, error } = await useFetch('/api/generate-image', {
      method: 'POST',
      body: { breed, personaTitle: props.persona.title }
    });

    if (error.value) throw error.value;
    if (data.value?.imageUrl) {
      imageUrl.value = data.value.imageUrl;
    } else {
      imageUrl.value = DEFAULT_IMAGE;
    }
  } catch (err) {
    console.error("AI Image Generation failed:", err);
    imageUrl.value = DEFAULT_IMAGE;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  generateImage();
});

watch(() => props.persona.title, () => {
  generateImage();
});
</script>

<template>
  <div class="w-full max-w-[350px] aspect-square flex items-center justify-center relative bg-white rounded-[3rem] border border-slate-100 shadow-inner overflow-hidden">
    <div v-if="loading" class="flex flex-col items-center gap-4">
      <Loader2 class="w-12 h-12 text-[#D21118] animate-spin" />
      <span class="text-xs font-black text-slate-400 uppercase tracking-widest">AI 畫像生成中...</span>
    </div>
    <img 
      v-else
      :src="imageUrl || DEFAULT_IMAGE" 
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
