`P.S. The code samples are being updated to work with both Windows and Mac along with instructions. Should be done by Oct 27.`

`P.S. Participants for past trainings can request for a 15 minute Skype/Webex/Hangout call. A call will be scheduled for next available slot and their doubts will be addressed. Please contact at 08860266561 or kabhinav.iitg@gmail.com for getting a call scheduled.`

# AngularJS training course material

## Contents

- Chapter 0 - JavaScript basics
	- Functions
	- Classes and Objects
	- Asynchronous nature of JavaScript
	- Promises
- Chapter 1 - Basic Angular app and controllers
	- Basic angular app
	- MVC
	- 2 way data binding
	- ng-repeat
	- Some common angular in built directives
- Chapter 2 - Forms
	- Extracting objects from forms
	- More form controls
	- Form validations
	- Validation error handling
- Chapter 3 - Services
	- Why services
	- An example of a simple service
- Chapter 4 - Server communication
	- Sample blogging app with a server
- Chapter 5 - Filters
	- Inbuilt angular filters
	- The highly useful filter from angular called filter
	- Creating custom filters
- Chapter 6 - Directives
	- Simple directive example
	- _link_ function
	- Isolated scope
- Chapter 7 - Advanced directives
	- _compile_ function
	- Directive to directive communication through directive controllers
	- Directives based on third party plugins such as jquery plugins
- Chapter 8 - Routing using ngRoute
	- Basic routing example
	- More routing concepts
- Chapter 8a - Routing using ui router
	- ui router basics
	- sibling views
	- nested views
	- resolve
- Chapter 9 - Miscellaneous topics
	- Authentication
	- Internationalization
- Chapter 10 - Unit testing
	- Unit testing controllers
	- Unit testing a simple service
	- Unit testing controllers which make backend calls
	- Unit testing a controller having a service as a dependency by mocking
	- Unit testing a controller having a backend interacting service as depenedency
	- Global mocking
	- Using Spies
	- Unit testing filters
	- Unit testing directives
- Chapter 11 - End to end testing using protractor
	- Writing e2e tests using protractor
	- The page object pattern

## How to run examples


#### For Chapter 0, 1, 2, 3, 5, 6 and 7
Go to the project directory and run a static http server.

You can install the http-server by the command

```
npm install http-server -g
```

To run an example go to the example folder and run http-server
```
cd path/to/ng-training
cd chapter1-basic-angular-and-controllers/2-way-data-binding
http-server -p 5000
```

This will run a static server on port 5000. Got to http://localhost:5000 to see the output. You can choose any other port. If you do not provide the port the default port is 8080. To close the server just press Ctrl+C to stop the server.

Alternatively, you can also just open the example folder in explorer and double click on index.html. It will open the file in browser and load the angular app.

#### For Chapter 4 and 9
You need to start the backed server as well. To start the backend server -
```
cd /path/to/ng-training
cd server
npm install 
node server.js
```

This will start the server on post 3000. You can change the port in server.js. You can see http://localhost:3000/ to see the backend server running. Now you can run your examples using the same steps described in previous section.

#### Chapter 10
This chapter is about unit tests. To run the unit tests you need karma. Install karma using commands

```
npm install karma-cli -g
```

Now for every example folder you need to install some node modules like karma, jasmine and a few more and then run karma test runner. Same can be done by commands -

```
cd path/to/ng-training
cd chapter9-unit-testing/basic-service-test
npm install
```

This will install the required npm modules. The modules which will be installed are listed in package.json.

To run the tests run the command -

```
cd path/to/ng-training
cd chapter9-unit-testing/basic-service-test
karma start
```

This command reads the karma.conf.js file as run the tests from the folders as specified here.

#### Chapter 11
Run the backend server and angular frontend server as done for Chapter 4 and 8. To run the protractor tests first install protractor.

```
npm install protractor -g
webdrver-manager update
```

In order to run e2e tests you need to have selenium server running. In a separate tab you can run selenium server

```
webdriver-manager start
```

The go to the example folder and run

```
cd path/to/ng-training
cd chapter10-e2e-tests-using-protractor/fifa-e2e-tests
protractor protractor.conf.js
```











