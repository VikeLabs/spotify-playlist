# Spotify Project

Welcome to Spotify Music Summary Project, a work in progress project that displays a summary list of music from your spotify account.


## Documentation

### Local Project Setup

Clone the project

```bash
  git clone https://github.com/VikeLabs/spotify-playlist.git
```

Open two terminals

Go to project directory 

```bash
  cd spotify-playlist
```

Run Server (on one terminal)

```bash
  cd server/
  npm install
  npm run dev
```

Run Client (on the second terminal)

```bash
  cd client/
  npm install
```

Navigate to http://localhost:3001/login and login with your spotify account
Note: if you are unable to do so, login using admin credentials (provided by team lead)
- then navigate to developer.spotify.com and under Settings > User and Access add your own spotify account to become a developer

Importing env
 - (If needed) Open a new terminal and navigate to server
 - Create a .env file and paste the correct credentials within it (provided by team lead)
 
Terminate the server and rerun 

```bash
 npm run dev
```
Log back into http://localhost:3001/login using your own spotify account

Navigate to the server terminal and observe the output