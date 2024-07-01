'use client'
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redirect after 5 seconds
    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://www.lapwingstudios.com/"; // Replace with your desired URL
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <p className="text-center text-4xl font-bold text-gray-800 dark:text-white">
        Welcome to the website
      </p>
    </main>
  );
}
