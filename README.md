# gatsby-tinacms-netlify-prototype

A TinaCMS + Gatsby Plugin that adds a Netlify screen to the sidebar.

This project is just a prototype.

## Configuration

1. **Create a Netlify personal access token**

   Go to [Netlify](https://app.netlify.com/user/applications/personal) to create the token.

2. **Add the token to your environment**

   .bashrc
   ```
   export NETLIFY_TOKEN=mynewnetlifytokengoeshere
   ```

2. **Install the `gatsby-tinacms-netlify-prototype`**

    ```
    npm i gatsby-tinacms-netlify-prototype
    ```

4. **Add `gatsby-tinacms-netlify-prototype` to your `gatsby-config.js`**

    ```js
    module.exports = {
      // ...
      plugins: [
        {
          resolve: "gatsby-plugin-tinacms",
          options: {
            plugins: [
              {
                resolve: "gatsby-tinacms-screen-prototype",
                options: {
                  // Name of your Netlify site. (See the URL)
                  site: "my-site-name",
                  token: process.env.NETLIFY_TOKEN,
                },
              },
            ],
          },
        },
        // ...
      ]
    }
    ```

5. **Start Gatsby and open the global menu**

    Done!