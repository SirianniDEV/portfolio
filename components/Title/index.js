import styled from 'styled-components';

const Text = styled.h1
`
    color: #8FB6FF;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    padding: 10px;
    max-width: 900px;
`

export default function Title({
    txt="Hello World!"
}){
    return(
        <Text>
            {txt}
        </Text>
    );
}