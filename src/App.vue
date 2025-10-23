<template>
  <div id="app">
    <PageHeader />
    <main>
      <HeroSection />
      <ServiceSection />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import HeroSection from './components/HeroSection.vue';
import ServiceSection from './components/ServiceSection.vue';
import HowItWorks from './components/HowItWorks.vue';
import AboutUs from './components/AboutUs.vue';
import Testimonials from './components/Testimonials.vue';
import FAQ from './components/FAQ.vue';
import ContactForm from './components/ContactForm.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    HeroSection,
    ServiceSection,
    HowItWorks,
    AboutUs,
    Testimonials,
    FAQ,
    ContactForm,
    PageFooter,
  },
};
</script>

<style>
/* Global styles are in assets/main.css */
main {
  padding-top: 80px; /* Offset for the fixed header */
}
</style>
