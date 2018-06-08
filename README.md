# MyReads Project

A project developed for [Udacity React Nanodegree](https://eu.udacity.com/course/react-nanodegree--nd019)

Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## See in action

[https://myreads-brunogarcia.now.sh](https://myreads-brunogarcia.now.sh)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

## Rubrics

### Main Page

* The main page shows 3 shelves for books, and each book is shown on the correct shelf.

* The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.

* When the browser is refreshed, the same information is displayed on the page.

### Search Page

####  The search page behaves correctly

* The search page has a search input field.
* As the user types into the search field, books that match the query are displayed on the page.
* Search results are not shown when all of the text is deleted out of the search input box.
* Invalid queries are handled and prior search results are not shown.
* The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
* The user is able to search for multiple words, such as “artificial intelligence.”

#### Categorize a book

* Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
* If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.

### Routing

* The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.

* The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

### Code Functionality

* Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.
* Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
* All JSX code is formatted properly and functional.

