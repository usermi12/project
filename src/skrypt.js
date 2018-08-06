 
        var podliczacz = 111111;
      
        function slider() {
    
            setTimeout(slider, 5000);
            var x = document.getElementById("slide");
     

            podliczacz++;
            if (podliczacz % 3 == 0) {
                x.style.animation = "slajd 5s ease-in-out 5s infinite";
                x.style.backgroundImage = 'url(src/grafika.png)';
            }
            else if (podliczacz % 3 == 1) {
                x.style.animation = "slajd 5s ease-in-out 5s infinite";
                x.style.backgroundImage = "url(src/grafika2.png)";
            }

            else if (podliczacz % 3 == 2) {
                x.style.animation = "slajd 5s ease-in-out 5s infinite";
                x.style.backgroundImage = 'url(src/grafika3.png)';

            }
        }
        function przesuwanep() {
            var x = document.getElementById("slide");
            podliczacz--;
            if (podliczacz % 3 == 0) {
                x.style.backgroundImage = 'url(src/grafika.png)';
            }
            else if (podliczacz % 3 == 1) {
                x.style.backgroundImage = 'url(src/grafika2.png)';
            }

            else if (podliczacz % 3 == 2) {
                x.style.backgroundImage = 'url(src/grafika3.png)';
            }
            
        }



        function przesuwanet() {

            var x = document.getElementById("slide");
            podliczacz++;

            if (podliczacz % 3 == 0) {
                x.style.backgroundImage = 'url(src/grafika.png)';
            }
            else if (podliczacz % 3 == 1) {
                x.style.backgroundImage = 'url(src/grafika2.png)';
            }

            else if (podliczacz % 3 == 2) {
                x.style.backgroundImage = 'url(src/grafika3.png)';
            }
            
        }



        function my() {
            var x = document.getElementById("nav");
            var w = window.innerWidth;

            if (w <= 700) {
                x.style.display = "none";
            }

        }
        function myFunction() {
            var x = document.getElementById("nav");
            if (x.style.display == "none") {
                x.style.display = "block";
                x.style.animation = "toggle 2s";
            }
            else {
                x.style.display = "none";
            }
        }

        function myFunction2() {
            var w = window.innerWidth;
            var x = document.getElementById("nav");
            if (w > 700) {
                x.style.animation = "";
                x.style.display = "flex";
            }
            else if (x.style.display == "flex") {
                x.style.display = "none";
            }
            setTimeout("myFunction2()", 1);
        }

        function start() {
            slider();
            myFunction2();
            my();
        }
   
