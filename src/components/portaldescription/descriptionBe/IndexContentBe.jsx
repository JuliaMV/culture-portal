import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

import indexContentStyles from '../IndexContent.module.scss';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h3: {
        fontSize: 32,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 20,
        marginBottom: 50,
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: '2rem',
    marginBottom: '5rem',
  },
});

const IndexContent = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">
        Аб партале
        </Typography>
        <Typography gutterBottom className={indexContentStyles.textDescription}>
        Актыўная архітэктурна-будаўнічая дзейнасць у Беларусі пачалася ў канцы 1920-х гадоў.
        Да гэтага часу асноўныя працы зводзіліся да аднаўлення, прыстасаванню і рэканструкцыі
        існавалі будынкаў. Задачы, якія стаялі перад краінай, запатрабавалі кансалідацыі ўсіх
        творчыx сіл рэспублікі. У 1932 годзе быў створаны камітэт па аб&apos;яднанні савецкіх
        архітэктараў.Архітэктары-члены Саюза архітэктараў БССР ўдзельнічалі ў рэканструкцыі і
        будаўніцтве гарадоў Беларусі,станаўленні беларускай савецкай архітэктуры.
          <br />
         На гэтым партале вы можаце пазнаёміцца з гэтымі выдатнымі архітэктарамі, а таксама
         можаце знайсці інфармацыю пра нашых суайчыннікаў, якія пакінулі значны след у развіцці
         архітэктуры Беларусі. Тут сабраныя іх біяграфіі з цікавымі фактамі, фотагалерэя іх работ,
         відэаролікі, звязаныя з іх дзейнасцю або эпохай, у якой яны жылі, і многае іншае.
        </Typography>
      </ThemeProvider>
    </Paper>
  );
};

export default IndexContent;
