<script setup lang="ts">
import { Phone, Mail } from 'lucide-vue-next';
import type { UserFormData } from '~/types';

const props = defineProps<{
  data: UserFormData;
}>();

const emit = defineEmits<{
  (e: 'change', d: UserFormData): void;
  (e: 'next'): void;
}>();

onMounted(() => {
  console.log("InfoForm mounted");
});

const isFormValid = computed(() => !!(props.data.gender && props.data.age && props.data.phone && props.data.email));
const activeClass = "bg-[#D21118] text-white shadow-xl";
const inactiveClass = "bg-[#F8FAFC] text-[#94A3B8] hover:bg-slate-50";

const updateData = (newData: Partial<UserFormData>) => {
  emit('change', { ...props.data, ...newData });
};
</script>

<template>
  <div class="max-w-xl mx-auto py-12 px-6">
    <div class="bg-white rounded-[3.5rem] p-10 sm:p-14 shadow-2xl shadow-slate-200 border border-slate-50 space-y-12">
      <div class="space-y-10">
        <div class="space-y-4">
          <label class="text-sm font-bold text-slate-400 px-1">性別</label>
          <div class="flex gap-4">
            <button
              v-for="g in ['男', '女']"
              :key="g"
              @click="updateData({ gender: g })"
              class="flex-1 py-5 rounded-2xl font-black text-lg transition-all duration-300"
              :class="data.gender === g ? activeClass : inactiveClass"
            >
              {{ g }}
            </button>
          </div>
        </div>
        <div class="space-y-4">
          <label class="text-sm font-bold text-slate-400 px-1">年齡層</label>
          <div class="grid grid-cols-3 gap-4">
            <button
              v-for="a in ['18-30歲', '31-40歲', '41-50歲']"
              :key="a"
              @click="updateData({ age: a })"
              class="py-5 rounded-2xl font-black text-sm transition-all duration-300"
              :class="data.age === a ? activeClass : inactiveClass"
            >
              {{ a }}
            </button>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <button
              v-for="a in ['51-60歲', '61歲以上']"
              :key="a"
              @click="updateData({ age: a })"
              class="py-5 rounded-2xl font-black text-sm transition-all duration-300"
              :class="data.age === a ? activeClass : inactiveClass"
            >
              {{ a }}
            </button>
          </div>
        </div>
        <div class="h-px bg-slate-100 w-full" />
        <div class="space-y-5">
          <div class="relative group">
            <Phone class="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D21118] transition-colors" :size="20" />
            <input 
              type="tel" 
              class="w-full pl-16 pr-8 py-5 bg-[#F8FAFC] rounded-3xl font-bold text-slate-600 outline-none border-2 border-transparent focus:border-slate-100 transition-all placeholder:text-slate-300"
              :value="data.phone"
              @input="e => updateData({ phone: (e.target as HTMLInputElement).value })"
              placeholder="手機號碼"
            />
          </div>
          <div class="relative group">
            <Mail class="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D21118] transition-colors" :size="20" />
            <input 
              type="email" 
              class="w-full pl-16 pr-8 py-5 bg-[#F8FAFC] rounded-3xl font-bold text-slate-600 outline-none border-2 border-transparent focus:border-slate-100 transition-all placeholder:text-slate-300"
              :value="data.email"
              @input="e => updateData({ email: (e.target as HTMLInputElement).value })"
              placeholder="電子郵件"
            />
          </div>
        </div>
      </div>
      <button 
        @click="$emit('next')" 
        :disabled="!isFormValid"
        class="w-full py-6 rounded-[2rem] text-xl font-bold flex items-center justify-center gap-3 transition-all duration-500 shadow-lg"
        :class="isFormValid ? 'bg-[#D21118] text-white hover:bg-[#b00e14] shadow-[#D21118]/20' : 'bg-[#F8FAFC] text-slate-300'"
      >
        進入測驗階段
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
</style>
