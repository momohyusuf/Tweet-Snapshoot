const getIdFromUrl = (url) => {
  let pattern = /\d{5,}/g;
  let result = url.match(pattern);
  return result.toString();
};
const fonts = [
  {
    title: 'Source Sans Pro',
    textStyle: 'Source Sans Pro, sans-serif',
  },
  {
    title: 'Playfair Display',
    textStyle: 'Playfair Display, serif',
  },
  {
    title: 'Roboto',
    textStyle: 'Roboto, san-serif',
  },
  {
    title: 'Babas Neue',
    textStyle: 'Bebas Neue, cursive',
  },
  {
    title: 'Caveat',
    textStyle: 'Caveat, cursive',
  },
  {
    title: 'Rajdhani',
    textStyle: 'Rajdhani, sans-serif',
  },
  {
    title: 'Share Tech Mono',
    textStyle: 'Share Tech Mono,monospace',
  },
  {
    title: 'Lobster Two',
    textStyle: 'Lobster Two, cursive',
  },
  {
    title: 'Oleo Script',
    textStyle: 'Oleo Script, cursive',
  },
  {
    title: 'Pacifico',
    textStyle: 'Pacifico, cursive',
  },
  {
    title: 'Great Vibes',
    textStyle: 'Great Vibes, cursive',
  },
];

module.exports = {
  getIdFromUrl,
  fonts,
};
