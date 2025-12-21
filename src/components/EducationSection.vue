<script setup>
import { portfolioData } from '@/assets/data/portfolio.js'
import EducationCard from '@/components/EducationCard.vue'

const { education } = portfolioData
</script>

<template>
  <section id="education" class="education-section">
    <div class="container">
      <div class="section-header">
        <h2>Education & Training</h2>
        <p>My academic background and continuous learning journey</p>
      </div>
      <div class="education-grid">
        <EducationCard v-for="edu in education" :key="edu.degree + edu.school" :education="edu" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
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

.education-grid {
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .education-section {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .education-grid {
    gap: 1.5rem;
  }
}
</style>
