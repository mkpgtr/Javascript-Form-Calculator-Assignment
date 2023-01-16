

# Original Solution

1. This is my work. It is not copied from any source.
2. I took help from MDN(Mozilla Developer Network) documentation regarding the formData Object and how to access values inside it.
3. There are so many ways to fetch data from forms in JS.
4. I chose the FormData approach because it feels a lot cleaner to me. All data is compact in one place. It also works
5. I have taken help from stackoverflow regarding functions like toFixed() and other things like that I needed to lookup online.
6. I have added as much comments as possible to show my thinking process.
7. It took me quite sometime though to find these things and assemble them together(approximately 2 hours).
8. I went really slow. Enjoyed it throughout.


# Reason for keeping the answer field as text input initially

1. Originally I had kept all the input fields as text.
2. And for invalid inputs like 'a','b','abcd' or any letter like input combination on which calculations cannot be done I showed the input input error


# (Note) : I have kept the maxlength of the input fields as 3. 


# Live Link : https://js-calc-by-manish.netlify.app/

# Set time out function

1. When the input is invalid, set the error's innerText as "invalid input" and then with the setTimeOut function, remove the innerText by setting it as an empty string.
2. It felt really cool to see the invalid input vanish after 2 seconds.



# Things I learnt during this project :

1. Using bootstrap classes to make the layout.
2. Feels really good that I have not written much styles in the styles.css file. This is the first time it's happening that I have been able to style a form only using classes! Next thing to learn well might be TailwindCSS.
3. The Form data object is a key value pair. The key is the name attribute attached to the input and select elements. The value is the number that's inside the text box and the option in the select element.
4. I revised and refreshed my memory regarding how to select DOM elements through this assignment.


# Additional functionality which I added from my side.

1. Displaying invalid input for two seconds after the user types in something that is not a number or leaves any field empty.
2. As per the rules of this project, I have kept the input type as a number.
3. But if you may like, you want to see this additional functionality by changing the input type to text.
4. I have added a separate span tag with an error class.
5. I did not add alert alert-danger because it was causing a red square to appear even when there was no text.
6. So I removed that alert alert-danger class and kept just the error class.

# One last thing

1. While I was just about to submit it, I saw that I had used some redundant id attributes on the inputs.
2. Because I am afraid anything might break if I remove it, I am leaving it just as it is.