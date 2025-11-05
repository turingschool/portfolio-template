<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from '@/assets/data/portfolio.js'

const { name } = portfolioData

const isMenuOpen = ref(false)
const isScrolled = ref(false)

// Navigation items
const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
]

// Smooth scroll function
const scrollTo = (elementId) => {
  const element = document.querySelector(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false // Close mobile menu after clicking
  }
}

// Handle scroll for navbar background
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <!-- Logo/Brand -->
      <div class="nav-brand">
        <a href="#hero" @click="scrollTo('#hero')">
          {{ name }}
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="nav-links">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          @click.prevent="scrollTo(item.href)"
          class="nav-link"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: isMenuOpen }">
      <a
        v-for="item in navItems"
        :key="item.name"
        :href="item.href"
        @click.prevent="scrollTo(item.href)"
        class="mobile-nav-link"
      >
        {{ item.name }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-brand a {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-brand a:hover {
  color: #667eea;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #667eea;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #667eea;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  gap: 4px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: #4a5568;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: none;
  flex-direction: column;
  padding: 1rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.mobile-menu.active {
  display: flex;
}

.mobile-nav-link {
  padding: 1rem 20px;
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.mobile-nav-link:hover {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  border-left-color: #667eea;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .nav-container {
    height: 60px;
  }

  .nav-brand a {
    font-size: 1.25rem;
  }
}
</style>
