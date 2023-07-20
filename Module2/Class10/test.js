let radii=[1,3,4,7,9,11];

// calculate the diameter,circumference and area of circle by writing function
function diameter(radius){
    console.log("Diameter= ",radius*2);
}
function circumference(radius){
    console.log("Circumference= ",2*3.14*radius);
}
function area(radius){
    console.log("Area= ",3.14*radius*radius);
}

for(let i=0;i<radii.length;i++){
    console.log("Radius= ",radii[i])
    diameter(radii[i]);
    circumference(radii[i]);
    area(radii[i]);
    console.log();

}

