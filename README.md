# pl_docs_to_eng

Chromium extension to quickly redirect from default Polish docs to English ones

currently works for MDN and React docs

## Installation

1. download files

2. go to opera://extensions/
   or chrome://extensions/

3. toggle on developer mode

4. click load unpacked

5. go to the directory where you downloaded files to and choose this folder

## Usage

It should simply redirect you to english version of MDN and React docs.
On Angular and NgRx docs it will add a button to the left top corner that will redirect you to the newest version of docs

## Adding other pages to be redirected

Add next .js file using existing as a template
in .replace( ) first argument is the part of URL that needs to be replaced, and second one is what it will it be replaced for

then add next object in manifest.json with corresponding URL - matching URLs will trigger the script given in "js"
in "js" pass the newly created .js file

save and reload extension in [browser]://extensions/

### Updates:

#### 2022.09.04

Fix NgRx and Angular not redirecting to current docs page (they were redirecting to first docs page visited).

#### 2022.09.01

Now on older versions of NgRx.io and angular.io a button is added in left top corner that allows for easy redirect to newest version of the documentation.
