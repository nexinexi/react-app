import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.dir || 'row'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || 0};
`;