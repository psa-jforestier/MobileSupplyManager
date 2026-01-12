This project is called "Mobile Supply Manager". Its goal is to help user to manage generic supply for its house.
It is a full static web application, pure static html/css/javascript. No backend server, no backend database.
It will be used on PC and mobile so it must be responsive design.
User data are stored into the local storage of the browser.

The goal of the application is to help a user to manager supply for his house, like bag of pellet, bottle of oil, or bag of salt. It is used to track consumption, track price evolution, visualize duration of supply. 

# General rules for user interface

- The application will be mainly used on mobile phone
- The interface must be compact to avoid unnecessary scrolling
- The interface use flat design, avoid color gradient or color bluring
- each active button have a solid darker border (width of the border is 1px). The border is darker than the normal color of the button
- The application icon is "icon.png". It must be used as the favicon, and as the icon of the app when the user use the "add to welcome screen" feature of his browser in a mobile device.

## Keywords
- "Item" : the minimal element, for example a "bag of pellet of 15kg". An item have a name (64 char) and also a background color (use to quickly identify them). 
- "Purchase" : is the action of buying a certain amount of the same item at a certain price at a certain place. For example, the 6th of January at 18h00m34s, the user bought 4 items of "bag of pellet of 15kg" at a unit price of 5.00€ in the "Castorama" store. The purchase total price was 4x5.00 = 20€. A purchase have a number of item, an item, a purchase date and time, the name of the store, the unit price, the purchase total price.
- "Consume" : is the action of consuming a purchased item. When consumed, this item is no more on the Stock. An item has been consumed at a certain date and time, and the item consumed was bought at a certain unit price that must be tracked. When an item is consumed, it is removed from the stock.
- "Stock" : it is a view of all Items of a certain kind the owner currently have. The stock have a total number of items, and a total value. It is calculated from the number of item purchased minus the number of item consumed.
- "History" : it is a table of all actions made on the stock : Purchase and Consume. If the action was Purchase, the table indicate the date time, the number of items bought, the unit price, the purchase price, and the name of the store. If the action was Consume, the table indicate the date time, the number of items consumed, the price at which the item was bought, and the store name where it was bought.
- "Settings" : a set of settings for the user, like currency (€, $, £ or none), the language (EN, FR), the color scheme (dark, light, operating system preference).

# User journey

User major actions on this application are : consume items (one or more), or purchase items (one or more). Other actions are also available.

When the user land on the application for the first time, he arrive on the home page (index.html) and it is requested to go to the settings page (settings.html) to configure currency, then the user should create a new Item.

The "Add New Item" screen is a form asking for "Item name" (max 64 char) and background color. The color palette for the background of an item is : #111, #EEE, #ffadad, #ffd6a5, #fdffb6, #caffbf, #9bf6ff, #a0c4ff, #bdb2ff, #ffc6ff. When the user select a background color on the color picker, the background color of the form change according to user selection (this allows the user to test if he is happy with the color).
The "Create Item" button will save the new Item. If the Item name already exists, there is an error saying "This item already exists", and it is not saved.

If the user already have item created, the home page is displayed :
- the header section of the page, contains the application title. The title is clickable to go back to the home page.
- on the upper rights corner, a "Settings" button allow user to open the settings.html page.

- for each Items created, an "Item card" which contains :
  - the name of the item (this is the title of the card)
  - on the right of the card, on the same line, there is the "Stock summary" area, displaying the current number of item in the stock, the total value of the stock, and the average value of an item (2 digits decimal)
  - a button to Consume only one item (accessible only if the stock is not empty), label is "Consume one". If there is only one item left in the stock, a confirmation window appears saying "By deleting this item, the stock will be fully empty.". The active background color of this button is #FF7820
  - a button to consume more than one item (accessible only if the stock is not empty), label is "Consume more...", a browser popup ask for the user how many items he wants to consume. When the button is active, the background color of the button is the same than the "Consume one" button (#FF7820).
  - a button to purchase new items, label "Purchase"
  - a button to view history of this items (a link to history.html#item=name_of_the_item), label "History"
  - a section called "More..." is by default collapsed. On click on the "More..." section, new actions appears : 
    - "Rename" : to rename the item.
    - "Background Color" : to change the background color of the item (same color picker than the one used during item creation)
    - "Delete" : to delete the item and all history, purchase and consume. The delete must be confirmed by the user

## Consume

On consumption (button "Consume"), after the user consume one or more items, the application checks in the stock if there are enough items to remove. It is not possible to remove items if there is not enough items in the stock. Then it checks if all items in the stock have the same unit price. If there are multiple unit prices (because items has been purchased previously with different unit prices), the app display all avaible unit price (in ascending price order) and the number of items at this price in the stock. The user have to choose the unit price of items he wants to remove. If there is not enough items in the stock with the selected unit price, there is a message saying "It is not possible to remove so many items at this price". 
If the consumption is confirmed, the number of item at the selected unit price are removed from the stock. The date and time of the removal must be tracked because it will be visible in the history page.
When the stock is updated after consumption, the "Stock summary" area is updated (recomputation of the current number of item in the stock, the total value of the stock, and the average value of an item).

## Purchase

On purchase (button "Purchase"), the application display a formular asking for : Number of items, price per items, date and time of purchase (time is up to the second), Name of the store. When the user change the number of items of the price per items, a small line display the updated purchase total price. By default, the price per item and the Name of the store fields are setted to the last value entered by the user. The Name of the store is optional. The user have to click on "Add purchase" button to confirm the form. If the price per items is 0.00, a browswarning appears saying "Are you sure this item was free (0.00) ?", if the user click on "Yes", the purchase is confirmed.
If the purchase is confirmed, the number of item at the indicated unit price are added to the stock.

## History

The user can see the history of actions on an item (history.html#item=name_of_the_item). 
This page display at the top left of the screen a "Back" button to go back to the home, then, the title of the screen "History" followed by the item name. The "Settings" button should not be accessible from the history screen.
Then there are all actions related to this items, in a table, from newest to oldest.
Table columns are : date time (up to the second), action (Purchase or Consume), number of item purchased or consumed, the price of the item purchased or consumed, the store name.
The background of this screen use the same color than the selected item.
In the top of the screen, it is indicated the same information than the "Stock summary" of the Item card : on the same line, there is the current number of item in the stock, the total value of the stock, and the average value of an item (2 digits decimal). Verify this text is properly translated.

## Settings

Settings page (settings.html) :
This page allows the user to chage the currency, the language, the color scheme, export data, import data and to completely delete the browser local storage.
This page display at the top left of the screen, a "Back" button to go back to the home, then the centered title of the screen (Settings).
Import or export is made by downloading or uploading a JSON file containing all the data. Importing will delele existing data and delete local storage.
A green message indicate successfull saving of settings. The message is displayed on the right of the "Save settings" button.

On this screen, there is also a button to export data as a QR code. Label of the button is "Export Data to QR". The QR code is fully generated on client side (with a javascript library), and contains the data of the local storage in a compressed format (gzip). The QR code is displayed in full screen.
There is also a button to import data via QR code. Label of the button is "Import data from QR". When pressed, the browser turn on device camera and wait for the QR code to be scan by the device. The data in the scanned QR code use the same format as the "export to QR" button

# Other non functionnal requirements

The application is available in English and in French. 

All strings come from a "translation.js" file, where the developer can easily fix translation or add a new language. 
All user-visible text must be translated and use the t() function from translations.js. This includes:
- All button labels and action text
- All form labels and placeholders
- All page titles and headers
- All stock summary information displayed to the user, including:
  - "Current Stock" label
  - "Total Value" label
  - "Average Price" or "Avg Price" label
- All table headers (Date Time, Action, Quantity, Price/Item, Store)
- All status messages and confirmations
- All error messages and alerts
The developer must verify that every displayed string has a corresponding translation key in both EN and FR sections of translations.js. If a translation key is missing, the t() function will log a console warning and display the key name instead of translated text.

The default language of the application is based on the user browser supported language (from navigator.languages JS property). The user can change the language of the application from the Settings page (chosen language is saved on the browser local storage).

## Things to verify
- if a translated string contains several line and is displayed in a browser alert window, use one \n for new line. No need to double escape with \\n if the string is in JS and displayed by the browser alert popup.