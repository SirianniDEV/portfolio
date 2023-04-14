import styled from "styled-components";

const Person = styled.div
`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 280px;
`
const Container = styled.div
`
    border-radius: 50%;
    height: 312px;
    -webkit-tap-highlight-color: transparent;
    transform: scale(0.48);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 400px;

     &:hover {
        transform: scale(0.54);
      }
`
const ContainerInner = styled.div
`
    position: relative;
    clip-path: path("M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z");
    transform-origin: 50%;
    top: -200px;

`

const Circle = styled.img
`
    border-radius: 50%;
    cursor: pointer;
    height: 380px;
    left: 10px;
    pointer-events: none;
    position: absolute;
    top: 210px;
    width: 500px;

    pointer-events: none;
    position: relative;
    transform: translateY(20px) scale(1.15);
    transform-origin: 50% bottom;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translateY(0) scale(1.2);
    }
`
const Img = styled.img
`
   

    pointer-events: none;
    position: relative;
    transform: translateY(20px) scale(1.15);
    transform-origin: 50% bottom;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translateY(0) scale(1.2);
    }
    
`

export default function Portrait(){
    return(
        <Person>
            <Container>
                <ContainerInner>
                    <Circle src="/SVG/portrait.svg"/>
                    <Img src="/SVG/portrait-bg.svg"/>
                </ContainerInner>
            </Container>
        </Person>
    );
}

// import styled from 'styled-components';

// const Person = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   width: 280px;
// `;

// const Container = styled.div`
//   border-radius: 50%;
//   height: 312px;
//   -webkit-tap-highlight-color: transparent;
//   transform: scale(0.48);
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   width: 400px;
//   &:hover {
//     transform: scale(0.54);
//   }
// `;

// const ContainerInner = styled.div`
//   clip-path: path(
//     "M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z"
//   );
//   position: relative;
//   transform-origin: 50%;
//   top: -200px;
// `;

// const Circle = styled.div`
//   background-color: #fee7d3;
//   border-radius: 50%;
//   cursor: pointer;
//   height: 380px;
//   left: 10px;
//   pointer-events: none;
//   position: absolute;
//   top: 210px;
//   width: 380px;
// `;

// const Img = styled.img`
//   pointer-events: none;
//   position: relative;
//   transform: translateY(20px) scale(1.15);
//   transform-origin: 50% bottom;
//   transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
//   left: 22px;
//   top: 164px;
//   width: 340px;
// `;

// const Img1 = styled(Img)`
//   left: 22px;
//   top: 164px;
//   width: 340px;
// `;

// // usage example
// export default function Portrait() {
//   return (
//     <Person>
//       <Container>
//         <ContainerInner>
//           <Circle />
//           <Img  src="/SVG/portrait.svg" />
//         </ContainerInner>
//       </Container>
//     </Person>
//   );
// }


