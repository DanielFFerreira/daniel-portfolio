<template>
  <article>
    <section class="section timeline" id="timeline" aria-label="timeline">
      <div class="container">
        <p class="section-subtitle">Experiências</p>
        <h2 class="h2 section-title">Profissionais</h2>

        <ul class="timeline-list">
          <li v-for="t in timeline" :key="t.period" class="timeline-item">
            <h3 class="item-period">{{ t.period }}</h3>
            <p class="item-title">{{ t.title }}</p>
            <p class="item-address">{{ t.address }}</p>
            <div>
              <p style="font-weight: 700;">Tecnologias da empresa</p>
              <p class="item-address">{{ t.technologies }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
type TimelineItem = { 
  period: string; 
  title: string; 
  address: string;
  technologies: string; 
}

const timeline: TimelineItem[] = [
  { 
    period: 'Setembro de 2021 - Atualmente', 
    title: 'Desenvolvedor web', 
    address: 'Centro Universitário Unifafibe',
    technologies: 'HTML5, CSS3, SASS, Javascript, Jquery, Gulp, Webpack, Bootstrap 4 e 5, PHP 5 e 7, Mysql, Doctrine, Node JS e Oracle'
  },
  { 
    period: 'Fevereiro de 2021 - Outubro de 2021', 
    title: 'Desenvolvedor web freelancer', 
    address: 'WA Esquadrias',
    technologies: 'Vue JS, Vuex e Framework Quasar' 
  }
]
</script>
