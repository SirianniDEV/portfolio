import styled from 'styled-components';

import { IoIosClose } from "react-icons/io";

const WindowContainer = styled.div
`
    display: flex;
    z-index: 5;
    position: relative;

`
const Bar = styled.div
`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    background: #E1F5FF;
    border-bottom: 4px solid #8FB6FF;
    padding: 15px;
`
const Circle1 = styled.span
`
    width: 30px;
    height: 30px;
    background: #8FB6FF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`
const Circle2 = styled.span
`
    width: 30px;
    height: 30px;
    border: 3px solid #8FB6FF;
    border-radius: 50%;
`
const Container = styled.div
`
    background-color: #f5f5f5;
    min-width: 300px;
    max-width: 500px;
    height: 100%;
    border: 4px solid #8FB6FF;
`
const Text = styled.p
`
    padding: 10px;
    font-size: 0.9rem;
    font-family: Montserrat;
`
const Shadow = styled.div
`
    width: 100%;
    height: 100%;
    top:10px;
    left: 10px;
    position: absolute;
    background: #E1F5FF;
    border: 4px solid #8FB6FF;
    z-index: -1;
`

export default function Window({
    txt1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia.",
    txt2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia."
}){


    const iconStyle = { 
        color: "#E1F5FF", 
        fontSize: "5rem", 
      };

	return( 
        <WindowContainer>
            <Container>
            <Bar>
                <Circle1><IoIosClose style={iconStyle}  /></Circle1>
                <Circle2></Circle2>
                <Circle2></Circle2>
            </Bar>
            <Text>{txt1}</Text>
            <Text>{txt2}</Text>
            </Container>
            <Shadow></Shadow>
        </WindowContainer>
)
}