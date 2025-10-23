<template>
  <div id="app">
    <PageHeader />
    <main>
      <ServiceSection />
      <HowItWorks />
      <AboutUs />
      <ContactForm />
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import ServiceSection from './components/ServiceSection.vue';
import HowItWorks from './components/HowItWorks.vue';
import AboutUs from './components/AboutUs.vue';
import ContactForm from './components/ContactForm.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    ServiceSection,
    HowItWorks,
    AboutUs,
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
