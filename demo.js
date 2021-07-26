// 読み込んだらフェードアウト
$(window).load(function () {
    // 消えるタイミングはお好みで
    $('.loading').delay(3500).fadeOut(300);
    $('body').toggleClass('black');
});
// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
function stopload(){
    $('.loading').delay(1000).fadeOut(700);
}
setTimeout('stopload()',10000);