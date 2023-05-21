import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import About from "../pages/About";
import Create from "../pages/Create";

const Main = (props) => {
  const [pic, setPic] = useState(null);

  const url = "http://localhost:4000/pic/";

  const getPic = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPic(data);
  };

  const createPic = async (spic) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(spic),
    });
  };

  const updatePic = async (spic, id) => {
    // make put request to create
    await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(spic),
    });
    // update list
    getPic();
  };

  const deletePic = async (id) => {
    // make delete request
    await fetch(url + id, {
      method: "DELETE",
    });
    // update list
    getPic();
  };

  useEffect(() => getPic, []);

  return (
    <main>
      <Routes>
        <Route
          exact
          path="/create"
          element={<Create pic={pic} createPic={createPic} />}
        />
        <Route exact path="/" element={<Index />} />
        <Route
          path="/pic/:id"
          element={
            <Show pic={pic} updatePic={updatePic} deletePic={deletePic} />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
