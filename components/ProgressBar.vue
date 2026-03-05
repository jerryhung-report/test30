<script setup lang="ts">
defineProps<{
  current: number;
  total: number;
}>();
</script>

<template>
  <div class="flex flex-col items-center gap-3 w-full max-w-lg mx-auto mb-10">
    <div class="flex justify-between w-full px-1 text-[11px] font-black text-slate-400 uppercase tracking-widest">
      <span>分析進度</span>
      <span>{{ Math.round((current / total) * 100) }}%</span>
    </div>
    <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div 
        class="h-full bg-[#D21118] transition-all duration-500 ease-out"
        :style="{ width: `${(current / total) * 100}%` }"
      />
    </div>
  </div>
</template>
