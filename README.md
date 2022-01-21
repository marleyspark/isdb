# ISDB - API

> API to be able to search the ISDB database
> Live demo [_here_](https://angry-mcclintock-681cfb.netlify.app/).

## Table of Contents

- [General Info](#general-information)
- [Planning](#planning)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Wireframes & User Stories](#wireframe&user-stories)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)

## General Information

Following the success of “IMDB”, the well known Internet Movie Database, we’re launching
“ISDB” - the Internet Song Database. In this new world of interconnected software, our plan
is to sell an API on this and leave it to customers to build the various front ends needed to
use the database

## Planning

I started with the user stories as to what the user would want to do with the API. 

I then created the models and routes. The first to be created was the Authentication route
and testing the token was created. 

I then created the other routes ensuring that these where only avaible after you logged in. 

Within this testing the database was created and ensured that the routes pulled the right data
from the database and well as posting.

I did have some issues with my mongoose database but this due to naming one of the schemas without 
an 's' at the end. This caused some issues pulling data. 
I cleared the database down but when trying to reimport the data I had duplicate key errors. The only
way I was able to reolve this was by creating a whole new database and reimporting my data. 

## Technologies Used

- ejs
- css
- JavaScript
- json
- mongoose

## Features

**Special Feature**

**Search for album by id**
Ablitly to search for album details by Id

**Search for artist by id**
Ability to search for artist details by Id

**Find all genres**
Ability to see all genres

**Serach for track by Id**
Ability to serach for track details by Id

**Add new track details**
Ability to add new track details

## Wireframes & User Stories

link to [user stories](https://miro.com/app/board/uXjVOUPE7Ys=/?invite_link_id=124895431401)

## Project Status

Project is: _complete_
Based on specifications from the customer.

## Room for Improvement

Include areas you believe need improvement / could be improved. Also add TODOs for future development.

| Improvement               | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| Link table data together              | So you can see data connected e.g Artist name                        |
| Create front end           | Create a front end login pages and data return pages                           |



## Contact

Created by Andrew Ralph-Gledhill
