<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initTheme } from './composables/useTheme'

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

onMounted(() => {
  initTheme()
})
</script>
