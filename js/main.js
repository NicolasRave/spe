      
       var actu=new Date();

       document.getElementById("nowlocal").innerHTML = actu;
       
       var mday=actu.getDate();
      //gives day of the current local month to be compared with
      //the day of the month corresponding to a determined
      //sunday at which a delay saving time occurs (ie one of the "d_aux")

      var m=actu.getMonth();
      //gives month of the local time (is between O and 11)
      
      function myFunction1() {
      // gives PST time
      let text="";
      let x = document.getElementById("demo1");
      const d1 = new Date();
      let mday=d1.getDate();
      
      if ((m==11 ||  m<2) ||  (m==10 & mday>=d_aux1 )|| (m==2 & mday<d_aux2 )){
      text = "l'heure à Vandenberg est 8 h avant Greenwich.";}
      else { text = "l'heure à Vandenberg est 7 h avant Greenwich.";}
      x.innerHTML = "En ce jour de l'année,"+ "<br />" +text;
      }
   
       function myFunction2() {
    // gives Florida time
       let text=""; 
       let x = document.getElementById("demo2");
       const d2 = new Date();
       let mday=d2.getDate();
   
       if ((m==11 ||  m<2) ||  (m==10 & mday>=d_aux1 )|| (m==2 & mday<d_aux2 )){
         text = "l'heure à Cap Canaveral est 5 h avant Greenwich.";}
         else { text = "l'heure à Cap Canaveral est 4 h avant Greenwich.";}
         x.innerHTML = "En ce jour de l'année,"+ "<br />" +text;
         }
   
       function myFunction3() {
    // gives Sweden time
       let text=""; 
       let x = document.getElementById("demo3");
       const d3 = new Date();
       let mday=d3.getDate();
   
       if ((m>9 ||  m<2) ||  (m==9 & mday>=d_aux3 )|| (m==2 & mday<d_aux4 )){
         text = "l'heure à Esrange est 1 h après Greenwich.";}
         else { text = "l'heure à Esrange est 2 h après Greenwich.";}
         x.innerHTML = "En ce jour de l'année,"+ "<br />" +text;
         }
   
       function myFunction4() {
    // gives Kourou time
       let text=""; 
       let x = document.getElementById("demo4");
       const d4 = new Date();
       let mday=d4.getDate();
   
       if ((m>9 ||  m<2) ||  (m==9 & mday>=d_aux3 )|| (m==2 & mday<d_aux4 )){
         text = "l'heure à Kourou est 3 h avant Greenwich.";}
         else { text = "l'heure à Kourou est 2 h avant Greenwich.";}
         x.innerHTML = "En ce jour de l'année,"+ "<br />" +text;
         }
   
       function myFunction5() {
    // gives Baïkonour time
       let x = document.getElementById("demo5");
       x.innerHTML = "L'heure à Baïkonour est 5 h après Greenwich";
   
       }

       function myFunction6() {
       // gives Vostochny time
       let x = document.getElementById("demo6");
       x.innerHTML = "L'heure à Vostochny est 9 h après Greenwich";
  
       }
       
       function myFunction7() {
       // gives Tanegashima time
       let x = document.getElementById("demo7");
       x.innerHTML = "L'heure à Tanegashima est 9 h après Greenwich";

       }

       function myFunction8() {
         // gives Srīharikota time
         let x = document.getElementById("demo8");
         x.innerHTML = "L'heure à Srīharikota est <br />5 h 30 mn après Greenwich";
  
         }

      
