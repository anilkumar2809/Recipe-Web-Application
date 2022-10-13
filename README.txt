# www Folder
This directory represents the DOC_ROOT folder named www of your AMPPS installation.

ZIP all contents of this folder, and unzip in the corresponding folder.

Modify api/database.php with the username and password for your install
Recipe Extractor Front-End
This folder contains the code base for the front-end (or client side) of the Recipe Extractor and Storage Applicaton, as well as code for running a development environment for working on this code.

Installation
Source Files
Production Build
Dev Environment
Installation
After downloading the entire git repo, install the dependencies for developing and building the front-end project using the command below:

npm install
Source Files
All source files for this project can be found in the /src directory.

Production Build
For production, the React code base is compiled into a single javascript bundle using Webpack and Babel. To build this bundle, and save to the directory /dist, run the following command:

npm run build
Dev Environment
Included in this code base is all the functionality necessary to run the frontend in a development server on localhost:8080. All changes to the code are refected realtime while in this development environment. To start the development environment, run the command below:

npm start
Footer
