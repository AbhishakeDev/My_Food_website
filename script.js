
    var myIndex = 0;
    //for keeping track of the image no. to be showm
    
    function carousel() {
      //funtion for the carousel to work fluently

      var i;
      //iterable element

      var x = document.getElementsByClassName("mySlides");
      //return a  nodelist so that we can iterate through it and make carousel out of it

      for (i = 0; i < x.length; i++) 
      
      {

        x[i].style.display = "none";
        //setting the image display property to none so that it disappears

      }

      myIndex++;

      if (myIndex > x.length) 
      //checking if the index is going out of bounds
      {
        
        myIndex = 1
        //when the index goes more than the length of the array that contains the images it sets the index to one.
      
      }

      x[myIndex-1].style.display = "block";
      //setting the display to block in order for the image to be visible
      setTimeout(carousel, 3000);
      //calling the carousel function after every 3 seconds

    }

    carousel();
    //calling the carousel function