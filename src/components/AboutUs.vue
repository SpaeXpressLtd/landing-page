<template>
  <section id="about-us" class="about-us">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">About SpaeXpress</h2>
          <p>SpaeXpress Ltd. was founded with a simple mission: to bridge the distance between Nigeria and the rest of the world. We are dedicated to providing reliable, affordable, and hassle-free shipping solutions. Our unique "buy and ship" service takes the stress out of shopping, allowing you to get the items you want, no matter where you are.</p>
          <p>Our team is committed to excellence, ensuring that your packages are handled with the utmost care and delivered on time. We believe in building trust with our customers, one shipment at a time.</p>
        </div>
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1586528116311-06924151d18a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shipping containers">
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
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.about-text {
  flex: 1;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.about-text p {
  font-family: 'Open Sans', sans-serif;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
