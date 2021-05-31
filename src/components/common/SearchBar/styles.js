import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  background-color: #171533;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 45px;
  padding: 0 15px;
  background-color: #fafafa;
  border-radius: 40px;
  overflow: hidden;
  
  &:focus-within svg {
    color: #b31515;
  }
  
  svg {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    transition: .3s ease;
    color: #171533;
  }
  
  input {
    font-size: 18px;
    background-color: transparent;
    
    &::placeholder {
      position: relative;
      top: 2px;
    }
  }
`;