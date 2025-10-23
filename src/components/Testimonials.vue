<template>
    <section id="testimonials" class="testimonials">
        <div class="container">
            <h2 class="section-title">What Our Customers Say</h2>
            <p class="section-subtitle">Trusted by thousands of customers worldwide</p>
            <div class="testimonial-grid">
                <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
                    <div class="quote-icon">
                        <i class="fas fa-quote-left"></i>
                    </div>
                    <p class="testimonial-text">{{ testimonial.text }}</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">
                            {{ testimonial.name.charAt(0) }}
                        </div>
                        <div class="author-info">
                            <h4>{{ testimonial.name }}</h4>
                            <p>{{ testimonial.location }}</p>
                        </div>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star" v-for="star in 5" :key="star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Testimonials',
    data() {
        return {
            testimonials: [
                {
                    name: 'Chioma Okafor',
                    location: 'Lagos, Nigeria',
                    text: 'SpaeXpress made shipping my packages to London so easy! The tracking was accurate and my items arrived in perfect condition. Highly recommended!',
                },
                {
                    name: 'David Thompson',
                    location: 'London, UK',
                    text: 'The buy and ship service is incredible. They purchased electronics for me from Nigeria and delivered them safely. Great customer service throughout.',
                },
                {
                    name: 'Amina Hassan',
                    location: 'Manchester, UK',
                    text: 'I have been using SpaeXpress for over a year now. They are reliable, affordable, and always deliver on time. Best shipping company I have worked with!',
                },
            ],
        };
    },
};
</script>

<style scoped>
.testimonials {
    padding: 5rem 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.testimonial-card {
    background-color: #fff;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
}

.testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.quote-icon {
    color: #007BFF;
    font-size: 2rem;
    margin-bottom: 1rem;
    opacity: 0.3;
}

.testimonial-text {
    font-family: 'Open Sans', sans-serif;
    color: #555;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-style: italic;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
}

.author-info h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    margin: 0;
    color: #333;
}

.author-info p {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
    margin: 0;
    color: #777;
}

.rating {
    color: #ffc107;
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .testimonial-grid {
        grid-template-columns: 1fr;
    }

    .section-title {
        font-size: 2rem;
    }
}
</style>
