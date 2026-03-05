<script setup lang="ts">
defineProps<{
  label: string;
  val?: string;
}>();
</script>

<template>
  <div class="flex flex-col items-start gap-1 p-2 sm:p-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 flex-1 min-w-0">
    <span class="text-slate-400 text-[9px] sm:text-xs font-bold leading-none mb-1 whitespace-nowrap">{{ label }}</span>
    <span class="font-extrabold text-[12px] sm:text-lg text-[#D21118] truncate">{{ val || '--' }}</span>
  </div>
</template>
