<template>
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>SpaeXpress Ltd.</h4>
          <p class="tagline">Connecting Nigeria to the World.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Info</h4>
          <p><i class="fas fa-envelope"></i> <a href="mailto:contact@spae.express">contact@spae.express</a></p>
          <p><i class="fas fa-phone"></i> <a href="tel:+1234567890">+123 456 7890</a></p>
          <p><i class="fas fa-map-marker-alt"></i> Lagos, Nigeria</p>
        </div>
        <div class="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates and special offers</p>
          <form class="newsletter-form" @submit.prevent="handleNewsletter">
            <input type="email" placeholder="Your email" aria-label="Email for newsletter" required />
            <button type="submit" aria-label="Subscribe to newsletter">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} SpaeXpress Ltd. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    handleNewsletter() {
      alert('Thank you for subscribing to our newsletter!');
    },
  },
};
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
  color: var(--white);
  padding: 4rem 0 1rem;
  font-family: var(--font-family-body);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.footer-section {
  min-width: 200px;
}

.footer-section h4 {
  font-family: var(--font-family-headings);
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--white);
}

.footer-section .tagline {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.footer-section p,
.footer-section ul {
  margin: 0 0 0.5rem 0;
  padding: 0;
  list-style: none;
  color: rgba(255, 255, 255, 0.8);
}

.footer-section a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: var(--transition);
}

.footer-section a:hover {
  color: var(--primary-light);
}

.footer-section li {
  margin-bottom: 0.75rem;
}

.footer-section p i {
  margin-right: 0.5rem;
  color: var(--primary-light);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: var(--transition);
}

.social-links a:hover {
  background-color: var(--primary-color);
  transform: translateY(-3px);
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-body);
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-form input:focus {
  outline: 2px solid var(--primary-color);
  background-color: rgba(255, 255, 255, 0.15);
}

.newsletter-form button {
  padding: 0.75rem 1.25rem;
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: var(--transition);
}

.newsletter-form button:hover {
  background-color: var(--primary-dark);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
}

.footer-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--white);
}

.footer-links span {
  color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
