def hanoi_solver(n):
    # Initialize the rods: Rod A has disks n to 1, others are empty
    rods = {
        'A': list(range(n, 0, -1)),
        'B': [],
        'C': []
    }
    
    # This list will store the state of rods after each move
    moves = []

    # Helper function to record the current state of the rods
    def record_state():
        state = f"{rods['A']} {rods['B']} {rods['C']}"
        moves.append(state)

    # Initial state before any moves
    record_state()

    # Recursive function to move disks
    def move_disks(disks, source, target, auxiliary):
        if disks > 0:
            # Move n-1 disks from source to auxiliary
            move_disks(disks - 1, source, auxiliary, target)
            
            # Move the actual disk from source to target
            disk = rods[source].pop()
            rods[target].append(disk)
            
            # Record the state after the move
            record_state()
            
            # Move the n-1 disks from auxiliary to target
            move_disks(disks - 1, auxiliary, target, source)

    # Start solving from Rod A to Rod C using Rod B as auxiliary
    move_disks(n, 'A', 'C', 'B')
    
    # Join all recorded states with a newline character
    return '\n'.join(moves)

# Example usage:
# print(hanoi_solver(3))