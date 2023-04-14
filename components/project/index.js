import styled from "styled-components";
import Image from "next/image";

const Container = styled.div
`
    border: 3px solid #8FB6FF;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: #8FB6FF;
        cursor: pointer;
    }
`

const Bar = styled.div
`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    height: 50px;
    background: #E1F5FF;
    border: 3px solid #8FB6FF;
    padding: 10px;
    margin: 7px;
    width: 97%;
`
const Title = styled.h1
`
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: 400;
`
const CircleContainer = styled.div
`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const Circle1 = styled.span
`
    width: 30px;
    height: 30px;
    background: #8FB6FF;
    border-radius: 50%;
    color: white;
`
const Circle2 = styled.span
`
    width: 30px;
    height: 30px;
    border: 3px solid #8FB6FF;
    border-radius: 50%;
`
const ProjectImage = styled(Image)
`
 width: 97%;
 border: 3px solid #8FB6FF;
 margin: 10px;
 margin-top: 0px;
 background: #E1F5FF;
`

export default function Project({
    src="/PlacerPhoto.svg",
    txt="Project Title",
}){
    return(
        <Container>
            <Bar>
                <Title>{txt}</Title>
                <CircleContainer>
                    <Circle1/>
                    <Circle2/>
                    <Circle2/>
                </CircleContainer>
            </Bar>
            <ProjectImage src={src} width={500} height={300}/>
        </Container>
    );
}