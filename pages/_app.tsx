import React, { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import axios from "axios";
import { UserContext } from "../contexts/UserContext";

axios.defaults.baseURL = "http://localhost:8000/api/";

function MyApp({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<object | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
