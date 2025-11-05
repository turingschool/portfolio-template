<script setup>
defineProps({
  education: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="education-card">
    <div class="education-icon">🎓</div>
    <div class="education-content">
      <div class="education-header">
        <h3 class="education-degree">{{ education.degree }}</h3>
        <span class="education-period">{{ education.period }}</span>
      </div>
      <h4 class="education-school">{{ education.school }}</h4>
      <p class="education-description">{{ education.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.education-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.education-icon {
  font-size: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.education-content {
  flex: 1;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 1rem;
}

.education-degree {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  line-height: 1.2;
}

.education-period {
  background: #e2e8f0;
  color: #4a5568;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
}

.education-school {
  font-size: 1.125rem;
  font-weight: 500;
  color: #667eea;
  margin: 0 0 1rem 0;
}

.education-description {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .education-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .education-icon {
    align-self: center;
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  .education-header {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .education-degree {
    font-size: 1.25rem;
    text-align: center;
  }

  .education-period {
    align-self: center;
  }
}
</style>
