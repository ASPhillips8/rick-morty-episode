document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("episode-form")
    const thumbCharacter = document.getElementById("character-bar")

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
      })
    }
})
