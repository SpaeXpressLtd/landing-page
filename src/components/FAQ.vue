<template>
  <section id="faq" class="faq">
    <div class="container">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <p class="section-subtitle">Find answers to common questions about our services</p>
      <div class="faq-list">
        <div
          class="faq-item"
          v-for="(item, index) in faqs"
          :key="index"
          @click="toggleFaq(index)"
        >
          <div class="faq-question">
            <h3>{{ item.question }}</h3>
            <i class="fas" :class="item.isOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          </div>
          <transition name="slide">
            <div class="faq-answer" v-if="item.isOpen">
              <p>{{ item.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      faqs: [
        {
          question: 'How long does shipping from Nigeria to the UK take?',
          answer: 'Standard shipping typically takes 5-7 business days. Express shipping options are available for faster delivery, usually within 2-3 business days.',
          isOpen: false,
        },
        {
          question: 'What items can you ship?',
          answer: 'We can ship most items including electronics, clothing, documents, food items (with proper packaging), and personal belongings. Prohibited items include hazardous materials, illegal substances, and items restricted by customs regulations.',
          isOpen: false,
        },
        {
          question: 'How does the "Buy and Ship" service work?',
          answer: 'Simply provide us with a list of items you want to purchase, including links or descriptions. We will purchase the items on your behalf in Nigeria, securely package them, and ship them to your UK address. You will receive updates throughout the entire process.',
          isOpen: false,
        },
        {
          question: 'How can I track my shipment?',
          answer: 'Once your package is dispatched, you will receive a unique tracking number via email. You can use this number on our website to track your shipment in real-time from pickup to delivery.',
          isOpen: false,
        },
        {
          question: 'What are your shipping rates?',
          answer: 'Our rates are based on package weight, dimensions, and shipping speed. Contact us with your package details for a free, no-obligation quote. We offer competitive pricing with no hidden fees.',
          isOpen: false,
        },
        {
          question: 'Is my package insured during transit?',
          answer: 'Yes, all shipments include basic insurance coverage. Additional insurance options are available for high-value items. We handle all packages with the utmost care and security.',
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
  },
};
</script>

<style scoped>
.faq {
  padding: 5rem 0;
  background-color: #fff;
}

.section-title {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.section-subtitle {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  color: #555;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.faq-list {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.faq-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #007BFF;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #fff;
  transition: background-color 0.3s ease;
}

.faq-item:hover .faq-question {
  background-color: #f8f9fa;
}

.faq-question h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #333;
  margin: 0;
  flex: 1;
}

.faq-question i {
  color: #007BFF;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem 1.5rem;
  background-color: #fff;
}

.faq-answer p {
  font-family: 'Open Sans', sans-serif;
  color: #555;
  line-height: 1.8;
  margin: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .faq-question h3 {
    font-size: 1rem;
  }

  .faq-question {
    padding: 1rem;
  }

  .faq-answer {
    padding: 0 1rem 1rem 1rem;
  }
}
</style>
