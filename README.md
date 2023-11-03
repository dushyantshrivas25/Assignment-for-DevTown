Product Display Web App
This is a simple React web application that displays a list of products in various categories, including fashion, electronics, furniture, utensils, and travel. Users can filter products by category and navigate through multiple pages of product listings. The application is built using React and utilizes Bootstrap for styling.

Components
Main: The main component responsible for displaying the products and implementing pagination. It allows users to select a category and view products in that category.

Header: A simple header component, which can be customized as per your needs.

How to Use
Install the required dependencies using npm install.

start the application by giving command in terminal
"npm install -g create-vite"
"npm install --save-dev create-vite"
Then run, "npm run dev" 
to run the application



Product Data
The product data is provided as an array of objects in the products variable within the code. Each product object contains the following information:

category: The category of the product.
name: The name of the product.
description: A brief description of the product.
price: The price of the product.
image: The URL to the product image.
You can customize and extend the product data as needed.

Pagination
The application uses a simple pagination system to display a limited number of products per page. Users can navigate between pages using the "Previous" and "Next" buttons.

Filtering
Users can filter products by selecting a category from the dropdown list. The "All" option shows products from all categories, and other options filter products by their respective categories.

Customization
You can customize the application by modifying the product data, adding more categories, changing the styling, or extending the functionality to suit your requirements.

