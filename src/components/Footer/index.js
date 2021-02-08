import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <FooterWrapper>
          <FooterPara>made with</FooterPara>
         <FooterPara> React - Redux Toolkit - Styled Component - Axios - And Love</FooterPara>
           <LinkFooter href='https://www.linkedin.com/in/luca-la-marca-a6998316b/' target='_blank'>
               <IconFooter className="fab fa-linkedin" />
               <FooterPara>Follow me</FooterPara>
            </LinkFooter>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    text-align:center;
    border-top: 1px solid;
    border-color:${props => props.theme.text};
    padding:1rem 0;
    margin-top:1rem;
`
const FooterPara = styled.p`
    opacity:.5;
    margin:.2rem;
`
const LinkFooter = styled.a`
    display:flex;
    align-items:center;
    justify-content:center;
`

const IconFooter = styled.i`
    opacity:.5;
    transition: ${props => props.theme.transition};
    font-size:1.2rem;
    margin-right:.5rem;
    color:${props => props.theme.text};
`