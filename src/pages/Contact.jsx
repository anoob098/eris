import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
  return (
    <ContactContainer>
      <HeroSection>
        <div className="container">
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We'd love to hear from you
            </motion.p>
          </HeroContent>
        </div>
      </HeroSection>

      <section className="section">
        <div className="container">
          <ContactContent>
            <ContactInfo>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Have questions about our products or services? We're here to help. Reach out to us through any of the channels below.
              </motion.p>
              
              <ContactInfoItems>
                <ContactInfoItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <ContactInfoIcon>
                    <FiMapPin />
                  </ContactInfoIcon>
                  <div>
                    <ContactInfoTitle>Our Location</ContactInfoTitle>
                    <ContactInfoText>123 Audio Street, Sound City, SC 12345</ContactInfoText>
                  </div>
                </ContactInfoItem>
                
                <ContactInfoItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <ContactInfoIcon>
                    <FiPhone />
                  </ContactInfoIcon>
                  <div>
                    <ContactInfoTitle>Phone Number</ContactInfoTitle>
                    <ContactInfoText>+1 (555) 123-4567</ContactInfoText>
                  </div>
                </ContactInfoItem>
                
                <ContactInfoItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ContactInfoIcon>
                    <FiMail />
                  </ContactInfoIcon>
                  <div>
                    <ContactInfoTitle>Email Address</ContactInfoTitle>
                    <ContactInfoText>support@boataudio.com</ContactInfoText>
                  </div>
                </ContactInfoItem>
                
                <ContactInfoItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ContactInfoIcon>
                    <FiClock />
                  </ContactInfoIcon>
                  <div>
                    <ContactInfoTitle>Working Hours</ContactInfoTitle>
                    <ContactInfoText>Mon - Fri: 9:00 AM - 6:00 PM</ContactInfoText>
                  </div>
                </ContactInfoItem>
              </ContactInfoItems>
            </ContactInfo>
            
            <ContactForm
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Send Us a Message</h2>
              <FormGroup>
                <FormLabel>Your Name</FormLabel>
                <FormInput type="text" placeholder="John Doe" />
              </FormGroup>
              <FormGroup>
                <FormLabel>Your Email</FormLabel>
                <FormInput type="email" placeholder="john@example.com" />
              </FormGroup>
              <FormGroup>
                <FormLabel>Subject</FormLabel>
                <FormInput type="text" placeholder="How can we help you?" />
              </FormGroup>
              <FormGroup>
                <FormLabel>Your Message</FormLabel>
                <FormTextarea placeholder="Write your message here..." rows="5" />
              </FormGroup>
              <FormButton>Send Message</FormButton>
            </ContactForm>
          </ContactContent>
        </div>
      </section>
      
      <MapSection>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1619427748449!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="BOAT Office Location"
        />
      </MapSection>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding-top: 0;
`;

const HeroSection = styled.section`
  height: 40vh;
  min-height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80');
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 30px;
    line-height: 1.8;
    color: ${({ theme }) => theme.text}cc;
  }
`;

const ContactInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const ContactInfoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary}22;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ContactInfoText = styled.p`
  color: ${({ theme }) => theme.text}cc;
`;

const ContactForm = styled(motion.form)`
  background-color: ${({ theme }) => theme.card};
  padding: 30px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const FormButton = styled.button`
  padding: 12px 30px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: translateY(-2px);
  }
`;

const MapSection = styled.section`
  height: 450px;
  margin-top: 80px;
`;

export default Contact;