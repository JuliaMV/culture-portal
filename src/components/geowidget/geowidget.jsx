import React from 'react';

const url = 'https://yandex.ru/map-widget/v1/?um=constructor%3Aafcd8b77c8bb3a1e3366752de01e8e175906a5150c9bff77b72b32105a143271&amp;source=constructor';
const name = 'Author Name';

const Geowidget = () => (
  <iframe title={`${name}-maps`} src={url} width="100%" height="400" frameBorder="0" />
);

export default Geowidget;
