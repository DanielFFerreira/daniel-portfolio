import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import SkillsView from '../views/SkillsView.vue'
import TimelineView from '../views/TimelineView.vue'
import PricingView from '../views/PricingView.vue'
import NewsView from '../views/NewsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Início | Portfólio' } },
    { path: '/portfolio', name: 'portfolio', component: PortfolioView, meta: { title: 'Portfólio | Projetos' } },
    { path: '/skills', name: 'skills', component: SkillsView, meta: { title: 'Skills | Tecnologias' } },
    { path: '/timeline', name: 'timeline', component: TimelineView, meta: { title: 'Timeline | Experiência' } },
    { path: '/pricing', name: 'pricing', component: PricingView, meta: { title: 'Serviços | Preços' } },
    { path: '/news', name: 'news', component: NewsView, meta: { title: 'News | Artigos' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'Contato' } },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router
