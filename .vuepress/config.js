module.exports = {
  title: 'Tipify: Get some tips',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'}
    ],
    sidebar: [
      'thanks.html',
      'tipify.html',
      'git-tips-one.html',
      'react-tips-one.html',
      'js-reduce-method.html'
    ],
    searchMaxSuggestions: 20
  },
  dest: 'public',
  serviceWorker: true
};