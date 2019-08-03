import React from 'react';

import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ourTeamStyles from '../OurTeamStyles.module.scss';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h3: {
        fontSize: 32,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 20,
        marginBottom: 20,
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    padding: '30px 0',
    marginTop: '5rem',
    marginBottom: '5rem',
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

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">
        наша команда
        </Typography>
      </ThemeProvider>
      <Box className={ourTeamStyles.teamLine_big}>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto1.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link to="https://github.com/JuliaMV" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Yuliya Miatlionak
          </Link>
        </Box>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto2.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link to="https://github.com/ggwebproject" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Vitali Hantarenka
          </Link>
        </Box>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto3.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link to="https://github.com/anna-pronovich" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Hanna Pranovich
          </Link>
        </Box>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto4.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link to="https://github.com/anna-klempach" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Hanna Klempach
          </Link>
        </Box>
      </Box>
      <Box className={ourTeamStyles.teamLine_small}>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto5.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link to="https://github.com/pryvvid" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Hleb Shynkarou
          </Link>
        </Box>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto6.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link to="https://github.com/magnusducatuslt" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Magnus Ducatuslt
          </Link>
        </Box>
        <Box className={ourTeamStyles.teamMember}>
          <Img fixed={data.userPhoto7.childImageSharp.fixed} className={ourTeamStyles.teamMember_avatar} alt="Member of team" />
          <Link to="https://github.com/hybeard" target="_blank" rel="noopener noreferrer" title="link to GitHub project">
            <Img fixed={data.iconGithub.childImageSharp.fixed} className={ourTeamStyles.teamMember_imgLink} alt="link to GitHub project" />
            Ilya Kaptsevich
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default OurTeam;
