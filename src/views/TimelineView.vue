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
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
type TimelineItem = { period: string; title: string; address: string }

const timeline: TimelineItem[] = [
  { 
    period: 'Setembro de 2021 - Atualmente', 
    title: 'Desenvolvedor web', 
    address: 'Centro Universitário Unifafibe' 
  },
  { 
    period: 'Fevereiro de 2021 - Outubro de 2021', 
    title: 'Desenvolvedor web freelancer', 
    address: 'WA Esquadrias' 
  }
]
</script>
