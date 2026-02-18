import datetime

class Email:
    def __init__(self, sender, receiver, subject, body):
        # Initialize email attributes
        self.sender = sender
        self.receiver = receiver
        self.subject = subject
        self.body = body
        self.read = False
        # Automatically set the timestamp upon creation
        self.timestamp = datetime.datetime.now()

    def mark_as_read(self):
        # Update the read status
        self.read = True

    def display_full_email(self):
        # Mark as read and print all email details
        self.mark_as_read()
        print("\n--- Email ---")
        print(f"From: {self.sender.name}")
        print(f"To: {self.receiver.name}")
        print(f"Subject: {self.subject}")
        print(f"Received: {self.timestamp.strftime('%Y-%m-%d %H:%M')}")
        print(f"Body: {self.body}")
        print('------------\n')

    def __str__(self):
        # Return a formatted summary for the inbox list
        status = "Read" if self.read else "Unread"
        formatted_time = self.timestamp.strftime('%Y-%m-%d %H:%M')
        return f"[{status}] From: {self.sender.name} | Subject: {self.subject} | Time: {formatted_time}"

class Inbox:
    def __init__(self):
        # Initialize an empty list to store emails
        self.emails = []

    def add_email(self, email):
        # Add an Email object to the list
        self.emails.append(email)

    def list_emails(self):
        # Display all emails in the inbox or show a message if empty
        if not self.emails:
            print("Inbox is empty.\n")
            return
        for index, email in enumerate(self.emails, start=1):
            print(f"{index}. {email}")

    def read_email(self, index):
        # Validate index and call the display method of the email
        if not self.emails:
            print("Inbox is empty.\n")
            return
        
        actual_index = index - 1
        if actual_index < 0 or actual_index >= len(self.emails):
            print("Invalid email number.\n")
            return
            
        self.emails[actual_index].display_full_email()

    def delete_email(self, index):
        # Validate index and remove the email from the list
        if not self.emails:
            print("Inbox is empty.\n")
            return
        
        actual_index = index - 1
        if actual_index < 0 or actual_index >= len(self.emails):
            print("Invalid email number.\n")
            return

        del self.emails[actual_index]
        print("Email deleted.\n")

class User:
    def __init__(self, name):
        # Each user has a name and their own Inbox instance
        self.name = name
        self.inbox = Inbox()

    def send_email(self, receiver, subject, body):
        # Create a new email and add it to the receiver's inbox
        new_email = Email(self, receiver, subject, body)
        receiver.inbox.add_email(new_email)
        print(f"Email sent from {self.name} to {receiver.name}!\n")

    def check_inbox(self):
        # Show a header and list all emails
        print(f"\n{self.name}'s Inbox:")
        self.inbox.list_emails()

    def read_email(self, index):
        # Delegate reading to the inbox
        self.inbox.read_email(index)

    def delete_email(self, index):
        # Delegate deletion to the inbox
        self.inbox.delete_email(index)

def main():
    # Simulation setup
    tory = User("Tory")
    ramy = User("Ramy")

    # Scenario: Sending emails
    tory.send_email(ramy, "Hello", "Hi Ramy, just saying hello!")
    ramy.send_email(tory, "Re: Hello", "Hi Tory, hope you are fine.")

    # Scenario: Ramy manages his inbox
    ramy.check_inbox()
    ramy.read_email(1)
    ramy.delete_email(1)
    ramy.check_inbox()

if __name__ == "__main__":
    main()