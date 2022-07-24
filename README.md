# Restaurant Locatator Microservice

This microservice will receive a city and state and return 10 random restaurants located in that city and state as an array of stringified JSON objects.

The application was created using Express Application Generator

`bin/www` contains the port the service runs on

`app.js` contains the routes and uses cors to run locally

`routes/locator.js` contains the handling for requests

`.env` add to route folder with API_KEY variable for use with RapidAPI

It uses `package.json` defines run commands

## Install

    npm install

## Run the app

    npm start

# UML Diagram
![UML](UML.png)

# REST API

The REST API to the example app is described below.
Use .env file to store API_KEY

## Get list of Restaurants

### Request

`GET /locator?state={IA}&city={Des Moines}`

    await fetch('http://localhost:9000/locator?state=IA&city=Des Moines')

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

[
    {
        "id": 19882607,
        "restaurantName": "Clyde's Fine Diner",
        "cuisineType": "American",
        "phoneNo": "+1 515-243-3686",
        "website": "http://www.clydesfinediner.com/"
    },
    {
        "id": 836118,
        "restaurantName": "Dolly Madison",
        "cuisineType": "Restaurant",
        "phoneNo": "+1 515-265-6426",
        "website": ""
    },
    {
        "id": 2248841,
        "restaurantName": "Pueblo Viejo",
        "cuisineType": "Mexican",
        "phoneNo": "+1 515-265-1720",
        "website": "http://www.facebook.com/pages/Pueblo-Viejo/118075724878011"
    },
    {
        "id": 10753171,
        "restaurantName": "Paul Revere's Pizza",
        "cuisineType": "Restaurant",
        "phoneNo": "+1 515-244-9256",
        "website": "https://www.paulreverespizzadm.com/"
    },
    {
        "id": 12351084,
        "restaurantName": "Harbinger",
        "cuisineType": "Asian,American",
        "phoneNo": "+1 515-244-1314",
        "website": "http://Harbingerdsm.com"
    },
    {
        "id": 14982130,
        "restaurantName": "Players",
        "cuisineType": "American",
        "phoneNo": "+1 515-274-8639",
        "website": "https://www.facebook.com/Players-Sports-Bar-Grill-124322960959919/"
    },
    {
        "id": 12414118,
        "restaurantName": "Kathmandu Restaurant",
        "cuisineType": "Indian,Nepali",
        "phoneNo": "+1 515-255-1270",
        "website": "http://www.kathmanduiowa.com/"
    },
    {
        "id": 21267600,
        "restaurantName": "Casey's",
        "cuisineType": "Restaurant",
        "phoneNo": "+1 515-244-4666",
        "website": "https://www.caseys.com/general-store/ia-desmoines/4331-park-ave/2322"
    },
    {
        "id": 15861167,
        "restaurantName": "Dairy Queen (Treat)",
        "cuisineType": "Restaurant",
        "phoneNo": "+1 515-278-1847",
        "website": "https://www.dairyqueen.com/us-en/Locator/Detail/"
    },
    {
        "id": 5013065,
        "restaurantName": "Beer Can Alley",
        "cuisineType": "Restaurant",
        "phoneNo": "+1 515-554-2606",
        "website": "http://www.beercanalley.com/"
    }
]

