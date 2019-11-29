const NetlifyAPI = require("netlify")

exports.onCreateDevServer = ({ app }, options) => {
  if (!options.token) throw new Error("Missing Netlify API Token")
  if (!options.site) throw new Error("Missing Netlify Site ID  ")

  const client = new NetlifyAPI(options.token)

  app.get("/netlify", async (_req, res) => {
    const sites = await client.listSites()
    const site = sites.find(site => site.name === options.site)

    res.send(site)
  })
}
