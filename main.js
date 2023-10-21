
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // if (!entry.isIntersecting)
        //     return
        let idk = [...entry.target.children];
        idk.forEach(elm => {
            elm.classList.toggle('aajo')
        })
    })
}, {
    threshold: 0.7
})

let g = document.querySelectorAll('.stuffs');
// console.log(g)
g.forEach(_g => observer.observe(_g))





document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navBar').classList.toggle("navBarToggler")
    // console.log(document.querySelector('.navBar').classList)
})