export const courses = () =>{
    let list=""
    let courses_data = getCourses()
    window.clickHandle = (e) =>{
        console.log('desde el clickHandle: ', e);

    }
    for (let index = 0; index < 20; index++) {
        let current = courses_data[index]
        list += course(current);
        
    }
    let view = template(list)
    return view;

}

const getCourses = () => {
    let courses = window._courses
    console.log(courses)
    return courses;
    /* const get = fetch("https://www.techtransit.com/mission.courses/coursesData.js");
        get.then(response => {
            console.log(response);
        return response.json();
        }).then(courses => {
        console.log(courses);
    }); */

}

const course = (course_obj) => `
    <li onclick="clickHandle(${course_obj.id})">
        <figure>
        <!-- Photo by Quentin Dr on Unsplash -->
        <img src="https://techtransit.com/mission.courses${course_obj.imageUrl}" alt="${course_obj.imageText}">
        <figcaption><h3>${course_obj.name}</h3></figcaption>
        </figure>
        <p>
        ${course_obj.description}
        </p>
        <b>${course_obj.price}</b>
    </li>
`


const template =  (courses="") => `
    <section class="breweries" id="breweries">
        <ul>
            ${courses}
        </ul>
    </section>
`