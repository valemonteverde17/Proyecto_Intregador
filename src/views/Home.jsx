import React, { useEffect, useState } from "react";
import GeneralLayout from "../components/layouts/GeneralLayout";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/generate-api-key/", {
        headers: {
          "API-Key": "mango",
        },
      })
      .then((response) => {
        setApiKey(response.data.api_key);
        axios
          .get("http://localhost:8000/api/muro/", {
            headers: {
              Authorization: `Api-Key ${response.data.api_key}`,
            },
          })
          .then((response) => {
            setPosts(response.data);
            console.log("Posts de la api", posts);
          })
          .catch((error) => {
            console.error("Error al consumir post:", error);
          });
      })
      .catch((error) => {
        console.error("Error al conseguir una api key:", error);
      });
  }, []);

  return <GeneralLayout>Contenido del feed</GeneralLayout>;
}

export default Home;
