<script setup>
import { portfolioData } from '@/assets/data/portfolio.js'
import ProjectCard from '@/components/ProjectCard.vue'

const { projects } = portfolioData
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header">
        <h2>Featured Projects</h2>
        <p>Here are some of my recent projects that showcase my skills and experience</p>
      </div>
      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 5rem 0;
  background: #f7fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
