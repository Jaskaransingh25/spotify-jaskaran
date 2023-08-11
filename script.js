document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const tracksContainerDiv = document.getElementById("tracksContainer");
  
    searchButton.addEventListener("click", () => {
        const query = searchInput.value;
        searchAlbums(query);
    });
    searchInput.addEventListener("keydown", event => {
      if (event.key === "Enter") {
          const query = searchInput.value;
          searchAlbums(query);
          event.preventDefault(); // Prevent form submission or page refresh
      }
  });
  
    function searchAlbums(query) {
        tracksContainerDiv.innerHTML = "";
  
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
  
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                const response = JSON.parse(this.responseText);
                let albums = response.albums.items;
                console.log(albums)
                albums.forEach(album => {
                    const albumData = album.data;
  
                    const albumDiv = document.createElement("div");
                    albumDiv.classList.add("album");
  
                    const coverArt = document.createElement("img");
                    coverArt.src = albumData.coverArt.sources[0].url;
                    coverArt.alt = albumData.name + " Cover Art";
                    albumDiv.appendChild(coverArt);
  
                    const albumInfoDiv = document.createElement("div");
                    albumInfoDiv.classList.add("album-info");
  
                    const albumName = document.createElement("h2");
                    albumName.textContent = albumData.name;
                    albumInfoDiv.appendChild(albumName);
  
                    const artists = document.createElement("p");
                    artists.textContent = "Artists: " + albumData.artists.items.map(artist => artist.profile.name).join(", ");
                    albumInfoDiv.appendChild(artists);
  
                    const releaseYear = document.createElement("p");
                    releaseYear.textContent = "Release Year: " + albumData.date.year;
                    albumInfoDiv.appendChild(releaseYear);
  
                    const albumDuration = document.createElement("p");
                    albumDuration.textContent = "Duration: " + getRandomDuration(); // Replace with actual duration if available
                    albumInfoDiv.appendChild(albumDuration);
  
                    const numberOfTracks = document.createElement("p");
                    numberOfTracks.textContent = "Number of Tracks: " + getRandomTrackCount(); // Replace with actual track count if available
                    albumInfoDiv.appendChild(numberOfTracks);
  
                    const albumDescription = document.createElement("p");
                    albumDescription.textContent = getArtistDescription(albumData.artists.items);
                    albumDescription.classList.add("album-description");
                    albumInfoDiv.appendChild(albumDescription);
  
                    const albumLink = document.createElement("a");
                    albumLink.href = albumData.uri;
                    albumLink.target = "_blank";
                    albumLink.textContent = "Listen on Spotify";
                    albumLink.classList.add("album-link");
                    albumInfoDiv.appendChild(albumLink);
  
                    albumDiv.appendChild(albumInfoDiv);
                    tracksContainerDiv.appendChild(albumDiv);
                });
            }
        });
  
        xhr.open('GET', `https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=10&numberOfToptracksContainer=5`);
        xhr.setRequestHeader('X-RapidAPI-Key', 'b0ea400babmshbda9aeed4002acbp10b42ejsnee7758357ab6');
        xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');
  
        xhr.send();
    }
  
    function getRandomDuration() {
        // Replace with actual duration calculation
        return Math.floor(Math.random() * 200) + 120 + " min";
    }
  
    function getRandomTrackCount() {
        // Replace with actual track count calculation
        return Math.floor(Math.random() * 10) + 5;
    }
  
    function getArtistDescription(artists) {
        // Combine artist names for a description
        return "Featuring " + artists.map(artist => artist.profile.name).join(", ");
    }
  });document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const tracksContainerDiv = document.getElementById("tracksContainer");
  
    searchButton.addEventListener("click", () => {
        const query = searchInput.value;
        searchAlbums(query);
    });
    searchInput.addEventListener("keydown", event => {
      if (event.key === "Enter") {
          const query = searchInput.value;
          searchAlbums(query);
          event.preventDefault(); // Prevent form submission or page refresh
      }
  });
  
    function searchAlbums(query) {
        tracksContainerDiv.innerHTML = "";
  
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
  
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                const response = JSON.parse(this.responseText);
                let albums = response.albums.items;
  
                albums.forEach(album => {
                    const albumData = album.data;
  
                    const albumDiv = document.createElement("div");
                    albumDiv.classList.add("album");
  
                    const coverArt = document.createElement("img");
                    coverArt.src = albumData.coverArt.sources[0].url;
                    coverArt.alt = albumData.name + " Cover Art";
                    albumDiv.appendChild(coverArt);
  
                    const albumInfoDiv = document.createElement("div");
                    albumInfoDiv.classList.add("album-info");
  
                    const albumName = document.createElement("h2");
                    albumName.textContent = albumData.name;
                    albumInfoDiv.appendChild(albumName);
  
                    const artists = document.createElement("p");
                    artists.textContent = "Artists: " + albumData.artists.items.map(artist => artist.profile.name).join(", ");
                    albumInfoDiv.appendChild(artists);
  
                    const releaseYear = document.createElement("p");
                    releaseYear.textContent = "Release Year: " + albumData.date.year;
                    albumInfoDiv.appendChild(releaseYear);
  
                    const albumDuration = document.createElement("p");
                    albumDuration.textContent = "Duration: " + getRandomDuration(); 
                    albumInfoDiv.appendChild(albumDuration);
  
                    const numberOfTracks = document.createElement("p");
                    numberOfTracks.textContent = "Number of Tracks: " + getRandomTrackCount(); 
                    albumInfoDiv.appendChild(numberOfTracks);
  
                    const albumDescription = document.createElement("p");
                    albumDescription.textContent = getArtistDescription(albumData.artists.items);
                    albumDescription.classList.add("album-description");
                    albumInfoDiv.appendChild(albumDescription);
  
                    const albumLink = document.createElement("a");
                    // https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr
                    let albumIdArr = []
          
                    for(let i=14; i < albumData.uri.length; i++) {
                      albumIdArr.push(String(albumData.uri.charAt(i)))
                    }
                    console.log(albumIdArr);
                    let albumId = ''
                    for(alphabet in albumIdArr) {
                      albumId += albumIdArr[alphabet]
                    }
                    console.log(albumId)
                    albumLink.href = `https://open.spotify.com/album/${albumId}`;
                    console.log(albumData)
                    albumLink.target = "_blank";
                    albumLink.textContent = "Listen on Spotify";
                    albumLink.classList.add("album-link");
                    albumInfoDiv.appendChild(albumLink);
  
                    albumDiv.appendChild(albumInfoDiv);
                    tracksContainerDiv.appendChild(albumDiv);
                });
            }
        });
  
        xhr.open('GET', `https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=10&numberOfToptracksContainer=5`);
        xhr.setRequestHeader('X-RapidAPI-Key', '47bbb03ed0msha286a2be96514fdp1cf8aajsnfb5021fa0713');
        xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');
  
        xhr.send();
    }
  
    function getRandomDuration() {
        // Replace with actual duration calculation
        return Math.floor(Math.random() * 200) + 120 + " min";
    }
  
    function getRandomTrackCount() {
        // Replace with actual track count calculation
        return Math.floor(Math.random() * 10) + 5;
    }
  
    function getArtistDescription(artists) {
        // Combine artist names for a description
        return "Featuring " + artists.map(artist => artist.profile.name).join(", ");
    }
  });