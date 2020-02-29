import "../css/layaut.css";
import "../css/color.css";
import "../css/nav_bar.css";
import "../css/card.css";

import {courses} from "./components/atom/courses"
import {landing} from "./components/atom/landing"


window.onNavigate  = (pathName) => {
    window.history.pushState(
        {},
        pathName,
        window.location.origin + pathName
    )
    let route = window.location.pathname;
    let rootDiv = document.getElementById('root');
    let view = landing;
    console.log(route)
    switch (route) {
        case '/':
            view = landing;
          break;
        case '/home':
            view = landing;
          break;
        case '/courses':
            view = courses();
            break;
        default:
            view = landing;
        break;
      }   

    rootDiv.innerHTML = view;
    return false;
}


window.onload = function() {
    window.onNavigate("/");
    
  };