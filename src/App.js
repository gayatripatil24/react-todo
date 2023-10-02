import React from 'react';
import './App.css';
import TodoPage from "./Pages/TodoPage/TodoPage";
import TodoDetailsPage from "./Pages/TodoDetailsPage/TodoDetailsPage"
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage />} exact></Route>
          <Route path="/tododetails/:id/:userId" element={<TodoDetailsPage />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
