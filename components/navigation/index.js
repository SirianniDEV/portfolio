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

export default function Navigation () {
    return (
        <Container>

            <Nav>
                <Link href="/">HOME</Link>

                <Link href="/projects">PROJECTS</Link>

                <Link href="/contact">CONTACT</Link>
            </Nav>
     

            <Socials>
            <Link href="https://www.linkedin.com/in/sofia-sirianni-77229b18b/"  target='_blank'><BsGithub/></Link>
            <Link href="https://github.com/SirianniDEV" target='_blank'><BsLinkedin/></Link>
            </Socials>

        
        </Container>
    )
}

// import React from 'react';
// import styled from 'styled-components';

// const Nav = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   background: #E1F5FF;
//   z-index: 100;
//   margin: 20px;
//   border-radius: 5px:
//   border: 4px solid #8FB6FF;
// `;

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 10px;
// `;

// const Logo = styled.a`
//   font-size: 24px;
//   font-weight: bold;
//   color: #333;
//   text-decoration: none;
// `;

// const Navbar = () => {
//   return (
//     <Nav>
//       <Container>
//         <Logo href="#">Logo</Logo>
//             <a href="#">ABOUT</a>

//             <a href="#">PROJECTS</a>

//             <a href="#">CONTACT</a>

//       </Container>
//     </Nav>
//   );
// };

// export default Navbar;
