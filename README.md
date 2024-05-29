# QACinema-Project

Frontend coverage: 59.04%

Backend coverage: 91.24%

# QA Cinema Website by Team AKAM

This project focuses on a cinema website that was coded using the MERN (MongoDB, Express, React, Node) stack. The backend was built using express by creating various API requests. The data for the requests was retrieved from a cloud mongo database using axios in the frontend. The frontend was built using the 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing for Windows machine

A step by step series of examples that tell you how to get a development environment  running.

#### Prerequisites

To get started, please install:

- **Microsoft Visual Studio Code** - or any other code editor of your choice.
- **Node.js** - to install required modules.
- **MongoDB Server** - can either be locally hosted or on a cloud using [MongoDB Atlas Cloud Database](https://www.mongodb.com/try).

Additional tools:

- **Postman** - used to test API calls to and from the database.

## Importing and running QA Cinema website

1. First you will have to import the project by either downloading this project as a zip or can be cloned down using git with the following command:

   ```
   git clone https://github.com/QA-AKAM/QACinema-Project.git
   ```

2. Once its been cloned down you can access the folder through Visual Studio Code as shown below:

![](https://i.imgur.com/u3bMPbS.png)

3. Before running the backend, make sure that the NODE variable is NOT set to "test". Otherwise you will only be able to access the test database. The link for the database can be changed by changing the MONGODB_URI string:

   ![](https://i.imgur.com/P83NzVL.png)

4. Next you will need to open a command window at both the backend and frontend folder and run the command 

   ```
   npm i
   ```

   ![](https://i.imgur.com/2g5Q1z1.png)

   ![](https://i.imgur.com/GfN0KNL.png)

   This will install all the relevant modules that are listed in the package.json files in the backed and frontend folder.

5. Once they have been installed, you can now start the backend server by running: 

   ```
   nodemon index.js
   ```

   This will start the backend server and connect to your mongoDB. Once its connected you will see the following output in your terminal:

   ![](https://i.imgur.com/oTIw32M.png)

   Then to start the frontend run the following:

   ```
   npm start
   ```

   This will then start up the website on your localhost at port 3000.

   ![](https://i.imgur.com/IKw90yy.jpg)

   

   You now have the QA Cinema setup for developing!

## MongoDB Setup

MongoDB is simple to setup and run directly from https://www.mongodb.com/try

Follow the register and setup intuitive UI to set a MongoDB instance on Google Cloud Platform or other cloud provider available on mongodb.com (Azure and AWS).

After you are all setup and have create a database, try to connect. You will be asked to set your connection credentials and connection type. Select connect your app and you will receive a connection string which will be used in your express app in index.js file to connect to the database

```javascript
mongoose.connect(CONN_STRING, { useNewUrlParser: true, useUnifiedTopology: true }) 
```

See “mongodb_gcp_setup”  in  the documentation folder for further reference.

## Running the tests

For testing we achieved 91.24% on the backed but only achieved 59.04% for the frontend. This was due to a problem we had with using Jest, a JavaScript testing framework. With Jest we had issues in testing components that heavily relied on useStates and useParams. It was recommended that Enzyme was used to test states however we did not have time at the end to learn and use it. 

We did do several snapshot tests which confirmed the functionality of the code. For example for the test of the released movie page, a movie object was passed to the useState and in the snapshot the movie card is displayed along with the opening times and the high quality image link. This shows that the function that gets the high quality movie image works, as well as the function that automatically sorts the movie days and times according to the current date and time. 

The backend testing was much more straightforward. We used Mocha and Chai for testing, and used Istanbul to see the code coverage of the tests. A test mongoDB cloud database was setup so it would not affect the production environment. There was no issues in running the tests.

To run the tests follow the steps below:

1. To test and see the coverage for the backend, simply run the command below in the backend terminal:

   ```
   npm run coverage
   ```

   When the tests are complete, it will show the coverage:

   ![](https://i.imgur.com/VAyw6to.png)

2. To test and see the coverage for the frontend, simply run the following command in the frontend terminal:

   ```
   npm test -- --coverage --watchAll
   ```

   This will run all the test files and show the coverage:

   ![](https://i.imgur.com/SQsq49z.png)

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Supporting Documentation

All supporting documentation can be found in the "Documentation" folder. This folder includes the following:

1. jira_link_and_report.pdf
2. Risk assessment.pdf
3. ERD_1.png
4. ERD_2.png
5. mongodb_gcp_setup.pdf
6. backend_api_documentation.png
7. backend_design.png
8. component_hierarchy.png
9. database_structure.png
10. feature_branch_model.png
11. Coverage Reports Folder - all coverage related files.
12. QA-Cinema Project.pdf

## API Keys and config file
All keys are gitignored in a config.js file.
To have embedeed maps and email functionality create a file named `config.js` in the source file of the frontned -> ../frontend/src
Open the file and paste the following code adding you google map keys and email-jd id

```
const config = {
    googleMapsAPIKey: `your ap key`,
    emailJsId: `your user id`
}
export default config;
```

## Authors

* **Asshwin Mugundharajah** - [ashkl](https://github.com/ashkl)
* **Kevin Doan** - [KevinD-QA](https://github.com/KevinD-QA)
* **Alin Ivan** - [thealinivan](https://github.com/thealinivan)
* **Matthew Holmes** - [Matayoh14](https://github.com/Matayoh14)

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

*For help in [Choosing a license](https://choosealicense.com/)*

## Acknowledgments

* All the QAC Trainers!