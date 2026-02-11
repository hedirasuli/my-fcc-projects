# Variables definition
distance_mi = 5
is_raining = False
has_bike = True
has_car = False
has_ride_share_app = True

# Travel logic using conditional statements
if not distance_mi:
    # If distance_mi is 0 or a falsy value
    print(False)

elif distance_mi <= 1:
    # Less than or equal to 1 mile: True if NOT raining
    if not is_raining:
        print(True)
    else:
        print(False)

elif 1 < distance_mi <= 6:
    # Between 1 and 6 miles: True if has bike AND NOT raining
    if has_bike and not is_raining:
        print(True)
    else:
        print(False)

elif distance_mi > 6:
    # Greater than 6 miles: True if has car OR ride-share app
    if has_car or has_ride_share_app:
        print(True)
    else:
        print(False)