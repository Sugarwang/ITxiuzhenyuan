 $(function(){
        var i=0;
        var j=0;
        $(".waiting").click(function(){
            
            $(this).toggleClass('card-alt');
            if(i%2 ==0){
                $(this).find(".myButton").html("使用中");
            }else{
                $(this).find(".myButton").html("闲置中");

            }
            i++;

        });


        $(".using").click(function(){
            j++;
            $(this).toggleClass('card-alt');

            if(j%2 ==0){
                $(this).find(".myButton").html("使用中");
            }else{
                $(this).find(".myButton").html("闲置中");

            }
            
        });
    })