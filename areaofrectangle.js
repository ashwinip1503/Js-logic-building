//calculate area of rectangle

// area of rectangle = length * width

function areaOfRectangle(length,width) {
    
    if(length < 0 ){
        throw new RangeError ("length should be positive number")
    }
    if(width < 0 ){
        throw new RangeError ("width should be positive number")
    }

    const area = length*width
    console.log("area of reactangle",area)

}

areaOfRectangle(1,2)    
areaOfRectangle(123,234)
areaOfRectangle(-1,2)
areaOfRectangle(1,-2)
areaOfRectangle(-1,-2)
areaOfRectangle(1.5,2.5)