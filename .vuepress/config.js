module.exports = {
  title: 'Tipify: Get some tips',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'}
    ],
    sidebar: [
      'thanks.html',
      'tipify.html'
    ],
    searchMaxSuggestions: 20
  },
  dest: 'public',
  serviceWorker: true
};