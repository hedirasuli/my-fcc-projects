class Planet:
    def __init__(self, name, planet_type, star):
        # Check if arguments are strings
        if not isinstance(name, str) or not isinstance(planet_type, str) or not isinstance(star, str):
            raise TypeError("name, planet type, and star must be strings")
        
        # Check if strings are empty
        if not name or not planet_type or not star:
            raise ValueError("name, planet_type, and star must be non-empty strings")

        # Assign attributes
        self.name = name
        self.planet_type = planet_type
        self.star = star

    def orbit(self):
        # Return the orbit message
        return f"{self.name} is orbiting around {self.star}..."

    def __str__(self):
        # Define how the object is represented as a string
        return f"Planet: {self.name} | Type: {self.planet_type} | Star: {self.star}"

# Creating three instances
planet_1 = Planet("Earth", "Terrestrial", "Sun")
planet_2 = Planet("Jupiter", "Gas Giant", "Sun")
planet_3 = Planet("Proxima Centauri b", "Super Earth", "Proxima Centauri")

# Printing each object (calls __str__ automatically)
print(planet_1)
print(planet_2)
print(planet_3)

# Calling orbit method and printing results
print(planet_1.orbit())
print(planet_2.orbit())
print(planet_3.orbit())