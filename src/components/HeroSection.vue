<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title">Ship Smarter, Ship Faster</h1>
      <p class="hero-subtitle">
        Your trusted partner for shipping from Nigeria to the UK and beyond.
        We handle everything from purchasing to delivery.
      </p>
      <div class="hero-cta">
        <a href="#contact" class="cta-primary">Get a Free Quote</a>
        <a href="#how-it-works" class="cta-secondary">Learn How It Works</a>
      </div>
      <div class="hero-features">
        <div class="feature-badge">
          <i class="fas fa-shield-alt"></i>
          <span>100% Secure</span>
        </div>
        <div class="feature-badge">
          <i class="fas fa-clock"></i>
          <span>Fast Delivery</span>
        </div>
        <div class="feature-badge">
          <i class="fas fa-headset"></i>
          <span>24/7 Support</span>
        </div>
      </div>
    </div>
    <div class="hero-wave">
      <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#ffffff"></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
.hero {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow: hidden;
  padding: 8rem 0 4rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.8) 0%, rgba(76, 175, 80, 0.6) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.cta-primary,
.cta-secondary {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  display: inline-block;
}

.cta-primary {
  background-color: #fff;
  color: #007BFF;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.cta-secondary {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.cta-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.hero-features {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.feature-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  opacity: 0.9;
}

.feature-badge i {
  font-size: 1.5rem;
}

.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  line-height: 0;
}

.hero-wave svg {
  width: 100%;
  height: auto;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 500px;
    padding: 6rem 0 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }

  .hero-features {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
