import styled from "styled-components";

export const List = styled.ul`
list-style: none;
margin: 0 auto;
width: 300px;
display:flex;
flex-direction: column;
gap: 13px;
padding: 0;
`;

export const Item = styled.li`
margin: 0;
display: flex;
height: auto;
width: 100%;
background-color: #ffffff;
border-radius: 6px;
padding:10px;
align-items: center;
gap: 20px;
box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.55);
`;

export const Status = styled.span`
display: block;
width: 17px;
height: 17px;
border: 1px solid black;
border-radius: 50%;
background-color: ${props =>{
    return props.isOnline ? 'green' : 'red';
}};
`;

export const Name = styled.p`
font-size: 24px;
font-weight: 400;
`;