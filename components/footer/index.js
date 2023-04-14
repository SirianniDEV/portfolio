import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {MdCopyright} from 'react-icons/md';
import {HiMail} from 'react-icons/hi';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  background-color: #8FB6FF;
  color:#fff;
  font-family: Montserrat;
  font-size: 1rem;
  margin-top: 50px;
`;

const CopyWright = styled.div`
`
const Icons = styled.div`

`


const IconLink = styled.a`
  margin: 0 10px;
  font-size: 30px;
  color: #E1F5FF;


  &:hover {
    color: #F6DDAD;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
        <CopyWright>
        <p>Copywright <MdCopyright/> Sofia Sirianni </p>
        </CopyWright>

        <Icons>
            <IconLink href="https://www.linkedin.com/in/sofia-sirianni-77229b18b/"  target='_blank'>
                <FaLinkedin />
            </IconLink>

            <IconLink href="https://github.com/SirianniDEV" target='_blank'>
                <FaGithub />
            </IconLink>

            <IconLink href="mailto: sofia.sirianni@outlook.com">
                <HiMail />
            </IconLink>
        </Icons>
    </Wrapper>
  );
};

export default Footer;
