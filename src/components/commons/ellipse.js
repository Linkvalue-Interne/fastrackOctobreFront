import styled from '@emotion/styled';

// <Ellipse />
export const Ellipse = styled.div`
position: absolute;
width: 1rem;
height: 1rem;
background: ${(props) => console.log(props.theme)};
border-radius: 25px; 
top: 50%;
-ms-transform: translateY(-50%);
transform: translateY(-50%);
`;

export default Ellipse; 