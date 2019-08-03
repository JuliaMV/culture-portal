/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout/Layout';
import artistCardStyles from './artistCardStyles.module.scss';

const ArtistInfo = queryData => (
  <Card
    key={`${queryData.node.slug}-item`}
    className={artistCardStyles.artistCard}
  >
    <CardMedia
      className={artistCardStyles.artistImage}
      image={queryData.node.personalPhoto.file.url}
      alt={queryData.node.personalPhoto.title}
      title="Contemplative Reptile"
    />
    <CardContent className={artistCardStyles.artistDescriptions}>
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          <CardActions>
            <Link to={`en/artists/${queryData.node.slug}`}>
              {`${queryData.node.name.name} ${
                queryData.node.patronymic.patronymic
              } ${queryData.node.surname.surname}`}
            </Link>
          </CardActions>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {queryData.node.yearsOfLife}
        </Typography>
      </div>
      <CardActions>
        <Button size="small" color="primary">
          <Link
            href={queryData.node.videoTag.videoTag}
            target="_blank"
            rel="noopener noreferrer"
          >
            YOUTUBE VIDEO
          </Link>
        </Button>
        <Button size="small" color="primary">
          <Link to={`ru/artists/${queryData.node.slug}`}>READ MORE</Link>
        </Button>
      </CardActions>
    </CardContent>
  </Card>
);

const ArtistPage = ({ data, location }) => {
  const items = data.allContentfulArchitectPage.edges.map(edge =>
    ArtistInfo(edge)
  );
  return (
    <Layout data={data} location={location}>
      <h2 className={artistCardStyles.headerOfartistsList}>
        List of Architects
      </h2>
      <ul className={artistCardStyles.artistsList}>{items}</ul>
    </Layout>
  );
};

ArtistPage.propTypes = {
  data: PropTypes.shape({
    allContentfulArchitectPage: PropTypes.object
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default ArtistPage;

export const pageQuery = graphql`
  query AboutEnQuery {
    allContentfulArchitectPage(filter: { lang: { eq: "en" } }) {
      edges {
        node {
          slug
          patronymic {
            patronymic
          }
          name {
            name
          }
          personalPhoto {
            file {
              url
              fileName
            }
          }
          photoGallery {
            file {
              url
            }
            title
          }
          surname {
            surname
          }
          videoTag {
            videoTag
          }
          yearsOfLife
        }
      }
    }
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allContentfulTimeline(
      filter: { lang: { eq: "en" } }
      sort: { fields: order }
    ) {
      edges {
        node {
          date
          description {
            description
          }
          order
        }
      }
    }
  }
`;
