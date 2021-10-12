<div align="center">
  <h1>Webpack Template</h1>
  <p>
    Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
  </p>
 </div>

## Build Setup:

``` bash
# Download repository:
git clone https://github.com/vedees/webpack-template-pug webpack-template

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
* `src/static/` - folder with extra static assets that will be copied into output folder
* `src/.html` - custom layout for pages
* `src/assets/scss` - put custom app SCSS styles here. You need to import them in `index.js`
* `src/assets/css` - the same as above but CSS here. You need to import them in `index.js`
* `src/assets/img` - put images here. You need to use correct path: `assets/img/some.jpg`
* `src/js` - put custom app scripts here

<div align="center">
  <h2>Settings:</h2>
</div>

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
2. Go to `/assets/scss/utils/libs.scss`
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

## Create Another PUG Files:

#### Third method: (BEST)
Сombine the first method and the second.
Example:
``` js
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about/index.pug`,
      filename: './about/index.html',
      inject: true
    })
```

## Add Fonts:
Add @font-face in `/assets/scss/utils/fonts.scss`:

``` scss
// Example with Helvetica
@font-face {
  font-family: "Helvetica-Base";
  src: url('/assets/fonts/Helvetica/Base/Helvetica-Base.eot'); /* IE9 Compat Modes */
  src: url('/assets/fonts/Helvetica/Base/Helvetica-Base.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.woff') format('woff'), /* Pretty Modern Browsers */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.svg') format('svg'); /* Legacy iOS */
}
```

Add vars for font in `/assets/scss/utils/vars.scss`:

``` scss
$mySecontFont : 'Helvetica-Base', Arial, sans-serif;
```


## License
[MIT](./LICENSE)

Copyright (c) 2018-present, [Evgenii Vedegis](https://github.com/vedees)