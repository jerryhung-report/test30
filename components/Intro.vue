<script setup lang="ts">
import { BrainCircuit } from 'lucide-vue-next';

const emit = defineEmits<{
  (e: 'start'): void;
}>();

const handleStartClick = () => {
  emit('start');
};
</script>

<template>
  <div class="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-12">
    <div class="relative z-10 max-w-4xl mx-auto text-center space-y-12 animate-fadeIn">
      <div class="inline-flex items-center gap-2 px-5 py-2 bg-[#D21118]/5 text-[#D21118] rounded-full">
        <BrainCircuit :size="14" />
        <span class="text-[11px] font-black tracking-[0.2em] uppercase">口袋投資風格分析</span>
      </div>
      <div class="space-y-10">
        <h1 class="font-black text-slate-900 leading-[1.2] text-5xl sm:text-7xl tracking-tight">
          準備好探索你的<br />
          <span class="text-[#D21118]">基金人格</span>了嗎？
        </h1>
        <div class="space-y-4">
          <p class="text-slate-600 font-normal text-xl sm:text-3xl max-w-4xl mx-auto leading-relaxed">
            30題測驗，完成後即可獲得您的
          </p>
          <p class="text-slate-600 font-normal text-xl sm:text-3xl max-w-4xl mx-auto leading-relaxed">
            投資風格分析報告與最適配基金
          </p>
        </div>
      </div>
      <button 
        type="button"
        @click.prevent="handleStartClick" 
        class="bg-[#D21118] text-white px-20 py-7 text-2xl font-black rounded-full shadow-2xl hover:opacity-90 transition-all group flex items-center gap-4 mx-auto mt-16"
      >
        啟動分析
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
</style>
