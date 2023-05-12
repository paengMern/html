

var myQuestions = [
  {
    question: "1. Which of the following statement is untrue?",
    answers: {
      a: 'Inline elements can be nested inside inline elements',
      b: 'Block elements can be nested inside block elements',
      c: 'Inline elements can be nested inside block elements',
      d: 'Block elements can be nested inside inline elements'
    },
    correctAnswer: 'd'
  },
  {
    question: "2. What is the proper way to add a stylesheet named style.css in the &lt;head> of your document?",
    answers: {
      a: '&lt;style link="style.css&gt;',
      b: '&ltlink rel="stylesheet" href="style.css"&gt',
      c: '&ltstyle src="style.css"></style&gt',
      d: '&ltlink style="style.css"&gt'
    },
    correctAnswer: 'b'
  },

{

 question: "3. How do the post and get methods in a form vary from one another?",
 answers: {
  a:	'Post is used for sending information to the server. get is used for retrieving form information from the server',
  b:	'Get is used for sending information to the server. post is used for retrieving form information from the server',
  c:	'With get, data is included in the form body when send to the server. With post, the data goes through the URL',
  d:	'With post, data is included in the form body when send to the server. With get, the data goes through the URL'
 },
 correctAnswer: 'd' 
},
{
  question: "4. Which option is the most used method for including a value in a form without making it visible to or editable by the user?",
  answers: {
    a:	'&lt;input type="invisible" name="important" value="secret"&gt;',
    b:	'&lt;input type="text" style="display: none;" name="important" value="secret"&gt',
    c:	'&lt;input type="hidden" name="important" value="secret"&gt',
    d:	'&lt;input type="text" hidden name="important" value="secret"&gt'
  },
  correctAnswer: 'c'
},
{
  question: "5. Select the correct input configuration given the following requirements: An input that allows the user to select from a range of integer values between 0 and 50 (inclusive) in increments of 5.",
  answers: {
    a:'&lt;input type="range" min="0" max="50" step="5" /&gt;',
    b:'&lt;input type="range" min="0" max="50" by="5" /&gt;',
    c:'&lt;input type="number" min="0" max="50" step="5" /&gt;',
    d:'&lt;input type="number" min="0" max="50" by="5" /&gt;'
  },
  correctAnswer: 'a'
},
{
  question: "6. What does HTML stand for?",
  answers: {
    a:'Hyper Text Markup Language',
    b:'Hot Mail',
    c:'How to Make Lasagna',
    d:'None of the above'
  },
  correctAnswer: 'a'
},
{
  question: "7. What is the correct HTML element for inserting a line break?",
  answers: {
    a:'&lt;lb&gt;',
    b:'&lt;break&gt;',
    c:'&lt;br&gt;',
    d:'&lt;brb&gt;'
  },
  correctAnswer: 'c'
},
{
  question: "8. What is the correct HTML for creating a hyperlink?",
  answers: {
    a:'&lt;a href="http://www.google.com"&gt;google&lt;/a&gt;',
    b:'&lt;a&gt;http://www.google.com&lt;/a&gt;',
    c:'&lt;a url="http://www.google.com"&gt;google&lt;/a&gt;',
    d:'None of the above'
  },
  correctAnswer: 'a'
},
{
  question: "9. Which attribute is used to specify that an input field must be filled out?",
  answers: {
    a:'Formvalidate',
    b:'Required',
    c:'Placeholder',
    d:'None of the above'
  },
  correctAnswer: 'b'
},
{
  question: "10. Which HTML element defines navigation links?",
  answers: {
    a:'&lt;nav&gt;',
    b:'&lt;navigate&gt;',
    c:'&lt;navigation&gt;',
    d:'None of the above'
  },
  correctAnswer: 'a'
},
{
  question: "11. Where do all items for the same website need to be saved?",
  answers: {
    a:'In the same folder',
    b:'Wherever you want',
    c:'In different folders',
    d:'None of the above'
  },
  correctAnswer: 'a'
},
{
  question: "12. Who is making the Web standards?",
  answers: {
    a: 'Google',
    b: 'Microsoft',
    c: 'The World Wide Web Consortium',
    d: 'None of the above'
  },
  correctAnswer: 'c'
},
{
  question:'13. When is the &lt;link&gt; tag used?',
  answers: {
    a:'When linking style sheets, JavaScript, and icons for mobile apps',
    b:'When linking style sheets, favicons, and preloading assets',
    c:'When linking style sheets, external URLs, and favicons',
    d:'When linking one webpage to another'
  },
  correctAnswer: 'b'
},
{
  question: '14. Which image formats can be displayed by all web browsers?',
  answers: {
    a:'JPG, GIF, TIF',
    b:'JPG, TIF, BMP',
    c:'TIF, BMP, GIF',
    d:'PNG, GIF, JPG'
  },
  correctAnswer: 'd'
},
{
  question:'15. What is the default method for form submission?',
  answers: {
    a:'GET',
    b:'POST',
    c:'PUT',
    d:'SUBMIT'
  },
  correctAnswer: 'a'
},
{
  question: '16. Users have reported that a form is not working. What is the source of the problem? <br><img src="images/question1.jpg" alt="question">',
  answers: {
    a:'The form element is disabled',
    b:'The fieldset is disabled',
    c:'The label is disabled',
    d:'There is no method set on the form'
  },
  correctAnswer: 'b'
},
{
  question: '17. What is incorrect in the code below? <br><img src="images/question2.jpg" alt="question">',
  answers: {
    a:'The &lt;label&gt; and &lt;input> should be nested inside of a &lt;fieldset&gt; element',
    b:'The &lt;label&gt; element is missing a “for” attribute set to "address"',
    c:'The &lt;label&gt; element and &lt;input&gt; element should be inside a table',
    d:'The &lt;label&gt; element is missing an id set to "address"'
  },
  correctAnswer: 'b'
},
{
  question:'18. What does the lang attribute do in the code below? <br><img src="images/question3.jpg" alt="question">',
  answers: {
    a: "It establishes the website's language, which is in this case English",
    b: "It establishes the website's language and dialect, in this example British English",
    c: "It establishes the paragraph's language, which in this case is English",
    d: "It establishes the paragraph's language and dialect, in this case British English"
  },
  correctAnswer:'d'
},
{
  question: '19. What is the best way to semantically mark up this layout? <br><img src="images/question4.jpg" alt="question">',
  answers: {
    a:	'&lt;p&gt; "Raindrops keep fallin\' on my head. But that doesn\'t mean my eyes will soon be turning red. Crying\'s not for me. Cause I ain\'t gonna stop the rain by complaining."&lt;/p&gt; &lt;p&gt;&lt;em&gt;B. J. Thomas&lt;/em&gt;&lt;/p&gt;',
    b:	'&lt;blockquote>&lt;q>"Raindrops keep fallin\' on my head. But that doesn\'t mean my eyes will soon be turning red. Crying\'s not for me. Cause I ain\'t gonna stop the rain by complaining."&lt;/q> &lt;cite>&lt;em>B. J. Thomas&lt;/em>&lt;/cite> &lt;/blockquote>',
    c:	'&lt;blockquote>&lt;p>"Raindrops keep fallin\' on my head. But that doesn\'t mean my eyes will soon be turning red. Crying\'s not for me. Cause I ain\'t gonna stop the rain by complaining."&lt;/p> &lt;cite>B. J. Thomas&lt;/cite> &lt;/blockquote>',
    d:	'&lt;section>&lt;q>"Raindrops keep fallin\' on my head. But that doesn\'t mean my eyes will soon be turning red. Crying\'s not for me. Cause I ain\'t gonna stop the rain by complaining."&lt;/q> &lt;cite>B. J. Thomas&lt;/cite>&lt;/section>'
  },
  correctAnswer:'c'
},
{
  question:'20. Look at the text in the red box in the image below. How should this be coded in HTML? <br><img src="images/question5.jpg" alt="question">',
  answers: {
    a:'Ordered list',
    b:'Unordered list inside a nav element',
    c:'Ordered list inside a nav element',
    d:'Unordered list'
  },
  correctAnswer: 'b'
}

];

var myQuestions2 = [
  {
    question: '1.	Create an HTML table with the following headings: Roll No., Name, Superhero Name. (5 points) <br> Output: <br><img src="images/question6.jpg" alt="question">  <br><br><div> <label for="summernote">Answer:</label> <textarea  class="form-control" id="summernote" placeholder="Enter answer" name="answer"></textarea></div>'
  },
  {
    question: '2.	Use the following instructions to create an html page. (10 points) <br> <ol><li>Begin with &lt;!DOCTYPE html> declaration, html tag, head tag, and title tag.  Title: My Favorite Photographs.</li><li>Add a comment tag and write something like "My favorite Photographs are ..."</li><li>Use “internal CSS only” to set the styles.</li><li>Add a body tag and set the background color to #FFCCFF and margin: 0</li><li>Add a header tag and type in &lt;h2>My Favorite Photographs&lt;/h2>. Set the header style to the following: background-color: #777; padding: 30px; text-align: center; font-size: 35px; font-family: Arial, Helvetica, sans-serif; color: white;</li><li>Add a single line break (&lt;br>).</li><li>Add a 2x2 table. Set the table border to collapse, width is 50% and should be centered.</li><li>Insert four images in the 2x2 table that when clicked will take you to a search engine of your choosing and should open in a new window. Set the image style to the following: display: block; width: 500px; height: 500px;</li><li>Add another table and a table row.  Insert a paragraph, set the id to "favquote". Set the font to Arial, size is 14px and should be center aligned.</li><li>Add another table row, insert &lt;a> href named "Subscribe" (center aligned). Add a JavaScript code that will prompt or alert the user with the message "Thank you for subscribing!"</li><li>Add a footer tag then add the following: <img src="images/question7.jpg" alt="question"></li><li>Set the footer style to the following: background-color: #777; padding: 10px;  font-size: 16px; text-align: center; font-family: Arial, Helvetica, sans-serif; color: white;</li><li>Using &lt;script> tag, add your favorite quote in the paragraph on item #9. </li></ol> <br> Output: <br><img src="images/question8.jpg" alt="question">  <br><div><label for="summernote2">Answer:</label> <textarea  class="form-control" id="summernote2" placeholder="Enter answer" name="answer"></textarea></div>'
  
  }


];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var quizContainer2 = document.getElementById('coding');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton, myQuestions2, quizContainer2);



// questions part 1
function generateQuiz(questions, quizContainer, resultsContainer, submitButton, questions2, quizContainer2){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
         '<div class="radio">' + '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>' + '</div>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>' 
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  //show questions part 2



 
  function showQuestions2(questions, quizContainer2){
    // we'll need a place to store the output and the answer choices
    var output = [];
   // var answers;

    // for each question...
    for(var i=0; i<questions2.length; i++){
      
      // first reset the list of answers
     // answers = [];

      // for each available answer...
     // for(letter in questions2[i].answers){

        // ...add an html radio button
     //   answers.push(
      //    '<label>'
       //     + '<input type="radio" name="question'+i+'" value="'+letter+'">'
       //     + letter + ': '
      // //     + questions[i].answers[letter]
      //    + '</label>' + '<br>'
      //  );
    //  }

      // add this question and its answers to the output
      output.push(
        '<div class="question2">' + questions2[i].question + '</div>' + '<br>'
      //  + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer2.innerHTML = output.join('');
  }

  //////////////////////




  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    var noAnswer = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      

      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
      //  answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
       if (userAnswer == null)  {
        noAnswer++;
      //    alert ("Please fill out other field.");
        } else {
    
        //  answerContainers[i].style.color = 'red';
        }
        
      }
     

    }
    if(noAnswer > 0) {
      if (document.getElementById("fullname").value == "") {
        document.getElementById("fullname").focus();
        alert("Please fill out name field.");
        

      } else {
        alert ("Please answer all the questions.");
        document.getElementById("myanchor").click();

      }
      return false;
    } else {
     

      if (document.getElementById("fullname").value == "") {
        document.getElementById("fullname").focus();
        alert("Please fill out name field.");
        return false;
      }
        else {
          let date = new Date().toJSON().slice(0, 10); //new Date() //.toLocaleDateString();
          document.title='HTML Assessment_' + document.getElementById("fullname").value + '_' + date;
          window.print();

        }

    
    // show number of correct answers out of total
    //resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + noAnswer;
    }
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  showQuestions2(questions, quizContainer2);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
   //window.print();
  }

}

/////////////////////////////

function resetForm() {
  location.reload(); 
}

document.getElementById("x").addEventListener("click", function(event){
  event.preventDefault()
});

document.getElementById("y").addEventListener("click", function(event){
  event.preventDefault()
});

document.getElementById("xx").addEventListener("click", function(event){
  event.preventDefault()
});
    
function ExcelPrint() {
  // put validation here before window.print() is triggered.
  //var username = document.getElementById("username").value;
  //var useremail = document.getElementById("useremail").value;
  //var bdescription = document.getElementById("bdescription").value;
  //var description = document.getElementById("description").value;
  
  if (document.getElementById("username").value == "") {
    document.getElementById("username").focus();
    alert("Please fill out name field.");
    return false;
  //} else if (document.getElementById("useremail").value == "") {
//    document.getElementById("useremail").focus();
  //  alert("Please fill out email field.");
//    return false;
  //} else if (validateEmail(document.getElementById("useremail").value) == false ) {
   // document.getElementById("useremail").focus();
    //alert("Invalid email address.");
    //return false;
  } else if (document.getElementById("priorityList").value ==""){
    document.getElementById("priorityList").focus();
  alert("Please select an item in the priority list.");
    return false; 
  } else if (document.getElementById("firstList").value ==""){
    document.getElementById("firstList").focus();
    alert("Please select an item in the type list.");
    return false; 
  } else if (document.getElementById("secondList").value ==""){
    document.getElementById("secondList").focus();
    alert("Please select an item in the sub type list.");
    return false;
  } else if (document.getElementById("bdescription").value == "") {
    document.getElementById("bdescription").focus();
    alert("Please fill out subject field.");
    return false;
  }// else {
    if (document.getElementById("secondList").value == 'Other') {   
      if(document.getElementById("other").value == "") {
      document.getElementById("other").focus();
      alert ("Please fill out other field.");
      return false;
    } 
    }

    if ($('#summernote').summernote('isEmpty')) {
        $('#summernote').summernote('focus');
        alert("Please fill out description field.");
        return false;
      //alert('editor content is empty');
    } 

    //var markup = $('#summernote').summernote('code');
    //document.getElementById("printmediv").innerHTML = markup;
    //window.location.reload(false);
    document.getElementById("buttons").style.display = "none";
    //document.getElementById("descriptiondiv").style.display = "none";
    //event.preventDefault();
    window.print();
   //printme();
//}
  document.getElementById("buttons").style.display = "block";
  //document.getElementById("descriptiondiv").style.display = "block";


  //alert("stop");
  //return false; 
   
  //event.preventDefault();
  //return false;
  // ExportToExcel('xlsx');
};


var printme = function() {
  var markup = $('#summernote').summernote('code');
  document.getElementById("printmediv").innerHTML = markup;
  //window.document.write('<div>');
  //window.document.write(markup);
  //window.document.write('</div>');
  //window.document.close();
  window.print();
  //alert(markup);
}

//document.getElementById("x2").addEventListener("click", function(event){
  //event.preventDefault()
//});
    
    
function ExportToExcel(type, fn, dl) {
  var elt = document.getElementById('myTableData');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "Missing Opportunities" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
    XLSX.writeFile(wb, fn || ('Missing_opportunites.' + (type || 'xlsx')));
};

function validateEmail (emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {  
    return true; 
  } else {
    return false; 
  }
}
          
function load() {            
  //var HTMLstring = '<div><p>Hello, world</p><p>Please enter full description of the issue.</p></div>';
  //var HTMLstring = '<div style=color:red;height:500px"><p>Hello, world</p><p>Please enter full description of the issue.</p></div>';
  //var HTMLstring = '<p><br><br><br><br></p>';
  //$('#summernote').summernote('reset');

  //Initialize summernote
  $(document).ready(function() {
    $('#summernote').summernote({
      placeholder: '',
      tabsize: 2,
      disableGrammar: true,
      spellCheck: false,
      tabDisable: true,
      fontSizeUnits: ['px', 'pt'],
      maximumImageFileSize: 1048576,
      toolbar: [
  
      ]
    });

    $('#summernote').summernote('reset');
      console.log("Page load finished");
  });    
  
    //Initialize summernote2
    $(document).ready(function() {
      $('#summernote2').summernote({
        placeholder: '',
        tabsize: 2,
        disableGrammar: true,
        spellCheck: false,
        tabDisable: true,
        fontSizeUnits: ['px', 'pt'],
        maximumImageFileSize: 1048576,
        toolbar: [
    
        ]
      });
  
      $('#summernote2').summernote('reset');
        console.log("Page load finished");
    });    

}
    

    
function showForm() {
  var list2 = document.getElementById("secondList");
  var list2SelectedValue = list2.options[list2.selectedIndex].value;
  if (list2SelectedValue =='Missing Opportunities') {
    //document.getElementById("bdescription").textContent = "Missing Opportunities";
    document.getElementById("otherDIV").style.display = "none";  // hide others
    document.getElementById("bdescription").value = "Missing Opportunities";
    $('#summernote').summernote('reset');
  // working now  var HTMLstring = '<table class="table table-sm gentable" align="left" border="1" style="width: 70%; margin: 0px auto;font-size:80%;"><caption><font size="1">Note: Maximum of 15 opportunities per ticket only. For more  missing opportunities, please submit another ticket</font></caption><tbody><tr bgcolor="#2A4B7C"><td style="width: 0px;"><br /></td><td style="width: 212px; text-align: center;"><font color="white">Opportunity #</font></td><td style="width: 132px; text-align: center;"><font color="white">Project Code</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact First Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Last Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Email Address</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Phone</font></td><td style="width: 149px; text-align: center;"><font color="white">Country</font></td></tr><tr><td style="width: 10px;">1</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">2</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">3</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">4</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">5</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">6&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">7&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">8&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">9</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">10</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">11&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">12</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">13</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">14</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">15&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr></tbody></table><p><br /></p>';      
    //var HTMLstring = '<table class="table table-sm" align="left" border="1" style="width: 70%; margin: 0px auto;font-size:80%;table-layout:fixed";cellspacing="0";cellpadding="0""><caption><font size="1">Note: Maximum of 15 opportunities per ticket only. For more  missing opportunities, please submit another ticket</font></caption><tbody><tr bgcolor="#2A4B7C"><td style="width: 0px;"><br /></td><td style="width: 212px; text-align: center;"><font color="white">Opportunity #</font></td><td style="width: 132px; text-align: center;"><font color="white">Project Code</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact First Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Last Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Email Address</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Phone</font></td><td style="width: 149px; text-align: center;"><font color="white">Country</font></td></tr><tr><td style="width: 10px;">1</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">2</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">3</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">4</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">5</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">6&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">7&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">8&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">9</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">10</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">11&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">12</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">13</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">14</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">15&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr></tbody></table><p><br /></p>';      
    
//    var HTMLstring = '<table class="table table-sm gentable" align="left" border="1" style="width: 70%; margin: 0px auto;font-size:80%;"><caption><font size="1">Note: Maximum of 15 opportunities per ticket only. For more  missing opportunities, please submit another ticket</font></caption><tbody><tr bgcolor="#2A4B7C"><td style="width: 132px; text-align: center;"><span style="color: rgb(255, 255, 255); font-size: 11.2px;">Opportunity #</span><br></td><td style="width: 132px; text-align: center;"><font color="white">Project Code</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact First Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Last Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Email Address</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Phone</font></td><td style="width: 118px; text-align: center;"><span style="color: rgb(255, 255, 255); font-size: 11.2px;">Country</span><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr></tbody></table><p><br></p><p><br></p>';
    //var HTMLstring = '<table class="table table-sm gentable" align="left"><caption><font size="1">Note: Maximum of 15 opportunities per ticket only. For more  missing opportunities, please submit another ticket</font></caption><tbody><tr bgcolor="#2A4B7C"><td style="width: 132px; text-align: center;"><span style="color: rgb(255, 255, 255); font-size: 11.2px;">Opportunity #</span><br></td><td style="width: 132px; text-align: center;"><font color="white">Project Code</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact First Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Last Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Email Address</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Phone</font></td><td style="width: 118px; text-align: center;"><span style="color: rgb(255, 255, 255); font-size: 11.2px;">Country</span><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr></tbody></table><p><br></p><p><br></p>';
    
    //UPDATED 10062021   
    //var HTMLstring = '<table class="table table-sm gentable" align="left"><caption><font size="1">Note: Maximum of 15 opportunities per ticket only. For more  missing opportunities, please submit another ticket</font></caption><tbody><tr bgcolor="#2A4B7C"><td style="width: 132px; text-align: center;"><font color="white">Opportunity #</font></td><td style="width: 132px; text-align: center;"><font color="white">Project Code</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact First Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Last Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Email Address</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Phone</font></td><td style="width: 118px; text-align: center;"><font color="white">Country</font></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr><tr><td style="width: 132px;"><br></td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;"><br></td></tr></tbody></table><p><br></p><p><br></p>';
 
    //UPDATED 10062021
    var HTMLstring = '<table class="table table-sm gentable" align="left"><caption><font size="2">Note:<ul><li>For BP source - provide UCID<li>For RLM MCR, A2C and A2P - provide Content Campaign Code</ul></font></caption><tbody><tr bgcolor="#2A4B7C"><td style="width: 132px; text-align: center;"><font color="white">Opportunity Number</font></td><td style="width: 132px; text-align: center;"><font color="white">Content Campaign Code Or BP Source UCID</font></td><td style="width: 118px; text-align: center;"><font color="white">First Name (Client)</font></td><td style="width: 118px; text-align: center;"><font color="white">Last Name (Client)</font></td><td style="width: 118px; text-align: center;"><font color="white">Email (Client)</font></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr><tr><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td><td style="width: 118px;"><br></td></tr></tbody></table><p><br></p><p><br></p>';
    
    //var HTMLstring = '<table class="table table-sm" align="left" border="1" style="width: 70%; margin: 0px auto;font-size:70%;table-layout:fixed";cellspacing="0" cellpadding="0"><caption><font size="1">Note: Maximum of 15 opportunities per ticket only. For more  missing opportunities, please submit another ticket</font></caption><tbody><tr bgcolor="#2A4B7C"><td style="width: 0px;"><br /></td><td style="width: 212px; text-align: center;"><font color="white">Opportunity #</font></td><td style="width: 132px; text-align: center;"><font color="white">Project Code</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact First Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Last Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Email Address</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Phone</font></td><td style="width: 149px; text-align: center;"><font color="white">Country</font></td></tr><tr><td style="width: 10px;">1</td><td style="width: 210px;"><br /></td><td style="width: 130px;"><br /></td><td style="width: 110px;"><br /></td><td style="width: 110px;"><br /></td><td style="width: 110px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">2</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">3</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">4</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">5</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">6&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">7&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">8&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">9</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">10</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">11&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">12</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">13</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">14</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">15&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr></tbody></table><p><br /></p>';
    
    //var HTMLstring = '<table align="left" border="1" style="width: 70%; margin: 0px auto;"><caption>Missing Opportunities</caption><caption><font size="2">Note: Maximum of 15 opportunities per ticket only. For more  missing opportunities, please submit another ticket</font></caption><tbody><tr bgcolor="#2A4B7C"><td style="width: 0px;"><br /></td><td style="width: 212px; text-align: center;"><font color="white">Opportunity #</font></td><td style="width: 132px; text-align: center;"><font color="white">Project Code</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact First Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Last Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Email Address</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Phone</font></td><td style="width: 149px; text-align: center;"><font color="white">Country</font></td></tr><tr><td style="width: 10px;">1</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">2</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">3</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">4</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">5</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">6&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">7&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">8&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">9</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">10</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">11&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">12</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">13</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">14</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">15&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr></tbody></table><p><br /></p>';      
    //var HTMLstring = '<p><br/></p><table border="1" style="border-collapse: collapse; width: 975px; margin: 0px auto;"><caption>Missing Opportunities</caption><caption><font size="2">Note: Maximum of 15 opportunities per ticket only. For more  missing opportunities, please submit another ticket</font></caption><tbody><tr bgcolor="#2A4B7C"><td style="width: 10px;"><br /></td><td style="width: 212px; text-align: center;"><font color="white">Opportunity #</font></td><td style="width: 132px; text-align: center;"><font color="white">Project Code</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact First Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Last Name</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Email Address</font></td><td style="width: 118px; text-align: center;"><font color="white">Contact Phone</font></td><td style="width: 149px; text-align: center;"><font color="white">Country</font></td></tr><tr><td style="width: 10px;">1</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">2</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">3</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">4</td><td style="width: 212px;"><br /></td><td style="width: 132px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 118px;"><br /></td><td style="width: 149px;"><br /></td></tr><tr><td style="width: 10px;">5</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">6&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">7&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">8&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">9</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">10</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">11&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">12</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">13</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">14</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr><tr><td style="width: 10px;">15&nbsp;</td><td style="width: 212px;">&nbsp;</td><td style="width: 132px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 118px;">&nbsp;</td><td style="width: 149px;">&nbsp;</td></tr></tbody></table><p><br /></p>'
    $('#summernote').summernote('pasteHTML', HTMLstring);

  } else if (list2SelectedValue =='Other') {
    document.getElementById("otherDIV").style.display = "block";  // display other
    if(document.getElementById("bdescription").value == "Missing Opportunities") {
        document.getElementById("bdescription").value = "";
        $('#summernote').summernote('reset');
      } 
      //hideOther();
      document.getElementById("other").value = "";
      document.getElementById("other").focus();

  } else {

    if(document.getElementById("bdescription").value == "Missing Opportunities") {
        document.getElementById("bdescription").value = "";
        $('#summernote').summernote('reset');
      } 
      document.getElementById("otherDIV").style.display = "none";  // hide others

  }
}

$(document).ready(function() {
        $('#summernote').summernote();
    });
 
/*
$('#summernote').summernote({
  placeholder: 'Enter description, screenshots etc.',
  tabsize: 2,
  //  height: 500,
  disableGrammar: true,
  spellCheck: false,
  toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'underline', 'clear']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture', 'video']],
    ['view', ['help']],
    ['height', ['height']],
  ]
});
*/

