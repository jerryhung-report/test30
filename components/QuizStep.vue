<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { QUESTIONS } from '~/utils/constants';

const router = useRouter();
const route = useRoute();

const emit = defineEmits<{
  (e: 'complete', ans: Record<number, number>): void;
}>();

const allQuestions = computed(() => {
  const q2 = QUESTIONS.type2 || [];
  const q3 = QUESTIONS.type3 || [];
  const q4 = QUESTIONS.type4 || [];
  return [...q2, ...q3, ...q4];
});
const index = ref(0);
const answers = ref<Record<number, number>>({});
const isTransitioning = ref(false);

const currentQ = computed(() => allQuestions.value[index.value] || allQuestions.value[0]);

onMounted(() => {
  const stepQuery = route.query.step as string;
  if (stepQuery && stepQuery.startsWith('quiz')) {
    if (stepQuery === 'quiz19-1') {
      index.value = 18;
      isTransitioning.value = true;
    } else {
      const qNum = parseInt(stepQuery.replace('quiz', ''));
      if (!isNaN(qNum) && qNum > 0 && qNum <= allQuestions.value.length) {
        index.value = qNum - 1;
      }
    }
  }
  
  if (route.query.step === 'quiz') {
    router.replace({ query: { ...route.query, step: 'quiz1' } });
  }
});

watch(isTransitioning, (newVal) => {
  if (newVal) {
    router.push({ query: { ...route.query, step: 'quiz19-1' } });
  }
});

watch(index, (newIndex) => {
  if (!isTransitioning.value) {
    router.push({ query: { ...route.query, step: 'quiz' + (newIndex + 1) } });
  }
});

const handleNext = () => {
  if (index.value === 18) {
    isTransitioning.value = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (index.value === allQuestions.value.length - 1) {
    emit('complete', answers.value);
  } else {
    index.value++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const handleAnswer = (val: number) => {
  if (!currentQ.value) return;
  answers.value[currentQ.value.id] = val;
  handleNext();
};

const continueToTree = () => {
  isTransitioning.value = false;
  index.value++;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const isAnswered = computed(() => {
  if (!currentQ.value) return false;
  return answers.value[currentQ.value.id] !== undefined;
});
</script>

<template>
  <div class="max-w-2xl mx-auto py-12 px-6 animate-fadeIn">
    <template v-if="isTransitioning">
      <div class="bg-white border border-slate-100 rounded-[3rem] p-10 sm:p-14 shadow-2xl shadow-slate-200 text-center space-y-12">
        <div class="space-y-6">
          <div class="w-48 h-48 mx-auto flex items-center justify-center">
            <img src="https://www.cmoneyfund.com.tw/api/v1.0/File/Download/4a97d8b1-dcd4-4f4b-8089-9d2a2dce35ef" alt="開始種樹" class="w-full h-full object-contain animate-pulse" />
          </div>
          <h2 class="text-4xl font-black text-slate-900">太棒了！你已經完成一半</h2>
          <p class="text-slate-400 font-medium text-xl">
            現在要前往宇宙種樹囉~
          </p>
        </div>
        <button 
          @click="continueToTree"
          class="bg-[#D21118] text-white px-14 py-5 text-xl w-full sm:w-auto font-bold rounded-2xl hover:bg-[#b00e14] shadow-lg shadow-[#D21118]/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mx-auto"
        >
          開始種樹
        </button>
      </div>
    </template>
    <template v-else-if="currentQ">
      <ProgressBar :current="index + 1" :total="allQuestions.length" />
      <div class="bg-white border border-slate-100 rounded-[3rem] p-10 sm:p-14 shadow-2xl shadow-slate-200 text-center space-y-12 min-h-[450px] flex flex-col justify-center">
        <div class="space-y-4">
          <span class="text-[11px] font-black text-[#D21118] tracking-widest bg-[#D21118]/5 px-5 py-2 rounded-full uppercase inline-block">
            第 {{ index + 1 }} 題
          </span>
          <h3 class="text-2xl sm:text-3xl font-black text-slate-900 leading-[1.3]">
            {{ currentQ.text || currentQ.q }}
          </h3>
        </div>
        
        <div class="space-y-4 pt-4">
          <div v-if="currentQ.type === 'range'" class="space-y-8">
            <div class="flex justify-between gap-1 sm:gap-3">
              <button
                v-for="v in [1, 2, 3, 4, 5, 6, 7]"
                :key="v"
                @click="handleAnswer(v)"
                class="flex-1 aspect-square sm:h-14 sm:w-14 rounded-2xl font-black text-sm sm:text-lg transition-all"
                :class="answers[currentQ.id] === v ? 'bg-[#D21118] text-white shadow-xl' : 'bg-slate-50 text-slate-400 hover:bg-[#D21118] hover:text-white'"
              >
                {{ v }}
              </button>
            </div>
            <div class="flex justify-between text-[11px] font-black text-slate-400 px-1 uppercase tracking-widest">
              <span>非常不認同</span>
              <span>非常認同</span>
            </div>
          </div>
          <div v-else-if="currentQ.type === 'bool' || currentQ.type === 'choice'" class="flex flex-col gap-4">
            <template v-if="currentQ.type === 'bool'">
              <button
                @click="handleAnswer(7)"
                class="w-full py-5 px-8 rounded-2xl font-bold text-lg text-left flex justify-between items-center group transition-all duration-300"
                :class="answers[currentQ.id] === 7 ? 'bg-[#D21118] text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-[#D21118] hover:text-white'"
              >
                是
              </button>
              <button
                @click="handleAnswer(1)"
                class="w-full py-5 px-8 rounded-2xl font-bold text-lg text-left flex justify-between items-center group transition-all duration-300"
                :class="answers[currentQ.id] === 1 ? 'bg-[#D21118] text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-[#D21118] hover:text-white'"
              >
                否
              </button>
            </template>
            <template v-else>
              <button
                v-for="opt in currentQ.options"
                :key="opt.val"
                @click="handleAnswer(opt.val)"
                class="w-full py-5 px-8 rounded-2xl font-bold text-lg text-left flex justify-between items-center group transition-all duration-300"
                :class="answers[currentQ.id] === opt.val ? 'bg-[#D21118] text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-[#D21118] hover:text-white'"
              >
                {{ opt.text }}
              </button>
            </template>
          </div>
        </div>
      </div>
      <div class="mt-8 flex items-center justify-between px-2">
        <button 
          @click="index > 0 && index--" 
          :disabled="index === 0"
          class="flex items-center gap-3 group disabled:opacity-0 transition-all"
        >
          <div class="w-8 h-8 bg-[#D21118] text-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-[#b00e14] transition-colors">
            <ChevronLeft :size="18" :stroke-width="3" />
          </div>
          <span class="text-slate-700 font-bold text-sm tracking-tight">上一題</span>
        </button>
        <button 
          v-if="isAnswered && index < allQuestions.length - 1"
          @click="handleNext"
          class="flex items-center gap-3 group transition-all"
        >
          <span class="text-slate-700 font-bold text-sm tracking-tight">下一題</span>
          <div class="w-8 h-8 bg-[#D21118] text-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-[#b00e14] transition-colors">
            <ChevronRight :size="18" :stroke-width="3" />
          </div>
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
</style>
