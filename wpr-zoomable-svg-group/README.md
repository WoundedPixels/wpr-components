# Based on React component boilerplate

https://github.com/markusenglund/react-npm-component-starter

## Getting started

Follow these steps to get started developing:

- `npm install`
- `npm run dev` to transpile both the lib and docs folder in watch mode and serve the docs page for you.
- Go to http://127.0.0.1:8000 to see the component in action. Whenever you change the code in either src/lib or src/docs, the page will automatically update.

## Publish

When you have completed development and want to publish to npm:

- `npm publish`
- Go to npmjs.com/package/wpr-zoomable-group/ to confirm that it has been published.

## Demo Page

Host demo on GitHub Pages:

- `npm run docs:prod` - Make a production bundle of the demo app.
- Commit your changes to git and push to your GitHub repository.
- On your GitHub repo page, click the **settings** tab and scroll down to the **GitHub Pages** heading. Pick `master branch /docs folder` in the **source** dropdown, And BOOM, your demo page is already live on the internet for free.
- Note: Sometimes it might take about an hour for the page to actually start hosting. Adding /index.html after the url works instantly for whatever reason.
