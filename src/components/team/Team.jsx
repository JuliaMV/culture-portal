import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import Box from '@material-ui/core/Box';

import ourTeamStyles from './Team.module.scss';


// const useStyles = makeStyles({
//   root: {
//     padding: '30px 0',
//     marginTop: '2rem',
//     marginBottom: '2rem',
//     backgroundColor: '#f5f5f5',
//   },
// });

const Team = () => {
  const images = useStaticQuery(graphql`
    query {
      iconGithub: file(relativePath: { eq: "github-user.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      userPhoto1:file(relativePath: { eq: "userPhoto1.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      userPhoto2:file(relativePath: { eq: "userPhoto2.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      userPhoto3:file(relativePath: { eq: "userPhoto3.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      userPhoto4:file(relativePath: { eq: "userPhoto4.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      userPhoto5:file(relativePath: { eq: "userPhoto5.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      userPhoto6:file(relativePath: { eq: "userPhoto6.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      userPhoto7:file(relativePath: { eq: "userPhoto7.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const team = [
    { name: 'Yuliya Miatlionak', github: 'https://github.com/JuliaMV', img: images.userPhoto1.childImageSharp.fixed },
    { name: 'Vitali Hantarenka', github: 'https://github.com/ggwebproject', img: images.userPhoto2.childImageSharp.fixed },
    { name: 'Hanna Pranovich', github: 'https://github.com/anna-pronovich', img: images.userPhoto3.childImageSharp.fixed },
    { name: 'Hanna Klempach', github: 'https://github.com/anna-klempach', img: images.userPhoto4.childImageSharp.fixed },
    { name: 'Hleb Shynkarou', github: 'https://github.com/pryvvid', img: images.userPhoto5.childImageSharp.fixed },
    { name: 'Magnus Ducatuslt', github: 'hhttps://github.com/magnusducatuslt', img: images.userPhoto6.childImageSharp.fixed },
    { name: 'Ilya Kaptsevich', github: 'https://github.com/hybeard', img: images.userPhoto7.childImageSharp.fixed },
  ];

  const githubImg = images.iconGithub.childImageSharp.fixed;

  return (
    <Box className={ourTeamStyles.teamContainer}>
      <h2><FormattedMessage id="ourTeam" /></h2>
      {team.map(member => (
        <Box className={ourTeamStyles.teamMember} key={`${member.name}-key`}>
          <Img fixed={member.img} className={ourTeamStyles.teamMember_avatar} alt={member.name} />
          <a href={member.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <Img fixed={githubImg} className={ourTeamStyles.teamMember_imgLink} alt="GitHub" />
            {member.name}
          </a>
        </Box>
      ))}
    </Box>
  );
};

export default Team;
