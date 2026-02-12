class GameCharacter:
    def __init__(self, name):
        # Initializing protected attributes with default values
        self._name = name
        self._health = 100
        self._mana = 50
        self._level = 1

    # Name property (Read-only)
    @property
    def name(self):
        return self._name

    # Health property with getter and setter
    @property
    def health(self):
        return self._health

    @health.setter
    def health(self, value):
        # Clamping the health value between 0 and 100
        if value < 0:
            self._health = 0
        elif value > 100:
            self._health = 100
        else:
            self._health = value

    # Mana property with getter and setter
    @property
    def mana(self):
        return self._mana

    @mana.setter
    def mana(self, value):
        # Clamping the mana value between 0 and 50
        if value < 0:
            self._mana = 0
        elif value > 50:
            self._mana = 50
        else:
            self._mana = value

    # Level property (Read-only getter)
    @property
    def level(self):
        return self._level

    def level_up(self):
        # Increment level and reset stats using setters
        self._level += 1
        self.health = 100
        self.mana = 50
        print(f"{self.name} leveled up to {self.level}!")

    def __str__(self):
        # Returning the formatted character stats
        return f"Name: {self.name}\nLevel: {self.level}\nHealth: {self.health}\nMana: {self.mana}"