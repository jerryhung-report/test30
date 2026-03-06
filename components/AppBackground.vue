<template>
  <div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#EBF4FA]">
    <!-- Decorative Circles -->
    <div class="absolute top-[-30%] left-[-20%] w-[90vw] h-[90vw] min-w-[800px] min-h-[800px] rounded-full bg-white/40" />
    <div class="absolute bottom-[-40%] right-[-20%] w-[110vw] h-[110vw] min-w-[1000px] min-h-[1000px] rounded-full bg-white/40" />
    <div class="absolute top-[10%] right-[-10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] rounded-full bg-white/50" />
    <div class="absolute bottom-[20%] left-[-10%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] rounded-full bg-white/30" />

    <!-- 閃閃 -->
    <img 
      src="https://www.cmoneyfund.com.tw/api/v1.0/File/Download/e8b694d7-c020-4a76-ba81-ae4ebaf183f0" 
      alt="閃閃" 
      class="hidden xl:block absolute bottom-[10%] left-[2%] w-[150px] sm:w-[200px] md:w-[280px] object-contain animate-float"
    />
    
    <!-- 太空袋袋 -->
    <img 
      src="https://www.cmoneyfund.com.tw/api/v1.0/File/Download/c76bc90c-f17b-4398-9a52-289738c40038" 
      alt="太空袋袋" 
      class="hidden xl:block absolute top-[5%] right-[-2%] w-[180px] sm:w-[240px] md:w-[320px] object-contain animate-float"
      style="animation-delay: 1.5s;"
    />
  </div>
</template>
