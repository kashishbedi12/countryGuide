let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((response) => response.json()).then((data) => {
        //fetch(finalURL): This initiates an HTTP request to the URL specified by the finalURL variable. The URL is constructed based on the country name entered by the user.

       //// .then((response) => response.json()): After the request is made, this method is called on the response object returned by fetch(). It converts the response from JSON format to a JavaScript object.
        
        //.then((data) => { /* Handle the JSON data */ }): This method takes the JSON data returned by the API and processes it. In your code, it's extracting various pieces of information about the country from the API response and inserting them into the HTML content dynamically.
        
       // .catch(() => { /* Handle errors */ }): This method is used to catch any errors that may occur during the fetch request or processing of the response. It handles cases where the request fails or encounters an error.
      
        result.innerHTML = `
            <img src = "${data[0].flags.svg}" class = "flag-img">
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span> 
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span> 
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span> 
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span> 
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Language(s):</h4>
                    <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span> 
                </div>
            </div>
        `;
        var head = document.getElementById("heading-div");
        head.style.display = "none";
    }).catch(() => {
        if(countryName.length == 0) {
            result.innerHTML = `<h3 id="empty">Input field cannot be empty!</h3>`;
            head.style.display = "inline";
        }//inline here instead of block ensures that the element does not create a line break before or after it, which is typical behavior for block elements. It keeps the element within the natural flow of content on the page, allowing other content to appear alongside it if there's sufficient space.
        else {
            result.innerHTML = `<h3 id="in_valid">Please enter a valid country name.</h3>`;
            head.style.display = "inline";
        } //The purpose of setting display to inline is to make the element visible to the user when certain conditions are met. In the code, it appears that head refers to an element that likely contains a heading or some form of informational content. By setting it to inline, it ensures that it's visible to the user when errors occur.
    });
    
});






//The API used in the code snippet, "Rest Countries API" (https://restcountries.com/), is a RESTful API that provides information about countries worldwide. Here's how it likely works behind the scenes:

//HTTP Requests: The API is built to handle HTTP requests. It supports various HTTP methods such as GET, POST, PUT, and DELETE. In the context of the provided code snippet, the JavaScript code is making an HTTP GET request to the API endpoint.

//Endpoints: The API exposes various endpoints, each serving a specific purpose. Endpoints are URLs to which HTTP requests are sent in order to interact with the API and retrieve or manipulate data. For example, the endpoint used in the code snippet is likely designed to fetch information about countries based on the country name provided in the URL.

//Request Processing: When a client (in this case, the JavaScript code running in the user's browser) sends a request to the API endpoint, the API server receives the request.

//Data Retrieval: The server then processes the request, which involves retrieving data from a database or some other data source. In the case of the Rest Countries API, it likely queries a database containing information about various countries.

//Data Formatting: Once the data is retrieved, the server formats it into a suitable format for transmission over the internet. In the case of RESTful APIs like this one, data is often formatted as JSON (JavaScript Object Notation) because it is lightweight and easy to parse.

//Response Sending: The server sends the formatted data back to the client as an HTTP response. The response typically includes an HTTP status code indicating the success or failure of the request, along with the requested data in the specified format (e.g., JSON).

//Client-Side Processing: On the client side (in the user's browser), JavaScript code processes the received JSON data, extracting relevant information and dynamically updating the HTML content of the web page.

//In summary, the Rest Countries API works by receiving HTTP requests from clients, retrieving and formatting data based on those requests, and sending the formatted data back to the clients as HTTP responses. The clients then process the received data and update their interfaces accordingly.