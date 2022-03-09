#!\path\to\Ampps\python\python.exe 
import flask
from flask import Flask, jsonify, request
from recipe_scrapers import scrape_me
from flask_cors import CORS
import numpy as np
from nltk import tokenize
import math
import re
import random


app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})



@app.route('/food/<path:food_url>')
def food(food_url):
    try:
        scraper = scrape_me(food_url)
        try:
            scraper.yields()
            if re.sub("[^0-9]", "",scraper.yields()) == '':
                Servings = random.randint(1,8)
            else:
                Servings = int(re.sub("[^0-9]", "",scraper.yields()))
        except:
            Servings = random.randint(1,8)

        resp = jsonify({'rName': scraper.title(), 'ingredients': scraper.ingredients(), 'steps': tokenize.sent_tokenize(scraper.instructions()), 'rCookingTime': scraper.total_time(), "rServings": Servings, "rPrepTime": math.ceil(scraper.total_time()/10*np.random.random())*5})
    except:
        resp = jsonify({'rName': "Not a Valid Website!", 'ingredients': "Not a Valid Website!", 'steps': "Not a Valid Website!", 'rCookingTime': "Not a Valid Website!", "rServings": "Not a Valid Website!", "rPrepTime": "Not a Valid Website!"})
    return resp



if __name__ == '__main__':
    app.run(debug=True)
