//completed task
$('ul').on("click","li",function(){
    $(this).toggleClass("strike");
})
//Delete tasks
$('ul').on("click","span",function(f){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    f.stopPropagation();       
})
//Creating Todos
$('input[type=text]').keypress(function(e){
    if(e.which===13){
        var todoTxt=$(this).val();
        $(this).val("");
        $('ul').append(" <li><span><i class='far fa-trash-alt'></i></span>"+todoTxt+"</li>")
    }
})
//Toggle
$('.fa-plus-circle').click(function(){
    $('input[type=text]').fadeToggle(300);
});