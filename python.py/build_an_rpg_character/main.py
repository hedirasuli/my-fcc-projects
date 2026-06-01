# RPG Character Creation Implementation
full_dot = '●'

empty_dot = '○'

# The validate_name function checks if the character name is a valid string, ensuring it is not empty, does not contain spaces, and is no longer than 10 characters.
def validate_name(name):

    if not isinstance(name, str):

        return 'The character name should be a string'

    if name == "":
        return 'The character should have a name'

    if len(name) > 10:

        return 'The character name is too long'

    if " " in name:

        return 'The character name should not contain spaces'

# The validate_stats function checks if the provided stats for strength, intelligence, and charisma are valid integers between 1 and 4, and that their total equals 7.
def validate_stats(strength, ntelligence, charisma):

    for stat in (strength, ntelligence, charisma):

        if not isinstance(stat, int):

            return 'All stats should be integers'


    for stat in (strength, ntelligence, charisma):

        if stat < 1:

            return 'All stats should be no less than 1'


    for stat in ( strength, ntelligence, charisma):

        if stat > 4:

            return 'All stats should be no more than 4'


    if strength + ntelligence + charisma != 7:

        return 'The character should start with 7 points'

# The create_dots function generates a string representation of the character's stats using filled and empty dots, based on the stat value.
def create_dots(stat):

    return stat * full_dot + empty_dot * (10 - stat)


# The create_character function combines the name and stats validation, and if all checks pass, it returns a formatted string representing the RPG character with their name and visual stat bars.
def create_character(name, strength, ntelligence, charisma):

    name_error = validate_name(name)

    if name_error:

        return name_error


    stats_error = validate_stats(strength, ntelligence, charisma)

    if stats_error:

        return stats_error


    return (

        f'{name}\n'

        f'STR {create_dots(strength)}\n'

        f'INT {create_dots(ntelligence)}\n'

        f'CHA {create_dots(charisma)}'

    )