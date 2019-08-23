import capitalize from 'lodash/capitalize';

export default (name, flux, i18n, title, item, temporary) => {
  let description = '';
  if (!temporary) {
    title = item.title;
    description = item.meta_description;
  }
  const fullName = `${capitalize(title)}`;
  const helmet = {};
  helmet.title = i18n(name, { metaTitle: fullName });
  if (description) {
    helmet.description = description;
  }
  if (helmet.title.length > 65) {
    helmet.title = helmet.title.substr(0, 49) + ' ..';
  }
  flux.getActions('helmet').update(helmet);
};
