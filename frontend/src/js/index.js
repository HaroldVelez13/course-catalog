import "../css/layaut.css";
import "../css/color.css";
import "../css/nav_bar.css";
import "../css/card.css";

import {courses} from "./components/atom/courses"
import {landing} from "./components/atom/landing"


window.onNavigate  = (pathName) => {

    let show = pathName.slice(1);
    show = '/#/'+show;
    window.history.pushState(
        {},
        show,
        window.location.origin +show
    )

    let rootDiv = document.getElementById('root');
    switch (pathName) {
        case '/courses':
            courses();
            break;
        default:
            rootDiv.innerHTML = landing;
            break;
      }  
    return false;
}


window.onload = function() {
    let url = window.location.pathname;
    console.log(url)
    window.onNavigate(url);
    
  };