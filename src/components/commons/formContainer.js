import styled from '@emotion/styled';

const FormContainer = styled.div`
width: 30%;
top: 0;
height: 100vh;
left: 100%;
position: fixed;
z-index: 10;
background-color: #28ABE2;
transition: left 1s;

${(props) => props.animate && `
left: 70%;
`}

${(props) => !props.animate && `
left: 100%;
`}

`;

export default FormContainer;