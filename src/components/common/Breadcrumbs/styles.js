import styled from 'styled-components';

export const StyledBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #171533;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 -10px;
`;

export const Item = styled.li`
  font-size: 18px;
  color: #ffffff;
  padding-left: 10px;
  
  &:not(:last-child)::after {
    content: '>';
    margin-left: 10px;
  }
  
  a {
    color: #ffffff;
  }
`;