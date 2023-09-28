"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

function PosterConnect() {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    setCode(code);
    console.log("code", code);
    setAccessToken(code);

    if (accessToken === null || accessToken === "") {
      return;
    } else {
      console.log("SUCCESS");
    }
  }, []);

  const [accountId, setAccountId] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [redirectUri, setRedirectUri] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const authUrl = `https://${accountId}.joinposter.com/api/auth?application_id=${applicationId}&redirect_uri=${redirectUri}&response_type=code`;
    window.location.href = authUrl;
    router.push(authUrl);
  };

  return (
    <div>
      {accessToken === null || accessToken === "" ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Account: </label>
            <input
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
            />
          </div>
          <div>
            <label>Application ID: </label>
            <input
              value={applicationId}
              onChange={(e) => setApplicationId(e.target.value)}
            />
          </div>
          <div>
            <label>Redirect URI: </label>
            <input
              value={redirectUri}
              onChange={(e) => setRedirectUri(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        "You Are Validated"
      )}
    </div>
  );
}

export default PosterConnect;
