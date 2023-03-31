import styled from 'styled-components';
import { useState } from 'react';
import AppButton from '../button';

const Container = styled.div
`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 15px;

`
const Form = styled.div
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
`
const Input = styled.input
`
    background: #F1F1F1;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
    border: none;
    font: 14px;
    padding: 10px;
    border-radius: 3px;

`
const RadioInput = styled.input
`
`


export default function Contact(){

        const [submitted, setSubmitted] = useState(false);
        const handleSubmit = (event) => {
         event.preventDefault();
          setTimeout(() => {
            setSubmitted(true);
          }, 100);
        };
      
        if (submitted) {

          return (
            <Container>
              <p>Thank you!</p>
              <p>We'll be in touch soon.</p>
              <AppButton txt='Go back home'/>
            </Container>
          );
        };

    return (
        <Container>

            <Info>
            <h1>Contact Form</h1>
            <p>Want to work together?</p>
            <p> Fill out the form below and I will get back to you shortly. Can't wait to connect!</p>
            </Info>
            
            <Form   
                onSubmit={handleSubmit}
                method="POST"
                >

            <Input type='text' placeholder='Name' name='FirstName'></Input>
            <Input  type='text'placeholder='Email' name='Email' ></Input>

            <div>
             <p> I am looking for:</p>
                <RadioInput type="radio" id="graphic design" name="services" value="graphic design"></RadioInput>
                <label>Graphic Design </label>
            </div>
            <div>
                <RadioInput type="radio" id="web services" name="services" value="web services"></RadioInput>
                <label>Website Services </label>
            </div>
            <div>
                <RadioInput type="radio" id="social media" name="services" value="social media"></RadioInput>
                <label>Social Media </label>
            </div>

                <Message type='text' placeholder='Briefly explain your project...'/>

                <AppButton type="submit" txt='Send' />
        
            </Form>
        </Container>
    )
}