/**
 * Created by piao on 12/8/16.
 */
var imgs = ['url(img/tokyo.png)','url(img/skytree.png)'];
var pageCount = 0;

// 切换到下一个页面
function nextpage(){
    var layer = document.getElementById('layer');
    //当点击next之后透明度变为0
    layer.style.opacity = 0;
    //如果不是最后的页面,切换到下一个页面
    if (pageCount<imgs.length){
        setTimeout(function () {
            layer.style.background = imgs[pageCount++];
            // layer.style.background-size = 'cover';
            layer.style.opacity = 1;
        },1000);
    }else{
        var nextBtn = document.getElementById('next');
        nextBtn.innerHTML='See Again';
    }

}