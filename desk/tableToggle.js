 $(function(){
        var i=0; //这个是闲置桌子的计数器
        var j=0; //这个是使用桌子的计数器
        $(".waiting").click(function(){ //如果闲置桌子的链接被点击
            
            $(this).toggleClass('card-alt'); //toggleClass是切换class的，点的时候加上名为card-alt的class，再点就把这个class去掉
            if(i%2 ==0){ //因为是多次点击，要来回切换，所以当计数器i为偶数的时候（第一次点击，i是0（现在的i还没加1），是偶数，所以显示使用中）
                $(this).find(".myButton").html("使用中"); //找到他class为myButton的子元素，设置为显示使用中，然后跳转到13行，i加1变成了1
            }else{
                $(this).find(".myButton").html("闲置中"); //再次点“使用中”的时候,因为上次点使用中的时候，i变成了1，是奇数，所以又显示闲置中

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