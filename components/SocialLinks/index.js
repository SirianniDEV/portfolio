import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {MdCopyright} from 'react-icons/md';
import {HiMail} from 'react-icons/hi';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100px;
  color:#fff;
  font-family: Montserrat;
  font-size: 1rem;
  margin-top: 20px;
`;


const IconLink = styled.a`
  margin: 0 15px;
  font-size: 50px;
  color: #8FB6FF;

  cursor: none;
  &:hover {
    color: #F6DDAD;
  }
`;

export default function SocialLinks () {
  return (
    <Wrapper>
            <IconLink href="https://www.linkedin.com/in/sofia-sirianni-77229b18b/"  target='_blank'>
                <FaLinkedin />
            </IconLink>

            <IconLink href="https://github.com/SirianniDEV" target='_blank'>
                <FaGithub />
            </IconLink>

            <IconLink href="mailto: sofia.sirianni@outlook.com">
                <HiMail />
            </IconLink>
    </Wrapper>
  );
};