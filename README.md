# Dummy API for Finding Mutual Friends Not Using the App

This application is a simple API designed to find mutual friends who are not yet using the app. It features two main endpoints for syncing contacts and retrieving prospective users.

## How to Run

To run this application, you need to have Node.js installed on your system. Once you have Node.js, you can execute the app.js file using the following command:

```sh
node app.js
```


# Create two endpoints

- Sync contacts

API specs:
    endpoint: sync-contacts
    request-body:
     {
        userId: string // current user that is called the endpoint |preferabbly extract it from auth, 

        phoneNumbers: [string], list of phone numbers

     }

     response:
     { success: boolean, message: string }, status-code 201 | 500 | 400



- prospective users

API specs:
   endpoint: prospective-users
   request-body:
      {
         userId: string // current user of the application
      }

      Response:
       {
         prospectiveUsers: [
          {
             phoneNumber: string, // number of the contact not on app
             prospectiveUsers: integer // their mutual friends that are on app
          }
            ]
    }
        

