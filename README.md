# Doge-mailer

# About the Project

This project is a part of a GithubActions21 Hackathon by [Dev Community](https://dev.to/devteam/join-us-for-the-2021-github-actions-hackathon-on-dev-4hn4).
This project uses Nodemailer and CoinMarketCap API with github actions to automatically send you a mail everyday on your gmail regarding the cryptocurrency prices everyday along with Tenor API which sends the DOGE meme GIFS to make it more fun.


# About Github Actions and the API's Used


[GitHub Actions](https://github.com/features/actions) makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub .

In my project I used [Cron](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#scheduled-events) to automate the sending of email everyday . It is fairly easy to use for beginners as well . Before this, I had to look somewhere else to automate things like these but now it can be done in my github itself which saves a lot of time .

![This is the cron use screenshot](https://github.com/prajalsharma/doge-mailer/blob/main/src/Screenshot%20(209).png)



Then I used [NodeMailer](https://www.npmjs.com/package/nodemailer) which carried out the task of sending mails whenever the program runs. 


I used the [CoinMarketCap API](https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide) to retrieve and send the Cryptocurrency data through mail.


In the end , I used [Tenor API](https://tenor.com/gifapi/documentation#quickstart-search) to add a funny DOGE meme gif to make it more fun . It'll definitely make the reciever laugh :). Tenor is the hub of thouands of GIF's which we can use in our projects.

# How to run this in your system

Clone this repo using this command and replace 'url' with project [url](https://github.com/prajalsharma/doge-mailer.git).

` git clone 'url' `

Once you are in the folder directory of command line then use these commands to install dependencies 

``` npm install```

To run the program type this command 

``` node src/main.js ```

Note:-

If you are having some issues then have a look at this it may solve your issues .
I used 5 environment variables , which are as follows :

USER_EMAIL = The email through which you want to send mails and give emailing access to the app.


USER_PASSWORD = This is not the actual password of the email but an app password which can be made for only the access of the specific app . In my case it was gmail access app password


EMAIL_FROM = This is the email through which you'll be sending the automated emails . It can only be one .


EMAIL_TO= This refers to the target email on which you want to send the automated mail . It can be as many as you want.


COINMARKETCAP_API_KEY = This is the API key of the [CoinMarketCap API](https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide). You can use your own API key here .

TENOR_API_KEY = This is the API key of the [Tenor API](https://tenor.com/gifapi/documentation#quickstart-search) . 


# Working Samples

![ Automated email screenshot](https://github.com/prajalsharma/doge-mailer/blob/main/src/IMG_20211209_104738.jpg)

![another ss](https://github.com/prajalsharma/doge-mailer/blob/main/src/IMG_20211209_132451.jpg)


# Future updates 

In the future I expect to make the UI more beautiful and funky . Would love if someone can contribute.
