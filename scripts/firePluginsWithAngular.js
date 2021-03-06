myApp.directive('skillsCard', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(".skillsCard").faceCursor({

                // whether the element should face away from the cursor instead of toward it
                avertCursor: false,
              
                // CSS perspective for transforms
                perspective: "10rem",
              
                // whether height, width and offset of the elements should be cached instead of recalculated each frame (if the elements move around or you want the effect to be consistent during browser resizing, disable)
                cacheElementData: true
                
              });
        }
    };
}); 

myApp.directive('countUp', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var options = {
                  useEasing: true, 
                  useGrouping: true, 
                  separator: ',', 
                  decimal: '.', 
                };
                var demo = new CountUp('counter', 0, 600, 0, 6, options);
                if (!demo.error) {
                  demo.start();
                } else {
                  console.error(demo.error);
                }
        }
    };
}); 


myApp.directive('myOwl', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items:1,
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:6000,
                autoplayHoverPause:false
            });
        }
    };
}); 