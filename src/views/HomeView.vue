<template>
  <article>
    <section class="section hero" id="home" aria-label="hero">
      <div class="container">
        <figure class="hero-banner img-holder has-before" style="--width: 640; --height: 840;">
          <img :src="heroBanner" width="640" height="840" alt="Daniel Freitas Ferreira" class="img-cover" />
        </figure>

        <div class="hero-content">
          <p class="section-subtitle">Daniel Ferreira</p>
          <h1 class="h1 hero-title">Desenvolvedor Front-end</h1>

          <ul class="hero-list">

            <li>
              <a href="#" class="list-link" @click.prevent>
                <span class="span">Desenvolvimento web</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </li>
            <!-- <li>
              <a href="#" class="list-link" @click.prevent>
                <span class="span">Treinamento no curso Vue.js Expert</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </li> -->
            
          </ul>

          <ul class="exp-list">
            <li class="list-item">
              <strong class="strong">6+</strong>
              <span class="span">Anos de<br />experiência</span>
            </li>
            <!-- <li class="list-item">
              <strong class="strong">3K+</strong>
              <span class="span">Happy<br />Customers</span>
            </li> -->
          </ul>

          <RouterLink to="/portfolio" class="slide-down-btn" aria-label="scroll down">
            <ion-icon name="arrow-down" aria-hidden="true"></ion-icon>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Quick navigation cards (keeps the new routing UX) -->
    <section class="section" aria-label="quick links">
      <div class="container">
        <p class="section-subtitle">Explore as</p>
        <h2 class="h2 section-title">Sessões</h2>

        <ul class="pricing-list">
          <li><RouterLink class="pricing-card" to="/portfolio"><ion-icon name="images"></ion-icon><h3 class="card-title">Projetos</h3><data class="card-price" value="1">Ver</data></RouterLink></li>
          <li><RouterLink class="pricing-card" to="/skills"><ion-icon name="code-slash"></ion-icon><h3 class="card-title">Habilidades</h3><data class="card-price" value="1">Ver</data></RouterLink></li>
          <li><RouterLink class="pricing-card" to="/timeline"><ion-icon name="briefcase-outline"></ion-icon><h3 class="card-title">Experiências</h3><data class="card-price" value="1">Ver</data></RouterLink></li>
          <!-- <li><RouterLink class="pricing-card" to="/pricing"><ion-icon name="pricetags"></ion-icon><h3 class="card-title">Pricing</h3><data class="card-price" value="1">Ver</data></RouterLink></li> -->
          <!-- <li><RouterLink class="pricing-card" to="/news"><ion-icon name="newspaper"></ion-icon><h3 class="card-title">News</h3><data class="card-price" value="1">Ver</data></RouterLink></li> -->
          <!-- <li><RouterLink class="pricing-card" to="/contact"><ion-icon name="mail"></ion-icon><h3 class="card-title">Contato</h3><data class="card-price" value="1">Ver</data></RouterLink></li> -->
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import heroBanner from '../assets/images/hero-banner.jpg'
</script>
