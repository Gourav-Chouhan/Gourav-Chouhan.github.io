//geting dimentions

// const width = window.innerWidth
// const height = window.innerHeight

// const mobile_width = 600

// let out;

// if (width < mobile_width) {
//     console.log(width)
//     let stuffs_ = document.querySelectorAll('.stuffs');
//     out = stuffs_[0]
//     // console.log(stuffs_)
//     stuffs_.forEach(elm => elm.style.flexDirection = 'column')
// }

// window.addEventListener('click', e => {
//     // let elm = document.querySelector('.firstLook')
//     let a = document.getElementById('test1');
//     let b = document.getElementById('test2');
    
//     a.classList.toggle('aajo')
//     b.classList.toggle('aajo')
// })

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




//for tilting just add tilt class to a elemnt and set some parameter
// for tilting the card


// let tilt = document.querySelectorAll('.tilt')
// let tiltY = 0.01;
// let tiltX = 0;
// tilt.forEach(_card => _card.addEventListener('mousemove', e => {
//   let x = e.clientX - _card.offsetLeft - _card.offsetWidth / 2;
//     let y = e.clientY - _card.offsetTop - _card.offsetHeight / 2;
//     console.log(_card);
  
//   tilt.forEach(_element => _element.style.transform = `rotateX(${y * tiltX/10}deg) rotateY(${x * tiltY/10}deg)`)
// }))


document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navBar').classList.toggle("navBarToggler")
    // console.log(document.querySelector('.navBar').classList)
})