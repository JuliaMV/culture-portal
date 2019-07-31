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
  `);

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <a href="https://github.com/JuliaMV/culture-portal" target="_blank" rel="noopener noreferrer" title="link to GitHub project" alt="link to GitHub project">
          <Img fixed={data.file.childImageSharp.fixed} className={footerStyles.footerImg} />
        </a>
        <p className={footerStyles.footerText}>
          Created by
          <span className={footerStyles.styleSpan}> GROUP-19</span>
          , RS 2019Q1
        </p>
      </div>
    </footer>
  );
};

export default Footer;
