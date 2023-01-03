const config = require('react-reveal/globals');

exports.onRenderBody = () => {
  config.default({ssrFadeout: true})
}
