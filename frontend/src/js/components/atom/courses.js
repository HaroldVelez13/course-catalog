export const courses = async () =>{
    let list=""
    var courses_data = await  getCourses().then(async (data)=>{  
        await data      
        return data["courses"]
    })
    
    window.clickHandle = (e) =>{
        console.log('desde el clickHandle: ', e);

    }
    for (let index = 0; index < 21; index++) {
        let current = courses_data[index]
        list += course(current);
        
    }
    let view = template(list)
    let rootDiv = document.getElementById('root');
    rootDiv.innerHTML = view;
    return;

}

const getCourses = () => {
    return fetch('http://localhost:3000/api/course')
    .then((response) => {
        return response.text();
    })
    .then( async (data) => {
        let c = await data;
        let c_json = JSON.parse(c)         
        return c_json   
        
});
    
    
    /* const get = fetch("https://www.techtransit.com/mission.courses/coursesData.js");
        get.then(response => {
            console.log(response);
        return response.json();
        }).then(courses => {
        console.log(courses);
    }); */

}

const course = (course_obj) => `
    <li onclick="clickHandle(${course_obj.id})" class="animated fadeIn">
        <figure>
        <!-- Photo by Quentin Dr on Unsplash -->
        <img src="https://techtransit.com/mission.courses${course_obj.imageUrl.trim()}" alt="${course_obj.imageText.trim()}">
        <figcaption><h3>${course_obj.name.trim()}</h3></figcaption>
        </figure>
            <p>
            ${course_obj.description.replace(/<\/?[^>]+(>|$)/g, "").trim().substring(0,120)}...
            </p>
        <b>${course_obj.price}</b>
    </li>
`


const template =  (courses="") => `
    <section class="breweries" id="breweries">
        <ul>
            ${courses.trim()}
        </ul>
    </section>
`