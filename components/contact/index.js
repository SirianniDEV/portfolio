import styled from 'styled-components';
import { useState } from 'react';
import AppButton from '../button';
import Window from '../window';
import emailjs from '@emailjs/browser';

const WindowContainer = styled.div
`
    display: flex;
    z-index: 5;
    position: relative;
    font-family: Montserrat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
const Container = styled.div
`
    background: #FFFFFF;
    min-width: 300px;
    max-width: 500px;
    height: 100%;
    border: 4px solid #8FB6FF;

`
const Bar = styled.div
`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    background: #E1F5FF;
    border-bottom: 4px solid #8FB6FF;
    padding: 15px;
`
const Circle1 = styled.span
`
    width: 30px;
    height: 30px;
    border: 3px solid #8FB6FF;
    border-radius: 50%;
`
const Form = styled.form
`
    display:flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    gap: 10px;
    
`

const Info = styled.div
`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
 
`
const Message = styled.textarea
`
    background: #F1F1F1;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
    border: none;
    font: 14px;
    padding: 10px;
    border-radius: 3px;
    height: 150px;
    margin: 10px;
    font-family: Montserrat;
    border: 3px solid #8FB6FF;

`
const Input = styled.input
`
    background: #F5f5f5;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
    border: none;
    font: 14px;
    padding: 10px;
    border-radius: 3px;
    font-family: Montserrat;
    border: 3px solid #8FB6FF;

`
const RadioInput = styled.input
`
    cursor: none;
`
const Divider = styled.hr
`
    width: 80%;
    border: 1px solid #8FB6FF;
`
const Shadow = styled.div
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

export default function Contact(){

        const [submitted, setSubmitted] = useState(false);
        // const handleSubmit = (event) => {
        //  event.preventDefault();
        //   setTimeout(() => {
        //     setSubmitted(true);
        //   }, 100);
        // };

        const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_3znbj96', 'template_iya01mk', e.target, '7sQiPRTWhthUOc4yz')
            setTimeout(() => {
              setSubmitted(true);
            }, 100);
        }

        const [selectedOption, setSelectedOption] = useState(null);
          
        const handleButtonClick = (option) => {
            if (selectedOption === option) {
                setSelectedOption(null);
            } else {
                setSelectedOption(option);
              }
            }
    
        if (submitted) {

          return (
            <WindowContainer>
            <Window
                txt1='Thank you! Your message has been sent. We&apos;ll be in touch soon.'
                txt2=''/>

                <AppButton txt='Back' handleClick={() => setSubmitted(false)} />
                <AppButton txt='Home' handleClick={() => window.location.href = '/'} />    
                         
            </WindowContainer>
          );
        };

    return (
        <WindowContainer>
        <Container>

        <Bar>
            <Circle1></Circle1>
            <Circle1></Circle1>
        </Bar>

            <Info>
            <h1>Contact Form</h1>
            <Divider/>
            {/* <p>Want to work together?</p>
            <p> Fill out the form below and I will get back to you shortly. Can't wait to connect!</p> */}
            </Info>
            
            <Form   
                onSubmit={sendEmail}
                // method="POST"
                >

            <Input type='text' placeholder='Name' name='name_from'></Input>
            <Input  type='text'placeholder='Email' name='email_from' ></Input>

            <div>
             <p> I am looking for:</p>
                <RadioInput type="radio" id="graphic design" name="services_design" value="graphic design" 
                checked={selectedOption === 'graphic deisgn'}   onClick={() => handleButtonClick('graphic deisgn')}></RadioInput>
                <label>Graphic Design </label>
            </div>
            <div>
                <RadioInput type="radio" id="web services" name="services_website" value="web services"
                checked={selectedOption === 'web services'}   onClick={() => handleButtonClick('web services')}></RadioInput>
                <label>Website Services </label>
            </div>
            <div>
                <RadioInput type="radio" id="digital marketing" name="services_marketing" value="digital marketing"
                checked={selectedOption === 'digital marketing'}   onClick={() => handleButtonClick('digital marketing')}></RadioInput>
                <label>Digital Marketing </label>
            </div>

                <Message type='text' name="message" placeholder='Briefly explain what you are looking for...'/>

                <AppButton type="submit" txt='Send' /*handleClick={handleSubmit}*/  />
        
            </Form>
        </Container>
        <Shadow></Shadow>
    </WindowContainer>
    )
}