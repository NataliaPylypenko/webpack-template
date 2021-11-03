<h1>Webpack Template</h1>
<p>
    Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
</p>

## Build Setup:

``` bash
# Download repository:
git clone https://github.com/NataliaPylypenko/webpack-template.git webpack-template

# Go to the app:
cd webpack-template

# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Project Structure:

* `src/index.js` - main app file where you include/import all required libs and init app
* `src/index.html` - custom layout for pages
* `src/js` - put custom app scripts here
* `src/static/` - folder with extra static assets that will be copied into output folder
* `src/assets/scss` - put custom app SCSS styles here. You need to import them in `index.js`
* `src/assets/css` - the same as above but CSS here. You need to import them in `index.js`
* `src/assets/img` - put images here. You need to use correct path: `assets/img/some.jpg`
* `src/assets/fonts` - put fonts here.

<h1>Settings:</h1>

## Main const:
Easy way to move all files.
Default:
``` js
const PATHS = {
  // Path to main app dir
  src: path.join(__dirname, '../src'),
  // Path to Output dir
  dist: path.join(__dirname, '../dist'),
  // Path to Second Output dir (js/css/fonts etc folder)
  assets: 'assets/'
}
```

## Import Another libs:
1. Install libs
2. Import libs in `./index.js`
``` js
// React example
import React from 'react'
// Bootstrap example
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
// or
import 'bootstrap/dist/js/bootstrap.min.js'
```

## Import only SASS or CSS libs:
1. Install libs
2. Go to `/assets/scss/libs/libs.scss`
3. Import libs in node modules
``` scss
// Sass librarys example:
@import '../../node_modules/spinners/stylesheets/spinners';
// CSS librarys example:
@import '../../node_modules/flickity/dist/flickity.css';
```

## Import js files:
1. Create another js module in `./js/` folder
2. Import modules in `./js/index.js` file
``` js
// another js file for example
import './common.js'
```

## Create Another HTML Files:

``` js 
    ...PAGES.map(
      page =>
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        filename: `./${page}`
      })
    )
```

## Add Fonts:

### First way
Add @font-face in `/assets/scss/utils/fonts.scss`:

``` scss
// Example with Montserrat
@font-face {
  font-family: "Montserrat-Regular";
  src: url('/assets/fonts/Montserrat/Regular/Montserrat-Regular.eot'); /* IE9 Compat Modes */
  src: url('/assets/fonts/Montserrat/Regular/Montserrat-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/Montserrat/Regular/Montserrat-Regular.woff') format('woff'), /* Pretty Modern Browsers */
       url('/assets/fonts/Montserrat/Regular/Montserrat-Regular.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/Montserrat/Regular/Montserrat-Regular.svg') format('svg'); /* Legacy iOS */
}
```

Add vars for font in `/assets/scss/utils/vars.scss`:

``` scss
$mainFont : 'Montserrat-Regular', Helvetica, Arial, sans-serif;
```

### Second way
Add @import in `/assets/scss/main.scss`:

``` scss
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
```

Add vars for font in `/assets/scss/utils/vars.scss`:

``` scss
$mainFont : 'Montserrat', sans-serif;
```

## Webpack-dev-server

* Install the package `npm i -D webpack-dev-server`

<h1>Deploy:</h1>

## GitHub Pages

* Go to Settings / Pages
* In the tab GitHub Pages find Source, select branch main, push the Save
* Сopy the unique link (UL)
* Then go to the project on package.json

``` js
...
"homepage": "https://nataliapylypenko.github.io/portfolio/",
...
"scripts": {
    ...
    "deploy": "gh-pages -d dist",
    "predeploy": "npm run build"
  },
...
```

* Install the package `npm install gh-pages`
* For deploy to the branch gh-pages `npm run deploy`

<h1>License</h1>

[MIT](./LICENSE)

Copyright (c) 2018-present, [Evgenii Vedegis](https://github.com/vedees).

With my additions!