$(document).ready(function(){
    $(".menu").click(function(){
    var menu=$(this).attr('id');
    var frase=$(".fraseActive").attr('id');
    limpar("menu");
    $('#'+menu).addClass("menuActive");
    $("#imgResult").attr('src','fontes/img/'+menu+frase+'.png');
    $(".btn-secondary").attr("href",'fontes/img/'+menu+frase+'.png')
    $(".btn-secondary").attr("download",menu+frase+'.png')
    $(".compartilhar").attr("href",'compartilhar.php?imgEscolhida='+menu+frase)});$(".frase").click(function(){
        var frase=$(this).attr('id');
        var menu=$(".menuActive").attr('id');
        limpar("frase");
        $('#'+frase).addClass("fraseActive");
        $("#imgResult").attr('src','fontes/img/'+menu+frase+'.png');
        $(".btn-secondary").attr("href",'fontes/img/'+menu+frase+'.png')
        $(".btn-secondary").attr("download",menu+frase+'.png')
        $(".compartilhar").attr("href",'compartilhar.php?imgEscolhida='+menu+frase)})
});
function limpar(elements){$("."+elements).removeClass(elements+"Active")}