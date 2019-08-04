import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import artistCardStyles from './artistCardStyles.module.scss';

/*
const ArtistCard = ({ queryData }) => (
  <Card key={`${queryData.node.slug}-item`} className={artistCardStyles.artistCard}>
    <CardMedia
      className={artistCardStyles.artistImage}
      image={queryData.node.personalPhoto.file.url}
      title="Contemplative Reptile"
    />
    <CardContent className={artistCardStyles.artistDescriptions}>
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          <CardActions>
            <Link to={`${queryData.node.lang}/artists/${queryData.node.slug}`}>
              {`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${
                queryData.node.surname.surname
              }`}
*/

const ArtistCard = queryData => {
  const generalInformation = queryData.node.generalInfo.content[0].content[0].value;
  return (
    <Card key={`${queryData.node.slug}-item`} className={artistCardStyles.artistCard} component="li">
      <div className={artistCardStyles.artistImageBlock}>
        <CardMedia
          component="img"
          className={artistCardStyles.artistImage}
          image={queryData.node.personalPhoto.file.url}
          title={`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}
          alt={`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}
        />

      </div>
      <CardContent className={artistCardStyles.artistDescriptions}>
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            <CardActions>
              {`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}
            </CardActions>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ({queryData.node.yearsOfLife})
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p" className={artistCardStyles.generalInfo}>
            {generalInformation}
          </Typography>
        </div>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`${queryData.node.lang}/artists/${queryData.node.slug}`}>
              <FormattedMessage id="artistCardReadMore" />
            </Link>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
};

ArtistCard.propTypes = {
  queryData: PropTypes.shape({
    node: PropTypes.shape({
      lang: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      yearsOfLife: PropTypes.string.isRequired,
      personalPhoto: PropTypes.shape({
        file: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      }),
      name: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
      surname: PropTypes.shape({
        surname: PropTypes.string.isRequired,
      }),
      patronymic: PropTypes.shape({
        patronymic: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default ArtistCard;
