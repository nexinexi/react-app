import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 250px;
  padding: 20px 0;
  color: #ffffff;
  background-color: #b31515;
  transition: background-color .3s ease;
  border-radius: 40px;
  cursor: pointer;
  border: none;
  outline: none;
  
  &:hover {
    background-color: #730808;
  }
`;

StyledButton.defaultProps = {
  type: 'button'
};