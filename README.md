# MovieMe: a simple movie searcher

## Table of contents

* [What's this?](#whats-this)
* [How to run the application](#how-to-run)
* [How to build the application](#how-to-build)
* [Desing](#design)
* [Accessiblity](#accessibility)
* [Visual effects](#effects)
* [Testing](#testing)
+ [About the application](#about-the-application)
  * [Look & Feel customization](customization)
  * [Weaknesses](#weaknesses)
  * [Sacrifices](#sacrifices)
* [Links of interest](#links)
* [Credits](#credits)

--------------------------------------------------------------------------------

## <a name="whats-this"></a>What's this?

This is a Vanilla JS application to search basic information about movies.
The time invested in its development has been **18 hours**.

## <a name="how-to-run"></a>How to run the application

1. Make sure you have a proper version of nodejs installed. If not, download and install from [here](https://nodejs.org/en/).

2. Install all dependencies (_This operation will take around 1 minute_)

  ```
  $ npm install
  ```

4. Run `npm run start`

  ```
  $ npm run start
  ```

Voila, the app has been opened in your browser @ [http://localhost:8080](http://localhost:8080)

## <a name="how-to-build"></a>How to Build the application

Once installed nodejs and all the dependencies, just run `npm run build`:

  ```
  $ npm run build
  ```

## <a name="design"></a>Design

All styles naming conventions follow the rules of [https://suitcss.github.io/](https://suitcss.github.io/).

The main color used has been `#09f`, but it can be easily customized. There is only one breakpoint to change the grid layout of the movies. Its default value is set in `50em` and it can also be configured in the `scss` variables. See [Look & Feel customization](customization) section for more details.

All iconography used is vectorial. The application does not use any kind of asset, only code (except for the third party resources like fonts or the movie posters).

## <a name="accessibility"></a>Accessiblity

Some tools have been used to check accessibility:

* Contras ratio checker: [https://contrast-ratio.com/](https://contrast-ratio.com/)
* Code checker: [https://squizlabs.github.io/HTML_CodeSniffer/](https://squizlabs.github.io/HTML_CodeSniffer/)

The accessibility behavior should be improved with a proper management of the focus/cursor. E.g. provide some feedback when the movie grid is re-order or a message that tells the user about the findings of a search.

## <a name="effects"></a>Visual effects

Some visual effects have been applied:

* A spinning icon while loading the movies
* An animated toast effect for the searcher once the user performs a search
* An icon rotation for the order button

## <a name="testing">Testing

The application has been tested in a limited number of browsers:

+ macOS 10.15.3
  * Chrome 80.0.3987.122
  * Safari 13.0.5
  * Firefox 73.0.1
+ iOS 13.3.1
  * Chrome
  * Safari
+ iPadOS 13.3.1
  * Chrome
  * Safari

Testing is without a doubt something to be improved in this application, includind unit testing coverage.

## <a name="about-the-application"></a>About the application

### <a name="customization"></a>Look & Feel customization

The application uses SCSS variables. The main color is `#09f` and it's defined in the `src/stylesheets/variables.scss` file.

Even more, the whole application uses `$App-mainColor` variable to calculate the rest of colors. **Try to change its value and watch the results ;)**. But remember to watch for the `$App-mainColor--contrast` value too to keep being accessible complaint.

### <a name="highlights"></a>Highlights

* Pure JS Components
* HTML templates
* Responsive design
* Accessibility
* UX / UI

### <a name="weaknesses"></a>Weaknesses

* Image optimization
* Features can be boosted
* Testing

## <a name="links"></a>Links of interest

* Public repo: [https://github.com/ignacioroan/movieme](https://github.com/ignacioroan/movieme)
* Public live application: [http://nachorodriguez.me/movieme/](http://nachorodriguez.me/movieme/)

## <a name="credits"></a>Credits

* [Webpack ES6+ Sass Boilerplate](https://github.com/vadimmarkov/webpack-es6-sass-boilerplate)
* [Google Fonts](https://fonts.google.com/)
* [Material Design Icons](http://materialdesignicons.com/) 