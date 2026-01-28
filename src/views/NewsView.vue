<template>
  <article>
    <section class="section news" id="news" aria-label="news">
      <div class="container">
        <p class="section-subtitle">News</p>
        <h2 class="h2 section-title">Latest News</h2>

        <ul class="has-scrollbar">
          <li v-for="n in news" :key="n.title" class="scrollbar-item">
            <div class="card news-card">
              <figure class="card-banner img-holder" style="--width: 600; --height: 675;">
                <img :src="n.image" width="600" height="675" loading="lazy" :alt="n.title" class="img-cover" />
              </figure>

              <a href="#" class="card-content" @click.prevent>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                <time class="card-text" :datetime="n.datetime">{{ n.dateLabel }}</time>
                <h3 class="h3 card-title">{{ n.title }}</h3>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import b1 from '../assets/images/blog-1.jpg'
import b2 from '../assets/images/blog-2.jpg'
import b3 from '../assets/images/blog-3.jpg'
import b4 from '../assets/images/blog-4.jpg'

type NewsItem = { title: string; datetime: string; dateLabel: string; image: string }

const news: NewsItem[] = [
  { datetime: '2022-09-02', dateLabel: 'September 02, 2022', title: 'VS Code Gets New JavaScript Debugger', image: b1 },
  { datetime: '2022-08-17', dateLabel: 'August 17, 2022', title: 'Javalin Framework for Kotlin and Java Updated', image: b2 },
  { datetime: '2022-07-05', dateLabel: 'July 05, 2022', title: 'JavaScript Dominated Open Source in 2022', image: b3 },
  { datetime: '2022-04-22', dateLabel: 'April 22, 2022', title: 'Perfecto Tests Progressive Web Apps', image: b4 }
]
</script>
