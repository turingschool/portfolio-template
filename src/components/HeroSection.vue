<script setup>
import { portfolioData } from '@/assets/data/portfolio.js'

// Extract data from portfolioData
const { name, heroSubtitle } = portfolioData

// Smooth scroll function
const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Generate random particle styles
const particleStyle = () => {
  return {
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    animationDelay: Math.random() * 3 + 's',
    animationDuration: Math.random() * 3 + 2 + 's',
  }
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>{{ name }}</h1>
        <p>{{ heroSubtitle }}</p>

        <!-- Social Media Links -->
        <div class="social-links">
          <a
            href="https://www.linkedin.com/in/michaelobrien67/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            title="LinkedIn Profile"
          >
            <img src="/images/socialmedia/linkedin_48px.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/MiTOBrien"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            title="GitHub Profile"
          >
            <img src="/images/socialmedia/github_48px.png" alt="GitHub" />
          </a>
          <a href="mailto:obrien.michael.t@gmail.com" class="social-link" title="Send Email">
            <img src="/images/socialmedia/email_48px.png" alt="Email" />
          </a>
        </div>

        <a href="#about" class="cta-button" @click="scrollTo('about')">Discover My Work</a>
      </div>
    </div>
    <div v-for="n in 20" :key="n" class="particle" :style="particleStyle()"></div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 2;
  position: relative;
}

.hero-content {
  text-align: center;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.5s forwards;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1s forwards;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.25s forwards;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-decoration: none;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.social-link img {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
}

.social-link:hover img {
  transform: scale(1.1);
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.5s forwards;
}

.cta-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float linear infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .social-links {
    gap: 1rem;
  }

  .social-link {
    width: 50px;
    height: 50px;
  }

  .social-link img {
    width: 20px;
    height: 20px;
  }
}
</style>
