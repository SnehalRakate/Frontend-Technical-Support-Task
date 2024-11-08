
Interactive Boxes Project
This project showcases interactive product selection boxes with customizable options for selecting sizes, colors, and quantities. The interface includes radio buttons for selecting different product bundles, a "Most Popular" label, and dynamically shown dropdowns for each box.

Table of Contents
Demo
Features
Technologies Used
Setup and Installation
Customization
Code Explanation

Demo:
The Interactive Boxes project includes three boxes representing different bundle options. Users can select a bundle by clicking on a box, which displays additional options for size and color.

Features:
Multiple Product Boxes: Each box allows users to select different bundle quantities.
Dynamic Dropdowns: Size and color dropdowns appear only when a box is selected.
"Most Popular" Label: Highlights the most popular option visually.
Responsive Design: Ensures compatibility across various screen sizes.

Technologies Used:
HTML: For structuring the boxes and dropdown options.
CSS: For styling the boxes, labels, and dropdowns.
JavaScript: For handling user interactions and dynamically displaying dropdowns.

Setup and Installation:
Clone the Repository:
git clone https://github.com/SnehalRakate/Frontend-Technical-Support-Task
cd interactive-boxes
Open the Project Folder: Open the index.html file in a browser to view the interactive boxes in action.

Customization:
Button Text and Labels: Adjust the button label or price by modifying the text inside each box.
Most Popular Label: Add or remove the “Most Popular” label by including/removing <div class="most-popular">Most Popular</div> in the desired box.
Dropdown Options: Customize dropdown options by adding/removing <option> elements within each <select>.

Code Explanation:
HTML: Structure of each box includes labels, prices, and two dropdown menus.
CSS: Styles for the boxes, labels, and inputs. .option-inputs and .option-labels are initially hidden.
JavaScript: Handles click events to show the dropdowns for the selected box.