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
  padding: 4rem 0;
  background-color: #fff;
}

.section-title {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.timeline {
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 30px;
  left: 10%;
  right: 10%;
  height: 4px;
  background-color: #007BFF;
  z-index: 0;
}

.timeline-item {
  text-align: center;
  max-width: 250px;
  position: relative;
  z-index: 1;
}

.timeline-icon {
  background-color: #007BFF;
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin: 0 auto 1rem;
  border: 4px solid #fff;
}

.timeline-item h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.timeline-item p {
  font-family: 'Open Sans', sans-serif;
  color: #555;
}
</style>
