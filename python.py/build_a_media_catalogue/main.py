class MediaError(Exception):
    """Custom exception for media-related errors, storing the problematic object."""

    def __init__(self, message, obj):
        super().__init__(message)
        self.obj = obj

class Movie:
    """Represents a movie with validation for title, year, director, and duration."""
    
    def __init__(self, title, year, director, duration):
        # Basic validation for movie attributes
        if not title.strip():
            raise ValueError('Title cannot be empty')
        if year < 1895: # The year the first commercial movie was shown
            raise ValueError('Year must be 1895 or later')
        if not director.strip():
            raise ValueError('Director cannot be empty')
        if duration <= 0:
            raise ValueError('Duration must be positive')
        
        self.title = title
        self.year = year
        self.director = director
        self.duration = duration

    def __str__(self):
        """Returns a formatted string representation of the movie."""
        return f'{self.title} ({self.year}) - {self.duration} min, {self.director}'

class TVSeries(Movie):
    """Represents a TV series, inheriting basic info from Movie and adding series-specific data."""

    def __init__(self, title, year, director, duration, seasons, total_episodes):
        # Initialize parent attributes
        super().__init__(title, year, director, duration)

        # Additional validation for TV series
        if seasons < 1:
            raise ValueError('Seasons must be 1 or greater')
        if total_episodes < 1:
            raise ValueError('Total episodes must be 1 or greater')
        
        self.seasons = seasons
        self.total_episodes = total_episodes

    def __str__(self):
        """Returns a detailed string representation including seasons and episodes."""
        return f'{self.title} ({self.year}) - {self.seasons} seasons, {self.total_episodes} episodes, {self.duration} min avg, {self.director}'

class MediaCatalogue:
    """Manages a collection of Movie and TVSeries instances with filtering capabilities."""

    def __init__(self):
        # Initialize an empty list to store media items
        self.items = []

    def add(self, media_item):
        """Adds a media item to the catalogue after verifying its type."""
        if not isinstance(media_item, Movie):
            raise MediaError('Only Movie or TVSeries instances can be added', media_item)
        self.items.append(media_item)

    def get_movies(self):
        """Filters and returns a list of items that are strictly Movie instances."""
        return [item for item in self.items if type(item) is Movie]

    def get_tv_series(self):
        """Filters and returns a list of items that are TVSeries instances."""
        return [item for item in self.items if isinstance(item, TVSeries)]
    
    def __str__(self):
        """Returns a categorized and numbered view of the entire catalogue."""
        if not self.items:
            return 'The catalogue is empty.'
        
        movies = self.get_movies()
        series = self.get_tv_series()

        result = ''
        
        # Display Movies section if any exist
        if movies:
            result += '=== MOVIES ===\n'
            for i, movie in enumerate(movies, 1):
                result += f'{i}. {movie}\n'
        
        # Display TV Series section if any exist
        if series:
            result += '=== TV SERIES ===\n'
            for i, item in enumerate(series, 1):
                result += f'{i}. {item}\n'
        
        return result

# --- Testing the implementation ---
catalogue = MediaCatalogue()

try:
    # Adding Movies
    movie1 = Movie('The Matrix', 1999, 'The Wachowskis', 136)
    catalogue.add(movie1)
    movie2 = Movie('Inception', 2010, 'Christopher Nolan', 148)
    catalogue.add(movie2)

    # Adding TV Series
    series1 = TVSeries('Scrubs', 2001, 'Bill Lawrence', 24, 9, 182)
    catalogue.add(series1)
    series2 = TVSeries('Breaking Bad', 2008, 'Vince Gilligan', 47, 5, 62)
    catalogue.add(series2)

    # Print the final formatted catalogue
    print(catalogue)

except (ValueError, MediaError) as e:
    # Centralized error handling
    print(f'Error occurred: {e}')