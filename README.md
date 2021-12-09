# Doge-mailer

# About the Project

This project is a part of a GithubActions21 Hackathon by [Dev Community](https://dev.to/devteam/join-us-for-the-2021-github-actions-hackathon-on-dev-4hn4).
This project uses Nodemailer and CoinMarketCap API with github actions to automatically send you a mail everyday on your gmail regarding the cryptocurrency prices everyday.


# About Github Actions and the API's Used


[GitHub Actions](https://github.com/features/actions) makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub .

In my project I used [Cron](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#scheduled-events) to automate the sending of email everyday . It was fairly easy to use for beginners as well . Before this, I had to look somewhere else to automate things like these but now it can be done in your github which saves a lot of time .

Then I used [NodeMailer](https://www.npmjs.com/package/nodemailer) which carried out the task of sending mails whenever the program runs. 

In the end I used the [CoinMarketCap API](https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide) to retrieve and send the Cryptocurrency data through mail.

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



# Working Samples


# Future updates 

In the future I expect to make the UI more beautiful and add some tenor API to send gifs of shiba meme.
