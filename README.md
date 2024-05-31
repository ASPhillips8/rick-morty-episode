# Rick and Morty Episode Viewer

## Description

This web application allows users to search for episodes of the Rick and Morty TV show by season and episode number. Users can view character thumbnails for each episode, see detailed character information, and save episodes for later reference.

## Features

- Search for Rick and Morty episodes by season and episode number.
- Display character thumbnails from the selected episode.
- View detailed information about each character, including name, status, and species.
- Fetch and display all episodes a character has appeared in.
- Save favorite episodes to a list and remove them when no longer needed.


## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/rick-and-morty-episode-tracker.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd rick-and-morty-episode-tracker
   ```

3. **Install JSON Server (if not already installed):**
   ```bash
   npm install -g json-server
   ```

4. **Start JSON Server:**
   ```bash
   json-server --watch db.json --port 3000
   ```

5. **Open `index.html` in your browser to use the application.**

## Usage

1. Enter the season and episode code (e.g., "S01E01") in the input field and submit the form to search for episodes.
2. Hover over the character thumbnails to see their details.
3. Click "GET ALL EPISODES" to view a list of episodes the character appears in.
4. Save your favorite episodes by clicking "Save Adventure" in the episode list.
5. View saved episodes in the "Saved Episodes" section, and remove them if desired.

## Features

- **Search Episodes**: Search for episodes by season and episode code.
- **View Characters**: View character thumbnails and details.
- **List Episodes**: List all episodes a character appears in.
- **Save Episodes**: Save favorite episodes to a local server.
- **Delete Episodes**: Remove episodes from the saved list.

## API Endpoints

- **Rick and Morty API**: `https://rickandmortyapi.com/api/episode`
- **Local JSON Server**: `http://localhost:3000/episodes`
