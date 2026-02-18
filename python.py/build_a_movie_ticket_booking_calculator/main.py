# Step 1-5: Base variables
age = 21
is_member = False
seat_type = "Gold"
show_time = "Evening"
base_price = 10

# Step 6: Initial boolean status
is_weekend = False

# Step 7: Initialize discount
discount = 0

# Step 8-11: Membership and age-based discount logic
if is_member and age >= 21:
    discount = 3
    print("User qualifies for membership discount")
else:
    print("User does not qualify for membership discount")

print("Discount:", discount)

# Step 12-14: Extra charges logic (Weekend or Evening)
extra_charges = 0
if is_weekend or show_time == "Evening":
    extra_charges = 2
    print("Extra charges will be applied")
else:
    print("No extra charges will be applied")

print("Extra charges:", extra_charges)

# Step 15-21: Final booking and price calculation
# Checks if the user is 21+ OR (18-21 and either a member or not an evening show)
if (age >= 21) or (age >= 18 and (show_time != "Evening" or is_member)):
    print("Ticket booking condition satisfied")
    
    # Calculate service charges based on seat type
    service_charges = 0
    if seat_type == "Premium":
        service_charges = 5
    elif seat_type == "Gold":
        service_charges = 3
    else:
        service_charges = 1
        
    print("Service charges:", service_charges)
    
    # Calculate and display the final price
    final_price = base_price + extra_charges + service_charges - discount
    print("Final price of ticket:", final_price)
else:
    print("Ticket booking failed due to restrictions")