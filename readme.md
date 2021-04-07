# Communication with the Server

## Learning Goals
* Understand `db.json` & "dumb" databases
* Draw paralells from how we interacted with our database in Ruby
* Use `fetch()` to interact with data from the server and change the DOM

## Stretch Goals
* Use a button event with `fetch()` to update our `.json` database
* Demonstrate optimistic vs pessimeistic rendering.

-------------------------------------------------------------------->

### Look Around This Repo
* Peep the db.json file and look at the data in it. See that it is identical to what is served to us in the browser when we visit `localhost:3000/dinos`.
* Checkout the `index.html` file. See there are divs already there with specific classes we're going to target such as 
`.dino-menu`, and `.dino-info`.
* Checkout the index.css file if you're interested. It's simply targeting those classes of html elements on the page and styling them.

### Getting Setup
1. Clone this repo down, and run `npm install -g json-server`.
  * This installs json-server, a javascript package that allows us to run a `.json` file as a "server".
2. Run `json-server --watch db.json`. 
  * This points our local server at the `db.json` file in this project. 
3. Open your browser and visit `localhost:3000/dinos` and view the info avialable to us.
4. Open your index file in your browser either by:
  * Typing `open index.html` in terminal.
  OR  
  * Right click the `index.html` file in vs code and open it in your file system, then right click it there and select "Open With" and select your browser.

-------------------------------------------------------------------->

### Deliverables 

<!-- 1. Make a fetch to retrieve the dinos from the server, and execute it in a `DOMContentLoaded` event listener. -->
<!-- 2. Load the species of each dino into `<li>` elements, and append them into the `.dino-menu` div already on the DOM. -->
3. Add event listeners to the dino sepcieses that load their info into the `.dino-info` div.
4. Add an `h1` tag for the name, `img` tag for the image, `p` tag for the dino's exitiction status, and a button to toggle that status. Make sure to only show one dino's info in the `.dino-info` div at a time.
5. Add an event listener to the status button that makes a fetch to the data base to update the dino's exiction status, and persist it.

### Important Notes:
