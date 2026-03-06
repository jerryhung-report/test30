<script setup lang="ts">

import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { UserFormData, Persona } from '~/types';
import { PERSONAS } from '~/utils/constants';

const step = ref<"intro" | "form" | "quiz" | "results" | "login" | "cart">("intro");
const formData = ref<UserFormData>({ gender: "", age: "", phone: "", email: "", allocation: "" });
const persona = ref<Persona>(PERSONAS[0]!);
const selectedFunds = ref<string[]>([]);

const P1 = 210; // Max score

const route = useRoute();
const router = useRouter();

// URL State Sync
onMounted(() => {
  const s = route.query.step as string;
  if (s) {
    if (s.startsWith('quiz')) {
      step.value = 'quiz';
    } else if (["intro", "form", "results", "login", "cart"].includes(s)) {
      step.value = s as any;
    }
  }
  
  const savedForm = localStorage.getItem('pocket_form');
  if (savedForm) formData.value = JSON.parse(savedForm);
});

watch(step, (newStep) => {
  if (newStep !== 'quiz') {
    router.push({ query: { ...route.query, step: newStep } });
  }
});

const handleStart = () => {
  console.log("handleStart called, changing step to form");
  step.value = 'form';
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleFormChange = (d: UserFormData) => {
  formData.value = d;
  localStorage.setItem('pocket_form', JSON.stringify(d));
};

const handleQuizComplete = (answers: Record<number, number>) => {
  let total = 0;
  Object.values(answers).forEach(v => total += v);
  const index = Math.min(Math.floor(total / P1 * 10), 9);
  const p = PERSONAS[index];
  if (p) {
    persona.value = p;
    selectedFunds.value = [];
    step.value = "results";
  }
};

const toggleFund = (code: string) => {
  if (selectedFunds.value.includes(code)) {
    selectedFunds.value = selectedFunds.value.filter(c => c !== code);
  } else {
    selectedFunds.value.push(code);
  }
};

const resetAnalysis = () => {
  selectedFunds.value = [];
  step.value = "quiz";
};

const openExternalLink = () => {
  window.location.href = 'https://benevolent-sprinkles-a26554.netlify.app/';
};
</script>

<template>
  <div class="min-h-screen font-sans text-slate-900 relative">
    <AppBackground />
    <nav class="sticky top-0 z-[60] bg-white/60 backdrop-blur-xl border-b border-slate-200/50 py-1 sm:py-2 px-6 sm:px-10">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center cursor-pointer group" @click="openExternalLink">
          <img 
            src="https://www.cmoneyfund.com.tw/api/v1.0/File/Download/951c7b97-3684-4463-971f-46a9ec5f71c4" 
            alt="CMoneyFund 基金人格測驗" 
            class="h-[34px] sm:h-[45px] object-contain"
          />
        </div>
      </div>
    </nav>

    <main>
      <Intro v-if="step === 'intro'" @start="handleStart" />
      <InfoForm 
        v-else-if="step === 'form'" 
        :data="formData" 
        @change="handleFormChange" 
        @next="step = 'quiz'" 
      />
      <QuizStep v-else-if="step === 'quiz'" @complete="handleQuizComplete" />
      <Results 
        v-else-if="step === 'results'" 
        :persona="persona" 
        @continue="step = 'login'" 
      />
      <Login 
        v-else-if="step === 'login'" 
        @success="step = 'cart'" 
      />
      <Cart 
        v-else-if="step === 'cart'" 
        :persona="persona" 
        :selected="selectedFunds" 
        @toggle="toggleFund"
        @reset="resetAnalysis"
      />
    </main>

    <footer class="py-12 px-6 text-center border-t border-slate-200/50 bg-white/20 backdrop-blur-md">
      <div class="max-w-4xl mx-auto">
        <p class="text-[14px] text-slate-600 font-normal leading-relaxed">
          投資一定有風險，基金投資有賺有賠，申購前應詳閱公開說明書。過往績效亦不代表未來結果。本資訊不作為評估投資人風險屬性、承受度或商品風險分級之依據，投資人應獨立判斷並自負盈虧。
        </p>
      </div>
    </footer>
  </div>
</template>
