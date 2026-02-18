class HashTable:
    def __init__(self):
        # Initialize the collection as an empty dictionary
        self.collection = {}

    def hash(self, string):
        # Sum the Unicode values of each character in the string
        hash_value = 0
        for char in string:
            hash_value += ord(char)
        return hash_value

    def add(self, key, value):
        hash_key = self.hash(key)
        
        # If the hash doesn't exist in the collection, create a nested dictionary
        if hash_key not in self.collection:
            self.collection[hash_key] = {}
        
        # Store the key-value pair under the computed hash
        self.collection[hash_key][key] = value

    def remove(self, key):
        hash_key = self.hash(key)
        
        # Check if hash exists and the specific key is in that bucket
        if hash_key in self.collection and key in self.collection[hash_key]:
            del self.collection[hash_key][key]
            
            # Optional: If the bucket is empty after removal, you could delete the hash_key
            # if not self.collection[hash_key]:
            #     del self.collection[hash_key]

    def lookup(self, key):
        hash_key = self.hash(key)
        
        # Look for the hash index and then the specific key
        if hash_key in self.collection and key in self.collection[hash_key]:
            return self.collection[hash_key][key]
        
        # Return None if the key does not exist
        return None