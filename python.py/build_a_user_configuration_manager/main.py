# Create a test_settings dictionary with some initial values
test_settings = {
    'theme': 'dark',
    'language': 'english'
}

def add_setting(settings, setting_tuple):
    # Unpack tuple and convert key/value to lowercase
    key, value = setting_tuple
    key = key.lower()
    value = value.lower()
    
    # Check if key already exists
    if key in settings:
        return f"Setting '{key}' already exists! Cannot add a new setting with this name."
    
    # Add new setting to dictionary
    settings[key] = value
    return f"Setting '{key}' added with value '{value}' successfully!"

def update_setting(settings, setting_tuple):
    # Unpack tuple and convert key/value to lowercase
    key, value = setting_tuple
    key = key.lower()
    value = value.lower()
    
    # Check if key exists before updating
    if key in settings:
        settings[key] = value
        return f"Setting '{key}' updated to '{value}' successfully!"
    
    return f"Setting '{key}' does not exist! Cannot update a non-existing setting."

def delete_setting(settings, key):
    # Convert key to lowercase
    key = key.lower()
    
    # Check if key exists and remove it
    if key in settings:
        del settings[key]
        return f"Setting '{key}' deleted successfully!"
    
    return "Setting not found!"

def view_settings(settings):
    # Check if dictionary is empty
    if not settings:
        return "No settings available."
    
    # Build formatted string
    result = "Current User Settings:\n"
    for key, value in settings.items():
        # Capitalize the key and append value with a newline
        result += f"{key.capitalize()}: {value}\n"
    
    return result