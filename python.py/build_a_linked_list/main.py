class LinkedList:
    class Node:
        def __init__(self, element):
            self.element = element
            self.next = None # Reference to the next node, initially None

    def __init__(self):
        self.length = 0 # Track the number of nodes
        self.head = None # The start of the list

    def is_empty(self):
        # Check if the list has no elements
        return self.length == 0

    def add(self, element):
        node = self.Node(element) # Create a new node instance
        if self.is_empty():
            self.head = node # Set as head if list is empty
        else:
            current_node = self.head
            # Traverse until the last node is reached
            while current_node.next is not None:
                current_node = current_node.next
            current_node.next = node # Link the new node at the end
        
        self.length += 1 # Increment total count

    def remove(self, element):
        previous_node = None
        current_node = self.head

        # Search for the node with the matching element
        while current_node is not None and current_node.element != element:
            previous_node = current_node
            current_node = current_node.next
        
        # If the element was not found in the list
        if current_node is None:
            return
        
        # If the element is found after the head node
        elif previous_node is not None:
            previous_node.next = current_node.next
        # If the element to remove is the head node
        else:
            self.head = current_node.next
        
        self.length -= 1 # Decrement total count after removal

# --- Testing the implementation ---
my_list = LinkedList()
print(my_list.is_empty()) # Output: True

my_list.add(1)
my_list.add(2)

print(my_list.is_empty()) # Output: False
print(my_list.length)     # Output: 2

my_list.remove(1)
print(my_list.length)     # Output: 1