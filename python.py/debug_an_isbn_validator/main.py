def calculate_check_digit_10(isbn):
    # Calculates the ISBN-10 check digit
    total = sum((i + 1) * int(isbn[i]) for i in range(9))
    check_digit = total % 11
    return 'X' if check_digit == 10 else str(check_digit)

def calculate_check_digit_13(isbn):
    # Calculates the ISBN-13 check digit
    total = sum((1 if i % 2 == 0 else 3) * int(isbn[i]) for i in range(12))
    check_digit = (10 - (total % 10)) % 10
    return str(check_digit)

def validate_isbn(isbn, length):
    # Check if the length matches the user's specification
    if len(isbn) != length:
        print(f'ISBN-{length} code should be {length} digits long.')
        return

    try:
        # Check digit is the last character
        check_digit = isbn[-1]
        # The base part is everything except the last character
        base_isbn = isbn[:-1]
        
        # Validate that the base part contains only numbers
        # This will raise ValueError if int() fails
        [int(digit) for digit in base_isbn]

        if length == 10:
            expected_check_digit = calculate_check_digit_10(isbn)
        else:
            expected_check_digit = calculate_check_digit_13(isbn)

        if check_digit == expected_check_digit:
            print('Valid ISBN Code.')
        else:
            print('Invalid ISBN Code.')
            
    except ValueError:
        print('Invalid character was found.')

def main():
    user_input = input('Enter ISBN and length: ')
    
    try:
        # Handling IndexError if no comma is present
        parts = user_input.split(',')
        isbn = parts[0].strip()
        length_str = parts[1].strip()
        
        # Handling ValueError if length is not a number
        length = int(length_str)
        
        if length not in [10, 13]:
            print('Length should be 10 or 13.')
        else:
            validate_isbn(isbn, length)
            
    except IndexError:
        print('Enter comma-separated values.')
    except ValueError:
        print('Length must be a number.')

# Important: Comment out the main() call for the tests to run
# main()