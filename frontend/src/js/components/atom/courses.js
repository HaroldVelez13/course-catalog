export const courses = () =>{
    let list=""
    for (let index = 0; index < 20; index++) {
        list += course();
        
    }
    let view = template(list)
    return view;

}

const course = () => `
    <li>
        <figure>
        <!-- Photo by Quentin Dr on Unsplash -->
        <img src="https://images.unsplash.com/photo-1471421298428-1513ab720a8e" alt="Several hands holding beer glasses">
        <figcaption><h3>Billions upon billions</h3></figcaption>
        </figure>
        <p>
        Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?
        </p>
        <a href="#">Visit Website</a>
    </li>
`


const template =  (courses="") => `
    <section class="breweries" id="breweries">
        <ul>
            ${courses}
        </ul>
    </section>
`