/ハンバーガーメニュー////////////////////////////////////////////////////////////////////////////////// 


$('#wrapper').multiscroll({
	sectionsColor: ['fff', '#fff', '#fff','#fff', '#fff', '#fff'],//セクションごとの背景色設定
	anchors: ['area1', 'area2', 'area3','area4','area5','area6'],//セクションとリンクするページ内アンカーになる名前
	menu: '#menu',//上部ナビゲーションのメニュー設定
	navigation: true,//右のナビゲーション出現、非表示は false
	navigationTooltips:['', '', '','','',''],//右のナビゲーション現在地時に入るテキスト
	loopTop: true,//最初のセクションを上にスクロールして最後のセクションまでスクロールするかどうかを定義します。
	loopBottom: true,//最後のセクションを下にスクロールして最初のセクションまでスクロールするかどうかを定義します。
}); 


$(".openbtn").click(function () {
    $(this).toggleClass('active');
});




$(function(){
    $("nav").hide();
});

$(function(){
    $("nav").hide();
    $(".openbtn").click(function(){//メニューボタンをクリックしたとき
        $("nav").toggle(300);//0.3秒で表示したり非表示にしたりする
    });
});


$(function(){
    $(".header-bg").hide();
});

$(function(){
    $(".header-bg").hide();
    $(".openbtn").click(function(){//メニューボタンをクリックしたとき
        $(".header-bg").toggle(300);//0.3秒で表示したり非表示にしたりする
    });
});
