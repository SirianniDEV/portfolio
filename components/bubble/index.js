import styled from 'styled-components';
import { IoIosDesktop } from "react-icons/io";


const Container = styled.div
`
    z-index: 5;
    position: relative;

`
const BubbleStyle = styled.span
`
    width: ${props=>props.width||"150px"};
    height: ${props=>props.height||"150px"};
    background: ${props=>props.color||"#8FB6FF"};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: ${props=>props.iconSize||"6rem"};
`
const Shadow = styled.div
`
    width: 100%;
    height: 100%;
    top:3px;
    left: 10px;
    position: absolute;
    background: inherit;
    border: 4px solid #8FB6FF;
    z-index: -1;
    border-radius: 50%;
`

export default function Bubble({
    icon="<IoIosDesktop/>",
    width="150px",
    height="150px",
    color="#8FB6FF",
    iconSize="6rem"
}){

	return( 
        <Container>
            <BubbleStyle color={color} width={width} height={height} iconSize={iconSize}>
                {icon} 
            </BubbleStyle>
            <Shadow></Shadow>
        </Container>
)
}