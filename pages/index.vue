<script setup lang="ts">

import type { UserFormData, Persona } from '~/types';

const step = ref<"intro" | "form" | "quiz" | "results" | "cart">("intro");
const formData = ref<UserFormData>({ gender: "", age: "", phone: "", email: "", allocation: "" });
const persona = ref<Persona>(PERSONAS[0]!);
const selectedFunds = ref<string[]>([]);

const P1 = 210; // Max score

// URL State Sync
onMounted(() => {
  const route = useRoute();
  const s = route.query.step as any;
  if (s && ["intro", "form", "quiz", "results", "cart"].includes(s)) {
    step.value = s;
  }
  
  const savedForm = localStorage.getItem('pocket_form');
  if (savedForm) formData.value = JSON.parse(savedForm);
});

watch(step, (newStep) => {
  const router = useRouter();
  router.replace({ query: { ...useRoute().query, step: newStep } });
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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
</script>

<template>
  <div class="min-h-screen font-sans text-slate-900 relative">
    <AppBackground />
    <nav class="sticky top-0 z-[60] bg-white/60 backdrop-blur-xl border-b border-white/20 py-4 px-6 sm:px-10">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center gap-3 cursor-pointer group" @click="step = 'intro'">
          <div class="flex items-center bg-[#D21118] text-white px-3 py-1.5 rounded-full shadow-md group-hover:shadow-lg transition-all">
            <span class="font-black text-sm tracking-tighter">CMoneyFund</span>
          </div>
          <div class="h-4 w-[1px] bg-slate-300 mx-1" />
          <span class="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
            基金<span class="text-[#D21118]">人格測驗</span>
          </span>
        </div>
      </div>
    </nav>

    <main>
      <Intro v-if="step === 'intro'" @start="step = 'form'" />
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
        @continue="step = 'cart'" 
      />
      <Cart 
        v-else-if="step === 'cart'" 
        :persona="persona" 
        :selected="selectedFunds" 
        @toggle="toggleFund"
        @reset="resetAnalysis"
      />
    </main>

    <footer class="py-12 px-6 text-center border-t border-white/20 bg-white/20 backdrop-blur-md">
      <div class="max-w-4xl mx-auto">
        <p class="text-[14px] text-[#000000] font-normal leading-relaxed">
          結果純屬趣味性質，僅供參考，不構成任何投資分析意見或推介建議。本公司/本遊戲不保證預測之準確性，過往績效亦不代表未來結果。本資訊不作為評估投資人風險屬性、承受度或商品風險分級之依據。投資必有風險，投資人應獨立判斷並自負盈虧。 交易前請務必詳閱各投資產品揭露內容與說明文件，並評估自身財務狀況。
        </p>
      </div>
    </footer>
  </div>
</template>
