<script setup>
import { ref, onMounted } from 'vue'
import { portfolioData } from '@/assets/data/portfolio.js'
import SkillCard from './SkillCard.vue'

// Reactive data
const isVisible = ref(false)
const skillsGrid = ref(null)
const skills = ref(portfolioData.skills)

// Methods
const observeSection = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.1 },
  )

  if (skillsGrid.value) {
    observer.observe(skillsGrid.value)
  }
}

const handleSkillHover = (skill) => {
  console.log('Skill hovered:', skill.name)
  // Add any section-level hover logic here
}

const handleSkillLeave = (skill) => {
  console.log('Skill left:', skill.name)
  // Add any section-level leave logic here
}

// Lifecycle
onMounted(() => {
  observeSection()
})
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2>Skills & Technologies</h2>
      <div class="skills-grid fade-in" :class="{ visible: isVisible }" ref="skillsGrid">
        <SkillCard
          v-for="skill in skills"
          :key="skill.name"
          :skill="skill"
          @skill-hover="handleSkillHover"
          @skill-leave="handleSkillLeave"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  text-align: center;
}

</style>
