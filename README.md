#  Movies Test App

  

## Description

This application allows you to browse popular movies, search for specific movies, and obtain detailed information about them. It uses The Movie Database (TMDb) API to fetch movie data.

##  Instalación  

###  Front-End

1. Go to [https://www.themoviedb.org/](https://www.themoviedb.org/) and register or log in with an existing account to generate an API Read Access Token.

2. Once you've generated the API Read Access Token, create a `.env.local` file in the root directory of your Front-End project.

3. In the `.env.local` file, create an environment variable called `VITE_TMDB_AUTH_TOKEN` and assign it the API Read Access Token you generated in step 1. It should look like this:

```
  VITE_TMDB_AUTH_TOKEN=API Read Access Token
  ```

4. Guarda el archivo `.env.local`.

6. Open the console and navigate to the root directory of your Front-End project.

7. Run the following command to install the necessary dependencies:

```bash

yarn

  ```

7. Once the dependencies are successfully installed, you can start the project by running:

```bash

yarn dev

```

8.   You can now test the application by accessing the local URL shown in the console (by default, [http://localhost:5173](http://localhost:5173/)).

  

### Back-End

1. Go to [https://www.themoviedb.org/](https://www.themoviedb.org/) and register or log in with an existing account to generate an API Read Access Token.

2. Once you've generated the API Read Access Token, create a `.env` file in the root directory of your Back-End project.

3. In the `.env` file, create an environment variable called `TMDB_AUTH_TOKEN` and assign it the API Read Access Token you generated in step 1. It should look like this:
```
  TMDB_AUTH_TOKEN=API Read Access Token
```
  4. Create an environment variable called `PORT` and assign the desired port value for listening. It should look like this:
  ```
	PORT=0000
```
5. Save the `.env` file.

6. Open the console and navigate to the root directory of your Back-End project.

7. Run the following command to install all the necessary dependencies:

```bash

npm install

  ```

8. Once the dependencies are successfully installed, you can start the project by running:

```bash

npm run dev

 ```
  
9. Additionally, consider using a tool like [Insomnia](https://insomnia.rest/) for API testing.