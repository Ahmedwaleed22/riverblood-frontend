import React, { useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/router";

function Logout() {
  const { token } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post(
          "/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (e) {
        console.error(e);
      }

      router.push("/login");
    };

    logout();
  }, []);

  return <></>;
}

export default Logout;
