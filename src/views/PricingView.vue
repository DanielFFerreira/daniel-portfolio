<template>
  <article>
    <section class="section pricing" id="price" aria-label="price">
      <div class="container">
        <div class="pricing-content">
          <p class="section-subtitle">Pricing</p>
          <h2 class="h2 section-title">Service Prices</h2>
          <p class="section-text">
            For more than 20 years our experts have been accomplishing enough with modern Web Development, new
            generation web and app programming language.
          </p>
        </div>

        <ul class="pricing-list">
          <li v-for="p in prices" :key="p.title">
            <div class="pricing-card">
              <ion-icon :name="p.icon" aria-hidden="true"></ion-icon>
              <h3 class="card-title">{{ p.title }}</h3>
              <data class="card-price" :value="p.price">${{ p.price }}</data>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
type PriceItem = { title: string; price: number; icon: string }

const prices: PriceItem[] = [
  { icon: 'logo-wordpress', title: 'WordPress Development', price: 500 },
  { icon: 'logo-html5', title: 'HTML Development', price: 400 },
  { icon: 'reader', title: 'Content Writing', price: 300 },
  { icon: 'qr-code', title: 'Brand Identity', price: 200 },
  { icon: 'image', title: 'PSD Design', price: 100 }
]
</script>
