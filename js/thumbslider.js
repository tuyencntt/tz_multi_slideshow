function TzThumbslider(obj){
    var total_width = 0;
    obj.find('span').each(function (i,el){
        var img_width = jQuery(el).find('img').width();
        total_width = total_width + img_width;
        Transition_w =img_width * 3;
    });
   obj.css('width',total_width+'px');

   var slider_w = jQuery('#zoom-slider').width();
    if(total_width > slider_w){
        var Result_w = total_width - slider_w;
        console.log(Transition_w);
        Bolean_w = total_width - Transition_w;

        num_click = parseInt(total_width/Transition_w);


        if(Bolean_w  >=0){
            jQuery('.zoom-next').each(function(){
                jQuery('#mycarousel').css({
                    'margin-left':margin-left
                })
            })
        }

    }
}