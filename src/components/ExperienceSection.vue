<script setup>
import { portfolioData } from '@/assets/data/portfolio.js'
import ExperienceCard from '@/components/ExperienceCard.vue'

const { experience } = portfolioData
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="container">
      <div class="section-header">
        <h2>Professional Experience</h2>
        <p>My journey through various roles and the impact I've made along the way</p>
      </div>
      <div class="experience-timeline">
        <ExperienceCard
          v-for="exp in experience"
          :key="exp.position + exp.company"
          :experience="exp"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 5rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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

.experience-timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

@media (max-width: 768px) {
  .experience-section {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }
}
</style>
