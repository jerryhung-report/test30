<script setup lang="ts">
import type { Persona } from '~/types';

defineProps<{
  persona: Persona;
}>();

defineEmits<{
  (e: 'continue'): void;
}>();
</script>

<template>
  <div class="max-w-5xl mx-auto py-12 px-6 animate-fadeIn space-y-12">
    <div class="bg-white text-[#757575] rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-20 relative overflow-hidden shadow-2xl border border-slate-100">
      <div class="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div class="space-y-10 flex-1 text-center md:text-left">
          <div class="space-y-4">
            <span class="text-sm font-black text-[#D21118] tracking-[0.4em] uppercase border-b-2 border-[#D21118]/50 pb-2 inline-block">投資風格分析報告</span>
            <h2 class="font-black tracking-tighter leading-none text-5xl sm:text-7xl">{{ persona.title }}</h2>
          </div>
          <p class="text-lg sm:text-2xl text-[#757575] leading-relaxed font-medium">{{ persona.desc }}</p>
        </div>
        <AICharacterImage :persona="persona" />
      </div>
    </div>
    <button 
      @click="$emit('continue')"
      class="bg-[#D21118] text-white w-full py-6 text-xl font-bold rounded-2xl hover:bg-[#b00e14] shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3"
    >
      查詢個人化最適基金
    </button>
  </div>
</template>

<style scoped>
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
</style>
