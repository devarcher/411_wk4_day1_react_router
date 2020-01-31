import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip } from "@material-ui/core";

const Car = props => {
  const id = parseInt(props.match.params.id);
  const car = cars.find(car => car.id === id);
  return (
    <div>
      <Container fixed="true" maxWidth="sm" className='mainContainer' >
        <Paper className="paperContainer">
          <h1 id="carName">{car.Name}</h1>
          <ul className="chipList">
            {Object.entries(car).map(([key, value]) => (
              <li key={key}>
                <Chip label={`${key}: ${value}`} />
              </li>
            ))}
          </ul>
        </Paper>
      </Container>
    </div>
  );
};

export default Car;
