<script setup lang="ts">
import { Globe, Satellite, ShoppingCart, RotateCcw } from 'lucide-vue-next';
import { FUND_MAPPING, MOCK_FUNDS, ETF_LINKS } from '~/utils/constants';

import type { Persona } from '~/types';

const props = defineProps<{
  persona: Persona;
  selected: string[];
}>();

const emit = defineEmits<{
  (e: 'toggle', code: string): void;
  (e: 'reset'): void;
}>();

const mapping = computed(() => FUND_MAPPING[props.persona.title] || { core: [], sat: [], etf: "" });
const coreFunds = computed(() => MOCK_FUNDS.filter(f => mapping.value.core.includes(f.code)));
const satelliteFunds = computed(() => [
  ...MOCK_FUNDS.filter(f => mapping.value.sat.includes(f.code)),
  ...MOCK_FUNDS.filter(f => f.code === mapping.value.etf)
]);

const openSubscription = () => {
  window.open("https://my.cmoneyfund.com.tw/", "_blank");
};
</script>

<template>
  <div class="max-w-5xl mx-auto py-12 px-6 animate-fadeIn space-y-20 pb-64 sm:pb-48">
    <div class="text-center space-y-12">
      <h2 class="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
        針對 <span class="text-[#D21118]">{{ persona.title }}</span> 性格，<br class="sm:hidden" />適合買什麼？
      </h2>
      <div class="flex flex-col items-center gap-10">
        <span class="text-[12px] text-slate-400 font-black uppercase tracking-[0.2em] bg-slate-100/50 px-6 py-2.5 rounded-full border border-slate-100 shadow-sm">績效截止日：2024/12/31</span>
      </div>
    </div>

    <div class="space-y-24">
      <div class="space-y-8">
        <div class="flex items-center gap-4 px-2 border-b border-slate-200 pb-4">
          <Globe :size="32" class="text-[#D21118]" />
          <h3 class="text-3xl font-black text-slate-900">核心配置</h3>
        </div>
        <div class="flex flex-col gap-8">
          <FundCard 
            v-for="f in coreFunds"
            :key="f.code" 
            :fund="f" 
            :is-selected="selected.includes(f.code)" 
            @toggle="$emit('toggle', f.code)" 
          />
        </div>
      </div>

      <div class="space-y-8">
        <div class="flex items-center gap-4 px-2 border-b border-slate-200 pb-4">
          <Satellite :size="32" class="text-slate-900" />
          <h3 class="text-3xl font-black text-slate-900">衛星配置</h3>
        </div>
        <div class="flex flex-col gap-8">
          <FundCard 
            v-for="f in satelliteFunds"
            :key="f.code" 
            :fund="f" 
            :is-selected="selected.includes(f.code)" 
            @toggle="$emit('toggle', f.code)" 
            :external-link="f.code === mapping.etf ? ETF_LINKS[f.code] : undefined"
            :is-selectable="f.code !== mapping.etf"
            :show-performance="f.code !== mapping.etf"
          />
        </div>
      </div>
    </div>

    <div class="fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 px-4">
      <div class="max-w-4xl mx-auto bg-[#E8E9EC]/95 backdrop-blur-xl text-slate-900 py-3 sm:py-6 px-5 sm:px-8 rounded-[2rem] sm:rounded-[3rem] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-8 border border-white/50">
        <div class="flex items-center gap-4 sm:gap-8 w-full sm:w-auto">
          <div class="relative p-2.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm">
            <ShoppingCart :size="20" class="text-[#D21118] sm:w-7 sm:h-7" />
            <span class="absolute -top-1 -right-1 bg-[#D21118] w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-black text-white">{{ selected.length }}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-lg sm:text-2xl font-black leading-none">{{ selected.length }} 檔基金</span>
          </div>
        </div>
        <div class="flex gap-2 sm:gap-4 w-full">
          <button 
            @click="$emit('reset')"
            class="px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black bg-[#59657F] hover:bg-[#475065] text-white text-[11px] sm:text-sm flex-1 flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#59657F]/20"
          >
            <RotateCcw :size="14" class="sm:w-4 sm:h-4" /> 重新分析
          </button>
          <button 
            @click="openSubscription"
            class="px-6 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black bg-[#D21118] text-white hover:bg-[#b00e14] text-[11px] sm:text-sm flex-1 flex items-center justify-center gap-2 shadow-lg shadow-[#D21118]/20 transition-all"
          >
            立即申購
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
</style>
