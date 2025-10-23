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
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.section-title {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.service-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

.card i {
  font-size: 3rem;
  color: #007BFF;
  margin-bottom: 1rem;
}

.card h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.card p {
  font-family: 'Open Sans', sans-serif;
  color: #555;
}
</style>
