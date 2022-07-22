var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get("/", async (req, res, next) => {
    const data = {
        drinks: [
          {
            idDrink: '17065',
            strDrink: 'Caribbean Boilermaker',
            strDrinkAlternate: null,
            strTags: null,
            strVideo: null,
            strCategory: 'Beer',
            strIBA: null,
            strAlcoholic: 'Alcoholic',
            strGlass: 'Beer pilsner',
            strInstructions: 'Pour the Corona into an 18oz beer glass pour the rum into the beer.',
            strInstructionsES: null,
            strInstructionsDE: 'Gießen Sie die Corona in ein Bierglas und gießen Sie den Rum in das Bier.',
            strInstructionsFR: null,
            strInstructionsIT: 'Versare la Corona in un bicchiere da birra da 530ml e versare il rum nella birra.',
            'strInstructionsZH-HANS': null,
            'strInstructionsZH-HANT': null,
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/svsxsv1454511666.jpg',
            strIngredient1: 'Corona',
            strIngredient2: 'Light rum',
            strIngredient3: null,
            strIngredient4: null,
            strIngredient5: null,
            strIngredient6: null,
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: '1 bottle ',
            strMeasure2: '1 shot ',
            strMeasure3: null,
            strMeasure4: null,
            strMeasure5: null,
            strMeasure6: null,
            strMeasure7: null,
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null,
            strImageSource: null,
            strImageAttribution: null,
            strCreativeCommonsConfirmed: 'No',
            dateModified: '2016-02-03 15:01:06'
          }
        ]
      };
    // const options = {
    //     method: 'GET',
    //     url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
    //     headers: {
    //         'X-RapidAPI-Key': 'e2013e813amsh63feda0fde3d880p17961bjsn2802b3c0828b',
    //         'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     data = response.data;
    // }).catch(function (error) {
    //     console.error(error);
    // });
    var drink = data.drinks.map(option => ({  
        id: option.idDrink,
        name: option.strDrink,
        category: option.strCategory    
        }));
    console.log(drink);
    // res.json(JSON.stringify(data));
    res.send(JSON.stringify(drink));
});

module.exports = router;