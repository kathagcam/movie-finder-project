document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
  
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const movieContainer = document.getElementById('movie-container');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const pageInfo = document.getElementById('page-info');

    let currentMovieList = [];
    let currentPage = 1;
    const MOVIES_PER_PAGE = 8;
  
    const handleSearch = () => {
        currentPage = 1;
        const searchText = searchInput.value.trim().toLowerCase();
        
        if (searchText) {
            currentMovieList = filterMovies(searchText, MOVIES);
        } else {
            currentMovieList = MOVIES;
        }

        renderMovies();
    };
  
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    })

    prevButton.addEventListener('click', () => {
        if(currentPage > 1) {
            currentPage--; // Go back one page
            renderMovies();
        }
    });

    nextButton.addEventListener('click', () => {
        const totalPages = Math.ceil(currentMovieList.length / MOVIES_PER_PAGE);
        if (currentPage < totalPages) {
            currentPage++;
            renderMovies();
        }
    });
    
    /**
     * Filters a list of movie objects based on a search text.
     * This search should check the title, director, genres, and cast.
     * @param {string} searchText - The user's search term (e.g., "dune").
     * @param {Array} movies - The full list of movie objects.
     * @returns {Array} A new array containing only the matching movies.
     */
    const filterMovies = (searchText, movies) => {
      return movies.filter(movie => {
        let searchCard = [];
        if (movie.title) searchCard.push(movie.title.toLowerCase());
        if (movie.director) searchCard.push(movie.director.toLowerCase());
        if (movie.genres) {
            for (const genre of movie.genres) {
                searchCard.push(genre.toLowerCase());
            }
        }

        if (movie.cast) {
            for (const actor of movie.cast) {
                searchCard.push(actor.toLowerCase());
            }      
        }
        
        return searchCard.some(item => item.includes(searchText));
      });
    };
    
    /**
     * Takes an array of movie objects and renders them to the DOM.
     * @param {Array} moviesToRender - The list of movie objects to display.
     */
    const renderMovies = () => {
      
      movieContainer.innerHTML = "";

      if (currentMovieList.length === 0) {
        movieContainer.innerHTML = "<p class='movie-card'>No movies found!</p>";
        document.querySelector('.pagination-controls').style.display = 'none';
        return;
      }

      document.querySelector('.pagination-controls').style.display = 'flex';
      const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
      const endIndex = currentPage * MOVIES_PER_PAGE;
      const moviesToRender = currentMovieList.slice(startIndex, endIndex);
      const totalPages = Math.ceil(currentMovieList.length / MOVIES_PER_PAGE);
      const movieElements = moviesToRender.map(movie => {
        const directorText = movie.director || 'Unknown Director';
        const genresText = movie.genres && movie.genres.length > 0 ? movie.genres.join(', ') : 'N/A';
        return `
            <div class="movie-card">
                <h2>${movie.title}</h2>
                <p>Directed by: ${directorText}</p>
                <p class="genres">${genresText}</p>
            </div>
        `;
      });
      movieContainer.innerHTML = movieElements.join('');
      pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === totalPages;
    };

    // Let's render all movies when the page first loads
    currentMovieList = MOVIES;
    renderMovies();
  });