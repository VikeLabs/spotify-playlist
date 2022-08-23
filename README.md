# Spotify Project

Welcome to Spotify Music Summary Project, a work in progress project that displays a summary list of music from your spotify account.


## Documentation

### Local Project Setup

Clone the project

```bash
  git clone https://github.com/VikeLabs/spotify-playlist.git
```

Go to project directory 

```bash
  cd spotify-playlist
```

Installing NodeJS dependencies for Server

```bash
  cd server/
  npm install
```

Installing React Dependencies for Client

```bash
  cd client/
  npm install
```

Run Server
```bash
  npm run dev
```

Navigate to http://localhost:3000/login and login with your spotify account
Note: if you are unable to do so, login using admin credentials (provided by team lead)
- then navigate to developer.spotify.com and under Settings > User and Access add your own spotify account to become a developer

Importing env
 - (If needed) Open a new terminal and navigate to server/
 - Create a .env file and paste the correct credentials within it (provided by team lead)
 
Terminate the server and rerun 

```bash
 npm run dev
```
Log back into http://localhost:3000/login using your own Spotify account

Navigate to the server terminal and observe the outputs