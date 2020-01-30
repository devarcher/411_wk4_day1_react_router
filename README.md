

- Now that we can navigate to the `Car` component we want to fill out this page so that it looks nice and provides details about the specific car we passed in. To get the specific car we need to access the "id" property from the path. We can do that by accessing it from props with: `props.match.params.id`. Note that if you would have called the parameter (id) something different in the router, say "carId", then that would change how we access it here as well (params.carId). Before the return statement, create a variable called "id" and assign it the result from props.

- Now that we have the specific id we need to find the car in the list that matches that id. You should know how to find items in an array by now so go ahead and find the specific car. Hint: the cars are in the "cars" variable at the top of the file.

- Create the `Car` component so that it looks like the image below. To do that, import the material-ui components as specified at the top of the file. You will use the [material-ui documentation](https://material-ui.com/components) to figure out how to style this page.

![car component](./img/411_wk4_car_component.png)
