import styled from "styled-components";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Card = styled.section`
width: 350px;
height: 160px;
margin-left: auto;
margin-right: auto;
border-radius: 6px;
display: flex;
flex-direction: column;
background-color: #ffffff;
text-align: center;
border: 2px solid grey;

`;

export const Title = styled.h2`
height: 100px;
margin: 0;
margin-top: 5%;

`;

export const StatsList = styled.ul`
list-style-type: none;
display: flex;
margin: 0;
height: 100%;
width: 100%;
padding: 0;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 6px;
 color: #ffffff;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0;
height: 100%;
width: 100%;
border-top-right-radius: 5px;
border-top-left-radius: 2px;


&:first-child {
    border-bottom-left-radius: 6px;
    background-color: ${getRandomHexColor()};

}
&:nth-child(2){
    background-color: ${getRandomHexColor()};

}
&:nth-child(3){
    background-color: ${getRandomHexColor()};

}
&:nth-child(4){
    background-color: ${getRandomHexColor()};

}
&:last-child {
    border-bottom-right-radius: 6px;
    background-color: ${getRandomHexColor()};
}
& span:last-child{
    margin-top: 6px;
    font-size: 18px;
    font-weight: 700;
}
`;