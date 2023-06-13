import styled from "styled-components";
import Image from "next/image";


const CircleImg = styled.img
`
    background-image: url(${props => props.src});
    background: #E1F5FF;
    border: 5px solid #8FB6FF;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    box-shadow: 5px 5px 0px 0px #8FB6FF;
    margin: 25px;
`

export default function CircleImage({
    src="/PlacerPhoto.svg",
}){
    return(
            <CircleImg src={src}>

            </CircleImg>

    );
}