# InstruMed

## Technology Used:

- React
- Typescript
- React Router
- Bootstrap and React Bootstrap
- React Hook Form - For validating data in login form and adding new device model form.

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
