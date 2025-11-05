<script setup>
// Define props
const props = defineProps({
  skill: {
    type: Object,
    required: true,
    validator: (skill) => {
      return skill.name && skill.icon && skill.description
    },
  },
})

// Define emits
const emit = defineEmits(['skill-hover', 'skill-leave'])

// Define methods
const handleHover = () => {
  emit('skill-hover', props.skill)
}

const handleLeave = () => {
  emit('skill-leave', props.skill)
}
</script>

<template>
  <div class="skill-card" @mouseenter="handleHover" @mouseleave="handleLeave">
    <div class="skill-icon">{{ skill.icon }}</div>
    <h3>{{ skill.name }}</h3>
    <p>{{ skill.description }}</p>
  </div>
</template>

<style scoped>
.skill-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
}

.skill-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.skill-card h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.skill-card p {
  opacity: 0.9;
  line-height: 1.5;
}
</style>
