import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterColumn>
            <FooterLogo>ERIS</FooterLogo>
            <FooterText>
              Experience the extraordinary sound quality with our premium audio products.
              From earphones to speakers, we've got you covered.
            </FooterText>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FiFacebook />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </SocialLink>
              <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FiYoutube />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Products</FooterTitle>
            <FooterLinks>
              <FooterLink to="/products/earphones">Earphones</FooterLink>
              <FooterLink to="/products/headphones">Headphones</FooterLink>
              <FooterLink to="/products/speakers">Speakers</FooterLink>
              <FooterLink to="/products/watches">Smart Watches</FooterLink>
              <FooterLink to="/products/accessories">Accessories</FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Support</FooterTitle>
            <FooterLinks>
              <FooterLink to="/support/faq">FAQs</FooterLink>
              <FooterLink to="/support/warranty">Warranty</FooterLink>
              <FooterLink to="/support/track-order">Track Order</FooterLink>
              <FooterLink to="/support/shipping">Shipping</FooterLink>
              <FooterLink to="/support/returns">Returns</FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Company</FooterTitle>
            <FooterLinks>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/press">Press</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>&copy; {new Date().getFullYear()} BOAT. All rights reserved.</Copyright>
          <FooterBottomLinks>
            <FooterBottomLink to="/privacy">Privacy Policy</FooterBottomLink>
            <FooterBottomLink to="/terms">Terms of Service</FooterBottomLink>
            <FooterBottomLink to="/sitemap">Sitemap</FooterBottomLink>
          </FooterBottomLinks>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.card};
  padding: 80px 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.text}cc;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.text}cc;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.border};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.text}aa;
  font-size: 0.9rem;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterBottomLink = styled(Link)`
  color: ${({ theme }) => theme.text}aa;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export default Footer;