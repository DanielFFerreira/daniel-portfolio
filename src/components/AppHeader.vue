<template>
  <header class="header" :class="{ active: isHeaderActive }" data-header>
    <div class="container">
      <RouterLink to="/" class="logo">Daniel Ferreira</RouterLink>

      <nav class="navbar" :class="{ active: isNavOpen }" data-navbar>
        <ul class="navbar-list">
          <li><RouterLink to="/" class="navbar-link" @click="closeNav">Home</RouterLink></li>
          <li><RouterLink to="/portfolio" class="navbar-link" @click="closeNav">Projetos</RouterLink></li>
          <li><RouterLink to="/skills" class="navbar-link" @click="closeNav">Habilidades</RouterLink></li>
          <li><RouterLink to="/timeline" class="navbar-link" @click="closeNav">Experiências</RouterLink></li>
          <!-- <li><RouterLink to="/pricing" class="navbar-link" @click="closeNav">Price</RouterLink></li> -->
          <!-- <li><RouterLink to="/news" class="navbar-link" @click="closeNav">News</RouterLink></li> -->
          <!-- <li><RouterLink to="/curriculo" class="navbar-link" @click="closeNav">Curriculo</RouterLink></li> -->
        </ul>
      </nav>

      <button class="theme-toggle" type="button" aria-label="Alternar tema" @click="toggleTheme">
        <i v-if="theme === 'dark'" class="ri-sun-line" aria-hidden="true"></i>
        <i v-else class="ri-moon-line" aria-hidden="true"></i>
      </button>


      <button
        class="nav-toggle-btn"
        aria-label="toggle menu"
        :class="{ active: isNavOpen }"
        @click="toggleNav"
        data-nav-toggler
      >
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, toggle: toggleTheme } = useTheme()  // ✅ AQUI

const isNavOpen = ref(false)
const isHeaderActive = ref(false)

function toggleNav() {
  isNavOpen.value = !isNavOpen.value
}

function closeNav() {
  isNavOpen.value = false
}

function onScroll() {
  isHeaderActive.value = window.scrollY > 100
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

