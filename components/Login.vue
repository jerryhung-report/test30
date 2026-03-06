<script setup lang="ts">
import { ref, computed } from 'vue';
import { Eye, EyeOff, RefreshCw, Volume2 } from 'lucide-vue-next';

const emit = defineEmits<{
  (e: 'success'): void;
}>();

const idNumber = ref('');
const userCode = ref('');
const password = ref('');
const captcha = ref('');
const rememberId = ref(false);
const rememberUserCode = ref(false);

const showUserCode = ref(false);
const showPassword = ref(false);

const isFormValid = computed(() => {
  return idNumber.value.trim() !== '' && 
         userCode.value.trim() !== '' && 
         password.value.trim() !== '' && 
         captcha.value.trim() !== '';
});

const handleLogin = () => {
  // Simulate login success
  emit('success');
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div class="max-w-3xl mx-auto py-12 px-4 sm:px-6 animate-fadeIn">
    <div class="bg-white rounded-[2rem] p-8 sm:p-16 shadow-2xl border border-slate-100">
      <h2 class="text-4xl sm:text-5xl font-black text-center mb-12 text-slate-900">登入</h2>
      
      <form @submit.prevent="handleLogin" class="space-y-6 sm:space-y-8 max-w-2xl mx-auto">
        <!-- ID Number -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
          <label class="font-bold text-slate-800 sm:w-32 shrink-0 text-lg">身分證字號</label>
          <div class="relative flex-1">
            <input 
              v-model="idNumber"
              type="text" 
              placeholder="請輸入身分證字號"
              class="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D21118] focus:ring-1 focus:ring-[#D21118] transition-all text-lg"
            />
          </div>
        </div>

        <!-- User Code -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
          <label class="font-bold text-slate-800 sm:w-32 shrink-0 text-lg">使用者代碼</label>
          <div class="relative flex-1">
            <input 
              v-model="userCode"
              :type="showUserCode ? 'text' : 'password'" 
              placeholder="請輸入使用者代碼"
              class="w-full border border-slate-200 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-[#D21118] focus:ring-1 focus:ring-[#D21118] transition-all text-lg"
            />
            <button 
              type="button"
              @click="showUserCode = !showUserCode"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <Eye v-if="showUserCode" :size="20" />
              <EyeOff v-else :size="20" />
            </button>
          </div>
        </div>

        <!-- Password -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
          <label class="font-bold text-slate-800 sm:w-32 shrink-0 text-lg">密碼</label>
          <div class="relative flex-1">
            <input 
              v-model="password"
              :type="showPassword ? 'text' : 'password'" 
              placeholder="請輸入密碼"
              class="w-full border border-slate-200 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-[#D21118] focus:ring-1 focus:ring-[#D21118] transition-all text-lg"
            />
            <button 
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <Eye v-if="showPassword" :size="20" />
              <EyeOff v-else :size="20" />
            </button>
          </div>
        </div>

        <!-- Captcha -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
          <label class="font-bold text-slate-800 sm:w-32 shrink-0 text-lg">圖形驗證碼</label>
          <div class="flex flex-col sm:flex-row flex-1 gap-2">
            <input 
              v-model="captcha"
              type="text" 
              placeholder="輸入圖形驗證碼"
              class="w-full sm:flex-1 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D21118] focus:ring-1 focus:ring-[#D21118] transition-all text-lg"
            />
            <div class="flex items-center gap-2">
              <div class="h-[52px] w-28 bg-slate-300 rounded-xl flex items-center justify-center font-bold text-xl tracking-widest shrink-0 overflow-hidden relative">
                 <span class="text-black z-10">3</span>
                 <span class="text-black z-10 ml-1">4</span>
                 <span class="text-black z-10 ml-1">4</span>
                 <span class="text-black z-10 ml-1">4</span>
                 <span class="text-black z-10 ml-1">4</span>
                 <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 4px 4px;"></div>
                 <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(45deg, transparent 45%, #000 45%, #000 55%, transparent 55%); background-size: 20px 20px;"></div>
              </div>
              <button type="button" class="h-[52px] w-[52px] bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors shrink-0">
                <RefreshCw :size="20" />
              </button>
              <button type="button" class="h-[52px] w-[52px] bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors shrink-0">
                <Volume2 :size="20" />
              </button>
            </div>
          </div>
        </div>

        <!-- Options -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
          <div class="flex flex-wrap items-center gap-4 sm:gap-6">
            <label class="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                v-model="rememberId"
                class="w-5 h-5 rounded border-slate-300 text-slate-800 focus:ring-slate-800 accent-slate-800"
              />
              <span class="text-slate-700 font-medium">記住身分證字號</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                v-model="rememberUserCode"
                class="w-5 h-5 rounded border-slate-300 text-slate-800 focus:ring-slate-800 accent-slate-800"
              />
              <span class="text-slate-700 font-medium">記住使用者代碼</span>
            </label>
          </div>
          <a 
            href="https://dev-fund.cmoneyfund.com.tw/login/change-user-credentials" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-700 hover:text-[#D21118] font-medium transition-colors"
          >
            <span class="underline underline-offset-4">忘記使用者代碼或密碼</span>
          </a>
        </div>

        <!-- Login Button -->
        <button 
          type="submit"
          :disabled="!isFormValid"
          :class="[
            'w-full py-4 rounded-xl font-bold text-xl transition-colors mt-8',
            isFormValid 
              ? 'bg-[#E21E28] text-[#FFFFFF] hover:bg-[#b00e14]' 
              : 'bg-[#2626260F] text-[#BFBFBF] cursor-not-allowed'
          ]"
        >
          登入
        </button>

        <!-- Divider -->
        <div class="relative flex items-center py-6">
          <div class="flex-grow border-t border-slate-200"></div>
          <span class="flex-shrink-0 mx-4 text-slate-500 font-medium">還沒開戶？</span>
          <div class="flex-grow border-t border-slate-200"></div>
        </div>

        <!-- Register Button -->
        <a 
          href="https://dev-fund.cmoneyfund.com.tw/account-opening"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full bg-white text-[#D21118] border border-[#D21118] py-4 rounded-xl font-bold text-xl hover:bg-red-50 transition-colors flex items-center justify-center"
        >
          立即開戶
        </a>
      </form>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
</style>
