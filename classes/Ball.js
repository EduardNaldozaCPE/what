import PhysObject from "./PhysObject.js";

export default class Ball extends PhysObject {
    constructor(...args) {
        super(...args);

    }

    render(){
        this.c.beginPath();
        this.c.strokeStyle = 'rgb(220,155,155,1)';
        this.c.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI);
        this.c.stroke();
    }
}