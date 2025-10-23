<template>
  <section id="about-us" class="about-us">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">About SpaeXpress</h2>
          <p class="lead">Connecting Nigeria to the World, One Package at a Time</p>
          <p>SpaeXpress Ltd. was founded with a simple mission: to bridge the distance between Nigeria and the rest of the world. We are dedicated to providing reliable, affordable, and hassle-free shipping solutions. Our unique "buy and ship" service takes the stress out of shopping, allowing you to get the items you want, no matter where you are.</p>
          <p>Our team is committed to excellence, ensuring that your packages are handled with the utmost care and delivered on time. We believe in building trust with our customers, one shipment at a time.</p>
          <div class="stats">
            <div class="stat-item">
              <i class="fas fa-box"></i>
              <h3>10,000+</h3>
              <p>Packages Delivered</p>
            </div>
            <div class="stat-item">
              <i class="fas fa-users"></i>
              <h3>5,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div class="stat-item">
              <i class="fas fa-globe"></i>
              <h3>15+</h3>
              <p>Countries Served</p>
            </div>
            <div class="stat-item">
              <i class="fas fa-award"></i>
              <h3>99%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style scoped>
.about-us {
  padding: 5rem 0;
  background-color: var(--background-color);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.about-text {
  max-width: 900px;
}

.section-title {
  font-family: var(--font-family-headings);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.lead {
  font-family: var(--font-family-headings);
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-weight: 600;
}

.about-text p {
  font-family: var(--font-family-body);
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  background-color: var(--white);
  padding: 2rem 1rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.stat-item i {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.stat-item h3 {
  font-family: var(--font-family-headings);
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.stat-item p {
  font-family: var(--font-family-body);
  color: var(--text-light);
  font-size: 0.95rem;
  margin: 0;
}

@media (max-width: 768px) {
  .about-us {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.1rem;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}
</style>
