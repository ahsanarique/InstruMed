# InstruMed

## Technology Used:

- React
- Typescript
- React Router
- Bootstrap and React Bootstrap
- React Hook Form - For validating data in login form and adding new device model form.

## Screenshots

### Login

![1](https://user-images.githubusercontent.com/65535377/121804698-8a5e4b80-cc69-11eb-8ee0-3e664aa302ab.jpg)

### Homepage

![2](https://user-images.githubusercontent.com/65535377/121804777-d3ae9b00-cc69-11eb-9a5e-19c2f79e3d62.jpg)

### Model Data

![3](https://user-images.githubusercontent.com/65535377/121804793-e88b2e80-cc69-11eb-9424-d5c94890e6c4.jpg)

### Dashboard -> Add New Model Type

![4](https://user-images.githubusercontent.com/65535377/121804810-00fb4900-cc6a-11eb-9870-2e20d59e187c.jpg)

## Features

### Upon logging in tokes get saved in the session storage for further use, After authentication and successful login, users can:

- View available device models on main page
- Clicking on any of the device will show users details data of that model in a overlay modal
- The dashboard component includes a different navigation bar that includes dashboard functionalities
- For now, users can add new model type in the database. Clicking the "Add New Device Model" button will give users a form to fill up necessary data.
- Filling up the form and clicking confirm addition will add new model type in the database show alert message that data is added.
- Failing so will either result in a error alert message or show errors in form validation.

## Limitations

- Pagination is not fully implemented yet.
- reloading pages logs user out.
