<script setup>
defineProps({
  review: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="review-card">
    <p class="review-text">"{{ review.text }}"</p>
    <p class="review-author">— {{ review.name }}</p>
  </div>
</template>

<style scoped>
.review-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.review-text {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.review-author {
  font-weight: bold;
  text-align: right;
  font-size: 0.95rem;
}
</style>
