import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';

// Import sample data
import { allProducts } from '../data';

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    rating: 0,
    sortBy: 'newest',
  });
  
  useEffect(() => {
    // Filter products by category
    const filtered = category === 'all' 
      ? allProducts 
      : allProducts.filter(product => product.category.toLowerCase() === category);
    
    setProducts(filtered);
    setFilteredProducts(filtered);
  }, [category]);
  
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Apply filters
    let filtered = [...products];
    
    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= newFilters.priceRange[0] && 
      product.price <= newFilters.priceRange[1]
    );
    
    // Rating filter
    if (newFilters.rating > 0) {
      filtered = filtered.filter(product => product.rating >= newFilters.rating);
    }
    
    // Sort
    switch (newFilters.sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        break;
    }
    
    setFilteredProducts(filtered);
  };
  
  return (
    <ProductsContainer>
      <div className="container">
        <PageHeader>
          <h1>{category === 'all' ? 'All Products' : `${category.charAt(0).toUpperCase() + category.slice(1)}`}</h1>
          <p>{filteredProducts.length} products found</p>
        </PageHeader>
        
        <ProductsContent>
          {/* Mobile Filter Toggle */}
          <MobileFilterToggle onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <FiFilter /> Filters
          </MobileFilterToggle>
          
          {/* Filters Sidebar */}
          <FilterSidebar isOpen={isFilterOpen}>
            <FilterHeader>
              <h3>Filters</h3>
              <CloseButton onClick={() => setIsFilterOpen(false)}>
                <FiX />
              </CloseButton>
            </FilterHeader>
            
            <FilterSection>
              <FilterTitle>
                Price Range
              </FilterTitle>
              <RangeSlider>
                <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  value={filters.priceRange[1]} 
                  onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                />
                <RangeValues>
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </RangeValues>
              </RangeSlider>
            </FilterSection>
            
            <FilterSection>
              <FilterTitle>
                Rating
              </FilterTitle>
              <RatingFilter>
                {[5, 4, 3, 2, 1].map(rating => (
                  <RatingOption 
                    key={rating}
                    active={filters.rating === rating}
                    onClick={() => handleFilterChange('rating', rating === filters.rating ? 0 : rating)}
                  >
                    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                    <span>& Up</span>
                  </RatingOption>
                ))}
              </RatingFilter>
            </FilterSection>
            
            <FilterSection>
              <FilterTitle>
                Sort By
              </FilterTitle>
              <SortOptions>
                <SortOption 
                  active={filters.sortBy === 'newest'}
                  onClick={() => handleFilterChange('sortBy', 'newest')}
                >
                  Newest
                </SortOption>
                <SortOption 
                  active={filters.sortBy === 'price-low-high'}
                  onClick={() => handleFilterChange('sortBy', 'price-low-high')}
                >
                  Price: Low to High
                </SortOption>
                <SortOption 
                  active={filters.sortBy === 'price-high-low'}
                  onClick={() => handleFilterChange('sortBy', 'price-high-low')}
                >
                  Price: High to Low
                </SortOption>
                <SortOption 
                  active={filters.sortBy === 'rating'}
                  onClick={() => handleFilterChange('sortBy', 'rating')}
                >
                  Top Rated
                </SortOption>
              </SortOptions>
            </FilterSection>
          </FilterSidebar>
          
          {/* Products Grid */}
          <ProductsGrid>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <NoProducts>
                <h3>No products found</h3>
                <p>Try adjusting your filters</p>
              </NoProducts>
            )}
          </ProductsGrid>
        </ProductsContent>
      </div>
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  padding: 120px 0 80px;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  
  p {
    color: ${({ theme }) => theme.text}aa;
  }
`;

const ProductsContent = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const MobileFilterToggle = styled.button`
display: none;
align-items: center;
gap: 10px;
padding: 10px 20px;
background-color: ${({ theme }) => theme.card};
border-radius: 4px;
margin-bottom: 20px;

@media (max-width: 992px) {
  display: flex;
}
`;

const FilterSidebar = styled.div`
width: 280px;
flex-shrink: 0;
background-color: ${({ theme }) => theme.card};
border-radius: 8px;
padding: 20px;
height: fit-content;

@media (max-width: 992px) {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  z-index: 1000;
  transform: translateX(${({ isOpen }) => isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;
  overflow-y: auto;
}
`;

const FilterHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

h3 {
  font-size: 1.2rem;
  font-weight: 600;
}
`;

const CloseButton = styled.button`
background: none;
font-size: 1.2rem;
display: none;

@media (max-width: 992px) {
  display: block;
}
`;

const FilterSection = styled.div`
margin-bottom: 30px;
border-bottom: 1px solid ${({ theme }) => theme.border};
padding-bottom: 20px;

&:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
`;

const FilterTitle = styled.h4`
font-size: 1rem;
font-weight: 600;
margin-bottom: 15px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const RangeSlider = styled.div`
input {
  width: 100%;
  -webkit-appearance: none;
  height: 5px;
  background: ${({ theme }) => theme.border};
  border-radius: 5px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    cursor: pointer;
  }
}
`;

const RangeValues = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
font-size: 0.9rem;
color: ${({ theme }) => theme.text}aa;
`;

const RatingFilter = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const RatingOption = styled.button`
background: none;
text-align: left;
color: ${({ active, theme }) => active ? theme.primary : theme.text};
font-weight: ${({ active }) => active ? '600' : '400'};

span {
  margin-left: 5px;
  font-size: 0.9rem;
}
`;

const SortOptions = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const SortOption = styled.button`
background: none;
text-align: left;
color: ${({ active, theme }) => active ? theme.primary : theme.text};
font-weight: ${({ active }) => active ? '600' : '400'};
`;

const ProductsGrid = styled.div`
flex: 1;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 30px;
`;

const NoProducts = styled.div`
grid-column: 1 / -1;
text-align: center;
padding: 50px 0;

h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  color: ${({ theme }) => theme.text}aa;
}
`;

export default Products;