"use client";

import { useEffect } from "react";

function AuthCallback() {
  useEffect(() => {
    saveAccessTokenToLocalStorage();
  }, []);

  function saveAccessTokenToLocalStorage() {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Extract the access token from the URL parameter
    const accessToken = urlParams.get("code");

    // Save the access token to local storage
    localStorage.setItem("accessToken", accessToken);
  }

  return (
    <div>
      <h2>Access Token Received</h2>
      <p>The access token has been saved to local storage.</p>
      <p>Access Token: {localStorage.getItem("accessToken")}</p>
    </div>
  );
}

export default AuthCallback;
