<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from '@/assets/data/portfolio.js'

const { aboutText, personalText } = portfolioData

// Reactive state for section visibility
const visibleSections = ref({
  about: false,
})

// Intersection Observer for fade-in animations
let observer = null

const observeElements = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          visibleSections.value[sectionId] = true
        }
      })
    },
    {
      threshold: 0.3,
    },
  )

  // Observe the about section
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    observer.observe(aboutSection)
  }
}

onMounted(() => {
  observeElements()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2>About Me</h2>
      </div>
      <div class="about-content fade-in" :class="{ visible: visibleSections.about }">
        <div class="about-text">
          <h3>Professional</h3>
          <hr />
          <p>{{ aboutText }}</p>
          <h3 class="personal">Personal</h3>
          <hr />
          <p>{{ personalText }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
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

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-text {
  text-align: center;
  margin-bottom: 4rem;
}

.about-text p {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0;
}

.personal {
  padding-top: 15px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: #f7fafc;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  color: #4a5568;
  font-weight: 500;
}

/* Fade-in animation */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .about-section {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .about-text p {
    font-size: 1.125rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .stat-item {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}
</style>
