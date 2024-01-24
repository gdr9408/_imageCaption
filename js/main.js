// 첫번째 .first
$('.first .item').on('mouseenter',function(){
  $(this).find('.area').stop().animate({opacity:1},400)
  $(this).addClass('active')
})
.on('mouseleave',function(){
  $(this).find('.area').stop().animate({opacity:''},200)
  $(this).removeClass('active')
})


//두번째 줄 .second - 왼쪽에서 가운데

$('.second .item').on('mouseenter',function(){
  $(this).find('.area').stop().animate({left:0},400, 'easeOutBounce')
  $(this).addClass('active')
})
.on('mouseleave',function(){
  $(this).find('.area').stop().animate({left:'-100%'},200,'easeOutBounce')
  $(this).removeClass('active')
})



//세번째 -third -글씨만 중앙에서 나타남 

$('.third .item').on('mouseenter',function(){
  $(this).find('p').stop().delay(300).animate({bottom:0},400,)
  $(this).addClass('active')
})
.on('mouseleave',function(){
  $(this).find('p').stop().animate({bottom:'-100px'},400)
  $(this).delay(300).removeClass('active')
})


$('.fourth .item').on('mouseenter',function(){
  $(this).find('p').stop().animate({top:'120px'},400,'easeOutBounce')
  $(this).addClass('active')
})
.on('mouseleave',function(){
  $(this).find('p').stop().animate({top:'-30px'},200)
  $(this).delay(300).removeClass('active')
})