# regapp
Application for capturing and managing I.T assets

## Getting Started

Install prerequisites below and follow install instructions.

### Prerequisites

Node.js needs to installed, application has been tested with V9.11.1 and V10.1.0 https://nodejs.org.
MongoDB needs to be installed, current tested version is V 3.6 https://www.mongodb.com/.

### Installing

Download Nodejs for operating system and follow the prompts provided.

Download MongoDB follow prompts to install. Make sure in your root direct that ./data/db directory is created and has correct permissions. This is default directory for storing database related files.

## Deployment

Make sure mongodb service is running. If path variable is not set you will need to navigate to C:\Program Files\MongoDB\Server\3.6\bin\ and type mongod.

Next step clone repo to folder of your choice, open terminal navigate to folder and type "npm install". This will install require packages for the application. Once done type node app into the terminal and application will start and go to http://localhost:3433/api/assets/.

I would recommed posting data first as database blank you can navigate to Models folder in repo and check the assetModel.js file and see how the schema is structed.

You can use tools jsfiddler or postmon to send GET, POST, PUT, PATCH and DELETE requests to API.

## Built With

* [NodeJS](https://nodejs.org) - The JavaScript framework to run JavaScript in the Backend.
* [MongoDB](https://www.mongodb.com/) - MongoDB is a free and open-source cross-platform document-oriented database program.
* [ExpressJS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [Mongoose](http://mongoosejs.com/) - elegant mongodb object modeling for node.js.

## Authors

* **Dustin Bishop** - *Owner* - [insanedust](https://github.com/insanedust)

