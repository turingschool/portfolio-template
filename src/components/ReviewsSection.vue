<script setup>
import { portfolioData } from '@/assets/data/portfolio.js'
import ReviewCard from './ReviewCard.vue'

const { reviews } = portfolioData
</script>

<template>
  <section id="reviews" class="review-section">
    <div class="container">
      <div class="section-header">
        <h2>Reviews</h2>
        <p>What clients say about me</p>
      </div>
      <div class="reviews-grid">
        <ReviewCard
          v-for="(review, index) in portfolioData.reviews"
          :key="index"
          :review="review"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.reviews-section {
  padding: 4rem 1rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
}

.reviews-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
