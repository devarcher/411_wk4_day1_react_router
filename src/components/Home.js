import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Divider } from "@material-ui/core";
import cars from "../cars.json";

const Home = () => {
  console.log("CARS", cars);
  return (
    <div className="card-container">
      {cars.map((car, idx) => (
        <Card key={idx} className="card">
          <CardContent className="text-gray">
            <span>{car.Name.toUpperCase()}</span>
            <ul>
              <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
              <li>Cylinders: {car["Cylinders"]}</li>
              <li>Displacement: {car["Displacement"]}</li>
              <li>Horsepower: {car["Horsepower"]}</li>
            </ul>
          </CardContent>
          <Divider />
          <CardActions style={{ color: "mediumblue" }}>
            <Link to={{
              pathname: `/car/${car.id}`
            }}>See more Details</Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Home;
