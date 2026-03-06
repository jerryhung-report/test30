<script setup lang="ts">
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
      <div class="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full">
        <span class="text-sm font-bold tracking-widest uppercase">口袋投資風格分析</span>
      </div>
      <div class="space-y-10">
        <h1 class="font-black text-slate-900 leading-[1.2] text-5xl sm:text-7xl tracking-tight">
          準備好探索你的<br />
          <span class="text-[#D21118]">基金人格</span>了嗎？
        </h1>
        <div class="space-y-4">
          <p class="text-slate-800 font-bold text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
            30題測驗，完成後即可立刻獲得您的
          </p>
          <p class="text-slate-800 font-bold text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
            投資風格定位分析報告 與 適配基金
          </p>
        </div>
      </div>
      <button 
        type="button"
        @click="handleStartClick" 
        class="bg-[#D21118] text-white px-24 py-5 text-xl sm:text-2xl font-bold rounded-full shadow-lg hover:bg-[#b00e14] transition-all group flex items-center justify-center mx-auto mt-16"
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
