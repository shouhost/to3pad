window.addEventListener('orientationchange', function(event){
    if ( window.orientation == 180 || window.orientation==0 ) {
        alert("竖屏");
    }
    if( window.orientation == 90 || window.orientation == -90 ) {
        alert("横屏");
    }
});