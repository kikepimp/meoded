// JavaScript Document
 $('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    })
	
$( document ).on( "pageinit", function() {
    $( "#popupVideo iframe" )
        .attr( "width", 0 )
        .attr( "height", 0 );
		  
    $( "#popupVideo" ).on({
        popupbeforeposition: function() {
            var size = scale( 497, 298, 15, 1 ),
                w = size.width,
                h = size.height;

            $( "#popupVideo iframe" )
                .attr( "width", w )
                .attr( "height", h );
        },
        popupafterclose: function() {
            $( "#popupVideo iframe" )
                .attr( "width", 0 )
                .attr( "height", 0 );    
        }
    });
});