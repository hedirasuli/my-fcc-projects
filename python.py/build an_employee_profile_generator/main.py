# --- Employee Personal Information ---
first_name = 'John'
last_name = 'Doe'
# Concatenate strings with a space in between
full_name = first_name + ' ' + last_name

address = '123 Main Street'
# Update address using the addition assignment operator
address += ', Apartment 4B'

# Define age as an integer (no quotes)
employee_age = 28

# --- Formatting Employee Info (Old Way vs. New Way) ---
# Concatenating strings and converting integer to string using str()
employee_info = full_name + ' is ' + str(employee_age) + ' years old'

# --- Job Details ---
experience_years = 5
# Example of manual concatenation for experience
experience_info = 'Experience: ' + str(experience_years) + ' years'

position = 'Data Analyst'
salary = 75000

# --- The Employee Card (Using f-strings) ---
# f-strings allow embedding variables directly inside curly braces {}
employee_card = f'Employee: {full_name} | Age: {employee_age} | Position: {position} | Salary: ${salary}'

# --- String Slicing (Extracting Data) ---
employee_code = 'DEV-2026-JD-001'

# Slice from index 0 up to (but not including) 3
department = employee_code[0:3] 

# Slice from index 4 to 8 to get the year
year_code = employee_code[4:8]

# Slice from index 9 to 11 to get the initials
initials = employee_code[9:11]

# Negative slicing: extract the last 3 characters from the end
last_three = employee_code[-3:]

# --- Output Section ---
print(employee_info)
print(experience_info)
print(employee_card)
print(f"Department: {department}")
print(f"Year: {year_code}")
print(f"Initials: {initials}")
print(f"ID: {last_three}")