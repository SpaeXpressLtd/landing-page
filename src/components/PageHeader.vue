<template>
  <header class="header" role="banner">
    <div class="container">
      <div class="logo-container">
        <a href="#" aria-label="SpaeXpress Home">
          <img src="@/assets/brands/logo.svg" alt="SpaeXpress Logo" class="logo" />
        </a>
      </div>
      <nav class="navigation" :class="{ 'is-open': isMenuOpen }" role="navigation" aria-label="Main navigation">
        <ul>
          <li><a href="#services" @click="closeMenu">Services</a></li>
          <li><a href="#how-it-works" @click="closeMenu">How It Works</a></li>
          <li><a href="#about-us" @click="closeMenu">About Us</a></li>
          <li><a href="#testimonials" @click="closeMenu">Testimonials</a></li>
          <li><a href="#faq" @click="closeMenu">FAQ</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
        </ul>
      </nav>
      <div class="cta-container">
        <a href="#contact" class="cta-button" aria-label="Get a free quote">Get a Quote</a>
      </div>
      <button
        class="hamburger"
        @click="toggleMenu"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        aria-expanded="isMenuOpen"
      >
        <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.header {
  background-color: var(--white);
  box-shadow: var(--shadow-sm);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  font-family: var(--font-family-body);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.95);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo-container a {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  transition: var(--transition);
}

.logo:hover {
  transform: scale(1.05);
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.navigation a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 600;
  transition: var(--transition);
  position: relative;
  padding: 0.5rem 0;
}

.navigation a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.navigation a:hover::after {
  width: 100%;
}

.navigation a:hover {
  color: var(--primary-color);
}

.cta-button {
  background-color: var(--secondary-color);
  color: var(--white);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-family: var(--font-family-headings);
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  transition: var(--transition);
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
}

.cta-button:hover {
  background-color: var(--secondary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
}

.hamburger {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  background: none;
  border: none;
  color: var(--text-color);
  padding: 0.5rem;
  transition: var(--transition);
}

.hamburger:hover {
  color: var(--primary-color);
}

.hamburger:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .navigation {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: var(--shadow-md);
  }

  .navigation.is-open {
    display: block;
  }

  .navigation ul {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 0.5rem;
  }

  .navigation li {
    width: 100%;
    text-align: center;
  }

  .navigation a {
    display: block;
    padding: 1rem;
    width: 100%;
  }

  .navigation a::after {
    display: none;
  }

  .cta-container {
    display: none;
  }

  .hamburger {
    display: block;
  }
}
</style>
