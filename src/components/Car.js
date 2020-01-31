import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip } from "@material-ui/core";

const Car = props => {
  const id = parseInt(props.match.params.id);
  const car = cars.filter(car => car.id === id);

  return (
    <div>
      <ul>
        <Container>
          <Paper>
            {Object.entries(...car).map(([key, value], index) => (
              <li key={index}>
            <Chip label={`${key}: ${value}`}/>
              </li>
            ))}
          </Paper>
        </Container>
      </ul>
    </div>
  );
};

export default Car;
