class Rectangle:
    def __init__(self, width, height):
        # Initialize the dimensions of the rectangle
        self.width = width
        self.height = height

    def __str__(self):
        # Return string representation of the object
        return f"Rectangle(width={self.width}, height={self.height})"

    def set_width(self, width):
        self.width = width

    def set_height(self, height):
        self.height = height

    def get_area(self):
        # Formula: Area = width * height
        return self.width * self.height

    def get_perimeter(self):
        # Formula: Perimeter = 2 * (width + height)
        return 2 * (self.width + self.height)

    def get_diagonal(self):
        # Formula: Diagonal = sqrt(w^2 + h^2)
        return (self.width ** 2 + self.height ** 2) ** 0.5

    def get_picture(self):
        # Check if the shape is too large to draw
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        
        # Build the picture using lines of '*'
        line = "*" * self.width + "\n"
        return line * self.height

    def get_amount_inside(self, shape):
        # Calculate how many times another shape fits inside this one
        # Uses floor division to ignore rotations
        horizontal_fit = self.width // shape.width
        vertical_fit = self.height // shape.height
        return horizontal_fit * vertical_fit


class Square(Rectangle):
    def __init__(self, side):
        # Square is a rectangle where width = height = side
        super().__init__(side, side)

    def __str__(self):
        return f"Square(side={self.width})"

    def set_side(self, side):
        # Sets both width and height to keep it a square
        self.width = side
        self.height = side

    def set_width(self, side):
        # Override to ensure both dimensions stay equal
        self.set_side(side)

    def set_height(self, side):
        # Override to ensure both dimensions stay equal
        self.set_side(side)