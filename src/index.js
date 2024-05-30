document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("episode-form")
  const thumbCharacter = document.getElementById("character-bar")
  const characterSpecs = document.getElementById("character-preview")
  const episodeList = document.getElementById("episode-list")
  const saveEpisode = document.querySelector("#saved-episodes")

  loadSaveEpisode()

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const episodeInput = document.getElementById("season-episode").value
    const url = `https://rickandmortyapi.com/api/episode/?episode=${episodeInput}`

    thumbCharacter.innerText = ""

    fetch(url)
    .then((response) => response.json())
    .then((apiEpisodeData) => {
      let characters = apiEpisodeData.results[0].characters
      characters.forEach((characterUrl) => renderCharacters(characterUrl))
    })
  })

  function renderCharacters(characterUrl) {
    fetch(characterUrl)
    .then((response) => response.json())
    .then((character) => {
      const img = document.createElement("img")
      img.src = `${character.image}`
      img.alt = `${character.name}`
      img.classList.add("thumb-img")
      thumbCharacter.appendChild(img)
      img.addEventListener("mouseover", () => {showCharacter(character)
      })
    })
  }

  function showCharacter(character) {
    characterSpecs.textContent = ""
    episodeList.textContent = ""

    const container = document.createElement("div")
    const details = document.createElement("div")
    const h2 = document.createElement("h2")
    const statusH4 = document.createElement("h4")
    const speciesH4 = document.createElement("h4")
    const bigImg = document.createElement("img")
    const button = document.createElement("button")

    container.classList.add("character-details")
    details.classList.add("details")
    bigImg.src = `${character.image}`
    bigImg.id = "enlarged-image"
    h2.textContent = `Name: ${character.name}`
    h2.id = "char-name"
    statusH4.textContent = `Status: ${character.status}`
    speciesH4.textContent = `Species: ${character.species}`
    button.textContent = "GET ALL EPISODES"

    details.appendChild(h2)
    details.appendChild(statusH4)
    details.appendChild(speciesH4)
    container.appendChild(bigImg)
    container.appendChild(details)
    characterSpecs.appendChild(container)
    characterSpecs.appendChild(button)

    button.addEventListener("click", (e) => {getEpisodes (character.episode)
    })
  }

  function getEpisodes(episodeUrls) {
    episodeList.textContent = ""
    episodeUrls.forEach((episodeUrl) => {
      fetch(episodeUrl)
      .then((response) => response.json())
      .then((apiEpisodeData) => renderEpisodeList(apiEpisodeData))
    })
  }

  function renderEpisodeList (apiEpisodeData) {
    const div = document.createElement("div")
    const li = document.createElement("li")
    const saveButton = document.createElement("button")

    saveButton.classList.add("save-button")
    saveButton.textContent = "Save Adventure"
    div.textContent = ` (${apiEpisodeData.episode}) Air Date: ${apiEpisodeData.air_date} `
    div.classList.add("date")
    li.textContent = `${apiEpisodeData.name}`
    li.classList.add("ep-name")

    div.appendChild(saveButton)
    li.appendChild(div)
    episodeList.appendChild(li)

    saveButton.addEventListener("click", () => {
      saveEpisodeData(apiEpisodeData)
    })
  }

  function saveEpisodeData(apiEpisodeData) {

    let episodesData = {
      name: apiEpisodeData.name,
      episode: apiEpisodeData.episode,
      date: apiEpisodeData.air_date
    }

    fetch('http://localhost:3000/episodes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(episodesData)
    })
    .then(response => response.json())
    .then(episodeData => renderSaveEpisode(episodeData))
    .catch(error => console.error('Error saving episode:', error));
  }

  function renderSaveEpisode (episodesData) {
    const li = document.createElement("li")
    li.id = episodesData.id
    const delButton = document.createElement("button")

    li.textContent = `${episodesData.name}`
    delButton.textContent = "Remove"

    li.appendChild(delButton)
    saveEpisode.appendChild(li)

    delButton.addEventListener("click", () => deleteEpisode(episodesData.id))

  }
  // / need to use event form function above to delete


  function deleteEpisode(id) {
    fetch(`http://localhost:3000/episodes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(data.id).remove()
    })
  }

  function loadSaveEpisode() {
    fetch('http://localhost:3000/episodes')
      .then(response => response.json())
      .then(episodes => {
        episodes.forEach(episode => renderSaveEpisode(episode));
      })
      .catch(error => console.error('Error fetching saved episodes:', error));
  }
})
