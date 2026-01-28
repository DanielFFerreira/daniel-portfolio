<template>
  <article>
    <section class="section portfolio" id="portfolio" aria-label="portfolio">
      <div class="container">
        <p class="section-subtitle">Meus</p>
        <h2 class="h2 section-title">Projetos</h2>

        <ul class="has-scrollbar">
          <li v-for="item in items" :key="item.title" class="scrollbar-item">
            <div class="card">
              <figure class="card-banner img-holder" style="--width: 600; --height: 675;">
                <img :src="item.image" width="600" height="675" loading="lazy" :alt="item.title" class="img-cover" />
              </figure>
              
              <a :href="item.url" class="card-content" target="_blank">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                <h3 class="h3 card-title">{{ item.title }}</h3>
                <p class="card-text">{{ item.source }}</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import p1 from '../assets/images/projetos/projeto1.png'
import p2 from '../assets/images/projetos/starbucks.jpg'
import p3 from '../assets/images/projetos/gatito.jpg'
import p4 from '../assets/images/projetos/agency.jpg'
import p5 from '../assets/images/projetos/electrum.jpg'
import p6 from '../assets/images/projetos/7DyasOfCodeAlura.jpg'

type Item = { title: string; source: string; image: string, url: string }

const items: Item[] = [
  {
    title: 'Alura Geek',
    source: '',
    image: p1,
    url: 'https://alura-geek-theta.vercel.app/'
  },
  {
    title: 'Starbucks',
    source: '',
    image: p2,
    url: 'https://starbucks-chi.vercel.app/'
  },
  {
    title: 'Gatito',
    source: '',
    image: p3,
    url: 'https://projeto-sass-alura.vercel.app/'
  },
  {
    title: 'Agency',
    source: '',
    image: p4,
    url: 'https://agency-ecru.vercel.app/'
  },
  {
    title: 'Electrum',
    source: '',
    image: p5,
    url: 'https://electrum.vercel.app/'
  },
  {
    title: 'Alura 7 days code',
    source: '',
    image: p6,
    url: 'https://alura-7dayscode.vercel.app/'
  }
]
</script>
