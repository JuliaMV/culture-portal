import React from 'react';

import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import ourTeamStyles from '../OurTeamStyles.module.scss';

const useStyles = makeStyles({
  root: {
    // width: '100%',
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
    padding: '10px 0',
    marginTop: '2rem',
    marginBottom: '2rem',
    backgroundColor: '#f5f5f5',
  },
});


const OurTeam = () => {
  const data = useStaticQuery(graphql`
    query {
      iconGithub: file(relativePath: { eq: "github-user.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      userPhoto:file(relativePath: { eq: "user1.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const classes = useStyles();

  return (

    <Paper className={classes.root}>
      <Box className={ourTeamStyles.teamLine_big}>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link href="https://github.com/JuliaMV" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Yuliya Miatlionak
          </Link>
        </Box>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link href="https://github.com/ggwebproject" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Vitali Hantarenka
          </Link>
        </Box>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link href="https://github.com/anna-pronovich" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Hanna Pranovich
          </Link>
        </Box>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link href="https://github.com/anna-klempach" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Hanna Klempach
          </Link>
        </Box>
      </Box>
      <Box className={ourTeamStyles.teamLine_small}>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link href="https://github.com/pryvvid" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Hleb Shynkarou
          </Link>
        </Box>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link href="https://github.com/magnusducatuslt" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Magnus Ducatuslt
          </Link>
        </Box>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link href="https://github.com/hybeard" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Ilya Kaptsevich
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default OurTeam;
