const taskDao = require("../models/taskDao");
const nodemailer = require('nodemailer');
 
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
  service: 'gmail',
  auth: {
    user: 'testcloud1318@gmail.com', // Generated ethereal user
    pass: 'testabc1' // Generated ethereal password
  },
  tls: {
   rejectUnauthorized: false
  }
});

 class TaskList {
   /**
    * Handles the various APIs for displaying and managing tasks
    * @param {TaskDao} taskDao
    */
   constructor(taskDao) {
     this.taskDao = taskDao;
   }
   
   async showTasks(req, res) {
     const querySpec = {
       query: "SELECT * FROM root r WHERE r.completed=@completed",
       parameters: [
         {
           name: "@completed",
           value: false
         }
       ]
     };

     const items = await this.taskDao.find(querySpec);
     res.render("index", {
       title: "My ToDo List ",
       tasks: items
     })
   }

   async addTask(req, res) {
     const item = req.body;
     
     const output = `
        You have a new to do in list
          Task Name: ${req.body.name}
          Category: ${req.body.category}
      `
      
      let mailOptions = {
        from: '"To Do Application" <testcloud1318@gmail.com>', // From
        to: "alexana213@gmail.com", // To
        subject: "New task available", // Mail Subject
        text: output, // Mail Body
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
          return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      });
     
     await this.taskDao.addItem(item);
     res.redirect("/");
   }

   async completeTask(req, res) {
     const completedTasks = Object.keys(req.body);
     const tasks = [];

     completedTasks.forEach(task => {
       tasks.push(this.taskDao.updateItem(task));
     });

     await Promise.all(tasks);

     res.redirect("/");
   }
 }


 module.exports = TaskList;

/** const taskDao = require("../models/taskDao");

 class TaskList {
   /*
    * Handles the various APIs for displaying and managing tasks
    * @param {TaskDao} taskDao
    
   constructor(taskDao) {
     this.taskDao = taskDao;
   }
   async showTasks(req, res) {
     const querySpec = {
       query: "SELECT * FROM root r WHERE r.completed=@completed",
       parameters: [
         {
           name: "@completed",
           value: false
         }
       ]
     };

     const items = await this.taskDao.find(querySpec);
     res.render("index", {
       title: "My ToDo List ",
       tasks: items
     })
   }

   async addTask(req, res) {
     const item = req.body;

     await this.taskDao.addItem(item);
     res.redirect("/");
   }

   async completeTask(req, res) {
     const completedTasks = Object.keys(req.body);
     const tasks = [];

     completedTasks.forEach(task => {
       tasks.push(this.taskDao.updateItem(task));
     });

     await Promise.all(tasks);

     res.redirect("/");
   }
 }

 module.exports = TaskList; */