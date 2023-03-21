import styled from "styled-components";

export const Card = styled.div`
width: 300px;
height: 460px;
margin-left: auto;
margin-right: auto;
border-radius: 6px;
display: flex;
flex-direction: column;
background-color: #ffffff;

`;

export const Description = styled.div`
width: 100%;
height: 380px;
text-align: center;
padding: 20px;
color: gray;
font-size: medium;
font-weight: 400;
`;

export const Img = styled.img`
display: block;
width: 100%;
height: auto;
margin: 0;
`;

export const Name = styled.p`
color: black;
font-size: 28px;
font-weight: 500;
margin: 0;
margin-top: 12px;
`;

export const Tag = styled.p`
margin: 0;
margin-top: 6px;
`;

export const Location = styled.p`
margin: 0;
margin-top: 6px;
`;

export const StatsList = styled.ul`
list-style-type: none;
display: flex;
margin: 0;
height: 100%;
width: 100%;
padding: 0;
/* border-top: 2px solid #757578; */
border-bottom-right-radius: 6px;
border-bottom-left-radius: 6px;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0;
height: 100%;
width: 100%;
background-color: #f3f6f9;
border-top: 2px solid #757578;
border-bottom: 2px solid #757578;
&:first-child {
    border-bottom-left-radius: 6px;
    border-left: 2px solid #757578;
    border-right: 2px solid #757578;
}
&:last-child {
    border-bottom-right-radius: 6px;
    border-left: 2px solid #757578;
    border-right: 2px solid #757578;
}
& span:first-child{
    color: gray;
}
& span:last-child{
    margin-top: 8px;
    font-size: 18px;
    font-weight: 700;
}
`;