import React from "react";
import Todo from "./Todo/Todo";
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";

import "../styles.css";

export default function App() {
  return (
    <div className="App">
      <Header title="Todo List" />

      <Content>
        <Todo />
      </Content>

      <Footer />
    </div>
  );
}
