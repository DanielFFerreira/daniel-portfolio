<template>
  <article>
    <section class="section contact" id="contact" aria-label="contact">
      <div class="container">
        <div class="contact-content">
          <p class="section-subtitle">Contact</p>
          <h2 class="h2 section-title">Get In Touch</h2>
          <p class="section-text">
            Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
          </p>

          <ul class="contact-list">
            <li class="contact-item">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
              <address class="contact-link">27 City Walls Rd, Clydebank, UK</address>
            </li>
            <li class="contact-item">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
              <a href="tel:+07742691291" class="contact-link">+077 4269 1291</a>
            </li>
            <li class="contact-item">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              <a href="mailto:smith@gmail.com" class="contact-link">smith@gmail.com</a>
            </li>
            <li class="contact-item">
              <ion-icon name="globe-outline" aria-hidden="true"></ion-icon>
              <a href="#" class="contact-link" @click.prevent>www.domain.com</a>
            </li>
          </ul>
        </div>

        <form class="contact-form" @submit.prevent="onSubmit">
          <input v-model="form.name" type="text" name="name" aria-label="name" placeholder="Name" required class="input-field" />
          <input v-model="form.email" type="email" name="email_address" aria-label="email" placeholder="Email" required class="input-field" />
          <textarea v-model="form.message" name="message" aria-label="message" placeholder="Message" required class="input-field"></textarea>

          <button type="submit" class="submit-btn">
            <span class="span">Submit</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </button>
        </form>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({ name: '', email: '', message: '' })

function onSubmit() {
  // Placeholder: integrate with your API / email service
  alert(`Thanks, ${form.name}! Your message was captured locally (no backend yet).`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
