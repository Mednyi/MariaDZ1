'use strict';
export const createVector = function (x1 = 0, y1 = 0, x2 = 1, y2 = 1) {
    this.point1 = {x: x1,y: y1};
    this.point2 = {x:x2,y: y2};
    this.x = this.point2.x - this.point1.x;
    this.y = this.point2.y - this.point2.y;
};

export const calcLength = (vector) => Math.hypot(vector.x, vector.y);

