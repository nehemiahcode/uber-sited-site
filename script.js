
//open the drop down in large screens...
function myDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
    // document.querySelector(".left").classList.add("active");
    document.getElementById("demo").classList.add("not_active");
    document.getElementById("span").innerHTML = '<span class="fa fa-caret-up"></span>';
  }
  // Close the dropdown if the user clicks outside of it, in large screens..
  window.onclick = (e) => {
    if (!e.target.matches('.dropbtn')) {
      const myDropdown = document.getElementById("myDropdown");
      const span = document.getElementById("span");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        document.querySelector(".left").classList.remove("active");
         span.innerHTML = '<span class="fa fa-caret-down"></span>';
      }
    }
  }



  //this codes will make the navbar and the menu cion go back to its difault under the certain condition.. //smalll screen
  function closeNav() {
    const navbar = document.querySelector("nav");
    const menu = document.querySelector(".menu_logo");
     const menu1 = document.querySelector(".menu1");
     const menu2 = document.querySelector(".menu2");
     const menu3 = document.querySelector(".menu3");
     const mobileDropDownActivated = document.querySelector(".drop_show");
    menu.classList.remove("active");
        menu1.classList.remove("active");
        menu2.classList.remove("active");
      menu3.classList.remove("active");
      navbar.classList.remove("active");
      mobileDropDownActivated.classList.remove("active")
      document.getElementById("demo").classList.remove("not_active");
  }


  //this code will open the navbar from the menu icon  //small screen

     function myMenu() {
    const navbar = document.querySelector("nav");
    const menu = document.querySelector(".menu_logo");
     const menu1 = document.querySelector(".menu1");
     const menu2 = document.querySelector(".menu2");
     const menu3 = document.querySelector(".menu3");
      menu.classList.toggle("active");
      menu1.classList.toggle("active");
      menu2.classList.toggle("active");
      menu3.classList.toggle("active");
      navbar.classList.toggle("active");
  }


 

  //this code will change the icon in the dropdown menu //small screen
  function openDrop() {
    const mobileDropDownActivated = document.querySelector(".drop_show");
     const icon = document.querySelector(".fa-angle-up");
     mobileDropDownActivated.classList.toggle("active");
     icon.classList.toggle(".fa-angle-down");
  }

function toTop()
 {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
 }
 


