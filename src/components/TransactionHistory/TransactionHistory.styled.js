import styled from 'styled-components';

export const Table = styled.table`
margin-left: auto;
margin-right: auto;
width: 950px;
border: 2px solid grey
`;

export const Thead = styled.thead`
background-color: #00bcd5;
color: #ffffff;

font-size: 25px;
height: 50px;
`;

export const Tbody = styled.tbody`
background-color: #ffffff;
text-align: center;
font-size: 20px;
`;

export const String = styled.tr`
height: 35px;
    &:nth-child(even){
        background-color: lightgrey;
    }
`