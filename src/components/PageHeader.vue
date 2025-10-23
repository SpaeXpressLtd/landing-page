<template>
  <header class="header">
    <div class="container">
      <div class="logo-container">
        <img src="@/assets/brands/logo.svg" alt="SpaeXpress Logo" class="logo" />
      </div>
      <nav class="navigation" :class="{ 'is-open': isMenuOpen }">
        <ul>
          <li><a href="#services" @click="closeMenu">Services</a></li>
          <li><a href="#how-it-works" @click="closeMenu">How It Works</a></li>
          <li><a href="#about-us" @click="closeMenu">About Us</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
        </ul>
      </nav>
      <div class="cta-container">
        <button class="cta-button">Get a Quote</button>
      </div>
      <div class="hamburger" @click="toggleMenu">
        <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </div>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');

.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  font-family: 'Open Sans', sans-serif;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  height: 50px;
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.navigation a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;
}

.navigation a:hover {
  color: #007BFF;
}

.cta-button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #45a049;
}

.hamburger {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .navigation {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .navigation.is-open {
    display: block;
  }

  .navigation ul {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }

  .hamburger {
    display: block;
  }
}
</style>
