<template>
  <div>
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-white p-4">
          <div class="max-w-md w-full bg-red-50 border border-red-200 rounded-xl p-6 text-red-900 space-y-4">
            <h1 class="text-xl font-bold flex items-center gap-2">
              ⚠️ 應用程式發生錯誤
            </h1>
            <pre class="bg-white p-4 rounded-lg text-xs overflow-auto max-h-60 border border-red-100">{{ error }}</pre>
            <button 
              @click="error.value = null"
              class="w-full py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              重試
            </button>
          </div>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
