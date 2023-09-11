# Green Kiwi Backend Server

<img src="https://github.com/hanulrheem9218/govhack2023-backend/blob/master/assets/backend.PNG"  width="100%" />

This project serves as the backend server for Green Kiwi and is written in Express.js, And I was assigned as the backend developer.
I was given just two days to develop the backend server during the competition, and although I was new to Express.js, with the team, I was able to successfully complete the backend server. 
This experience taught me that achieving fast production results requires both knowledge and the ability to work effectively as part of a team.

## Design Pattern: Controller-Service-Repository

- Controller: used the controller to implement rest interface for the business logics.
- Service: applied the businnes logics to the service.
- Repository: stored the entities into the github.

## Features

### Finished (Backend Features)

- Getting post/user informations
- Updating post/user informations
- Posting post/user informations
- Deleting post 
- Firebase login authentication/authroization
- All data is stored online using MongoDB

### Bug Fixes

<details><summary>Expand to see bug fixes</summary>
  
  - Incorrect firebase authentication api with backend server.
  - MongoDB vercel intergration issues with enviroment variables.
  - Vercel.json configuration error, incorrect destinaiton source and the address.
  - Incorrect mongoose data schema types for the data entities.
  - Linking image issues with the vercel.
  - Incorrect returning types for the user, achievements, monthly-reports, freebie-postings.
  - There are Vercel configuration issues with a hosting address that is only accessible with '/api'.
    
</details>


# Package Structure

- **api** — contains api call for the frontend server.
- **assets** — contains all images assets.
- **config** —  contains various configruations for the mongoose and firebase.
- **fixtures** — contains temporary json files for testing.
- **middleware** — firebase related login authentication/authorisation
- **models** — data entities model for the mongodb database.
- **routes** — data schema model for the model entities.


