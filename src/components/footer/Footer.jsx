import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import footerStyles from './Footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <a href="https://github.com/JuliaMV/culture-portal" target="_blank" title="link to GitHub project" alt="link to GitHub project">
          <Img fixed={data.file.childImageSharp.fixed} className={footerStyles.footerImg}/>
        </a>
        <p> Created by <em>GROUP-19</em>, RS 2019Q1</p>
      </div>
    </footer>
  )
}

export default Footer;
