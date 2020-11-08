This project is part of a course from <a href="https://codeinstitute.net/" target="_blank"> Code Institute. </a>

![Image of sweden](https://timmy-bergkvist.github.io/hiking-sweden/assets/images/readmefile-logo.jpg)

# Hiking Sweden
Hiking Sweden is a website that has pinpointed different hiking trails and national parks in Sweden, 
all the way from north to south.
You can also search for different categories such as hotels, campings and other attractions around Sweden,
which will appear on the map.

## UX

This site is intended for users that are interested in different hiking trails and national parks
and want to look for other alternatives in Sweden. This site is designed for mobile, tablet and desktop users.

- User type.
  - People or families that are interested in hiking and traveling.

  - People who are traveling and want to see more of Sweden and our pre-selected 
    hiking trails and national parks.

  - For hikers that are out hiking and want to find a hotel or a tourist attraction near by.
    Have we provided a search option with different categories that may suit them.


The index site section contains three clickable options and a map:

- Search
  - This is the first section that the user will see.
    When clicking the search text a search box will be visible for the user. 
    In this box the user can search for locations and select different categories.
    which will appear on the map and will be displayed as pins in the results box. 
    In mobile view the result box will not be visible.
  
- Notes
  - When clicking the notes text a notepad will be visible for the user. The user can take notes from the
    locations they want to visit. There is an option to save and delete notes.
    The files will then be stored in the local host.
  
- Contact
  - When clicking the contact a contact us form will be visible for the user. The user can send a
    request that willl be sent to a specific email adress.

- Map
  - The map is visible all the time. On the map there will be some pre selected areas for hiking trails and 
    national parks. When the user is searching for a location and gets a result a pin on the map will appear. 
    When clicking on this pin a information box will be displayed for the user with information about that place.
    There will be links that take the user to their website.


**Mockups**
  
  I have used Figma Mockups to visualize images I can work from.

- <a href="/assets/mockups/desktop-home-mockup.jpg" target="_blank">Desktop Home</a> - <a href="/assets/mockups/tablet-home-mockup.jpg" target="_blank">Tablet Home</a> - <a href="/assets/mockups/mobile-home-mockup.jpg" target="_blank">Mobile Home</a>

- <a href="/assets/mockups/desktop-contact-mockup.jpg" target="_blank">Contact Desktop</a> - <a href="/assets/mockups/tablet-contact-mockup.jpg" target="_blank">Contact tablet</a> - <a href="/assets/mockups/mobile-contact-mockup.jpg" target="_blank">Contact Mobile</a>

- <a href="/assets/mockups/desktop-notes-mockup.jpg" target="_blank">Notes Desktop</a> - <a href="/assets/mockups/tablet-notes-mockup.jpg" target="_blank">Notes Tablet</a> - <a href="/assets/mockups/mobile-notes-mockup.jpg" target="_blank">Notes Mobile</a>


## Features

**Existing Features**

- Interactive links: Allows the user to choose between search, notes and contact links.
- Search: Allows the user to search for different locations to be displayed on the map.
- Select options: Allows the user to select different categories to be displayed.
- Reset button: Allows the user to reset all selections and can start over again and do another search.
- Notes: Allows the user to write, save and delete notes.
- Contact form: Allows the user to fill out a form with name, email and description.
- Map: Allows the user to interact with the map and look for different locations.
- Social media button: Allows the user to be redirected to social media platforms.

**Features Left to Implement**

- Make the reset button only appear when the search button has been clicked. 
- Host the platform on a server.
- Implement more features and design.
- Implement more select options.
- Implement an edit button in the Notes section.

## Technologies Used
- <a href="https://en.wikipedia.org/wiki/HTML" target="_blank"> Html </a>
  
- <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank"> Css </a>

- <a href="https://getbootstrap.com/" target="_blank"> Bootstrap </a>

- <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"> JavaScript </a>

- <a href="https://en.wikipedia.org/wiki/JQuery" target="_blank"> JQuery </a>

- <a href="https://www.figma.com/" target="_blank"> Figma </a>
  
## Testing 

  - The responsive is run and tested at:
    - http://ami.responsivedesign.is/#

  - The HTML code is run and tested at:
    - https://validator.w3.org/#validate_by_input
  
  - The CSS code is run and tested at:
    - https://jigsaw.w3.org/css-validator/#validate_by_input
    
  - The JavaScript is run and tested at:
    - https://jshint.com/  
    
  - Search
    - Click on the "Search" header and the "Search" section will appear.
    - Try to make a search in the search box and a city will be visible as an alternative.
    - Try to select a category in the option menu.
    - On selected category, pins will be visible in the map and in the result box.
    - Try to select a pin and a popup will appear with information.
    - Try to click on the reset button and everything will be reset and be back to its first stage.
  
  - Notes
    - Click on the "Notes" header and the "Notes" section will appear.
    - Try to write a note and click the save button and the notes will be saved below the input field.
    - Try to click on the trash bin and the notes will be deleted.
  
  - Contact
    - Click on the "Contact" header and the "Contact" section will appear.
    - Try to submit the empty form and verify that an error message about the required fields appears.
    - Try to submit the form with an invalid name, email and message an error message appears.
    - Try to submit the form with all inputs valid and verify that an alert box will appear and
      notify the user that the message is sent.

  - Map
    - Try to click on one of the clusters on the map and it will zoom in on the markers.
    - Try to click on one of the red pins and a popup will appear with information and a picture.
    - Try to click on the small x in the right corner and the popup will disappear.
 
  - Bugs
    - If the map is not displaying please reload the page, this may be due to that google maps api is not connecting properly.
    - If the fonts is not displaying please reload the page, this may be due to that fontawesome.com api is not connecting properly.
  
## Deployment
  
  The hosting platform for this project is GitHub and can be run directly here on github.
  
  https://timmy-bergkvist.github.io/hiking-sweden/
  
## Credits
  
   **media**
  - The photos used in this site were obtained from:
    - <a href="https://pixabay.com/" target="_blank"> Pixabay </a>
    - <a href="https://pixabay.com/sv/photos/sverige-lappland-kungsleden-1093281/" target="_blank"> Steen Jepsen <a>
    - <a href="https://naturkartan.se/sv" target="_blank"> Natur kartan</a>

   **Acknowledgements**
  - Inspiration for this project was obtained from:
    - https://jsudron.github.io/Nordic-Discovery-Project/index.html
    - https://www.webdesign-inspiration.com/
    - https://pixabay.com/
    - https://www.youtube.com/watch?v=WY4rvU4ImgE
    - https://www.youtube.com/watch?v=Gp2bUX7_WIg
    - https://github.com/Code-Institute-Solutions/readme-template
    - https://naturkartan.se/sv
    - https://www.svenskaturistforeningen.se/guider-tips/leder/
    - https://cloud.google.com/maps-platform/
    - https://www.w3schools.com/
    - https://fontawesome.com/icons?d=gallery
