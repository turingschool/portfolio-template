<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src)
  // Optionally hide the image container or show a placeholder
  event.target.style.display = 'none'
}
</script>

<template>
  <div class="project-card">
    <div class="project-header">
      <div class="project-icon">
        {{ project.icon }}
      </div>
      <div class="project-title-section">
        <h3 class="project-title">{{ project.title }}</h3>
        <div v-if="project.type" class="project-type">
          {{ project.type }}
        </div>
        <div class="project-links" v-if="project.links">
          <a
            v-if="project.links.deployed"
            :href="project.links.deployed"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link demo-link"
            title="View Live Demo"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15,3 21,3 21,9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Deployed
          </a>
          <a
            v-if="project.links.github"
            :href="project.links.github"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link github-link"
            title="View GitHub Repository"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
            GitHub
          </a>
          <a
            v-if="project.links.frontend"
            :href="project.links.frontend"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link frontend-link"
            title="View Frontend Repository"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="16,18 22,12 16,6" />
              <polyline points="8,6 2,12 8,18" />
            </svg>
            Frontend
          </a>
          <a
            v-if="project.links.backend"
            :href="project.links.backend"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link backend-link"
            title="View Backend Repository"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Backend
          </a>
        </div>
      </div>
    </div>

    <div class="project-content">
      <div v-if="project.image" class="project-image">
        <img :src="project.image" :alt="project.title + ' screenshot'" @error="handleImageError" />
      </div>

      <p class="project-description">{{ project.description }}</p>

      <div v-if="project.workDone && project.workDone.length" class="project-work">
        <h4 class="work-title">Key Contributions:</h4>
        <ul class="work-list">
          <li v-for="item in project.workDone" :key="item" class="work-item">
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="project.highlights && project.highlights.length" class="project-highlights">
        <h4 class="highlights-title">Highlights:</h4>
        <ul class="highlights-list">
          <li v-for="highlight in project.highlights" :key="highlight" class="highlight-item">
            {{ highlight }}
          </li>
        </ul>
      </div>

      <div class="project-technologies">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.project-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.project-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.project-type {
  font-size: 0.875rem;
  font-weight: 600;
  color: #718096;
  background: #edf2f7;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.project-title-section {
  flex: 1;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #2d3748;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.demo-link {
  background: #667eea;
  color: white;
}

.demo-link:hover {
  background: #5a67d8;
  transform: translateY(-1px);
}

.github-link {
  background: #2d3748;
  color: white;
}

.github-link:hover {
  background: #1a202c;
  transform: translateY(-1px);
}

.frontend-link {
  background: #48bb78;
  color: white;
}

.frontend-link:hover {
  background: #38a169;
  transform: translateY(-1px);
}

.backend-link {
  background: #ed8936;
  color: white;
}

.backend-link:hover {
  background: #dd6b20;
  transform: translateY(-1px);
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-image {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.project-image img {
  width: 100%;
  height: 180px;
  max-height: 180px;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.3s ease;
}

.project-image:hover img {
  transform: scale(1.02);
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-work {
  margin-bottom: 1.5rem;
}

.work-title {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.work-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.work-item {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.5rem;
  color: #4a5568;
  line-height: 1.5;
}

.work-item:before {
  content: '•';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.project-highlights {
  margin-bottom: 1.5rem;
}

.highlights-title {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlight-item {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.5rem;
  color: #4a5568;
  line-height: 1.5;
}

.highlight-item:before {
  content: '★';
  position: absolute;
  left: 0;
  color: #f6e05e;
  font-weight: bold;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tech-tag {
  background: #e2e8f0;
  color: #4a5568;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .project-links {
    justify-content: center;
  }

  .project-link {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }

  .project-image img {
    height: 140px;
    max-height: 140px;
  }
}
</style>
