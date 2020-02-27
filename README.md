# MovieMe: a simple movie searcher

## Table of contents

* [What's this?](#whats-this)
* [How to run the application](#how-to-run)
* [Accessiblity](#accessibility)
+ [About the application](#about-the-application)
  * [Look & Feel customization](customization)
  * [Highlights](#highlights)
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

## <a name="accessibility"></a>Accessiblity

Some tools have been used to check accessibility:

* Contras ratio checker: [https://contrast-ratio.com/](https://contrast-ratio.com/)
* Code checker: [https://squizlabs.github.io/HTML_CodeSniffer/](https://squizlabs.github.io/HTML_CodeSniffer/)

## <a name="about-the-application"></a>About the application

Some considerations have to be taken into account about the time dedicated to this application.
The effort have been directed to some hightlights in detriment of some sacrifices.

### <a name="customization"></a>Look & Feel customization

The application uses SCSS variables. The main color is `#09f` and it's defined in the `src/stylesheets/variables.scss` file.

Even more, the whole application uses `$App-mainColor` variable to calculate the rest of colors. **Try to change its value and watch the results ;)**. But remember to watch for the `$App-mainColor--contrast` value too to keep being accessible complaint.

### <a name="highlights"></a>Highlights

* Pure JS Components
* HTML templates
* Responsive design
* Accessibility
* UX / UI

### <a name="sacrifices"></a>Sacrifices

* Image optimization
* Features can be boosted
* Testing

## <a name="links"></a>Links of interest

* Public repo: [https://github.com/ignacioroan/movieme](https://github.com/ignacioroan/movieme)
* Public live application: [http://nachorodriguez.me/movieme/](http://nachorodriguez.me/movieme/)

## <a name="credits"></a>Credits

- [Webpack ES6+ Sass Boilerplate](https://snyk.io//test/github/vadimmarkov/webpack-es6-sass-boilerplate)