<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <div class="service-cards">
        <div class="card">
          <i class="fas fa-shipping-fast"></i>
          <h3>Standard Shipping</h3>
          <p>Reliable and affordable shipping from Nigeria to the UK and beyond. We handle your packages with the utmost care.</p>
        </div>
        <div class="card">
          <i class="fas fa-shopping-basket"></i>
          <h3>Buy and Ship</h3>
          <p>We purchase items on your behalf and ship them to you. Just give us your list, and we'll handle the rest.</p>
        </div>
        <div class="card">
          <i class="fas fa-box-open"></i>
          <h3>Custom Packaging</h3>
          <p>We provide custom packaging solutions to ensure your items are secure and protected during transit.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceSection',
};
</script>

<style scoped>
.services {
  padding: 5rem 0;
  background-color: var(--background-color);
  position: relative;
}

.section-title {
  text-align: center;
  font-family: var(--font-family-headings);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background-color: var(--white);
  padding: 2.5rem 2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.card i {
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  transition: var(--transition);
}

.card:hover i {
  transform: scale(1.1);
  color: var(--secondary-color);
}

.card h3 {
  font-family: var(--font-family-headings);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.card p {
  font-family: var(--font-family-body);
  color: var(--text-light);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .services {
    padding: 4rem 0;
  }

  .service-cards {
    grid-template-columns: 1fr;
  }
}
</style>
