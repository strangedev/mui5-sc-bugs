const withTranspiledModules = require('next-transpile-modules');

module.exports = withTranspiledModules([
  '@material-ui/core',
  '@material-ui/system'
])({
  reactStrictMode: true
});
