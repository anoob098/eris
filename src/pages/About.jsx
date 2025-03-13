import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <div className="container">
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About ERIS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafting premium audio experiences since 2016
            </motion.p>
          </HeroContent>
        </div>
      </HeroSection>

      <section className="section">
        <div className="container">
          <StorySection>
            <StoryContent>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Story
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Founded in 2016, ERIS began with a simple mission: to bring premium audio experiences to everyone. We noticed a gap in the market for high-quality audio products at accessible prices, and we set out to bridge that gap.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                What started as a small team of audio enthusiasts has now grown into one of the leading audio brands, with millions of satisfied customers worldwide. Our journey has been driven by innovation, quality, and a deep understanding of what our customers want.
              </motion.p>
            </StoryContent>
            <StoryImage
              src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="BOAT Story"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
          </StorySection>
        </div>
      </section>

      <ValuesSection>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <ValuesGrid>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ValueIcon>🎧</ValueIcon>
              <ValueTitle>Quality</ValueTitle>
              <ValueText>
                We never compromise on the quality of our products. Each device undergoes rigorous testing to ensure it meets our high standards.
              </ValueText>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ValueIcon>💡</ValueIcon>
              <ValueTitle>Innovation</ValueTitle>
              <ValueText>
                We're constantly pushing the boundaries of what's possible in audio technology, bringing you the latest advancements.
              </ValueText>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ValueIcon>👥</ValueIcon>
              <ValueTitle>Community</ValueTitle>
              <ValueText>
                We value our community of users and actively seek their feedback to improve our products and services.
              </ValueText>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ValueIcon>🌍</ValueIcon>
              <ValueTitle>Sustainability</ValueTitle>
              <ValueText>
                We're committed to reducing our environmental impact through sustainable practices and eco-friendly packaging.
              </ValueText>
            </ValueCard>
          </ValuesGrid>
        </div>
      </ValuesSection>

      <TeamSection>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <TeamGrid>
            {[
              {
                name: 'Alex Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
              },
              {
                name: 'Sarah Williams',
                role: 'Chief Design Officer',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Engineering',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Marketing Director',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
              }
            ].map((member, index) => (
              <TeamCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamImage src={member.image} alt={member.name} />
                <TeamInfo>
                  <TeamName>{member.name}</TeamName>
                  <TeamRole>{member.role}</TeamRole>
                </TeamInfo>
              </TeamCard>
            ))}
          </TeamGrid>
        </div>
      </TeamSection>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding-top: 0;
`;

const HeroSection = styled.section`
  height: 60vh;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1558537348-c0f8e733989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
`;

const HeroContent = styled.div`
  text-align: center;
  
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
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const StoryContent = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
    p {
    margin-bottom: 20px;
    line-height: 1.8;
    color: ${({ theme }) => theme.text}cc;
  }
`;

const StoryImage = styled(motion.img)`
  width: 100%;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const ValuesSection = styled.section`
  background-color: ${({ theme }) => theme.background};
  padding: 80px 0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ValueCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.card};
  padding: 30px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ValueTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

const ValueText = styled.p`
  color: ${({ theme }) => theme.text}cc;
  line-height: 1.6;
`;

const TeamSection = styled.section`
  padding: 80px 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const TeamCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TeamInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

const TeamName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const TeamRole = styled.p`
  color: ${({ theme }) => theme.text}aa;
`;

export default About;