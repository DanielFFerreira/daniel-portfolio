<template>
  <article>
    <section
      class="section skills has-before"
      id="skills"
      aria-label="skills"
      :style="{ backgroundImage: `url(${skillsBg})` }"
    >
      <div class="container">
        <div class="skills-content">
          <p class="section-subtitle">Minhas</p>
          <h2 class="h2 section-title">Habilidades</h2>
          <p class="section-text">
            Graduado em Análise e Desenvolvimento de Sistemas (Universidade Unicesumar), e graduando em Segurança da informação (Universidade de Marilía Unimar).
            Tenho pós-graduação em Desenvolvimento Web (Faculdade Imes) e pós-graduação em Desenvolvimento Front-end (Universidade Anhaguera).  
            Profissional com mais de 4 anos de experiência em desenvolvimento de software, atuando como Full Stack Developer no centro universitário Unifafibe e como Front-end Freelancer na WA Esquadrilhas Ji-Paraná Rondonia.  

            Principais competências técnicas:
            - Front-end: HTML5, CSS3/SASS, JavaScript, React, Vue.js (versões 2 e 3), Quasar, DaisyUI, TailwindCSS, Vuex, Pinia, Bootstrap, Bulma.  
            - Back-end: PHP, integração com bancos de dados MySQL e Oracle.  
            - Experiência em projetos completos, desde a concepção da interface até a implementação de soluções robustas no back-end.  

            Diferenciais:  
            - Capacidade de atuar em diferentes etapas do ciclo de desenvolvimento.  
            - Experiência tanto em ambiente corporativo quanto em projetos independentes.  
            - Foco em qualidade de código, performance e boas práticas de desenvolvimento.  
          </p>

          <ul class="skills-list">
            <li v-for="s in skills" :key="s.title" class="skills-item">
              <div class="wrapper">
                <h3 class="skill-title">{{ s.title }}</h3>
                <data class="skill-value" :value="`${s.value}%`">{{ s.value }}%</data>
              </div>
              <div class="progress-box">
                <div class="progress" :style="{ width: `${s.value}%` }"></div>
              </div>
            </li>
          </ul>
        </div>

        <div class="skills-banner has-before"></div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import skillsBg from '../assets/images/skills-bg.png'

type Skill = { title: string; value: number }

const skills: Skill[] = [
  { title: 'HTML & CSS', value: 95 },
  { title: 'JavaScript', value: 80 },
  { title: 'WordPress', value: 90 }
]
</script>
