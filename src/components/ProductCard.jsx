import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Add to cart using context
    addToCart(product);
    
    // Animation for cart addition
    setIsAdded(true);
    
    // Reset animation after 1.5 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };


  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={product.image} alt={product.name} />
        {product.discount && <DiscountBadge>-{product.discount}%</DiscountBadge>}
        <CardActions>
          <CardActionButton>
            <FiHeart />
          </CardActionButton>
          <CardActionButton as={Link} to={`/product/${product.id}`}>
            <FiEye />
          </CardActionButton>
        </CardActions>
      </CardImageContainer>
      <CardContent>
        <CardCategory>{product.category}</CardCategory>
        <CardTitle to={`/product/${product.id}`}>{product.name}</CardTitle>
        <CardPricing>
          <CurrentPrice>${product.price.toFixed(2)}</CurrentPrice>
          {product.oldPrice && (
            <OldPrice>${product.oldPrice.toFixed(2)}</OldPrice>
          )}
        </CardPricing>
        <CardRating>
          {'★'.repeat(product.rating)}
          {'☆'.repeat(5 - product.rating)}
          <span>({product.reviews})</span>
        </CardRating>
        
        <CardButtonsContainer>
          <ViewDetailsButton to={`/product/${product.id}`}>
            View Details
          </ViewDetailsButton>
          
          <BuyNowButton to="/checkout">
            Buy Now
          </BuyNowButton>
          
          <AddToCartButton 
            onClick={handleAddToCart}
            animate={isAdded ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <FiShoppingCart />
            {isAdded ? 'Added!' : 'Add to Cart'}
          </AddToCartButton>
        </CardButtonsContainer>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadow};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const CardActions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  opacity: 0;
  transform: translateX(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  ${CardContainer}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const CardActionButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardCategory = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text}aa;
  margin-bottom: 5px;
`;

const CardTitle = styled(Link)`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  display: block;
  color: ${({ theme }) => theme.text};
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const CardPricing = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const CurrentPrice = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const OldPrice = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text}aa;
  text-decoration: line-through;
`;

const CardRating = styled.div`
  color: #FFD700;
  font-size: 0.9rem;
  
  span {
    color: ${({ theme }) => theme.text}aa;
    margin-left: 5px;
  }
`;

const CardButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 15px;
`;

const ButtonBase = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
`;

const ViewDetailsButton = styled(ButtonBase)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  grid-column: 1 / 2;
  
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;

const BuyNowButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.secondary};
  color: white;
  grid-column: 2 / 3;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const AddToCartButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 4px;
  font-weight: 600;
  grid-column: 1 / 3;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: translateY(-2px);
  }
`;

export default ProductCard;