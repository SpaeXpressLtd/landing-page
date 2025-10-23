<template>
  <section id="how-it-works" class="how-it-works">
    <div class="container">
      <h2 class="section-title">How It Works</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-icon">1</div>
          <h3>Submit Your Request</h3>
          <p>Provide us with your shipping details or a list of items you want us to purchase for you.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">2</div>
          <h3>We Get to Work</h3>
          <p>We'll either purchase the items on your list or prepare your package for shipment.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">3</div>
          <h3>Track Your Shipment</h3>
          <p>Once your package is on its way, you can track its progress until it reaches your doorstep.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">4</div>
          <h3>Receive Your Items</h3>
          <p>Enjoy your items, delivered safely and on time. We handle all the logistics for you.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorks',
};
</script>

<style scoped>
.how-it-works {
  padding: 5rem 0;
  background-color: var(--white);
}

.section-title {
  text-align: center;
  font-family: var(--font-family-headings);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.timeline {
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 30px;
  left: 10%;
  right: 10%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  z-index: 0;
}

.timeline-item {
  text-align: center;
  max-width: 250px;
  position: relative;
  z-index: 1;
  padding: 1rem;
  transition: var(--transition);
}

.timeline-item:hover {
  transform: translateY(-10px);
}

.timeline-icon {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: var(--white);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: var(--font-family-headings);
  font-weight: 700;
  margin: 0 auto 1rem;
  border: 4px solid var(--white);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.timeline-item:hover .timeline-icon {
  transform: scale(1.1);
  box-shadow: var(--shadow-lg);
}

.timeline-item h3 {
  font-family: var(--font-family-headings);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.timeline-item p {
  font-family: var(--font-family-body);
  color: var(--text-light);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .how-it-works {
    padding: 4rem 0;
  }
}
</style>
