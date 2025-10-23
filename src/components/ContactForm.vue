<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="contact-description">Have a question or want to get a quote? Fill out the form below, and we'll get back to you shortly.</p>
      <div class="contact-wrapper">
        <div class="contact-info">
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <div>
              <h3>Email Us</h3>
              <a href="mailto:contact@spae.express">contact@spae.express</a>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <div>
              <h3>Call Us</h3>
              <a href="tel:+1234567890">+123 456 7890</a>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h3>Visit Us</h3>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
          <div class="form-group">
            <label for="name">Full Name *</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              placeholder="John Doe"
              required
              aria-required="true"
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address *</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="john@example.com"
              required
              aria-required="true"
            />
          </div>
          <div class="form-group">
            <label for="message">Your Message *</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Tell us about your shipping needs..."
              rows="5"
              required
              aria-required="true"
            ></textarea>
          </div>
          <button type="submit" class="submit-button" :disabled="isSubmitting">
            <span v-if="!isSubmitting">
              <i class="fas fa-paper-plane"></i> Send Message
            </span>
            <span v-else>
              <i class="fas fa-spinner fa-spin"></i> Sending...
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      isSubmitting: false,
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      this.isSubmitting = true;

      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', this.form);
        alert('Thank you for your message! We will get back to you within 24 hours.');
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
        this.isSubmitting = false;
      }, 1500);
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
}

.section-title {
  text-align: center;
  font-family: var(--font-family-headings);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.contact-description {
  text-align: center;
  font-family: var(--font-family-body);
  color: var(--text-light);
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.info-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(5px);
}

.info-item i {
  font-size: 2rem;
  color: var(--primary-color);
  min-width: 40px;
}

.info-item h3 {
  font-family: var(--font-family-headings);
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: var(--text-color);
}

.info-item p,
.info-item a {
  font-family: var(--font-family-body);
  color: var(--text-light);
  margin: 0;
  text-decoration: none;
  transition: var(--transition);
}

.info-item a:hover {
  color: var(--primary-color);
}

.contact-form {
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.875rem;
  border: 2px solid var(--gray-medium);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-body);
  font-size: 1rem;
  transition: var(--transition);
  background-color: var(--gray-light);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  background-color: var(--white);
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: var(--white);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: var(--font-family-headings);
  font-weight: 700;
  font-size: 1.1rem;
  transition: var(--transition);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.submit-button:hover:not(:disabled) {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 123, 255, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-button i {
  margin-right: 0.5rem;
}

@media (max-width: 968px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-form {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .contact-form {
    padding: 1.5rem;
  }
}
</style>
