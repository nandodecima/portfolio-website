// src/components/ui/Card.jsx
import React from "react";
import CardContent from "./CardContent"; // Import CardContent

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <CardContent>{children}</CardContent>
    </div>
  );
};

export default Card;
