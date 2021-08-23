let cvs = document.getElementById('cvs')
let ctx = cvs.getContext('2d')

let unit = 20;

const drawCanvas = () => {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, 500, 500)
    ctx.fillStyle = "rgba(250, 250, 250, 0.048)"
    ctx.fillRect(0, 0, 500, 500)

}


window.addEventListener("click", e => {
    let x = e.offsetX;
    let y = e.offsetY;
    ctx.fillStyle = "black";

    ctx.fillRect(x, y, 10, 10);
})

const abs = a => {
    return (a > 0) ? a : -1 * a;
}


class Snake{
    constructor() {
        this.unit = 20;
        this.dir = {x: 1, y:0}
        this.body = [{ x: 10, y: 10 }, { x: 9, y: 10 }]
        this.color = "#ff7b00"
    }

    draw() {
        this.body.forEach(part => {
            ctx.fillStyle = this.color;
            ctx.fillRect(part.x*this.unit + 1, part.y*this.unit + 1, this.unit - 2, this.unit -2)
        })
    }

    move(food) {
        let x = this.body[0].x
        let y = this.body[0].y
        this.body.unshift({ x: x + this.dir.x, y: y + this.dir.y })
        if (!(food.x == x && food.y == y)) {
            this.body.pop()
        } else {
            globalFood = new Food;
        }

        if (this.body.length > 30) {
            this.body = this.body.slice(0, 10)
        }
    }

    automagic(food) {
        let x = this.body[0].x
        let y = this.body[0].y

        let delX = x - food.x;
        let delY = y - food.y;
        if (abs(delX) > abs(delY)) {
            this.dir = (delX > 0) ? { x: -1, y: 0 } : { x: 1, y: 0 }
        } else {

            this.dir = (delY > 0) ? {x: 0, y: -1} :  {x: 0, y: 1} 
        }
    }

    // let dleft = dright = ddown = dup = false;
    // for (let i = 2; i < snake.length; i++) {
    //     let xx = snake[0].x;
    //     let yy = snake[0].y;
    //     let xxx = snake[i].x;
    //     let yyy = snake[i].y;
    //     if (xx + 1 == xxx) dright = true;
    //     else dright = false;
    //     if (xx - 1 == xxx) dleft = true;
    //     else dleft = false;
    //     if (yy - 1 == yyy) dup = true;
    //     else dup = false;
    //     if (yy + 1 == yyy) ddown = true;
    //     else ddown = false;
    // }
    // console.log(dup);
//     if (aiIsOn) {
//         if (snake[0].y < food.y) {
//             if (snake[0].y - food.y < cvs.height / 2 || food.y - snake[0].y < cvs.height / 2) {
//                 d = "DOWN";
//             } else {
//                 d = "UP";
//             }
//         }

//         if (snake[0].y > food.y) {
//             if (snake[0].y - food.y < cvs.height / 2 || food.y - snake[0].y < cvs.height / 2) {
//                 d = "UP";
//             } else {
//                 d = "DOWN";
//             }
//         }


//         if (snake[0].x < food.x) {
//             if (snake[0].x - food.x < cvs.width / 2 || food.x - snake[0].x < cvs.width / 2) {
//                 d = "RIGHT"
//             } else {
//                 d = "LEFT"
//             }
//         }

//         if (snake[0].x > food.x) {
//             d = "LEFT"
//         }

//         if (snake[0].x > food.x && snake[0].y < food.y) {


//             if (snake[0].x - food.x >= food.y - snake[0].y) {
//                 d = "LEFT";
//             } else {
//                 d = "DOWN";
//             }
//         }

//         // 2nd  Quadrant
//         if (snake[0].x < food.x && snake[0].y < food.y) {
//             if (food.x - snake[0].x >= food.y - snake[0].y) {
//                 d = "RIGHT";
//             } else {
//                 d = "DOWN";
//             }
//         }

//         // 3rd  Quadrant
//         if (snake[0].x < food.x && snake[0].y > food.y) {
//             if (food.x - snake[0].x >= snake[0].y - food.y) {
//                 d = "RIGHT";
//             } else {
//                 d = "UP";
//             }
//         }

//         // 4th  Quadrant
//         if (snake[0].x > food.x && snake[0].y > food.y) {
//             if (snake[0].x - food.x >= snake[0].y - food.y) {
//                 d = "LEFT";
//             } else {
//                 d = "UP";
//             }
//         }
//     }
}

class Food{
    constructor() {
        this.x = Math.floor(Math.random()*25)
        this.y = Math.floor(Math.random()*25)
    }

    draw() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x*unit + 1, this.y*unit + 1, unit - 2, unit - 2)
    }
}

let globalFood = new Food()


window.addEventListener("keydown", key => {
    if (key.code == "ArrowLeft") {
        s1.dir = {x: -1, y: 0}
    } else if (key.code == "ArrowRight") {
        s1.dir = {x: 1, y: 0}
        
    } else if (key.code == "ArrowDown") {
        s1.dir = {x: 0, y: 1}
        
    } else if (key.code == "ArrowUp") {
        s1.dir = {x: 0, y: -1}
        
    } 
       
})


let s1 = new Snake()



let draw = () => {
    drawCanvas();
    s1.draw()
    s1.move(globalFood)
    s1.automagic(globalFood)
    globalFood.draw()
}


setInterval(draw, 1000/20)