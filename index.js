const Url='https://www.bungie.net/platform/Destiny2/Stats/Definition/';
$('.btn').click(function(){
    $.get(Url, function(data, status){
      console.log('${data}')
    });
})
