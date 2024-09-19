# BonBurgers – app for burger restaurant



## Setup
To install the application, please run two commands:
```bash
npm i
npm run start
```

## Pages
#### **Home Page:**
- Fetches the burger menu from an open API.
- Provides pagination for 7 items per page.
- Clicking on the logo redirects to the home page.
- Displays a notification if the menu fails to load.
- Includes a button in the header leading to the order cart.
- Allows adding the burger to the cart by clicking the "Add" button.
- Burger Modal opens when clicking on a burger.
  
#### **Burger Modal:**
- Displays information about the burger.
  
#### **Cart Page:**
- If the cart is empty, it shows a corresponding message and a button to return to the home page.
- If there are orders in the cart, allows increasing, decreasing, and removing items.
- Shows the total amount for the order at the bottom of the page.
- After clicking the "Confirm" button, clears the cart and redirects to the home page.
## Tech Stack

- **Library:** ReactJS
- **Visual:** Bootstrap5, Toastify, CSS
- **State manager:** Redux Toolkit
- **Navigation:** React Router
