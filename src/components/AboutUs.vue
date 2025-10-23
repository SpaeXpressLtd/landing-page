<template>
  <section id="about-us" class="about-us">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">About SpaeXpress</h2>
          <p>SpaeXpress Ltd. was founded with a simple mission: to bridge the distance between Nigeria and the rest of the world. We are dedicated to providing reliable, affordable, and hassle-free shipping solutions. Our unique "buy and ship" service takes the stress out of shopping, allowing you to get the items you want, no matter where you are.</p>
          <p>Our team is committed to excellence, ensuring that your packages are handled with the utmost care and delivered on time. We believe in building trust with our customers, one shipment at a time.</p>
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
  justify-content: center;
  align-items: center;
  text-align: center;
}

.about-text {
  max-width: 800px;
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
</style>
