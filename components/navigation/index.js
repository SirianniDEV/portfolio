import styled from "styled-components"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import Link from "next/link"

const Container = styled.nav
`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    z-index: 100;
    margin-bottom: 50px;
    border-bottom: 4px solid #8FB6FF;
    padding: 0 20px;
    color: #8FB6FF;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.2rem;
    z-index: 100;
    cursor: none;
`
const Nav = styled.div
`
    gap: 50px;
    display: flex;
  
`
const Socials = styled.div
`
    display: flex;
    gap: 50px;
    font-size: 2rem;
    color: #333;
    padding-left: 30px;
    color: #8FB6FF;

`;

const A = styled(Link)
`
cursor: none;
    &:hover {
        color: #F6DDAD;
    }
`

export default function Navigation () {
    return (
        <Container>

            <Nav>
                <A href="/">HOME</A>

                <A href="/projects">PROJECTS</A>

                <A href="/contact">CONTACT</A>
            </Nav>
     

            <Socials>
            <A href="https://github.com/SirianniDEV"  target='_blank'><BsGithub/></A>
            <A href="https://www.linkedin.com/in/sofia-sirianni-77229b18b/" target='_blank'><BsLinkedin/></A>
            </Socials>

        
        </Container>
    )
}
