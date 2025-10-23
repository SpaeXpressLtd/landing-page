<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>SpaeXpress Ltd.</h4>
          <p>Connecting Nigeria to the World.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Info</h4>
          <p>Email: contact@spaexpress.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 SpaeXpress Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 3rem 0 1rem;
  font-family: 'Open Sans', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-section h4 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.footer-section p,
.footer-section ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #007BFF;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #555;
  padding-top: 1rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
