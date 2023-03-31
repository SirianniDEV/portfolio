import styled from 'styled-components';

const Button = styled.button
`
    background: ${props=>props.bg||"rgba(156, 183, 255, 0.29)"};
    border: 1px solid #9CB7FF;
    box-shadow: 0px 3px 0px 1px #9CB7FF;
    border-radius: 4px;
`

export default function AppButton({
    txt='hi',
    bgColor = 'rgba(156, 183, 255, 0.29)',
}) 
{
    return (
        <>
        <Button bg={bgColor} >{txt}</Button>
        </>
    )
}