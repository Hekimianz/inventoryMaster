# Inventory Master

Inventory Master is an application designed to efficiently manage inventory. It provides features such as checking the quantity of available products, searching products by name, adding new products, deleting products, and notifying users when a product is sold out or running low in quantity.

The application is built using the Model-View-Controller (MVC) architecture, where the view is implemented using React, the database management is handled by PostgreSQL, and the backend is powered by Node.js and Express.js.

The application is connected to a RESTful API created using Express.js and hosted on Render. You can access the live version of the application [here](https://inventorymaster.onrender.com/).

## Features
- Check the quantity available for each product
- Search products by name
- Add new products
- Delete products
- Receive notifications for sold-out products or products with low quantities

## Installation
To run the application locally, follow these steps:
1. Clone the repository: `git clone https://github.com/Hekimianz/inventoryMaster`
2. Install dependencies: 
   - For the server, navigate to the root directory and run: `npm install`
   - For the view, navigate to the `./view` directory and run: `npm install`
3. Start the server: `node server.js`
4. Start the view: 
   - Navigate to the `./view` directory
   - Run: `npm start`
5. Access the application in your browser at `http://localhost:<port>`

## Usage
1. Visit the live version of the application at [https://inventorymaster.onrender.com/](https://inventorymaster.onrender.com/)
2. Navigate through the interface to perform various inventory management tasks:
   - Check available quantities
   - Search for products
   - Add new products
   - Delete products

## Contributing
Contributions to Inventory Master are welcome! To contribute, please follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature/feature-name`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/feature-name`
5. Submit a pull request

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any questions, feedback, or suggestions, feel free to reach out to us at [aramhek121@gmail.com](mailto:aramhek121@gmail.com).
