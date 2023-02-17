import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import  Home  from './components/PaginaPedido';
import { Routes, BrowserRouter ,Route } from "react-router-dom";
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
       
      </Routes>
    </div>
  );
}



export default App;
