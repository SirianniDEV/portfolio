import styled from 'styled-components';

const Text = styled.p
`
    padding: 10px;
    font-size: 1.5rem;
    padding: 0px;
    margin:0px;
    text-align: ${props => props.align};
    font-family: Montserrat;
    color: ${props => props.color};
`

export default function AppText ({
    txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia.",
    align="left",
    color="#000000"
}){

	return( 
            <Text align={align} color={color}>{txt}</Text>
)
}