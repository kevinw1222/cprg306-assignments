"use client";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  return (
    <main>
      <header>
        <h1>Login Page</h1>
      </header>
      <section>
        {user ? (
          <div>
            <p>Welcome, {user.email}</p>
            <img src={user.photoURL} className="w-10 h-10" />
            <button
              className="text-lg m-2 hover:underline"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            className="text-lg m-2 hover:underline"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        )}
      </section>
    </main>
  );
}
