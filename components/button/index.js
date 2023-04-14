import styled,{ keyframes } from 'styled-components';

const stripeSlide = keyframes`
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const BodyContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 22px;
`;

const Button = styled.button`
  overflow: visible;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  font: inherit;
  line-height: normal;
  cursor: pointer;
  -moz-user-select: text;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 16px 36px 22px;
  background-color: #E1F5FF;
  color:#8FB6FF;
  border: 3px solid #8FB6FF;
  border-radius: 3px;
  margin-bottom: 16px;
  transition: all 0.5s ease;
  
  &:focus {
    padding: 0;
    border: 0;
  }

  &.btn--stripe {
    overflow: hidden;
    position: relative;

    &:after {
      content: "";
      display: block;
      height: 7px;
      width: 100%;
      background-image: repeating-linear-gradient(45deg, #666, #666 1px, transparent 2px, transparent 5px);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-top: 1px solid #8FB6FF;
      position: absolute;
      left: 0;
      bottom: 0;
      background-size: 7px 7px;
      width: 400px;
    }

    &:hover {
      background-color: #F6DDAD;
      color: #8FB6FF;
      border-color: #8FB6FF;

      &:after {
        background-image: repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 2px, transparent 5px);
        border-top: 1px solid #8FB6FF;
        -webkit-animation: ${stripeSlide} 12s infinite linear forwards;
        animation: ${stripeSlide} 12s infinite linear forwards;
      }
    }
  }

  &.btn--large {
    width: 50%;
  }

  &.btn--radius {
    border-radius: 5px;
  }
`;
export default function AppButton({
    txt='Click Me',
    handleClick,
}) 
{
  function onClickHandler() {
    console.log('button clicked!')
    handleClick && handleClick()
}
    return (
 

        <BodyContainer>
            <Button className="btn--stripe btn--large btn--radius" onClick={handleClick}>{txt}</Button>
        </BodyContainer>
    )
}