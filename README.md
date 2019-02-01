## Deploy the fulfillment
  1. [Download and install Node.js](https://nodejs.org/)
  
  2. Set up and initialize the Firebase CLI. If the following command fails with an EACCES error, you may need to [change npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions).
  
     ```npm install -g firebase-tools```
  
  3. Authenticate the firebase tool with your Google account:
  
     ```firebase login```
  
  4. Move to your Folder/Directory where you want to store your folder and type firebase init.
  
         cd <sample_dir>
         firebase init
  
  5. Associate the firebase tool with your Actions project by selecting it using the arrow keys to navigate the projects list:
  
  6. After choosing the project, the firebase tool will start the Functions setup asking you what language you want to use. Select using        the arrow keys and press Enter to continue.
  
         === Functions Setup

         A functions directory will be created in your project with a Node.js
         package pre-configured. Functions can be deployed with firebase deploy.

         ? What language would you like to use to write Cloud Functions? (Use arrow keys)
         > JavaScript
         TypeScript
    
  7. Choose if you want to use ESLint to catch probable bugs and enforce style typing Y or N:(Type N if you don't know how to use this.)
  
     ```? Do you want to use ESLint to catch probable bugs and enforce style? (Y/n)```
  
  8. Get the project dependencies by typing Y to the prompt:
  
     ```? Do you want to install dependencies with npm now? (Y/n)```
  
  Once the setup is completed, you'll see an output similar to the following:
    
      ✔  Firebase initialization complete!

  9. Install the actions-on-google dependency
  
          cd <sample_dir>/functions
          npm install actions-on-google
       
  Write your code inside index.js which can be found insite your newly created folder. For reference use the sample code given.
   
  10. Get the fulfillment dependencies and deploy the fulfillment function:

          npm install
          firebase deploy --only functions
     

  The deployment takes a few minutes. Once completed, you'll see output similar to the following. You'll need the Function URL to enter   in Dialogflow.

    ✔  Deploy complete!

    Project Console: https://console.firebase.google.com/project/myprojectname-ab123/overview
    Function URL (factsAboutGoogle): https://us-central1-myprojectname-ab123.cloudfunctions.net/factsAboutGoogle
  
  11. If you're using Dialogflow: In the Dialogflow Console, click Fulfillment, move the ENABLED slider to the right, and enter the           Function URL in the URL field. For example, your Dialogflow fulfillment setting might look like this screenshot.

         ![Image of Webhook](https://developers.google.com/actions/images/get-started-fulfillment.png)
 

                  
