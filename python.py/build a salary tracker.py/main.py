class Employee:
    # Dictionary containing base salaries for each level
    _base_salaries = {
        'trainee': 1000,
        'junior': 2000,
        'senior': 4000,
        'lead': 8000
    }

    def __init__(self, name, level):
        # Initializing protected attributes
        self._name = name
        if level not in Employee._base_salaries:
            raise ValueError(f"Invalid value '{level}' for 'level' attribute.")
        self._level = level
        self._salary = Employee._base_salaries[level]

    # --- Name Property ---
    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        # Validate that the name is a string
        if not isinstance(new_name, str):
            raise TypeError("'name' must be a string.")
        self._name = new_name
        print(f"'name' updated to '{self.name}'.")

    # --- Level Property ---
    @property
    def level(self):
        return self._level

    @level.setter
    def level(self, new_level):
        # Validation for level existence
        if new_level not in Employee._base_salaries:
            raise ValueError(f"Invalid value '{new_level}' for 'level' attribute.")
        # Check if the new level is the same as the current one
        if new_level == self.level:
            raise ValueError(f"'{self.level}' is already the selected level.")
        # Prevent demotion or lowering the salary
        if Employee._base_salaries[new_level] < self.salary:
            raise ValueError("Cannot change to lower level.")
        
        # Calling the salary setter to update the salary
        self.salary = Employee._base_salaries[new_level]
        self._level = new_level
        print(f"'{self.name}' promoted to '{new_level}'.")

    # --- Salary Property ---
    @property
    def salary(self):
        return self._salary

    @salary.setter
    def salary(self, new_salary):
        # Ensure the salary is a number (int or float)
        if not isinstance(new_salary, (int, float)):
            raise TypeError("'salary' must be a number.")
        # Ensure it's not below the minimum required for the current level
        if new_salary < Employee._base_salaries[self.level]:
            raise ValueError(f"Salary must be higher than minimum salary ${Employee._base_salaries[self.level]}.")
        
        self._salary = new_salary
        print(f"Salary updated to ${new_salary}.")

# --- Testing the implementation ---
charlie_brown = Employee('Charlie Brown', 'trainee')
charlie_brown.level = 'junior'