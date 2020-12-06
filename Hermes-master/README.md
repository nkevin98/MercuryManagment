# Hermes
This is the team repository for Software Engineering CSC 4350
## Report 1: Create a Sample/Test Firestore Database
I created a test Firestore database called “Test Firestore Database” for the Mercury Management group. This database will contain made up data for the purpose of our group attempting to create our own desktop application to monitor the database before using the database with the other Mercury team. Every single member of the group has been added as an editor.
## Report 2: Populate Test Firestore Database
I came up with some fake data to add to the test Firestore database. The root collection of the database is called “Test Collection 1: Users” and contains documents about 3 different made up users of the database. Each user document contains three key-value pairs, “Name”, “Password”, and “isAdmin”.
## Report 3: Java Communication with Firestore Research
There exists a great deal of resources and documentation for using Java with google Firestore. Google hosts many of the api’s on GitHub as open-source software. With this in mind, if we’re going to create a java program to monitor the database, we may have to use Gradle, a software build automation tool in order to ensure that our program has access to these api’s as stated in the. I have found a google api for Firestore specifically such at https://github.com/googleapis/java-firestore and a firebase admin SDK at https://github.com/firebase/firebase-admin-java.
Alternatively, https://developers.google.com/api-client-library/java provides a link where one can directly download the jar files for the google API client directly if one so desires.
Thankfully, Google also included a large number of sample programs on Github with examples of the API’s being used at https://github.com/google/google-api-java-client-samples. So, we have something we can check for examples if need be.
Overall, there are a great deal of resources available for Java which is why I believe that it is the best language for us to use to make the app to monitor the database with.
Websites used
* https://cloud.google.com/firestore/docs/reference/libraries#java – Contains information on Firestore client libraries (The website states you can use this with Firestore)
* https://firebase.google.com/docs/admin/setup#java – Information about adding Firebase Admin SDK to a firebase server.
* https://github.com/firebase/firebase-admin-java - Google firebase admin GitHub.
* https://github.com/googleapis/java-firestore - Java-firestore Github
* https://developers.google.com/api-client-library/java - Website with information about google API for java
* https://github.com/google/google-api-java-client-samples - GitHub with examples of using Google APIs for java.
* https://cloud.google.com/firestore/docs/how-to - how to guide for Firestore. Includes code examples for Java, Python, node.js, and other languages.
* https://cloud.google.com/firestore/docs/quickstart-servers#java_1 - Guide on getting access to google server client libraries for eclipse IDE. Also has information for Python, C#, node.js, etc.
## Report 4: Python Communicate with Firestore Database Research
For Python, there exists a good number of resources for using it with google Firestore. Several of the websites I managed to find included information about how to start a python program with Firestore right on the page. So this should help someone with more experience with Python to get something working if we decide to go with Python.
Websites used
* https://pypi.org/project/google-cloud-firestore/ - Contains information on using the Google Firestore API with Python.
* https://towardsdatascience.com/nosql-on-the-cloud-with-python-55a1383752fc - Contains information about communicating with Google Firestore using Python.
* https://googleapis.dev/python/firestore/latest/index.html - Has information about the Python Client for Firestore.
* https://github.com/GoogleCloudPlatform/python-docs-samples - GitHub with examples of python documentation.
## Report 5: How to communicate with a Firestore Database with Java
As stated before, there are a great deal of resources about using a java program to communicate with a Firestore database. With this in mind, we can design a program that can communicate with our Firestore server as well as monitor any changes.
* https://www.youtube.com/watch?v=Mcsp59_2E7E&ab_channel=Firebase - This is a great introductory video and guide to connecting the database with Java that we found. In this video, she uses famous quotes and their authors and stores them in the Firestore in real-time.

## Report 6: Pros and Cons of using different languages with Firestore
The pros and cons largely come down to the resources available to the group as well as the experience group members have with any potential language that can be used for the program we will use to communicate and monitor the database with. Since everyone is at least familiar with Java, it has a strong case of being the language we decide to use in addition to having a large number of resources available. We decided that Java had a lot of documentation and guides that will help get us started. By understanding the language, we'd figure the documentation and code would be easier for us to comprehend. One thing about Java is that if we are using it as a backend SDK, it will bypass security rules since backends are assumed to be running in a secure environment. Another great language our team was debating on using was JavaScript because we are receiving data in the format of a JSON file, which could be fetched into an array. Node.JS and React Native were popular and well known languages which sends and updates data in real-time. We also researched that it was supported for Firebase. The determining factor that steered us away from JS was the professor told us it would be difficult for this project to incorporate React in our database. Python is also a good choice with some members having experience with the language and the availability of online resources. Javascript and C# also have resources available but less so. What came down to our group not using C# and Python was that the group had very minimal experience with C#.
* https://github.com/googleapis/java-firestore - This is the documenatation on connecting the Admin SDK to Firestore.

## Report 7: C# Communicate with a Google Firestore Database
For C#, google provides many pages of documentation for C# so if we so chose, we could use C# as our language for the monitoring program for the firestore database. Many of the pages that were included for Java, especially those provided by Google, also contains information about C#.
* https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Firestore/ - Has information about how to install libraries for google firestore for C# as well as a sample program.
* https://cloud.google.com/firestore/docs/quickstart-servers#c - How to quickly start using the google cloud library with C# as well as how to add information about initializing a firestore database as well as adding information and Reading information.
* https://cloud.google.com/firestore/docs/manage-data/add-data#c - Contains information about how to add information to a firestore database with C#.
* https://cloud.google.com/firestore/docs/reference/libraries#c - Contains information about firestore client resources for languages like C#. Contains only limited information about C#.

## Report 8: Create Epics/Issues in Zenhub
For this issue, the majority of the group experimented around with Zenhub. We learned how to create Epics and have issues under each Epic. I created a Sample Epic, and to make it easier to understand, I created a Sample Issue for Sample Epic to put under it. One thing I learned was that when you move epics and issues, it could get disorganized if moved carelessly, which could make Zenhub more confusing for other teammates. For example the way we had it set up, the Epics were at the top of each issue, and the issues below the Epics would correlate with each other. Under Zenhub Research, we had find videos about Zenhub, read the support section, etc. If one of these issues moved to below another Epic like Programming Language Decision, it could confuse others on why its necessary.

## Report 9: Read the Zenhub Support Section
This issue just demonstrated what Zenhub had to offer and what it really was. Zenhub was a new program our group had to learn to use, so I started off with the "Let's get Started" which brought me to "What is Zenhub? An Intro to Zenhub in Github". There were a lot of guides we could find to get a better understanding, and ultimately we learned how it sets up the agile process. I also found out that it had its own community board through Slack, where other users would share tips and tricks.
* https://help.zenhub.com/support/solutions/articles/43000010778-what-is-zenhub-an-intro-to-zenhub-in-github - What is Zenhub? An Intro to Zenhub in Github
* https://help.zenhub.com/support/home - This was the support page of Zenhub


## Report 10: Find Videos about Zenhub
For this report, it was mainly more on familiarizing ourselves Zenhub. I found a couple of videos/playlist that would help the team on its functionaility. These were short videos and gave instructional information on the tools Zenhub had to offer like Sprint planning, roadmaps, measuring progress, etc.
* https://www.youtube.com/watch?v=vmH7i3x67TE&ab_channel=Crema - How to Write & Manage User Stories with Zenhub
* https://www.youtube.com/watch?v=FJBtFjZ55eY&list=PLFIGvQyXSp3CGS8X300Aj-hUZ-VLIhHbk&ab_channel=ZenHub - Using Zenhub (Playlist)

## Report 11: Admin UI for Database and Monitoring System
For this issue, we first collaborated on how we would like the UI to look like. We decided that the main page would display brief information on multiple user information in columns. Columns would contain a user's first name, last name, username, and applications used. If a username was clicked, the user information page would display more private information such as user's full name, password, event information such as scheduled events, and applications used. With the monitoring system, it would just display the username, the last message, last login, active user (y/n), and check button. Having the active user check allows us to monitor if we continue to need to store the user data, or if they have been inactive for a long time, we can delete the user.

## Report 12: Make Diagram about how the Database will be structured.
For the diagram, since we don't have information from the other team yet of the requirements for the database, what I can do is limited. For the diagram, I have shown two types of collections, the root collection and a subcollection for each user. The root collection where information for each user of the app will be located. This includes usernames, passwords, and the list of applications that Hermes will send messages to. For each User Document, it will connect to one subcollection that contains a document for each app that a user has connected to Hermes. For example, if user 1 has three apps used, their subcollection will have 3 documents in it whereas if user 2 has 5 apps used, then their subcollection will contain 5 documents. The number of key-value pairs in each document in the sub collection will depend on how much information we have in each store for each type of app. For example, if we only need to store 3 things for Discord, then any discord document will only contain 3 key-value pairs. If for SMS we only need 1 to store one piece of information, then we will only store 1 key value pair for each document dedicated to SMS.

## Report 13: Research Mocha test framework
<https://medium.com/better-programming/testing-in-node-js-using-mocha-and-chai-part-1-d5a9e91f4b06>
First we needed to set up the framework with<npm install mocha chai --save-dev>. After this a test directory was created. The package.json needs to be updated <"scripts": { "test": "mocha" },>. A test file and validator file is created and all the tests are run through this file. Using hooks we can see how execution looks before, after each hook is run. Running the test is done through npm test. Using unit testing will be helpful for avoiding bugs(failing test cases).

## Report 14: Research how to fork and clone a repo
git clone git@github.com:username/repo.git
Fork => click fork to create copy of repo in your account.

## Report 15: Research how to push and pull repo on GH
Push => 1) git init
        2) git add .
        3) git commit -m "Hermes-master"
        <If you have not added the repo do this>
        4) git remote add github <project url>
        5) git push -f origin master (you may not need the -f)

Pull => git clone git@github.com:username/repo.git

# Report 16: Installing node.js
On terminal(Unix/linux)
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get build-essential
sudo apt get install npm
<close and reopen terminal>
Or Here's the website download => https://nodejs.org/en/
    
# Report 17: Research other Testing Frameworks that could be used
1.) JEST:
Rated as number #1 JavaScript automation testing framework for 2018 by the stateofjs survey. Jest was developed by Facebook and used to test JavaScript codes, especially applications developed using React JS.

2.) JASMINE:
Jasmine, mostly used for asynchronous testing is a feature-rich JavaScript automation testing framework for JavaScript. The application runs on Node.js and allows accurate and flexible bug reporting by serially running the test cases. Jasmine is ranked on #3 for the JavaScript testing framework according to stateofjs 2018.

3.) NIGHTWATCH:
For automated web application testing, especially apps which are developed using Node.js, Nightwatch JS is a powerful automated framework that uses Selenium WebDriver API and allows the user to perform end to end testing. The primary objective of Nightwatch is to simplify the process of writing automated test cases and helping to set up continuous integration in your development cycle.

4.) SELENIUM WEB DRIVER:
Speaking about JavaScript testing frameworks, Selenium WebDriver is certainly the most widely accepted, and loved automation testing framework for web-applications. You can use Selenium for performing automated cross-browser testing in a thorough manner. And the fact that it is open-source makes Selenium WebDriver one of the top JavaScript testing frameworks in the industry. Not only can you use Selenium to perform automation testing with JavaScript, but you can also use it for other programming languages too.

5.) PUPPETEER:
Puppeteer is another Node.js based automated testing library which provides an API that helps the users to control Chrome by overriding the standard DevTools protocol. Many scenarios which can be done manually in the browser can be automated with the help of Puppeteer.

https://www.lambdatest.com/blog/top-javascript-automation-testing-framework/
