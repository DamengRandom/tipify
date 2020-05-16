module.exports = {
  title: 'Tipify (DM): Get some tips',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/DamengRandom/tipify' }
    ],
    sidebar: [
      'thanks.html',
      'tipify.html',
      'git-tips-one.html',
      'react-tips-one.html',
      'js-reduce-method.html',
      'ts-basics.html'
    ],
    searchMaxSuggestions: 20
  },
  dest: 'public',
  serviceWorker: true
};
