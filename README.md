# Project Name: Overtime

## Project Description: 
“Overtime” is an interactive comic that narrates the story of an employee who doesn’t want to go to work. Throughout the story, users are presented with various choices, including the temptation to ignore the alarm, potentially leading to job loss, or the more drastic option of confronting the boss, resulting in jail-time. Rooted in a common real-life dilemma, the storyline captures the universal desire to break free from the constraints of reality. Unlike the rigidity of everyday life, users have the autonomy to make choices without taking the consequences. 
We expect the users to find relaxation in this interactive comic and provide with them a space to let out the stress. 

##Process: 
The conception of the comic plot, style of the drawing, and basic wireframe were all determined collectively, while the execution was carried out independently.
User interactions: The story is pushed forward when users click on the buttons that lead them to different sections based on the choice they make for the character.
Drawing Design: We aimed for a black-and-white, line-drawing, comic-drawing style that leans toward dark humor. The character is intended to be name-less because they are not a particular subject, but represent all those who suffer from the burden of life. 
Sound Design: We have different sounds corresponding to the panels users are on. The files are triggered by the buttons.
Jihad: Build up HTML file. Being the admin of the project. Organize all sections.
Saeed: Illustrator and Photoshop (mostly Illustrator): Created each comic panel and suggested the story.
Marija: Coded the sound Javascript. Fixed the clock image problem with a fade-in fade-out approach.
Linda: Initial build-up of the CSS file. Creating and implementing the sticky-image clock (failed attempt though).

## Reflection/Evaluation: 
This should bookend the initial concept and talk about whether your expectations and goals were met in the process of building the final working version.
We execute the basic functions of the website successfully, in the sense that all interactions are functional, sound files are operating, and the stories are related to each other. However, there is some specific design that does not work as expected, leading us to find new solutions. 

  - Sticky-image clock reflection
  To show the changes in time, we designed a clock element that was supposed to stick on the top-left corner of the page and change based on the specific sections users scrolled to. For example, when the character wakes up, the clock will show 6:00am graphically with an alt that shows the specific time. When the character goes to jail, the clock will turn red. However, since the sticky-image code is overwritten by other codes and ended up either hiding the clock, showing all images at the same time, or replacing all other images with clock images. I think it’s because the opacity property in the CSS file is not working properly in the JS file.
  Solution: The other approach that worked and solved our problem was implementing each image of the clock in the corresponding section in the html, referencing them all in the same class, which was used for styling in css and fade-in fade-out feature with javascript.
