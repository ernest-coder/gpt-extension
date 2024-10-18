from supabase_client import supabase


def sign_up_user(email: str, password: str):
    """Function to sign up a new user to the application"""
    try:
        response = supabase.auth.sign_up({"email": email, "password": password})
        if response:
            print("User signed up successfully!")
            return response
    except Exception as e:
        print(f"Error during sign-up: {e}")

def sign_in_user(email: str, password: str):
    """Function to sign in an existing user to the application"""
    try:
        response = supabase.auth.sign_in_with_password({"email": email, "password": password})
        if response:
            print("User signed in successfully!")
            return response
    except Exception as e:
        print(f"Error during sign-in: {e}")

if __name__ == "__main__":
    # Ask the user if they want to sign up or sign in
    action = input("Do you want to 'sign up' or 'sign in'?: ").strip().lower()

    # Prompt for email and password
    email = input("Enter your email: ").strip()
    password = input("Enter your password: ").strip()

    if action == "sign up":
        sign_up_user(email, password)
    elif action == "sign in":
        sign_in_user(email, password)
    else:
        print("Invalid action. Please choose either 'sign up' or 'sign in'.")