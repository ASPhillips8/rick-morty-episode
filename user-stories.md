# Character Finder App Concept

## Feature 1: Search Episode

**User Story**
As a user, I want to search for all characters that are within a particular season and episode.

**Details**
Implement a search bar that allows the user to input an episode by code (e.g., "S03E07"). Upon submission, the app fetches data from an API and displays the images of all characters within that episode in a bar.

## Feature 2: View Character Details

**User Story**
As a user, I want to move through each displayed character in the bar and see details about the character in a separate container.

**Details**
When the cursor hovers over a small image in the bar, it shows an enlarged picture including details about the character. This can be achieved with a mouseover event listener.

## Feature 3: View All Episodes that Character Has Been In

**User Story**
As a user, if I click on a character, I want to see all the episodes that character has been in.

**Details**
When a character's picture is clicked, it displays an organized list of all episodes that character has appeared in. This can be accomplished by a click event listener.

## Feature 4: Mark All Episodes that I Want to Watch (Stretch Goal)

**User Story**
As a user, I want to save each episode that I want to watch in the future.

**Details**
Enable a save button that when clicked will add episode to Saved Adventures list that will persist in app. This can be accomplished with click event.

## Feature 5: Delete All Episodes that I Saved (Stretch Goal)

**User Story**
As a user, I want to delete any episode that i have saved

**Details**
Enable a delete button that when clicked will remove a episode from Saved Adventures list that will persist in app. This can be accomplished with click event and call upon the json server.
