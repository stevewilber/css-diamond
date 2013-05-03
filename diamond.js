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

    element.style.width = width + "px";
    element.style.height = height + "px";
    if (isIe9OrLower()) {
        element.style.filter = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', " +
                      "M11=" + a +
                      ", M12=" + c +
                      ", M21=" + b +
                      ", M22=" + d +
                      ")"
    } else {
        element.style.left = elementWidth / 2 + "px";

        var transform = "matrix(" + a + "," + b + "," + c + "," + d + ",0,0)";
        var transformOrigin = "0 0";
        element.style.WebkitTransformOrigin = transformOrigin;
        element.style.WebkitTransform = transform;
        element.style.MozTransformOrigin = transformOrigin;
        element.style.MozTransform = transform;
        element.style.OTransformOrigin = transformOrigin;
        element.style.OTransform = transform;
        element.style.MsTransformOrigin = transformOrigin;
        element.style.MsTransform = transform;
    }
    element.style.display = "block";
}

function isIe9OrLower() {
    return /MSIE (\d+\.\d+);/.test(navigator.userAgent) && new Number(RegExp.$1) < 10;
}
