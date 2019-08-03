import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
// @ts-ignore
import artistCardStyles from './artistCardStyles.module.scss';

const ArtistCard = (queryData) => {
  console.log('From artist card', queryData);
  return (
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
                {`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}
              </Link>
            </CardActions>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {queryData.node.yearsOfLife}
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
  );
};

export default ArtistCard;
