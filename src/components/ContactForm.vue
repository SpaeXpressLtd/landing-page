<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Contact Us</h2>
      <p class="contact-description">Have a question or want to get a quote? Fill out the form below, and we'll get back to you shortly.</p>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <input type="text" v-model="form.name" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <input type="email" v-model="form.email" placeholder="Your Email" required />
        </div>
        <div class="form-group">
          <textarea v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
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
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted:', this.form);
      alert('Thank you for your message! We will get back to you soon.');
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 4rem 0;
  background-color: #fff;
}

.section-title {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.contact-description {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  color: #555;
  margin-bottom: 2rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
