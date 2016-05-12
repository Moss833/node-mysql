Week of 12 HW: Node.js & MySQL
Objectives

In this activity you will be creating an Amazon-like storefront using MySQL, the MySQL NPM Package, and the Prompt Package.

The application will take in orders from customers and deplete from the store's total supplies.

As a bonus: The application will additionally track these product sales across departments and provide a summary of the highest-grossing departments in the store.

Submission Requirements:

When submitting this homework, use the normal GitHub and Heroku process.

However, be sure to include screenshots and/or video of the working code in your README.md file of the GitHub Repo. (Research how to use README.md files if you are confused).

Challenge #1: Customer View (Minimum Requirement)

Create a MySQL Database called Bamazon. 
Then create a Table inside of that database called Products.
The products table should have each of the following columns:
ItemID (unique id for each product)
ProductName (Name of product)
DepartmentName
Price (cost to customer)
StockQuantity (how much of the product is available in stores)
Populate this database with approximately 10 different products. (i.e. Insert "mock" data rows into this database and table).
Then create a Node application called BamazonCustomer.js. Running this application will:

First Display All of the Items available for sale. This initial display, should include the ids, names, and prices of products for sale

Users should then be prompted with two messages. The first message should ask them the ID of the product they would like to buy. The second message should ask them how many of the product they would like to buy.

---------------------------------------
Once the customer has placed the order: Your application should...

Check if your store has enough quantity of the product to meet the customer's request. If not, you should respond to the user by saying: "Insufficient quantity" and prevent the order from going through.

If your store DOES have enough of the product to meet the customer's request, you should fulfill their order. This means that you should show them the total cost of their puchase. Then update the SQL database to reflect the remaining quantity.

If this activity took you between 8-10 hours, then stop right here... Otherwise continue to the next set of challenges