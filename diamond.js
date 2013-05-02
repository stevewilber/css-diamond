createDiamond(document.getElementById("diamond"));

function createDiamond(element) {
    var elementWidth = element.offsetWidth;
    var elementHeight = element.offsetHeight;
    
    var rotate = Math.atan(elementHeight / elementWidth);
    var skew = 2 * rotate - Math.PI / 2;
    var width = Math.sqrt(.25 * Math.pow(elementWidth, 2) + .25 * Math.pow(elementHeight, 2));
    var height = width * Math.cos(skew);

    var slope = Math.tan(skew);
    var cosRotate = Math.cos(rotate);
    var sinRotate = Math.sin(rotate);
    var a = cosRotate;
    var b = sinRotate;
    var c = slope * cosRotate - sinRotate;
    var d = slope * sinRotate + cosRotate;

    element.style.width = width;
    element.style.height = height;
    if (isIe9OrLower()) {
        element.style.filter = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', " +
                      "M11=" + a +
                      ", M12=" + c +
                      ", M21=" + b +
                      ", M22=" + d +
                      ")"
    } else {
        element.style.left = elementWidth / 2 + "px";
        element.style.WebkitTransformOrigin = "0 0";
        element.style.WebkitTransform = "matrix(" + a + "," + b + "," + c + "," + d + ",0,0)";
        element.style.MozTransformOrigin = "0 0";
        element.style.MozTransform = "matrix(" + a + "," + b + "," + c + "," + d + ",0,0)";
        element.style.OTransformOrigin = "0 0";
        element.style.OTransform = "matrix(" + a + "," + b + "," + c + "," + d + ",0,0)";
        element.style.MsTransformOrigin = "0 0";
        element.style.MsTransform = "matrix(" + a + "," + b + "," + c + "," + d + ",0,0)";
    }
}

function isIe9OrLower() {
    return /MSIE (\d+\.\d+);/.test(navigator.userAgent) && new Number(RegExp.$1) < 10;
}
