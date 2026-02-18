import abc
import random

# Step 1: Define the Abstract Base Class
class Player(abc.ABC):
    def __init__(self) -> None:
        # Initializing attributes as requested
        self.moves = []
        self.position = (0, 0)
        self.path = [self.position]

    def make_move(self) -> tuple:
        # Select a random move from the available moves list
        move = random.choice(self.moves)
        
        # Calculate new position by adding move (x, y) to current position (x, y)
        new_x = self.position[0] + move[0]
        new_y = self.position[1] + move[1]
        
        # Update position and path
        self.position = (new_x, new_y)
        self.path.append(self.position)
        
        return self.position

    @abc.abstractmethod
    def level_up(self) -> None:
        """Abstract method to be implemented by concrete classes."""
        pass

# Step 2: Define the Concrete Class Pawn
class Pawn(Player):
    def __init__(self) -> None:
        # Call the parent's __init__ using super()
        super().__init__()
        
        # Define movement: (x, y)
        # Up (0, 1), Down (0, -1), Left (-1, 0), Right (1, 0)
        self.moves = [(0, 1), (0, -1), (-1, 0), (1, 0)]

    def level_up(self) -> None:
        # Add diagonal moves: (1, 1), (1, -1), (-1, 1), (-1, -1)
        diagonal_moves = [(1, 1), (1, -1), (-1, 1), (-1, -1)]
        self.moves.extend(diagonal_moves)