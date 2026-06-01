# Caesar Cipher Implementation
def caesar(text, shift, encrypt=True):
    if not isinstance(shift, int):
        return 'Shift must be an integer value.'
    
    if shift < 1 or shift > 25:
        return 'Shift must be an integer between 1 and 25.'
    
    if not encrypt:
        shift = -shift
    
    # Create translation table for both uppercase and lowercase letters
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    return text.translate(translation_table)

# Wrapper functions for encryption and decryption
def encrypt(text, shift):
    return caesar(text, shift)

def decrypt(text, shift):
    return caesar(text, shift, False)

# Example usage
encrypted_text = 'Pbhentr vf sbhaq va hayvxryl cynprf.'
decrypted_text = decrypt(encrypted_text, 13)
print(decrypted_text)