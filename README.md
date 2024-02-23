# task_manager
A task management application build with CRUD functionailities

Technologies: MongoDB Atlas, Express.js, Node.js, Mongoose.js

front-end: Vannilla.js, Html, CSS - Open Source GUI

##################
# task_manager
A task management application with local and cloud data persistence built with node.js

#To use postman
create a collection , create a global url using the baseUrl localhost:3000/api/vi and save as URL. To use, createa new http request, {{ URL}}/tasks
To get a task, pass the params id. 
To create a sinfle task, pass in the request body

#Mongo DB
Atlas - free cloud hosting, NoSql, store in JSON
Create mongodb atlAS ->  NEW ACCOUNT -> login  to signup -> free tier -. Aws -> create cluster
Row = document

Atlas database user => Add new Db user , password authentication -> benjy , 1993
Network Access=> Add IP address -> ALlow acces from anywhre
Deployment ->Database -> Cluster => connect your application , 3.6 or later -> connect to your application ->copy connection string 
'mongodb+srv://benjy:<password>@nodeexpressprojects.7yzqwfq.mongodb.net/?retryWrites=true&w=majority'

#Atlas connection string - Db folder and a js file to add the connection string

#for production, use IP Access list entry e.g Heroku hosting. Allow from anywhere option is a must

#Deployment -> Database deployment -> Browse collection ->  Add my own data -> create a db  -> store ,collection or table = products.

click on insert document (records: key/pair) , you can change type. NB: There's no definite order to which you can add data types

# use  mongoose to create the structure of the db documents.
mongoosejs.com for the API -> object model for node.js. 
#npm iinstall mongoose
import into APP.js

 #To remove deprecation error when connecting to mongoose, use the objects as second parameter:{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true}

# Refactoe : db connect first before server runs
using Asyn await --> db connect is a promise before the server runs

# dotenv installed 
npm install dotenv
To prevent db strings or secret from being pushed to github
to include in .gitignore
remove the conectionString in the connection.js, and create .env file , then paste the connection string

# Model
Create a schema with data types. Then a model
A model is a wrapper for the schema. An instance of model is called a document

# Validate null or empty value
we can set property as an object with other validators, like reuired, trim white spaces etc
when not required, it does not need to be passed in the respose body
if try catch block not use for validation of a promise, postman will keep sending and will not output anything

# Monggose docs--- mongoosejs.com/docs/queries.html
use the fliter with find({}) - get all the records.
.then() can be used for promise

# get a task
findOne() with condition
For null check with if..... make sure you return a respponse
# handling 2 errors. 1. error default and 2. the custome error with ``
cast error - when adding to id
custom error - edit the last digit

# for the update method, it will return old object when the path method id used and also it won't validate an empty string

soultion is to use the option parameter as a 3rd parameter after req.body

# Adding front end
create a middle ware for public folder. Remove the default app.get('/hello')
GO to loalhost:3000

# PUT vs PATCH
both for updating. Put replaces the extisying, patch - partial update
NB: if default is removed from completed, it won't reflect in the db when put is used, when name only is passed in the body

# Page not found
Plece the not found middleware below other route as express runs from top to bottom

# Async wraper
remove try catch block from the controller class and pass as a parameter in the async.js file. async wrapper takes in our controller as a parameter

# Custom error handler
when used with nex(), create with a custom error handler, else, built in error handler
Test on postman by creating an empty task
NB: the cast error by adding long ID to get or unknown ID prints the custome
error message "something went....." or cast error

# custom error class
for all http methods
1.create a custom class and extends Error from mongoose
2.use this error object in the controller class
3. use the error class in the custome handler

# port variable
set in app.js to prod || local 
to test on terminal: PORT=6000 node app.js
