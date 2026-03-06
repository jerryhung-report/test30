<script setup lang="ts">
import { Loader2, KeyRound } from 'lucide-vue-next';
import type { Persona } from '~/types';

const props = defineProps<{
  persona: Persona;
}>();

const DEFAULT_IMAGE = "https://placehold.co/400x400/png?text=Pocket+Dog";
const imageUrl = ref<string | null>(null);
const loading = ref(true);
const hasKey = ref(true);

const generateImage = async () => {
  loading.value = true;
  hasKey.value = true; // Reset state before trying
  try {
    const breed = props.persona.title.replace("口袋", "");
    const response = await $fetch<any>('/api/generate-image', {
      method: 'POST',
      body: { breed, personaTitle: props.persona.title }
    });

    if (response.error) {
      console.error("AI Image Generation error:", response.error);
      if (response.error === "API Key missing") {
        hasKey.value = false;
      }
      imageUrl.value = DEFAULT_IMAGE;
    } else if (response.imageUrl) {
      imageUrl.value = response.imageUrl;
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

const selectKey = async () => {
  if ((window as any).aistudio && (window as any).aistudio.openSelectKey) {
    await (window as any).aistudio.openSelectKey();
    hasKey.value = true;
    generateImage();
  } else {
    alert("API Key selection is not available in this environment.");
  }
};

onMounted(async () => {
  // Check if key is already selected if possible
  if ((window as any).aistudio && (window as any).aistudio.hasSelectedApiKey) {
    const selected = await (window as any).aistudio.hasSelectedApiKey();
    if (!selected) {
      hasKey.value = false;
      loading.value = false;
      return;
    }
  }
  generateImage();
});

watch(() => props.persona.title, () => {
  generateImage();
});
</script>

<template>
  <div class="w-full max-w-[350px] aspect-square flex items-center justify-center relative bg-white rounded-[3rem] border border-slate-100 shadow-inner overflow-hidden group">
    <div v-if="loading" class="flex flex-col items-center gap-4">
      <Loader2 class="w-12 h-12 text-[#D21118] animate-spin" />
      <span class="text-xs font-black text-slate-400 uppercase tracking-widest">AI 畫像生成中...</span>
    </div>
    <div v-else-if="!hasKey" class="flex flex-col items-center gap-4 p-6 text-center">
      <KeyRound class="w-12 h-12 text-slate-300" />
      <p class="text-sm text-slate-500 font-bold">需要連結 Google Gemini API</p>
      <button 
        @click="selectKey"
        class="px-6 py-2 bg-[#D21118] text-white rounded-full text-xs font-bold hover:bg-[#b00e14] transition-colors shadow-lg shadow-red-500/20"
      >
        連結 API Key
      </button>
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
