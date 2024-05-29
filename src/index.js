document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("episode-form")
  const thumbCharacter = document.getElementById("character-bar")
  const characterSpecs = document.getElementById("character-preview")
  const episodeList = document.getElementById("episode-list")

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const episodeInput = document.getElementById("season-episode").value
    const url = `https://rickandmortyapi.com/api/episode/?episode=${episodeInput}`

    thumbCharacter.innerText = ""

    fetch(url)
    .then((response) => response.json())
    .then((episodeData) => {
      let characters = episodeData.results[0].characters
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
      img.addEventListener("mouseover", (event) => {showCharacter(character)
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
      .then((episodeData) => renderEpisodeList(episodeData))
    })
  }
  getEpisodes()

  function renderEpisodeList (episodeData) {
    const div = document.createElement("div")
    const li = document.createElement("li")
    const checkBox = document.createElement("input")

    checkBox.type ="checkbox"
    div.textContent = ` (${episodeData.episode}) Air Date: ${episodeData.air_date}`
    div.classList.add("date")
    li.textContent = `${episodeData.name}`
    li.classList.add("ep-name")

    li.appendChild(checkBox)
    li.appendChild(div)
    episodeList.appendChild(li)
  }
})


// need to create a check box for the episode
// handle check function
// if/else statement
//
