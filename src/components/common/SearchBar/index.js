import React, { useRef, useState } from 'react';
import { Content, StyledSearchBar } from './styles';
import { Container } from '../Container';
import { BiSearch } from 'react-icons/all';
import Input from '../Input'

const SearchBar = ({ callback }) => {
  const [inputValue, setInputValue] = useState('');
  const timeOut = useRef(0);
  
  const onChangeHandler = (e) => {
    const { value } = e.target;
    
    clearTimeout(timeOut.current);
    setInputValue(value);
    
    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  }
  
  return (
    <StyledSearchBar>
      <Container>
        <Content>
          <BiSearch />
          <Input
            onChange={onChangeHandler}
            placeholder="Search Movies"
            defaultValue={inputValue}
          />
        </Content>
      </Container>
    </StyledSearchBar>
  );
}

export default SearchBar;