const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWU5MDUxNzNhZjJkOTRlYjJhMTY0YTQxYjNmNTBlYyIsIm5iZiI6MTc0NTU2OTU4MS4xNjUsInN1YiI6IjY4MGI0NzJkMjcxZWNiM2FlMDhhNTMxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oL4pxCxSSbRh-ow19OutypP0krUIUQpYxKeIa8_oeIU';

let allFilms = [];
let showingFavorites = false;
let favoriteFilms = [];

// Alleen de 2 pagina’s pakke want deze zijn het populairst
let currentPage = 1;
const maxPages = 2;
let isLoading = false;

// toon de films van de 2 pagina's
async function fetchFilms() {
  if (isLoading || currentPage > maxPages) return;
  isLoading = true;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_companies=420&language=nl-NL&sort_by=popularity.desc&page=${currentPage}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    console.log('Server response:', data);
    allFilms.push(...data.results);
    filterAndDisplayFilms();
    currentPage++;
  } catch (err) {
    console.error('Fout bij ophalen:', err);
  } finally {
    isLoading = false;
  }
}

// Filteren en sorteren van de films
function filterAndDisplayFilms() {
  let filtered = showingFavorites ? favoriteFilms : [...allFilms];

  // Zoekterm filteren
  const zoekterm = document.getElementById('Zoekbalk').value.trim().toLowerCase();
  if (zoekterm) {
    filtered = filtered.filter(film =>
      film.title.toLowerCase().includes(zoekterm)
    );
  }

  // Jaartal filteren
  const jaartal = document.getElementById('jaartalFilter').value.trim();
  if (jaartal) {
    filtered = filtered.filter(film =>
      film.release_date && film.release_date.startsWith(jaartal)
    );
  }

  // Sorteren
  const sorteerOp = document.getElementById('sorteren').value;
  if (sorteerOp === 'Release_Datum.dalen') {
    filtered.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
  } else if (sorteerOp === 'Release_Datum.stijgen') {
    filtered.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
  } else {
    filtered.sort((a, b) => b.popularity - a.popularity);
  }

  displayFilms(filtered);
}

// Toon films in de container
function displayFilms(films) {
  const container = document.getElementById('filmsContainer');
  container.innerHTML = '';

  if (!films.length) {
    container.innerHTML = '<p>Geen films gevonden.</p>';
    return;
  }

  films.forEach(film => {
    const filmElement = document.createElement('div');
    filmElement.classList.add('film');

    const poster = film.poster_path
      ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
      : 'https://via.placeholder.com/300x450?text=Geen+afbeelding';

    filmElement.innerHTML = `
      <img src="${poster}" alt="${film.title}">
      <h3>${film.title}</h3>
      <p><strong>Release datum:</strong> ${film.release_date || 'Onbekend'}</p>
      <button class="FavorietToevoegen" data-id="${film.id}">➕ Toevoegen aan favorieten</button>
    `;

    container.appendChild(filmElement);
  });

  attachFavoriteButtons();
}



// Knop om films toe te voegen aan favorieten
function attachFavoriteButtons() {
  const liked = JSON.parse(localStorage.getItem('favorieten')) || [];

  document.querySelectorAll('.FavorietToevoegen').forEach(button => {
    const filmId = button.dataset.id;

    // kijken of de film al in de favorietenlijst staat
    if (liked.includes(filmId)) {
      button.textContent = '✅ Favoriet toegevoegd';
    } else {
      button.textContent = '➕ Toevoegen aan favorieten';
    }

    button.addEventListener('click', () => {
      const liked = JSON.parse(localStorage.getItem('favorieten')) || [];

      if (liked.includes(filmId)) {
        const updated = liked.filter(id => id !== filmId);
        localStorage.setItem('favorieten', JSON.stringify(updated));

        // verander de tekst van de knop
        if (showingFavorites) {
          FavorietenLijst();
        } else {
          button.textContent = '➕ Toevoegen aan favorieten';
        }
      } else {
        liked.push(filmId);
        localStorage.setItem('favorieten', JSON.stringify(liked));
        button.textContent = '✅ Favoriet toegevoegd';
      }
    });
  });
}


// Toon de favorietenlijst
function FavorietenLijst() {
  const favorietenContainer = document.getElementById('filmsContainer');
  favorietenContainer.innerHTML = '';

  const liked = JSON.parse(localStorage.getItem('favorieten')) || [];
  if (!liked.length) {
    favorietenContainer.innerHTML = '<p>Geen favorieten gevonden.</p>';
    return;
  }

  favoriteFilms = allFilms.filter(film => liked.includes(String(film.id)));
  filterAndDisplayFilms();
}

// wisselen tussen de favorieten en alle films
document.getElementById('ToonFavorieten').addEventListener('click', async () => {
  if (showingFavorites) {
    showingFavorites = false;
    document.getElementById('ToonFavorieten').textContent = 'Toon favorieten';
    
    // wachten tot de films zijn geladen
    while (currentPage <= maxPages) {
      await fetchFilms();
    }

    filterAndDisplayFilms();
  } else {
    showingFavorites = true;
    document.getElementById('ToonFavorieten').textContent = 'Toon alle films';
    FavorietenLijst();
  }
});

// Wisselen tussen donkere en lichte modus
function VeranderKleurModus() {
  const body = document.body;
  const films = document.querySelectorAll('.film');
  const knop = document.getElementById('KleurModus');
  
  body.classList.toggle('dark-mode');

  films.forEach(film => {
    film.classList.toggle('dark-mode');
  });

  // Verander tekst van knop
  if (body.classList.contains('dark-mode')) {
    knop.textContent = 'Light Mode';
  } else {
    knop.textContent = 'Dark Mode';
  }
}

document.getElementById('jaartalFilter').addEventListener('input', filterAndDisplayFilms);
document.getElementById('Zoekbalk').addEventListener('input', filterAndDisplayFilms);
document.getElementById('sorteren').addEventListener('change', filterAndDisplayFilms);

fetchFilms(); 

// Infinite scroll voor de 2 pagina's
window.addEventListener('scroll', () => {
  const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (nearBottom && !showingFavorites) {
    fetchFilms();
  }
});
