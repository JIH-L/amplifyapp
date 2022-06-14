import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPages from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import TodoPages from "./pages/Todo";
import Layout from "./components/layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPages />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="todo" element={<TodoPages />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
