import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
// Update the imports for Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

// Import sample data
import { featuredProducts, categories } from '../data';


const Home = () => {
  return (
    <HomeContainer>
      {/* Hero Section with Carousel */}
      <HeroSection>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="hero-swiper"
        >
          <SwiperSlide>
            <HeroSlide bg="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80">
              <div className="container">
                <HeroContent
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1>Experience Sound Like Never Before</h1>
                  <p>Immerse yourself in crystal clear audio with our premium headphones</p>
                  <HeroButton to="/products/headphones">Shop Now</HeroButton>
                </HeroContent>
              </div>
            </HeroSlide>
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide bg="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80">
              <div className="container">
                <HeroContent
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1>Wireless Freedom</h1>
                  <p>Cut the cord with our latest true wireless earbuds</p>
                  <HeroButton to="/products/earphones">Explore Now</HeroButton>
                </HeroContent>
              </div>
            </HeroSlide>
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide bg="https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80">
              <div className="container">
                <HeroContent
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1>Party Anywhere</h1>
                  <p>Powerful portable speakers for your next adventure</p>
                  <HeroButton to="/products/speakers">Discover More</HeroButton>
                </HeroContent>
              </div>
            </HeroSlide>
          </SwiperSlide>
        </Swiper>
      </HeroSection>

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Shop By Category</h2>
          <CategoriesGrid>
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                to={`/products/${category.slug}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CategoryImage src={category.image} alt={category.name} />
                <CategoryName>{category.name}</CategoryName>
                <CategoryOverlay>
                  <span>View All</span>
                </CategoryOverlay>
              </CategoryCard>
            ))}
          </CategoriesGrid>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section" style={{ background: ({ theme }) => theme.background }}>
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <ProductsGrid>
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </ProductsGrid>
          <ViewAllButton to="/products/all">View All Products</ViewAllButton>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection>
        <div className="container">
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🚚</FeatureIcon>
              <FeatureTitle>Free Shipping</FeatureTitle>
              <FeatureText>On all orders above $50</FeatureText>
            </FeatureCard>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureTitle>Easy Returns</FeatureTitle>
              <FeatureText>30-day return policy</FeatureText>
            </FeatureCard>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🔒</FeatureIcon>
              <FeatureTitle>Secure Checkout</FeatureTitle>
              <FeatureText>100% protected payments</FeatureText>
            </FeatureCard>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🎧</FeatureIcon>
              <FeatureTitle>Premium Quality</FeatureTitle>
              <FeatureText>2-year warranty on all products</FeatureText>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </FeaturesSection>

      {/* Newsletter Section */}
      <NewsletterSection>
        <div className="container">
          <NewsletterContent>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Subscribe to Our Newsletter</h2>
              <p>Get the latest updates on new products and upcoming sales</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <NewsletterForm>
                <NewsletterInput type="email" placeholder="Your email address" />
                <NewsletterButton>Subscribe</NewsletterButton>
              </NewsletterForm>
            </motion.div>
          </NewsletterContent>
        </div>
      </NewsletterSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding-top: 0;
`;

const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  
  .hero-swiper {
    height: 100%;
  }
  
  .swiper-pagination-bullet {
    background-color: white;
    opacity: 0.7;
    
    &-active {
      opacity: 1;
      background-color: ${({ theme }) => theme.primary};
    }
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;

const HeroSlide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;
  color: white;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const HeroButton = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: translateY(-3px);
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const CategoryCard = styled(motion(Link))`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 200px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    
    img {
      transform: scale(1.1);
    }
    
    div {
      opacity: 1;
    }
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CategoryName = styled.h3`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  z-index: 2;
`;

const CategoryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  span {
    color: white;
    background-color: ${({ theme }) => theme.primary};
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 600;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`;

const ViewAllButton = styled(Link)`
  display: block;
  margin: 40px auto 0;
  padding: 12px 30px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-align: center;
  max-width: 200px;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const FeaturesSection = styled.section`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.card};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const FeatureCard = styled(motion.div)`
  padding: 30px;
  text-align: center;
  border-radius: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const FeatureText = styled.p`
  color: ${({ theme }) => theme.text}aa;
`;

const NewsletterSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  color: white;
`;

const NewsletterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 10px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  padding: 15px;
  min-width: 300px;
  border: none;
  border-radius: 4px;
  
  @media (max-width: 576px) {
    min-width: auto;
  }
`;

const NewsletterButton = styled.button`
  padding: 15px 30px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export default Home;