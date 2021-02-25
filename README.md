# Cape Towns Best Bits

## Interactive Frontend Development - Code institute

---

> **_Cape Towns Best Bits_** is a _Do It Your Self_ webpage that streamlines the process of finding listed destinations and things to do in Cape Town without having to go through a tour company.

---

## Demo

A live demo can found **_[Here](https://lucid-villani-555a83.netlify.app)_**

---

![mulityscreenImg](https://github.com/Clinton-Davis/ctbb/blob/master/smartmockups_CTBB.png)

---

<a name="toc"></a>

## Table of Contents

1. [**UX**](#ux)
2. [**Scope**](#scope)
3. [**Structure**](#structure)
4. [**Wireframe Mockups**](#wireframes)
5. [**Surface**](#surface)
6. [**Technologies**](#technologies)
7. [**Features**](#features)
8. [**Testing**](#testing)
9. [**Bugs**](#bugs)
10. [**Deployment**](#deployment)
11. [**Credits**](#credits)
12. [**Acknowledgements**](#acknowledgements)

---

<a name="ux"></a>

## UX

My clients wanted an "_Eye catching, Young and Vibrant_", website with a _family friendly feel_.
Moblie friendly, and easy to use with functional navigation. <br>
Their Goals are:<br>

- To get more users traffic through the site.<br>
- To get more users to the listed destination. <br>
- To get more sponsored destinations

We broke up the list into three categories. Sights, Adventure, Foodies. <br>
**Sights:** or Sightseeing is a list of sponsored or most Rated Sightseeing destination. For all ages.<br>
**Adventure:** Is for the more active user, some of the things on the list are very adventurous, and gets the hard beating. Not for everyone, more aimed at adults and teenagers.<br>
**Foodies:** Is a list of the top-rated and sponsored restaurants, from local to Michelin star. For all ages.<br>
All destinations have integrated Google Maps functionality for users to find their way to their destinations with ease. We use the current user position and Google Maps API to send a step by step list of directions.

### User Stories

> 1. As a user, when I go on holiday I really love doing things in our own time and not have to be on other peoples schedules, The problem is I'm never sure whats the best things to do, It would be nice just to open a webpage and have a list of the best things.
> 2. As a user, I want to be able to have one location where I can find a place, get directions and contact them if needed.

---

<a name="scope"></a>

## Scope

The biggest problems, when people go to Cape Town, is that there is so much to see and do, and so much information things can get overwhelming. This website streamlines it down to the top 30 best things to do, divided into three categories. Cape Towns Best Bits makes it easy for people to decide. The next thing the user needs is a map or directions on how to get there. This is where integrated navigation comes in. It lets the user spend more time being on holiday and less time trying to find a destination and directions.
The Target demographic is quite large as the list of things to see and to are very broad, all ages and fitness profiles have many choices.
The platform is easy to use and informative with little delay in getting the information they need.

---

<a name="structure"></a>

## Structure

#### **_Main Page_**

- **-Navigation Bar-**
  - Table Mountain Icon on the left that is clickable and sends the user to the main page.<br>
  - Up to date Weather for Cape Town, With "_feels like_" Temps and current wind speed in KPH and direction.<br>
  - About link - opens up a Modal with information for the user<br>
  - Contact link - Open the Contact page with the email form.
- **-Main Heading-**
- The main heading front and centre.
- **-Three Category Selection Buttons-**
- Sights / Adventure / Foodie.
- Click the button, and the main page heading fades away to reveal lists of destinations. On the right is an image for each destination.

#### **_Contact Page_**

- **-Email Form-**
  - The form asks the user to leave a comment via email and sends an automated response.

<a name="wireframes"></a>

#### Wireframe Mockups

- [Main Page](https://github.com/Clinton-Davis/CapeTowns_Best_Bits/blob/master/sundries/CapeTownBestBitsWireFrames.png)
  <br>

  The page looks the same on all devices. On wider screens, the background Image fits the full screen, and the web content is centred.
  <a name="surface"></a>

---

## Surface

The Navigation Bar at the top is transparent with a bottom box-shadow to highlight that it is a Navigation section.
The background image of Cape Town I used has a lovely warmth to it. It shows all the significant parts that make up Cape Town, The city, The mountains and sea. This image is also the background for the contact page.
I went for a big font from [Google Fonts](https://fonts.google.com/), called _"Banger"_ as the primary font. I chose this font because it has a rustic feel and can get away with being very large without being overbearing. The secondary font is _"Montserrat"_. It is clean and clear, and they complement each other.

The moving backgrounds on the main page headings make it more eye catching, The main heading has the blue sky, the Best Bits has one of Cape Towns spectacular sunsets, the DIY heading has the two oceans.
The Westen province rugby team inspires the choice of colour for the main option buttons; which are Blue and white.

---

<a name="technologies"></a>

## Technologies

- [Visual Studio Code](https://code.visualstudio.com/)
- [HTML5](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [Vue](https://vue.js.org/)
- [Firebase](https://firebase.google.com/)
- [GitHub](https://github.com/)
- [Slack](https://slack.com/intl/en-ie/)
- [Weather_Api](https://openweathermap.org/api)
- [Google Maps Api](https://cloud.google.com/maps-platform)
- [Website Responsive Testing](Toolresponsivetesttool.com)
- [Emailjs_Api](https://www.emailjs.com/)
- [Gmail](https://www.gmail.com/)
- [TinyPNG](https://tinypng.com/)
- [GTmetrix](https://gtmetrix.com/)
- [Netlify](https://www.netlify.com/)
- [Google Fonts](https://fonts.google.com/)
- [CSSMatric](https://cssmatic.com/)

---

<a name="features"></a>

## Features

- **Current local weather** <br>
  Current local weather using [Weather_Api](https://openweathermap.org/api) , including wind speed and directions. Cape Town is known to be the Cape of Storms and can have fierce wind and weather, so having this helps the user decide to be indoor or outs. More details are available when clicking on the Wind Icon or Temperature. i.e., Sunrise and Sunset times / Humidity /Air Pressure / cloud cover / rain.<br>
- **Destination Information** <br>
  Each destination is linked to the [Google Maps Api](https://cloud.google.com/maps-platform) using the Google place id so that the user can get the location of the destination its local phone number (if any) and website (if any).
- **Users Current Location**<br>
  [HTML5](https://en.wikipedia.org/wiki/HTML) Geolocation API lets the webpage get the current position of the user using the browser. On first use, the browers will ask the user for permission to use their location.
- **Step by step instructions**<br>
  When the user clicks on the 'Get Directions' button after selecting the desired destination, the [Google Maps Api](https://cloud.google.com/maps-platform) triggers the [HTML5](https://en.wikipedia.org/wiki/HTML) Geolocation API, which triggers the custom "loading.." animation. When the data is returned to the user, it populates the Map Information section.
- **AutoReplay email.**<br>
  On the contact us page, there is a form for email comments or questions.

### Features Left to Implement

- **Directions to be emailed**<br>
  Step by step directions to be emailed to the user.<br>
- **Changing Themes**<br>
  I want to implement a change in the Background Picture with night and Day. i.e., when its night, change the image to a nighttime image and headings change accordingly.<br>
- **Additional List**<br>
  I want to implement a _Night Club_ list that appears after sunset. A list of all the night clubs in Cape Town.
- **Local Time**<br>
  I would like to implement users local time to be displayed, through HTML Geolocation.
- **Data Server**<br>
  I want to have the data for all the listing to be on an external server and reach them with a JSON call and not have them internally.

---

<a name="testing"></a>

## Testing

- The first phase of testing is a step by step basis. As I implemented a new code I tested it on [Chrome Developer](https://developers.google.com/web/tools/chrome-devtools) I used the extension called [Live Server](https://github.com/ritwickdey/vscode-live-server)
  on [Visual Studio Code](https://code.visualstudio.com/).
- I tested HTML with w3 Validator. Passed
- I tested CSS with w3 Validator. I got a few warning and errors with CSS Variables<br>

  `--Bangers: "Bangers", sans-serif;`<br>
  `--Montserrat: "Montserrat", sans-serif;`<br>
  `--white: rgb(219, 217, 217);`<br>

  These errors are an ongoing issue with w3, They are valid, but not recognised by W3. <br>[CSS variables ("custom properties"), a widely supported and crucial feature.](https://github.com/w3c/css-validator/issues/111)<br>The reason I used them is: If I want to change the font s or colours in the future, I would have to change the variables in question for the entire site. <br>

- After all the JavaScript was completed, I ran through the code to make sure it was working and smoothly as possible.
- Once all the elements were in place and working, I went through all the destinations one by one made sure all the ID's and Google Maps API were all working correctly.
- I tested the contact us page to ensure the form linked to the emailjs API and email response is working correctly.
- I tested the form for form validation, making sure it displayed an error if a input fields was left blank.
- I tested the validation of the email input, to make sure a email address was entered.
- I tested the refresh speed to see how fast the page loaded from cached and uncached browsers.
- I used the speed variables available on Chrome developers Tools, Slow 3G / Fast 3G / Online.
  With each speed, I test performance on Image loading time, HTML and CSS loading time, JavaScript and JQaury CDN. Cached and uncached memory.<br>
- I used [GTmetrix](https://gtmetrix.com) to test how fast the site loaded [Report](https://github.com/Clinton-Davis/CapeTowns_Best_Bits/blob/master/sundries/GTmetrix-report-.pdf)<br>

- I sent it to the Slack Comunity for Feedback.
- Then I started the Media Query Test and all the Presets in Chrome and Firefox Development tools.
- Below is a list of devices I tested on with [Website Responsive Testing](Toolresponsivetesttool.com).

 <details>
<summary>Moblies</summary> 
<ul>
<li>Apple iPhone 3/4/4s/5/5s/6/6s/6plus/7/7Plus/8/8Plus/X/XR/XS/XSMax</li>
<li>Nexus 6P/5X</li>
<li>Google Pixel 2/XL</li>
<li>Samsung Galaxy S S2/S3/S4/S5/S6/S7/S8/S8+/S9/S9+</li>
<li>Samsung Galaxy Nexus/Note 2/3/4/8</li>
<li>LG G3/G4/G5</li>
<li>LG Optimus G</li>
<li>LG Nexus 4/5</li>
<li>Pantech Vega n6</li>
<li>Lenovo K900</li></li>
<li>Motorola Nexus 6</li>
<li>One Plus 3</li>
<li>Nexus 7(2013)/9</li>
<li>ZTE Grand S</li>
<li>HTC One/8X/Evo 3D</li>
<li>Sony Xperia P/S/Z/Z3</li>
<li>Xiaomi Redmi Note 5</li>
<li>Xiaomi Mi 3/4</li>
<li>Blackberry Z10/Z30/Q10/CLASSIC/PASSPORT/LEAP</li>
<li>Blackberry Torch 9800</li>
<li>Microsoft Lumia 620/830/900/920/925/1020/1520</li>
</details>
 <details>
<summary>Tablet</summary> 
<ul>
<li>Apple iPad Pro/Pro9.7/1/2/mini</li>
<li>Samsung Galaxy Tab 3 10"/Tab 2 10"/Tab (8.9")/Tab 2 (7")</li>
<li>Samsung Nexus 10</li>
<li>HTC Nexus 9</li>
<li>Asus Nexus 7 (v1)/(v2)</li>
<li>LG G Pad 8.3</li>
<li>Amazon Kindle Fire/HD7/HD8.9</li>
<li>Microsoft Surface Pro 2/3</li>
<li>Blackberry Playbook</li>
</details>
  <details>
<summary>Desktops</summary> 
<ul>

<li>Desktop/Laptop</li>
<li>1024 x 768</li>
<li>1280 x 800</li>
<li>1366 x 768</li>
<li>1440 x 900</li>
<li>1680 x 1050</li>
<li>1920 x 1080</li>
<li>1920 x 1200</li>
<li>2560 x 1440</li>
<li>3840 x 2160</li>
<li>4096 x 2304</li>
<li>5120 x 2880</li>
</details>

---

<a name="bugs"></a>

## Bugs

---

<a name="deployment"></a>

## Deployment

I hosted this site using [Netlify](https://www.netlify.com/). It is a stand-alone static webpage deployment website that links to your GitHub repository. It is deployed directly from the master branch or any other branches of your choosing. The beautiful thing about using Netlify is that it updates the feed as you git push changes to the branch you are using to deploy.

<details>
<summary>To deploy on Netlify:</summary>
<br>
<ol>
<li>Open Netlify</li>
<li>Sign Up using email or GitHub(Perfered method, auto update with Git-Push)</li>
<li>'Click' Create a new site</li>
<li>It will ask you "Continuous deployment" Click GitHub</li>
<li>Choose the repository you with to deploy</li>
<li>Choose what Branch you with to deploy from</li>
<li>'Click' Deploy</li>
<li>The Overview page for your website will display with the status of your deplayment.</li>
<li>Wait for the status to display: Published.</li>
<li>A unique web adress will display.(You can customise your address.)</li>
</ol>
</details>
<br>
<details>
<summary>Clone to a work station</summary>
<br>
<ol>
<li>On GitHub, navigate to the main page of the repository.</li>
<li>Under the repository name, click Clone or download.</li>
<li>To clone the repository using HTTPS, under "Clone with HTTPS", click.</li>
<li>To clone the repository using an SSH key, including a certificate issued by your organisation's SSH certificate authority, click Use SSH, then click.</li>
<li>Open Git Bash.</li>
<li>Change the current working directory to the location where you want the cloned directory to be.</li>
<li>Change the current working directory to the location where you want the cloned directory to be.</li>
<li>Type ‘’’git clone’’’ and then paste the URL you copied in Step 2.</li><li>Press Enter. Your local Clone will be created.</li>
</ol>
</details>

---

<a name="Credits"></a>

## Credits

##### Design:

The concept and design by Clinton Davis

##### Content:

The destinations websites supply the information on the destinations, with some additional information by Google Maps and Lonely Planet guide books.<br>
90% of the code for the Google Maps API supplied by Google Maps Documentation.<br>
Weather API code inspired by Code Ins Star wars API from code Star Wars project.

##### Media:

#####[Shutterstock](https://www.shutterstock.com/home)
[CC licences](https://en.wikipedia.org/wiki/Creative_Commons_license) or paid Standard licences.

- Aerial view of Cape peninsula, Cape Town, South Africa [wolffpower](https://www.shutterstock.com/image-photo/aerial-view-cape-peninsula-town-south-635476499)<br>
- Sunny background, blue sky with white clouds By [cobalt88](https://www.shutterstock.com/image-photo/sunny-background-blue-sky-white-clouds-1431741758)<br>
- Intense sunset with silver lining and cloud on the orange sky By [C_Atta](https://www.shutterstock.com/image-photo/gorgeous-panorama-scenic-strong-sunrise-silver-1018650376)
- Blue ocean waves By [Photo Junction](https://www.shutterstock.com/image-photo/blue-ocean-waves-1166741512)

All destination images have been supplied by Google Maps or their own webpages.

<a name="acknowledgements"></a>

### Acknowledgements

I would like to Thank Anthony Ngene, my mentor, for help with my coding and inspiring me. <br>
For the use of code and knowledge.

- [YouTube - Kevin Powell](https://www.youtube.com/user/KepowOb) for code snippets and know how.<br>
- [YouTube - Dev Ed](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q) for code snippets and know how
- [dcode](https://www.youtube.com/channel/UCjX0FtIZBBVD3YoCcxnDC4g) for help with MutationObserver in JavaScript.
- [Scrimba - The Responsive Web Design Bootcamp](https://scrimba.com/)
- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation/javascript/tutorial) for a lot of help with getting it to work.
- [CSS-Tricks](https://css-tricks.com/) website for good ideas and work arounds.<br>
- [W3Schools](https://www.w3schools.com/) for code snippets and documentation with [Creating Modal,](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) and general research on HTML CSS and JavaScript.
- [CSSMatric](https://cssmatic.com/) for Box Shadow Generator and Gradient Generator <br>
- [GitHub](https://github.com/) for documentation on how to [How to Clone Repository](https://bit.ly/32Emdbc).
- [Google Fonts](https://fonts.google.com/) for fonts.
- [Slack](https://slack.com/intl/en-ie/) community for Testing / Encouragement / Code Snippets and pointers.<br>

---

[Back to top ](#toc)
