import React from 'react';
import { List, StyledBreadcrumbs, Item } from './styles';
import { Container } from '../Container';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <StyledBreadcrumbs>
      <Container>
        <List>
          {crumbs.map((crumb, i) =>
            <Item key={i}>
              {crumb.path ?
                <Link to={crumb.path}>{crumb.name}</Link> :
                crumb.name
              }
            </Item>
          )}
        </List>
      </Container>
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;