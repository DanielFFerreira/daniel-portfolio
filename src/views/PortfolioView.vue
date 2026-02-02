<template>
  <article>
    <section class="section portfolio" id="portfolio" aria-label="portfolio">
      <div class="container">
        <p class="section-subtitle">Meus</p>
        <h2 class="h2 section-title">Projetos</h2>

        <!-- CONTROLES -->
        <div class="portfolio-controls">
          <label class="search">
            <span class="sr-only">Buscar projetos</span>
            <input v-model="q" type="search" placeholder="Buscar projeto..." />
          </label>

          <!-- <select
            v-model="activeTag"
            class="select"
            aria-label="Filtrar por tecnologia"
          >
            <option value="">Todas as tags</option>
            <option v-for="t in allTags" :key="t" :value="t">{{ t }}</option>
          </select> -->
        </div>

        <!-- TODOS (GRID) -->
        <div class="portfolio-block">
          <div class="portfolio-block-head">
            <h3 class="portfolio-block-title">Todos os projetos</h3>
            <span class="count">{{ filtered.length }} projeto(s)</span>
          </div>

          <ul class="portfolio-grid" aria-label="Lista de todos os projetos">
            <li
              v-for="item in filtered"
              :key="item.title"
              class="portfolio-grid-item"
            >
              <a
                class="grid-card"
                :href="item.url"
                target="_blank"
                rel="noreferrer"
                :aria-label="`Abrir ${item.title}`"
              >
                <div class="grid-cover">
                  <img :src="item.image" :alt="item.title" loading="lazy" />
                </div>

                <div class="grid-body">
                  <h3 class="grid-title">{{ item.title }}</h3>
                  <p v-if="item.source" class="grid-text">{{ item.source }}</p>

                  <div class="chip-row">
                    <span v-for="t in item.tags" :key="t" class="chip">{{
                      t
                    }}</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>

          <p v-if="!filtered.length" class="empty">
            Nenhum projeto encontrado. Tenta outra busca ou remove o filtro.
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import p1 from "../assets/images/projetos/projeto1.png";
import p2 from "../assets/images/projetos/starbucks.jpg";
import p3 from "../assets/images/projetos/gatito.jpg";
import p4 from "../assets/images/projetos/agency.jpg";
import p5 from "../assets/images/projetos/electrum.jpg";
import p6 from "../assets/images/projetos/7DyasOfCodeAlura.jpg";
import p7 from "../assets/images/projetos/page-pepsi.jpg";

type Project = {
  title: string;
  source: string;
  image: string;
  url: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Alura Geek",
    source: "",
    image: p1,
    url: "https://alura-geek-theta.vercel.app/",
    tags: ["HTML5", "CSS3"],
    featured: true,
  },
  {
    title: "Starbucks",
    source: "",
    image: p2,
    url: "https://starbucks-chi.vercel.app/",
    tags: ["HTML5", "CSS3"],
    featured: true,
  },
  {
    title: "Gatito",
    source: "",
    image: p3,
    url: "https://projeto-sass-alura.vercel.app/",
    tags: ["HTML5", "CSS3", "SASS"],
    featured: true,
  },
  {
    title: "Agency",
    source: "",
    image: p4,
    url: "https://agency-ecru.vercel.app/",
    tags: ["HTML5", "CSS3", "SASS"],
  },
  {
    title: "Electrum",
    source: "",
    image: p5,
    url: "https://electrum.vercel.app/",
    tags: ["HTML5", "CSS3", "SASS"],
  },
  {
    title: "Alura 7 days code",
    source: "",
    image: p6,
    url: "https://alura-7dayscode.vercel.app",
    tags: ["HTML5", "CSS3", "JAVASCRIPT"],
  },
  {
    title: "Página Pepsi",
    source: "",
    image: p7,
    url: "https://pagepepsi.vercel.app/",
    tags: ["HTML5", "CSS3", "JAVASCRIPT"],
  }
];

const q = ref("");
const activeTag = ref("");

const featured = computed(() => projects.filter((p) => p.featured));

const allTags = computed(() => {
  const set = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
});

const filtered = computed(() => {
  const query = q.value.trim().toLowerCase();

  return projects.filter((p) => {
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.source.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query));

    const matchesTag = !activeTag.value || p.tags.includes(activeTag.value);
    return matchesQuery && matchesTag;
  });
});
</script>

<style scoped lang="scss">
/* CONTROLES */
.portfolio-controls {
  margin-top: 14px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}
.search input {
  height: 42px;
  width: min(360px, 86vw);
  padding: 0 12px;
  border-radius: 14px;
  // background: rgba(255, 255, 255, 0.06);
  background-color: transparent;
  border: 1px solid var(--theme-color-vue);
  color: var(--black);
  outline: none;
}
.select {
  height: 42px;
  padding: 0 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--theme-color-vue);
  color: var(--black);
  outline: none;
}

/* BLOCOS */
.portfolio-block {
  margin-top: 18px;
}
.portfolio-block-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}
.portfolio-block-title {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--black);
}
.count {
  color: var(--black);
  font-size: 13px;
}
.hint {
  margin-top: 8px;
  font-size: 12px;
  color: var(--black);
}

/* NAV */
.nav {
  display: flex;
  gap: 10px;
}
.nav-btn {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: transparent;
  border: 1px solid var(--theme-color-vue);
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
}

/* CHIPS */
.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.chip {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(120, 70, 255, 0.16);
  border: 1px solid var(--theme-color-vue);
  color: var(--black);
}

/* GRID */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
@media (max-width: 1100px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 680px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}

.grid-card {
  display: block;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--theme-color-vue);
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;
  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border: 1px solid var(--theme-color-vue);
    background: rgba(255, 255, 255, 0.06);
    outline: none;
  }
}
.grid-cover {
  aspect-ratio: 16/10;
  background: rgba(0, 0, 0, 0.18);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1);
    transition: transform 0.35s ease;
  }
}
.grid-card:hover .grid-cover img {
  transform: scale(1.03);
}

.grid-body {
  padding: 12px 12px 14px;
}
.grid-title {
  margin: 0;
  font-size: 15px;
  font-weight: 900;
  color: var(--black);
}
.grid-text {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--black);
}

.empty {
  margin-top: 12px;
  color: var(--black);
  font-size: 13px;
}

/* acessibilidade */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
