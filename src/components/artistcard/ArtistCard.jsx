import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
// @ts-ignore
import artistCardStyles from './artistCardStyles.module.scss';

const ArtistCard = queryData => (
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
            <a href={`en/artists/${queryData.node.slug}`}>
              {`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}
            </a>
          </CardActions>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {queryData.node.yearsOfLife}
        </Typography>
      </div>
      <CardActions>
        <Button size="small" color="primary">
          <a href={queryData.node.videoTag.videoTag} target="_blank" rel="noopener noreferrer">
                YOUTUBE VIDEO
          </a>
        </Button>
        <Button size="small" color="primary">
          <Link to={`ru/artists/${queryData.node.slug}`}>
              READ MORE
          </Link>
        </Button>
      </CardActions>
    </CardContent>
  </Card>
);

export default ArtistCard;
