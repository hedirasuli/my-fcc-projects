def pin_extractor(poems):
    secret_codes = []
    
    for poem in poems:
        secret_code = ''
        lines = poem.split('\n')
        for line_index, line in enumerate(lines):
            words = line.split()
            if len(words) > line_index:
                # English comment: add word length to current code
                secret_code += str(len(words[line_index]))
            else:
                # English comment: add zero if index is missing
                secret_code += '0'
        
        # Append the completed pin of the current poem to the list
        secret_codes.append(secret_code)
            
    # Return the list containing all pin codes
    return secret_codes

poem = """Stars and the moon
shine in the sky
white and
until the end of the night"""

poem2 = 'The grass is green\nhere and there\nhoping for rain\nbefore it turns yellow'
poem3 = 'There\nonce\nwas\na\ndragon'

# Pass the list of poems to the function and print the result
print(pin_extractor([poem, poem2, poem3]))