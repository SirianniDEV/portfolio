import styled from 'styled-components';

const WindowContainer = styled.div
`
    width: 400px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

`
const Bar = styled.div
`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    background-color: #9CB7FF;
    padding: 15px;
`
const Square = styled.div
`
    width:20px;
    // color: white;

`
const Container = styled.div
`
    background-color: #f5f5f5;
    height: 300px;

`

export default function Window(){
	return( 
        <WindowContainer>
            <Bar>
                <Square>X</Square>
                <Square>▢</Square>
                <Square>__</Square>
            </Bar>
            <Container>
                    
            </Container>
        </WindowContainer>
)
}