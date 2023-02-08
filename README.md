<h1>👟 Sneakers Ecommerce Website</h1>
<hr style="width: 15px">
![shoewebsite](https://user-images.githubusercontent.com/40680988/217678591-ec05f1f8-acf9-470b-9f38-fe8ef52898fd.PNG)
<p>Feel free to watch the following video to learn more about my website:</p>
<a href="https://vimeo.com/797162411">Watch full code review </a>
<h2>Project Description</h2>
<p>Created an E-commerce website assigned as a project in my software development bootcamp at Perscholas. I made it as close to a real E-commerce site as possible with a list of products, preview images, brand names, and prices. You can add as many products as you want to your cart as well. This project was assigned to us to strengthen our basic HTML, CSS, and Javascript ability to make a CRUD application using RESTful routes in Express while using MongoDB as a database to store information. The product being sold on my E-commerce website is shoes. As a UX designer as well, I tried to make the experience as clean and pleasant as possible incorporating a price filter and a simple layout upon loading the page. </p>
<h2>Pages:</h2>

<h3>HOME page (index):  Shows list of products (can visit each product from here)</h3>
<ul>
<li>all the products are displayed</li>
<li>the images link to the PRODUCT page</li>
<li>and there should be a link to add a new product.</li>
</ul>

<h3>PRODUCT page: Shows specific product and it’s details</h3>
<ul>
<li>a link back to the HOME page</li>
<li>a link to edit the product (goes to the edit page)</li>
<li>a delete button that deletes</li>
<li>user can also search for a specific product from this page</li>
<li>Clicking buy button should lower remaining by 1</li>
<li>If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. (Hint: conditionals).</li>
<li>On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.</li>
<li>The BUY button (Which in my case is the add to cart button) should also not be rendered if the quantity of the item is zero</li>
</ul>

<h3>EDIT page</h3>
<ul>
<li>Should allow you to edit the data of a specific product (using it’s product ID)</li>
</ul>

<h3>CREATE page</h3>
<ul>
<li>allows for creation of new products (users will include a URL for the image)</li>
</ul>

<h3>Redirects</h3>
<ol>
<li>The create route should redirect to HOME after creation</li>
<li>The delete route should redirect to HOME after deletion</li>
<li>The edit route will redirect to the edited product's PRODUCT page after the object is changed in your collection.</li>
</ol>

<hr>
<h2>👩‍💻Technologies</h2>
<ol>
<li>HTML</li>
<li>CSS</li>
<li>Javascript</li>
<li>Express</li>
<li>Mongoose</li>
<li>MongoDB</li>
</ol>
<hr>
<h3>Thank you for stopping by 👋</h3>
