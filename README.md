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

* `src/js/[name].js` - main application files where you include/import all necessary libraries and modules for initialization
* `src/js/libs` - put libs here
* `src/js/modules` - put custom app scripts here
* `src/html/pages/[name].html` - layout for pages
* `src/html/component/[name]/[component].html` - components for pages
* `src/scss/[name].scss` - main SCSS styles where you include/import all necessary styles. You need to import them in `[name].js`
* `src/scss/[name]/[component].scss` - put components SCSS styles here. You need to import them in `[name].scss`
* `src/scss/libs` - put libs SCSS styles here
* `src/img` - put images here. You need to use correct path: `img/some.jpg`
* `src/static/` - folder with extra static assets that will be copied into output folder

<h1>Settings:</h1>

## Main const:
Easy way to move all files.
Default:
``` js
const PATHS = {
  // Path to main app dir
  src: path.join(__dirname, '../src'),
  // Path to Output dir
  web: path.join(__dirname, '../web'),
}
```

## Import Another libs:
1. Install libs
2. Import libs in `js/[name].js`
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
2. Import libs in `scss/[name].scss`
``` scss
// CSS librarys example:
@import 'libs/swiper/swiper-bundle.min.css';
```

## Import js files:
1. Create custom js module in `js/modules` folder
2. Import modules in `js/[name].js` file
``` js
// custom js file for example
import customCursor from './modules/customCursor'
```

## Create Another HTML Files:
``` js 
    const PAGES_DIR = PATHS.src
    const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'))

    ...PAGES.map(
      page =>
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        filename: `./html/${page}`,
        // inject: false
      })
    )
```

## Add Fonts:

### First way
Add @font-face in `/scss/utils/fonts.scss`:

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
Add @import in `/scss/common.scss`:

``` scss
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
```

Add vars for font in `/assets/scss/utils/vars.scss`:

``` scss
$mainFont : 'Montserrat', sans-serif;
```


<h1>Deploy:</h1>

## GitHub Pages

* Go to Settings / Pages
* In the tab GitHub Pages find Source, select branch main, push the Save
* Copy the unique link (UL)
* Then go to the project on package.json

``` js
...
"homepage": "https://nataliapylypenko.github.io/portfolio/",
...
"scripts": {
    ...
    "deploy": "gh-pages -d web",
    "predeploy": "npm run build"
  },
...
```

* Install the package `npm install gh-pages`
* Go to Settings / Pages
* In the tab GitHub Pages find Source, select branch gh-pages, push the Save
* For deploy to the branch gh-pages `npm run deploy`


<h1>License</h1>

[MIT](./LICENSE)

Copyright (c) 2018-present, [Evgenii Vedegis](https://github.com/vedees).

With my additions!