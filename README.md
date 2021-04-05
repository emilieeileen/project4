# Language Connect

**Note: This Read Me is a work in progress. Check back soon for my updates!**

For Project 4, my group decided to create a language swap service, where users can post languages they wish to teach or learn and connect with other users on the platform. I primarily took a leading role on this project, contributing to the controllers on the back end as well as design lead on the front end. 

The project is deployed on Heroku which can be viewed here: https://language-connect.herokuapp.com/

You can log in and create an account, however, you may also use this log in to view the site as an established user:

*email*: emily@emily.com
*password*: emily

## Technologies Used
- HTML
- CSS
- React
- Bulma
- Flask
- PostgreSQL
- Marshmallow
- Npm
- Pipenv
- Axios
- Insomnia
- Table Plus
- Formik
- Git
- Github

## Technical Requirements
* **Build a full-stack application** by making your own backend and your own front-end
* **Use a Python Flask API** using a Flask REST Framework to serve your data from a Postgres database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
* **Be deployed online** so it's publicly accessible.

## Timeframe: 1 week (5 working days)

## Plan

## Database and Backend
The backend was the most complex part of the project. While our initial plan gave us a good base for creating the back end and the database, there were definitely issues that arose that had us change the plan.

Originally, we intended on having many skills available but to make sure we had a completed MVP, we decided to focus on language learning. 

After having some issues with populating the database, we decided to move to a one to many model with the posts. This made the most sense since the users would only have one post per language. 

For the controllers, we decided to have multiple endpoints for users to get relevant information. 

## Front End Design and Components
As design lead, my focus on the front end primarily focused on the overall design of the site, as well as formatting the Search, Post, and My Posts pages.

Having used Bulma on previous projects, I had never take the lead myself and found this project a good opportunity to get better acquainted with this design library.

We chose a green and gold color scheme and found royalty free globe images to give the site a worldly and global feel. While the *Home* page uses the standard hero home template from Bulma, we wanted our other pages to look Bulma inspired with our own unique twists. 

For the *Search* page, we decided to utilize front end filtering with backend endpoints to display the relevant posts. To prevent an infinite loop, where the useEffect was continuously fetching, I chose to have the user select which filters they would like to use then on click of the Search button, the relevant posts are displayed. 

For filtering the languages, we started with the endpoints designed to bring up posts showing each relevant language. When creating our user stories, we figured that users would search first by language, so it made sense to start the filtering from there.

From this point, we then added in front end filtering to let users decide if they were looking for a student or teacher as well as what level they wanted to learn at. This will filter from either the all posts or language specific endpoints.

We Used flexbox to wrap the cards with each lesson on them. The Card itself links to each individual post page. 

The Single Post page displays the information for each lesson with comments for users to review or ask questions. 

We decided as a group not to include a messaging system due to limited time but we wanted a simple way for users to messgae with potential students and teachers. To do this we included a 'mailto' link. 

## Bugs
- Some of the Formik validations do not run when missing required fields. 

## Lessons Learned
I believe my group and I found this experience enjoyable. I particularly was proud of the confidence I felt taking on the project lead role. Looking back, I do wish we had more time to flesh out some of the components we were not able to add, such as the saved posts or the translation features. This is something I plan to work on after the course as I look for my first professional role. 
