var express = require('express');
var router = express.Router();
const axios = require('axios');

const data = {
    recipes: [
      {
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        lowFodmap: false,
        weightWatcherSmartPoints: 66,
        gaps: 'no',
        preparationMinutes: -1,
        cookingMinutes: -1,
        aggregateLikes: 12,
        healthScore: 26,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 207.62,
        extendedIngredients: [Array],
        id: 644681,
        title: 'Gingerbread Christmas Tree Cookies',
        readyInMinutes: 45,
        servings: 1,
        sourceUrl: 'https://www.foodista.com/recipe/CD44DQH5/gingerbread-christmas-tree-cookies',
        openLicense: -1,
        image: 'https://spoonacular.com/recipeImages/644681-556x370.jpg',
        imageType: 'jpg',
        summary: `Gingerbread Christmas Tree Cookies could be just the <b>lacto ovo vegetarian</b> recipe you've been looking for. This recipe serves 1 and costs $2.08 per serving. This dessert has <b>1654 calories</b>, <b>29g of protein</b>, and <b>37g of fat</b> per serving. This recipe from Foodista has 11 fans. From preparation to the plate, this recipe takes about <b>about 45 minutes</b>. It will be a hit at your <b>Christmas</b> event. Head to the store and pick up c flour, honey, milk, and a few other things to make it today. With a spoonacular <b>score of 76%</b>, this dish is solid. Try <a href="https://spoonacular.com/recipes/gingerbread-christmas-tree-cookies-958187">Gingerbread Christmas Tree Cookies</a>, <a href="https://spoonacular.com/recipes/gingerbread-christmas-tree-64491">Gingerbread Christmas Tree</a>, and <a href="https://spoonacular.com/recipes/gingerbread-christmas-tree-133030">Gingerbread Christmas Tree</a> for similar recipes.`,
        cuisines: [],
        dishTypes: [Array],
        diets: [Array],
        occasions: [Array],
        instructions: 'Beat (A) butter and brown sugar till light and fluffy.\n' +
          'Add (B) salt, honey and fresh milk till creamy.\n' +
          'Pour in (C) flour mixture, scrap bowl and mixture till a soft dough.\n' +
          'Place dough it in a plastic sheet and chill for 60 minutes.\n' +
          'Roll chilled dough between two plastic sheets to 0.5 cm thick.\n' +
          'Use different shape of star cookies cutter to cut out dough and place on baking tray.\n' +
          'Bake at preheated oven 180C for 15 minutes and leave to cool.\n' +
          'Dust some icing sugar on cookies and stack them into tree shape. Attach tree topper with some royal icing.',
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/gingerbread-christmas-tree-cookies-644681'
      }
    ]
  }

router.get('/', async (req, res, next) => {
    // const options = {
    //     method: 'GET',
    //     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    //     params: {tags: 'vegetarian, dessert', number: '1'},
    // headers: {
    //     'X-RapidAPI-Key': 'e2013e813amsh63feda0fde3d880p17961bjsn2802b3c0828b',
    //     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    // }};
    // axios.request(options).then(function (response) {
    //     data = response.data;
    //     console.log(data.recipes);
    // }).catch(function (error) {
    //     console.error(error);
    // });
    var recipe = data.recipes.map(item => ({
        id: item.id,
        healthScore: item.healthScore,
        sourceUrl: item.sourceUrl,
        imgUrl: item.image,
        creditText: item.sourceName
    }))
    console.log(JSON.stringify(recipe));
    res.json(recipe);
});

module.exports = router;