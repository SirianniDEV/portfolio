import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div
`
    z-index: 5;
    position: relative;
`

export const PolaroidContainer = styled.div
`   
    display: flex;
    align-items: flex-start;
    min-width: 300px;
    min-height: 350px;
    background: #FFFFFF;
    border: 4px solid #8FB6FF;
    padding:10px;
`
const Shadow1 = styled.div
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
const Shadow2 = styled.div
`
    width: 100%;
    height: 100%;
    top:20px;
    left: 20px;
    position: absolute;
    background: #E1F5FF;
    border: 4px solid #8FB6FF;
    z-index: -2;
`
export default function Polaroid({
    src="/PlacerPhoto.svg",
    alt="PlacerPhoto",
    width="450px",

}){
    
        return(
            <Container>
                    <PolaroidContainer>
                        <Image src={src} alt={alt} width={width}/>
                    </PolaroidContainer>
                <Shadow1/>
                <Shadow2/>
            </Container>
        )
}