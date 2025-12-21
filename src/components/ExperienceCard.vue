<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="experience-card">
    <div class="experience-timeline">
      <div class="timeline-dot"></div>
      <div class="timeline-line"></div>
    </div>
    <div class="experience-content">
      <div class="experience-header">
        <h3 class="experience-position">{{ experience.position }}</h3>
        <span class="experience-period">{{ experience.period }}</span>
      </div>
      <h4 class="experience-company">{{ experience.company }}</h4>
      <p class="experience-description">{{ experience.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.experience-card {
  position: relative;
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
  border-left: 2px solid #e2e8f0;
  margin-left: 1rem;
}

.experience-card:last-child {
  border-left: none;
}

.experience-card:last-child .timeline-line {
  display: none;
}

.experience-timeline {
  position: relative;
  margin-left: -1rem;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background: #667eea;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.timeline-line {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #e2e8f0;
  z-index: 1;
}

.experience-content {
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.experience-content:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 1rem;
}

.experience-position {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.experience-period {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
}

.experience-company {
  font-size: 1.125rem;
  font-weight: 500;
  color: #4a5568;
  margin: 0 0 1rem 0;
}

.experience-description {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .experience-card {
    gap: 1rem;
    padding: 1.5rem 0;
  }

  .experience-content {
    padding: 1.5rem;
  }

  .experience-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .experience-position {
    font-size: 1.25rem;
  }

  .experience-period {
    align-self: flex-start;
  }
}
</style>
