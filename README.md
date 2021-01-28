[Installation]
To get this webpage running, visit the website at https://obrienceob.github.io/CalendarApp/

If it is not on a github repository yet, you'll need a text editor. I reccomend VS Code. Download the zip file or code, or use GitHub's instructions to create a new repo. Uplaod the index.html, Develop folder with the script.js and style.css files to github using the git add, commit, and push commands.

Then ensure the file uploaded, open up the setting in your repo, and scroll down to the pages section. Change the source to "main" or "master" and save. 



[Usage]
At the top of the page you'll see the current date and time. 

Within each hour block in the calendar app you can click into the middle blank section to schedule an hour long event. Events in the past will be gray, the future will be green, and present will be red.

Here is a screenshot of the calendar app with everything in the past because I was working on it after work:

<img src="assets/screenshotOfQuiz.png" alt="screenshot of quiz">


[Code]

This project contains a html file with a repeated div structure to store the calendar app. There is a css sheet to define the styling of the sheet, and define the present, future, and past time. 

The javascript code defines the function of the calendar app.

It contains a save button, that stores the input of the calendar input blocks, and saves them in local storage. 

The functions contain third party API calls to pull the exact time and date from https://momentjs.com/



    

[Credits]

Author of code: Conor O'Brien

Following tutorials available here: 
    https://www.w3schools.com/
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
    https://momentjs.com/
    


[License]

MIT License

Copyright (c) [2020] [Conor O'Brien]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

