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
            Graduado em Análise e Desenvolvimento de Sistemas (Universidade Unicesumar - Maringá), e graduando em Segurança da informação (Universidade de Marilía Unimar).<br>
            Tenho pós-graduação em Desenvolvimento Web (Faculdade Imes), pós-graduação em Desenvolvimento Front-end (Universidade Anhaguera) e pós-graduação em marketing digital (Faculdade Metropolitana - Ribeirão Preto).<br>  
            Profissional com mais de 5 anos de experiência em desenvolvimento de software, atuando como Full Stack Developer no centro universitário Unifafibe e como Front-end Freelancer na WA Esquadrilhas Ji-Paraná Rondonia.<br>  

            Principais competências técnicas:<br>
            - Front-end: HTML5, CSS3/SASS, JavaScript, React, Vue.js (versões 2 e 3), Quasar, DaisyUI, TailwindCSS, Vuex, Pinia, Bootstrap, Bulma.<br> 
            - Back-end: PHP, integração com bancos de dados MySQL e Oracle.<br> 
            - Experiência em projetos completos, desde a concepção da interface até a implementação de soluções robustas no back-end.<br>  

            Diferenciais:<br>  
            - Capacidade de atuar em diferentes etapas do ciclo de desenvolvimento.<br>  
            - Experiência tanto em ambiente corporativo quanto em projetos independentes.<br>  
            - Foco em qualidade de código, performance e boas práticas de desenvolvimento.<br>  
          </p>

          
          <div class="skills-group" v-for="(cat, idx) in categories" :key="cat.title">
            <!-- <button class="skills-group__header" type="button" @click="toggleCategory(idx)">
              <div class="skills-group__left">
                <i v-if="cat.icon" :class="cat.icon" aria-hidden="true"></i>
                <span class="skills-group__title">{{ cat.title }}</span>
              </div>

              <i class="ri-arrow-down-s-line skills-group__chev" :class="{ 'is-open': cat.open }" aria-hidden="true"></i>
            </button> -->

            <div class="skills-group__content" v-show="cat.open">
              <div class="skills-grid">
                <article class="skill-card" v-for="tech in cat.items" :key="tech.name">
                  <span v-if="tech.featured" class="skill-card__star" aria-hidden="true">★</span>
                  <div class="skill-card__icon">
                    <img :src="tech.icon" :alt="tech.name" />
                  </div>
                  <div class="skill-card__name">{{ tech.name }}</div>
                </article>
              </div>
            </div>
          </div>


        </div>

        <div class="skills-banner has-before"></div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import skillsBg from '../assets/images/skills-bg.png'

import { computed, ref } from "vue";

type Tech = {
  name: string;
  icon: string; // caminho da imagem (png/svg) em /src/assets/tech/
  featured?: boolean; // estrela
};

type Category = {
  title: string;
  icon?: string; // classe de ícone (remixicon, etc) opcional
  open?: boolean;
  items: Tech[];
};

const categories = ref<Category[]>([
  {
    title: "Frontend",
    icon: "ri-computer-line",
    open: true,
    items: [
      { name: "VueJS", icon: new URL("../assets/images/logo-skills/vuejs-original.svg", import.meta.url).href, featured: false },
      { name: "Quasar", icon: new URL("../assets/images/logo-skills/quasar.png", import.meta.url).href, featured: false },
      { name: "Pinia", icon: new URL("../assets/images/logo-skills/pinia.png", import.meta.url).href, featured: false },
      { name: "DaisyUI", icon: new URL("../assets/images/logo-skills/daisyUI.png", import.meta.url).href, featured: false },
      { name: "Tailwind", icon: new URL("../assets/images/logo-skills/tailwind.png", import.meta.url).href, featured: true },
      
      { name: "HTML5", icon: new URL("../assets/images/logo-skills/html5-original.svg", import.meta.url).href, featured: true },
      { name: "CSS3", icon: new URL("../assets/images/logo-skills/css3-original.svg", import.meta.url).href, featured: true },
      { name: "JavaScript", icon: new URL("../assets/images/logo-skills/javascript-plain.svg", import.meta.url).href, featured: true },
      { name: "TypeScript", icon: new URL("../assets/images/logo-skills/Typescript.png", import.meta.url).href, featured: true },
      { name: "ReactJS", icon: new URL("../assets/images/logo-skills/react-original.svg", import.meta.url).href },
      
      { name: "Bootstrap", icon: new URL("../assets/images/logo-skills/bootstrap.png", import.meta.url).href, featured: true },
      { name: "jQuery", icon: new URL("../assets/images/logo-skills/jquery.svg", import.meta.url).href, featured: true },
      { name: "Gulp", icon: new URL("../assets/images/logo-skills/gulp-js-icon.webp", import.meta.url).href, featured: true },
      { name: "Webpack", icon: new URL("../assets/images/logo-skills/webpack-icon.webp", import.meta.url).href, featured: true },
      { name: "PHP", icon: new URL("../assets/images/logo-skills/phpIcon.png", import.meta.url).href, featured: true },
      { name: "Mysql", icon: new URL("../assets/images/logo-skills/mysql.webp", import.meta.url).href, featured: true },
      { name: "Oracle", icon: new URL("../assets/images/logo-skills/oracle.png", import.meta.url).href, featured: true },
    ],
  },
]);

function toggleCategory(idx: number) {
  categories.value[idx].open = !categories.value[idx].open;
}

const opened = computed(() => categories.value.filter(c => c.open));
</script>

<style scoped>
/* Área */
.skills-cards {
  margin-top: 24px;
}

/* Card de categoria (Frontend) */
.skills-group {
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

/* Header do grupo */
.skills-group__header {
  width: 100%;
  background: transparent;
  border: 0;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  cursor: pointer;
}

.skills-group__left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.skills-group__left i {
  font-size: 18px;
  color: var(--primary);
}

.skills-group__title {
  font-weight: 800;
  font-size: 14px;
  letter-spacing: .3px;
}

.skills-group__chev {
  font-size: 22px;
  opacity: .85;
  transform: rotate(0deg);
  transition: transform .2s ease;
}
.skills-group__chev.is-open {
  transform: rotate(180deg);
}

/* Conteúdo */
.skills-group__content {
  padding: 16px 18px 18px;
}

/* GRID: menos colunas, mais respiro */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

@media (max-width: 1100px) {
  .skills-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
@media (max-width: 780px) {
  .skills-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* Card Tech */
.skill-card {
  position: relative;
  border-radius: 16px;
  padding: 14px 12px;
  min-height: 110px;
  display: grid;
  place-items: center;
  gap: 10px;

  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--surface) 92%, transparent),
    color-mix(in srgb, var(--surface) 78%, transparent)
  );
  border: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
  box-shadow: 0 10px 24px rgba(0,0,0,.10);

  transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--primary) 40%, var(--border));
  box-shadow: 0 14px 30px rgba(0,0,0,.14);
}

/* Estrela */
.skill-card__star {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 12px;
  line-height: 1;
  color: #ffd15a;
  text-shadow: 0 4px 14px rgba(255, 209, 90, .35);
}

/* Ícone */
.skill-card__icon {
  width: 120px;
  height: 120px;
  border-radius: 14px;
  display: grid;
  place-items: center;

  background: color-mix(in srgb, var(--bg) 50%, transparent);
  border: 1px solid color-mix(in srgb, var(--border) 60%, transparent);
}

.skill-card__icon img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

/* Nome */
.skill-card__name {
  font-weight: 700;
  font-size: 12px;
  color: var(--text);
  opacity: .92;
  text-align: center;
}

/* Pequena legenda opcional */
.skill-card__meta {
  font-size: 11px;
  color: var(--muted);
}

/* Melhor no dark */
:global(html.dark) .skill-card {
  box-shadow: 0 16px 36px rgba(0,0,0,.35);
}
</style>


