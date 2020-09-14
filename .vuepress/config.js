module.exports = {
  title: 'Tipify (DM): Recall some tips',
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
      'ts-basics.html',
      'dotnet-basics.html',
      'js-high-order-functions.html',
      'js-callback-promise-async-await.html',
      'js-general-tips.html',
      'js-event-loop.html',
      'js-hoisting.html',
      'js-closure.html',
      'dotnet-cli-commands.html',
      'dotnet-files-meaning.html',
      'dotnet-cqrs.html'
    ],
    searchMaxSuggestions: 20
  },
  dest: 'public',
  port: 5151,
  serviceWorker: true
};
