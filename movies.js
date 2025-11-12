// This 'movies.js' file just holds our data.
// Because it's loaded before script.js in the HTML,
// the 'MOVIES' variable will be globally available.

// I've added 50 more movies, including some with missing/null data
// to help test your defensive coding!
const MOVIES = [
  {
    title: 'The Matrix',
    director: 'Wachowskis',
    year: 1999,
    genres: ['Action', 'Sci-Fi'],
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']
  },
  {
    title: 'Dune',
    director: 'Denis Villeneuve',
    year: 2021,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson']
  },
  {
    title: 'Parasite',
    director: 'Bong Joon-ho',
    year: 2019,
    genres: ['Thriller', 'Comedy', 'Drama'],
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong']
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson',
    year: 2001,
    genres: ['Fantasy', 'Adventure', 'Action'],
    cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen']
  },
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page']
  },
  // --- 50 New Movies Start Here ---
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: 1972,
    genres: ['Crime', 'Drama'],
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan']
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: 1994,
    genres: ['Crime', 'Drama', 'Thriller'],
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson']
  },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994,
    genres: ['Drama'],
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton']
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    year: 2008,
    genres: ['Action', 'Crime', 'Drama'],
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart']
  },
  {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    year: 1994,
    genres: ['Drama', 'Romance'],
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise']
  },
  {
    title: 'Fight Club',
    director: 'David Fincher',
    year: 1999,
    genres: ['Drama'],
    cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter']
  },
  {
    title: 'Star Wars: A New Hope',
    director: 'George Lucas',
    year: 1977,
    genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher']
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    year: 2014,
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain']
  },
  {
    title: 'Spirited Away',
    director: 'Hayao Miyazaki',
    year: 2001,
    genres: ['Animation', 'Adventure', 'Family'],
    cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki']
  },
  {
    title: 'Saving Private Ryan',
    director: 'Steven Spielberg',
    year: 1998,
    genres: ['Drama', 'War'],
    cast: ['Tom Hanks', 'Matt Damon', 'Tom Sizemore']
  },
  {
    title: 'Back to the Future',
    director: 'Robert Zemeckis',
    year: 1985,
    genres: ['Adventure', 'Comedy', 'Sci-Fi'],
    cast: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson']
  },
  {
    title: 'Gladiator',
    director: 'Ridley Scott',
    year: 2000,
    genres: ['Action', 'Adventure', 'Drama'],
    cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen']
  },
  {
    title: 'The Silence of the Lambs',
    director: 'Jonathan Demme',
    year: 1991,
    genres: ['Crime', 'Drama', 'Thriller'],
    cast: ['Jodie Foster', 'Anthony Hopkins', 'Scott Glenn']
  },
  {
    title: 'Alien',
    director: 'Ridley Scott',
    year: 1979,
    genres: ['Horror', 'Sci-Fi'],
    cast: ['Sigourney Weaver', 'Tom Skerritt', 'John Hurt']
  },
  {
    title: 'Whiplash',
    director: 'Damien Chazelle',
    year: 2014,
    genres: ['Drama', 'Music'],
    cast: ['Miles Teller', 'J.K. Simmons', 'Paul Reiser']
  },
  {
    title: 'The Prestige',
    director: 'Christopher Nolan',
    year: 2006,
    genres: ['Drama', 'Mystery', 'Sci-Fi'],
    cast: ['Hugh Jackman', 'Christian Bale', 'Michael Caine']
  },
  {
    title: 'Mad Max: Fury Road',
    director: 'George Miller',
    year: 2015,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult']
  },
  {
    title: 'Blade Runner 2049',
    director: 'Denis Villeneuve',
    year: 2017,
    genres: ['Action', 'Drama', 'Mystery', 'Sci-Fi'],
    cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas']
  },
  {
    title: 'Oppenheimer',
    director: 'Christopher Nolan',
    year: 2023,
    genres: ['Biography', 'Drama', 'History'],
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon']
  },
  {
    title: 'Barbie',
    director: 'Greta Gerwig',
    year: 2023,
    genres: ['Adventure', 'Comedy', 'Fantasy'],
    cast: ['Margot Robbie', 'Ryan Gosling', 'Issa Rae']
  },
  {
    title: 'Poor Things',
    director: 'Yorgos Lanthimos',
    year: 2023,
    genres: ['Comedy', 'Drama', 'Romance'],
    cast: ['Emma Stone', 'Mark Ruffalo', 'Willem Dafoe']
  },
  {
    title: 'The Departed',
    director: 'Martin Scorsese',
    year: 2006,
    genres: ['Crime', 'Drama', 'Thriller'],
    cast: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson']
  },
  {
    title: 'Goodfellas',
    director: 'Martin Scorsese',
    year: 1990,
    genres: ['Biography', 'Crime', 'Drama'],
    cast: ['Robert De Niro', 'Ray Liotta', 'Joe Pesci']
  },
  {
    title: 'Se7en',
    director: 'David Fincher',
    year: 1995,
    genres: ['Crime', 'Drama', 'Mystery'],
    cast: ['Morgan Freeman', 'Brad Pitt', 'Kevin Spacey']
  },
  {
    title: 'Casablanca',
    director: 'Michael Curtiz',
    year: 1942,
    genres: ['Drama', 'Romance', 'War'],
    cast: ['Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid']
  },
  {
    title: 'Psycho',
    director: 'Alfred Hitchcock',
    year: 1960,
    genres: ['Horror', 'Mystery', 'Thriller'],
    cast: ['Anthony Perkins', 'Janet Leigh', 'Vera Miles']
  },
  {
    title: 'The Shining',
    director: 'Stanley Kubrick',
    year: 1980,
    genres: ['Drama', 'Horror'],
    cast: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd']
  },
  {
    title: 'Jaws',
    director: 'Steven Spielberg',
    year: 1975,
    genres: ['Adventure', 'Thriller'],
    cast: ['Roy Scheider', 'Robert Shaw', 'Richard Dreyfuss']
  },
  {
    title: 'Jurassic Park',
    director: 'Steven Spielberg',
    year: 1993,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    cast: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum']
  },
  {
    title: 'Titanic',
    director: 'James Cameron',
    year: 1997,
    genres: ['Drama', 'Romance'],
    cast: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane']
  },
  {
    title: 'Avatar',
    director: 'James Cameron',
    year: 2009,
    genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver']
  },
  {
    title: 'The Social Network',
    director: 'David Fincher',
    year: 2010,
    genres: ['Biography', 'Drama'],
    cast: ['Jesse Eisenberg', 'Andrew Garfield', 'Justin Timberlake']
  },
  {
    title: 'No Country for Old Men',
    director: 'Ethan Coen', // Co-directed with Joel Coen
    year: 2007,
    genres: ['Crime', 'Drama', 'Thriller'],
    cast: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin']
  },
  {
    title: 'Citizen Kane',
    director: 'Orson Welles',
    year: 1941,
    genres: ['Drama', 'Mystery'],
    cast: ['Orson Welles', 'Joseph Cotten', 'Dorothy Comingore']
  },
  {
    title: '2001: A Space Odyssey',
    director: 'Stanley Kubrick',
    year: 1968,
    genres: ['Adventure', 'Sci-Fi'],
    cast: ['Keir Dullea', 'Gary Lockwood', 'William Sylvester']
  },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    director: 'Bob Persichetti',
    year: 2018,
    genres: ['Animation', 'Action', 'Adventure'],
    cast: ['Shameik Moore', 'Jake Johnson', 'Hailee Steinfeld']
  },
  {
    title: 'Get Out',
    director: 'Jordan Peele',
    year: 2017,
    genres: ['Horror', 'Mystery', 'Thriller'],
    cast: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford']
  },
  {
    title: 'Moonlight',
    director: 'Barry Jenkins',
    year: 2016,
    genres: ['Drama'],
    cast: ['Mahershala Ali', 'Trevante Rhodes', 'Naomie Harris']
  },
  {
    title: 'La La Land',
    director: 'Damien Chazelle',
    year: 2016,
    genres: ['Comedy', 'Drama', 'Music'],
    cast: ['Ryan Gosling', 'Emma Stone', 'John Legend']
  },
  {
    title: 'Everything Everywhere All at Once',
    director: 'Daniel Kwan',
    year: 2022,
    genres: ['Action', 'Adventure', 'Comedy', 'Sci-Fi'],
    cast: ['Michelle Yeoh', 'Ke Huy Quan', 'Stephanie Hsu']
  },
  {
    title: 'Amadeus',
    director: 'Milos Forman',
    year: 1984,
    genres: ['Biography', 'Drama', 'Music'],
    cast: ['F. Murray Abraham', 'Tom Hulce', 'Elizabeth Berridge']
  },
  {
    title: 'The Grand Budapest Hotel',
    director: 'Wes Anderson',
    year: 2014,
    genres: ['Adventure', 'Comedy', 'Crime'],
    cast: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric']
  },
  {
    title: 'Inglourious Basterds',
    director: 'Quentin Tarantino',
    year: 2009,
    genres: ['Adventure', 'Drama', 'War'],
    cast: ['Brad Pitt', 'Mélanie Laurent', 'Christoph Waltz']
  },
  {
    title: 'Oldboy',
    director: 'Park Chan-wook',
    year: 2003,
    genres: ['Action', 'Drama', 'Mystery'],
    cast: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jeong']
  },
  {
    title: 'City of God',
    director: 'Fernando Meirelles',
    year: 2002,
    genres: ['Crime', 'Drama'],
    cast: ['Alexandre Rodrigues', 'Leandro Firmino', 'Phellipe Haagensen']
  },
  {
    title: 'The Green Mile',
    director: 'Frank Darabont',
    year: 1999,
    genres: ['Crime', 'Drama', 'Fantasy'],
    cast: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse']
  },
  {
    title: 'Die Hard',
    director: 'John McTiernan',
    year: 1988,
    genres: ['Action', 'Thriller'],
    cast: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia']
  },
  {
    title: 'WALL·E',
    director: 'Andrew Stanton',
    year: 2008,
    genres: ['Animation', 'Adventure', 'Family'],
    cast: ['Ben Burtt', 'Elissa Knight', 'Jeff Garlin']
  },
  {
    title: 'Up',
    director: 'Pete Docter',
    year: 2009,
    genres: ['Animation', 'Adventure', 'Comedy'],
    cast: ['Ed Asner', 'Jordan Nagai', 'John Ratzenberger']
  },
  // --- Movies with missing data (for testing) ---
  {
    title: 'A Test Movie With No Cast',
    director: 'A. Director',
    year: 2025,
    genres: ['Test', 'Drama'],
    cast: [] // Empty cast list
  },
  {
    title: 'A Test Movie With No Genres',
    director: 'B. Director',
    year: 2026,
    genres: [], // Empty genres list
    cast: ['Actor A', 'Actor B']
  },
  {
    title: 'A Test Movie With No Director',
    director: null, // Null director
    year: 2027,
    genres: ['Mystery'],
    cast: ['Actor C']
  }
];