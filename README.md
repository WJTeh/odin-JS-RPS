# odin-JS-RPS   
The Odin Project 1st JavaScript project (Rock-Paper-Scissor)

Set up a new branch on your previous Rock Paper Scissors repo

    Since we’ll be making a UI for our Rock Paper Scissors game, make a new branch and change to it with the command git checkout -b rps-ui.
    You are now working in the rps-ui branch, locally. However, this branch does not exist in your remote repo yet. If you go to your github repo page, you’ll see that you only have 1 branch, which would be main. Let’s push this new branch to your remote repo with the command git push origin rps-ui. Now, you’ll see two branches in your Github repository!
    Make sure you are on the rps-ui branch. You can check this, with the git branch command. The branch you are currently on will have an (*)asterisk next to it. If you’re in another branch for some reason, change to rps-ui with the command git checkout rps-ui. Now you’re all set to work on your new feature! Note: You can add files, commit to this branch, and push changes to your repo, just like you would with the main branch. Everything is the same except when you push the changes, you’d use git push origin rps-ui instead of git push origin main, since we’re pushing to our new branch.

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    For now, remove the logic that plays exactly five rounds.
    Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    Add a div for displaying results and change all of your console.logs into DOM methods.
    Display the running score, and announce a winner of the game once one player reaches 5 points.
    You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
    Once you’re all done with your UI and make sure everything’s satisfactory, it’s time to merge our current branch rps-ui to our main branch.

Now let’s take a look at how we can merge these changes back to our main branch.

    Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
    Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
    If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
    Let’s push our main branch into our remote repo by running git push origin main . Go to your Github repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
    Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on Github with git push --delete origin rps-ui. Congrats, we’re all done with our cleanup!

startGame()     #start the game?
playRound()     #determine winner of current round
getRandomChoice()      #choose weapon for ai randomly
handleClick()       #handle event when clicking choice
checkGameCont()       #check whether there are winner
updateChoice()      #update choice for player and ai
updateScore()        #update score for player and ai
~~updateRoundMsg()    #update current math message (win/lose/tie)~~

