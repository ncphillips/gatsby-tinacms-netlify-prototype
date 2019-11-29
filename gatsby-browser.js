const { NetlifyScreenPlugin } = require("./netlify-screen-plugin")

exports.onClientEntry = () => {
  window.tinacms.plugins.add(NetlifyScreenPlugin)
}