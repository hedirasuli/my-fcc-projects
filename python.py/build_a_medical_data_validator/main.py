import re

def find_invalid_records(patient_id, age, gender, diagnosis, medications, last_visit_id):
    # Dictionary to store the results of various validation checks
    constraints = {
        # Check if patient_id is a string and matches the pattern 'p' followed by digits
        'patient_id': isinstance(patient_id, str) and re.fullmatch('p\d+', patient_id, re.IGNORECASE),
        
        # Check if age is an integer and is at least 18
        'age': isinstance(age, int) and age >= 18,
        
        # Check if gender is a string and is either 'male' or 'female'
        'gender': isinstance(gender, str) and gender.lower() in ('male', 'female'),
        
        # Diagnosis can be a string or None
        'diagnosis': isinstance(diagnosis, str) or diagnosis is None,
        
        # Medications must be a list where every element is a string
        'medications': isinstance(medications, list) and all([isinstance(i, str) for i in medications]),
        
        # last_visit_id must be a string starting with 'v' followed by digits
        'last_visit_id': isinstance(last_visit_id, str) and re.fullmatch('v\d+', last_visit_id, re.IGNORECASE)
    }
    
    # Return a list of keys where the validation result was Falsy
    return [key for key, value in constraints.items() if not value]

def validate(data):
    # Iterate through the records with their index for better error reporting
    for index, dictionary in enumerate(data):
        is_invalid = False
        
        # Ensure the record is a dictionary
        if not isinstance(dictionary, dict):
            print(f'Invalid data type: {type(dictionary).__name__}. Expected dict.')
            is_invalid = True
            continue
            
        # Ensure the dictionary is not empty
        if not dictionary:
            print('Found empty dictionary.')
            is_invalid = True
            continue
            
        # Find all invalid fields in the current record
        invalid_records = find_invalid_records(**dictionary)
        
        # Print a detailed message for each invalid field
        for key in invalid_records:
            print(f"Unexpected format '{key}: {dictionary[key]}' at position {index}.")
            is_invalid = True

# Example data based on the workshop
medical_records = [
    {
        'patient_id': 'P001',
        'age': 34,
        'gender': 'Male',
        'diagnosis': 'Hypertension',
        'medications': ['Lisinopril', 'Amlodipine'],
        'last_visit_id': 'v1001'
    },
    {
        'patient_id': 'P002',
        'age': 15, # Invalid: age < 18
        'gender': 'Female',
        'diagnosis': None,
        'medications': ['Metformin'],
        'last_visit_id': 'v1002'
    }
]

# Running the validator
validate(medical_records)