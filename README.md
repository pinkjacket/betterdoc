# _Portland Doctors_

#### _A program to find a doctor in Portland, 2/16/2018_

#### By _**James Donlan**_

## Description

_This program uses the Better Doctor API to find doctors in the Portland area, searching by name or by the condition you're looking to have treated._

## Setup/Installation Requirements

* _Clone repo from github_
* _use a terminal to navigate to the folder location_
* _create a file called .env in the top level of the directory, where the webpack files and this readme are_
* _inside .env, place the following line of code: exports.apiKey = "[your api key goes here, it's a bunch of letters and numbers, no brackets though those are just for this explanation although you do need the quotes]";_
* _run npm install_
* _type npm run prod and open the newly created index.html found in betterdoctor/build/ in a browser_
* _Or use npm run dev to start the development server, which will open in a browser automatically and functions about the same_

## On API Keys

_This program requires an API key from BetterDoctor, which you can get by going to https://developer.betterdoctor.com/ and signing up for free. Once you have your key, just put it in the .env file as mentioned in the instructions._

## Known bugs

* _not currently returning specific error messages, you'll get one that just says "Error!" but it won't spit out a code or a message right now_

## Proposed Future Functionality

* _look for doctors in other places_
* _returned list could be more aesthetically pleasing_

## Technologies Used

* _HTML_
* _JavaScript_
* _jQuery_
* _CSS_
* _bootstrap_
* _webpack_
* _node_

### License

*MIT License*

Copyright (c) 2018 **_James Donlan_**
