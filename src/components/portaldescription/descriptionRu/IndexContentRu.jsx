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
        // fontWeight: 'bold',
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
    marginBottom: '1.5rem',
  },
});

const IndexContent = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">
          О портале
        </Typography>
        <Typography gutterBottom className={indexContentStyles.textDescription}>
        Активная архитектурно-строительная деятельность в Беларуси началась в конце 1920-х годов.
        До этого времени основные работы сводились к восстановлению, приспособлению и реконструкции
        существовавших зданий. Задачи, стоявшие перед страной, потребовали консолидации всех
        творческих сил республики. В 1932 году был создан комитет по объединению  советских
        архитекторов.Архитекторы–члены Союза архитекторов БССР участвовали в реконструкции и
        строительстве городов и сел Белоруссии, становлении белорусской советской архитектуры.
          <br />
        На этом портале вы можете познакомиться с этими выдающимися архитекторами, а также можете
        найти информацию о наших соотечественниках, которые оставили значительный след в развитии
        архитектуры Беларуси. Здесь собраны их биографии с интересными фактами, фотогалерея их
        работ, видеоролики, связанные с их деятельностью или эпохой, в которой они жили, и многое
        другое.
        </Typography>
      </ThemeProvider>
    </Paper>
  );
};

export default IndexContent;
