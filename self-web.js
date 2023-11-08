//get the canvas element
const canvas = document.querySelector('canvas');

//get the width and the height of the browser
const width = window.innerWidth;
const height = window.innerHeight;

//set the width and the height of the canvas == window
canvas.width = width;
canvas.height = height; 

//use getcontext to draw 2d shape
const ctx = canvas.getContext('2d');

//Ball Class
class Ball{
	constructor(x, y, vel_x, vel_y, sz, color){
		this.x = x; //horizontal pos of the ball
		this.y = y; // vertical pos of the ball
		this.vel_x = vel_x; //the vel of the ball horizontally when animation
		this.vel_y = vel_y;
		this.sz = sz;
		this.color = color;
	}

	//create draw function
	createBall(){
		ctx.beginPath(); // start drawing
		ctx.fillStyle = this.color; //fill the shape with the color
		ctx.arc(this.x, this.y, this.sz, 0, 2 * Math.PI);
			//x, y: center of the ball
			// sz: radius
			//0: initial degree
			//2* Marh.PI: end pos (360 degree)
		ctx.fill(); //finish drawing

	}
	//change pos func when out of the browser viewport
	changeBall(){
		if(this.x + this.sz >= width || this.x + this.sz <= 0){
			this.vel_x = -this.vel_x;
		}
		if(this.y + this.sz >= height || this.y + this.sz <= 0){
			this.vel_y = -this.vel_y;
		}

	//update the pos of the ball everytime by adding vel
		this.x += this.vel_x;
		this.y += this.vel_y;
	}

}

//create an array for balls' colors
const colors = ['#AAC9CE', '#9D94BA', '#D1725D', '#B6B4C2', '#BEC4E1', 
				'#CC6666', '#C9BBC8', '#99ABB9', '#DAB4A7', '#586F77', 
				'#FEC397', '#E5C1CD', '#F3DBCF', '#D28A7C', '#8E8E8E'];

function random_num(num) {
  return Math.floor(Math.random() * num);
}

//create and store balls in an array
const balls = [];

while(balls.length < 75){
	add = 0;
	const ball = new Ball(random_num(width), random_num(height), random_num(5), random_num(10), random_num(45), colors[random_num(15)]);
	balls.push(ball);
	// const ball_1 = new Ball(width, random_num(height), 8, random_num(10), random_num(45), colors[random_num(15)]);
	// balls.push(ball_1);
	// const ball_2 = new Ball(0, random_num(height), 8, random_num(10), random_num(45), colors[random_num(15)]);
	// balls.push(ball_2);


}

// const ball_1 = new Ball(random_num(width), random_num(height), 10, 8, 20, colors[random_num(15)]);
// balls.push(ball_1);
// const ball_2 = new Ball(random_num(width), random_num(height), 8, 8, 20, colors[random_num(15)]);
// balls.push(ball_2);

//create loop function
function loop(){
	//cover the previous frame's drawing before the next one is drawn
	ctx.fillStyle = 'rgba(0,0,0,0.5)'
	ctx.fillRect(0,0, window.innerWidth, window.innerHeight);
	//run necessary func
	for(let i = 0; i < balls.length; i++){
		balls[i].createBall();
		balls[i].changeBall();
		

	}
	requestAnimationFrame(loop);
	

	
}
loop();



