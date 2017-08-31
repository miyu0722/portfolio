// =====================================================
// ScrollMagic
// =====================================================
var controller = null; //コントローラーをNullで初期化
if($(window).width() <= 1000){
  //Tablet以下
  controller = new ScrollMagic.Controller();
  seans2();
} else {
  //PC
  controller = new ScrollMagic.Controller();
  seans();
}

// ウインドウがリサイズされたら発火
$(window).on('resize',function(){
  if($(window).width() <= 1000){
    if(controller){
      //ウインドウサイズが800px以下で且つコントローラーが存在した場合、それを削除。
      //その後新しいコントローラーをインスタンス化
      controller = controller.destroy(true);
      controller = new ScrollMagic.Controller();
      //Tablet以下
      seans2();
    }
  } else {
    if(controller){
      //強引にページの一番上に戻す。
      $("html,body").animate({scrollTop:0},0);
      //ウインドウサイズが800px以下で且つコントローラーが存在した場合、それを削除。
      //その後新しいコントローラーをインスタンス化
      controller = controller.destroy(true);
      controller = new ScrollMagic.Controller();
      seans();
    }
  }
});
function seans(){
  var description1 = new ScrollMagic.Scene({triggerElement: "#worktrigger1", offset :100})
        .setClassToggle("#worktarget1", "fadeInUp")
        .addIndicators({name: "1"})
        .addTo(controller);
  var workoval1 = new ScrollMagic.Scene({triggerElement: "#worktrigger2", offset :200})
        .setClassToggle("#worktarget2", "oval-fade-in1")
        .addIndicators({name: "2"})
        .addTo(controller);
  var comceptimg = new ScrollMagic.Scene({triggerElement: "#worktrigger3", offset :800})
        .setClassToggle("#worktarget3", "fadeInUp")
        .addIndicators({name: "3"})
        .addTo(controller);
  var workoval2 = new ScrollMagic.Scene({triggerElement: "#worktrigger4", offset :900})
        .setClassToggle("#worktarget4", "oval-fade-in2")
        .addIndicators({name: "4"})
        .addTo(controller);
  var workoval3 = new ScrollMagic.Scene({triggerElement: "#worktrigger5", offset :1300})
        .setClassToggle("#worktarget5", "oval-fade-in3")
        .addIndicators({name: "5"})
        .addTo(controller);
  var workoval4 = new ScrollMagic.Scene({triggerElement: "#worktrigger6", offset :1500})
        .setClassToggle("#worktarget6", "oval-fade-in4")
        .addIndicators({name: "6"})
        .addTo(controller);
  var workcolortitle = new ScrollMagic.Scene({triggerElement: "#worktrigger7", offset :1700})
        .setClassToggle("#worktarget7", "fadeInUp")
        .addIndicators({name: "7"})
        .addTo(controller);
  var colorchips = new ScrollMagic.Scene({triggerElement: "#worktrigger8", offset :1800})
        .setClassToggle("#worktarget8", "fadeInUp")
        .addIndicators({name: "8"})
        .addTo(controller);
  var workoval5 = new ScrollMagic.Scene({triggerElement: "#worktrigger9", offset :1800})
        .setClassToggle("#worktarget9", "oval-fade-in5")
        .addIndicators({name: "9"})
        .addTo(controller);
  var workoval6 = new ScrollMagic.Scene({triggerElement: "#worktrigger10", offset :1900})
        .setClassToggle("#worktarget10", "oval-fade-in1")
        .addIndicators({name: "10"})
        .addTo(controller);
  var mobiletext = new ScrollMagic.Scene({triggerElement: "#worktrigger11", offset :1900})
        .setClassToggle("#worktarget11", "fadeInUp")
        .addIndicators({name: "11"})
        .addTo(controller);
  var mobilephone = new ScrollMagic.Scene({triggerElement: "#worktrigger12", offset :1800})
        .setClassToggle("#worktarget12", "oval-fade-in2")
        .addIndicators({name: "12"})
        .addTo(controller);
  var mobilephone2 = new ScrollMagic.Scene({triggerElement: "#worktrigger13", offset :1850})
        .setClassToggle("#worktarget13", "fadeInUp")
        .addIndicators({name: "13"})
        .addTo(controller);
  var mockup = new ScrollMagic.Scene({triggerElement: "#worktrigger14", offset :2500})
        .setClassToggle("#worktarget14", "fadeIn")
        .addIndicators({name: "14"})
        .addTo(controller);
  var workoval7 = new ScrollMagic.Scene({triggerElement: "#worktrigger15", offset :8100})
        .setClassToggle("#worktarget15", "oval-fade-in1")
        .addIndicators({name: "15"})
        .addTo(controller);
  var workoval8 = new ScrollMagic.Scene({triggerElement: "#worktrigger16", offset :8150})
        .setClassToggle("#worktarget16", "oval-fade-in2")
        .addIndicators({name: "16"})
        .addTo(controller);
  var workoval9 = new ScrollMagic.Scene({triggerElement: "#worktrigger17", offset :8200})
        .setClassToggle("#worktarget17", "oval-fade-in3")
        .addIndicators({name: "17"})
        .addTo(controller);
  var workoval10 = new ScrollMagic.Scene({triggerElement: "#worktrigger18", offset :8250})
        .setClassToggle("#worktarget18", "oval-fade-in4")
        .addIndicators({name: "18"})
        .addTo(controller);
  var workoval11 = new ScrollMagic.Scene({triggerElement: "#worktrigger19", offset :8300})
        .setClassToggle("#worktarget19", "oval-fade-in5")
        .addIndicators({name: "19"})
        .addTo(controller);
  var description2 = new ScrollMagic.Scene({triggerElement: "#worktrigger20", offset :8400})
        .setClassToggle("#worktarget20", "fadeInUp")
        .addIndicators({name: "20"})
        .addTo(controller);
  var visitbutton = new ScrollMagic.Scene({triggerElement: "#worktrigger21", offset :8500})
        .setClassToggle("#worktarget21", "fadeInUp")
        .addIndicators({name: "21"})
        .addTo(controller);
}

function seans2(){
  var description1 = new ScrollMagic.Scene({triggerElement: "#worktrigger1", offset :100})
        .setClassToggle("#worktarget1", "fadeInUp")
        .addIndicators({name: "1"})
        .addTo(controller);
  var workoval1 = new ScrollMagic.Scene({triggerElement: "#worktrigger2", offset :200})
        .setClassToggle("#worktarget2", "oval-fade-in1")
        .addIndicators({name: "2"})
        .addTo(controller);
  var comceptimg = new ScrollMagic.Scene({triggerElement: "#worktrigger3", offset :500})
        .setClassToggle("#worktarget3", "fadeInUp")
        .addIndicators({name: "3"})
        .addTo(controller);
  var workoval2 = new ScrollMagic.Scene({triggerElement: "#worktrigger4", offset :800})
        .setClassToggle("#worktarget4", "oval-fade-in2")
        .addIndicators({name: "4"})
        .addTo(controller);
  var workoval3 = new ScrollMagic.Scene({triggerElement: "#worktrigger5", offset :1100})
        .setClassToggle("#worktarget5", "oval-fade-in3")
        .addIndicators({name: "5"})
        .addTo(controller);
  var workoval4 = new ScrollMagic.Scene({triggerElement: "#worktrigger6", offset :1200})
        .setClassToggle("#worktarget6", "oval-fade-in4")
        .addIndicators({name: "6"})
        .addTo(controller);
  var workcolortitle = new ScrollMagic.Scene({triggerElement: "#worktrigger7", offset :1200})
        .setClassToggle("#worktarget7", "fadeInUp")
        .addIndicators({name: "7"})
        .addTo(controller);
  var colorchips = new ScrollMagic.Scene({triggerElement: "#worktrigger8", offset :1300})
        .setClassToggle("#worktarget8", "fadeInUp")
        .addIndicators({name: "8"})
        .addTo(controller);
  var workoval5 = new ScrollMagic.Scene({triggerElement: "#worktrigger9", offset :1600})
        .setClassToggle("#worktarget9", "oval-fade-in5")
        .addIndicators({name: "9"})
        .addTo(controller);
  var workoval6 = new ScrollMagic.Scene({triggerElement: "#worktrigger10", offset :1700})
        .setClassToggle("#worktarget10", "oval-fade-in1")
        .addIndicators({name: "10"})
        .addTo(controller);
  var mobiletext = new ScrollMagic.Scene({triggerElement: "#worktrigger11", offset :2000})
        .setClassToggle("#worktarget11", "fadeInUp")
        .addIndicators({name: "11"})
        .addTo(controller);
  var mobilephone = new ScrollMagic.Scene({triggerElement: "#worktrigger12", offset :1900})
        .setClassToggle("#worktarget12", "oval-fade-in2")
        .addIndicators({name: "12"})
        .addTo(controller);
  var mobilephone2 = new ScrollMagic.Scene({triggerElement: "#worktrigger13", offset :1850})
        .setClassToggle("#worktarget13", "fadeInUp")
        .addIndicators({name: "13"})
        .addTo(controller);
  var mockup = new ScrollMagic.Scene({triggerElement: "#worktrigger14", offset :2500})
        .setClassToggle("#worktarget14", "fadeIn")
        .addIndicators({name: "14"})
        .addTo(controller);
  var workoval7 = new ScrollMagic.Scene({triggerElement: "#worktrigger15", offset :7950})
        .setClassToggle("#worktarget15", "oval-fade-in1")
        .addIndicators({name: "15"})
        .addTo(controller);
  var workoval8 = new ScrollMagic.Scene({triggerElement: "#worktrigger16", offset :8000})
        .setClassToggle("#worktarget16", "oval-fade-in2")
        .addIndicators({name: "16"})
        .addTo(controller);
  var workoval9 = new ScrollMagic.Scene({triggerElement: "#worktrigger17", offset :8050})
        .setClassToggle("#worktarget17", "oval-fade-in3")
        .addIndicators({name: "17"})
        .addTo(controller);
  var workoval10 = new ScrollMagic.Scene({triggerElement: "#worktrigger18", offset :8150})
        .setClassToggle("#worktarget18", "oval-fade-in4")
        .addIndicators({name: "18"})
        .addTo(controller);
  var workoval11 = new ScrollMagic.Scene({triggerElement: "#worktrigger19", offset :8200})
        .setClassToggle("#worktarget19", "oval-fade-in5")
        .addIndicators({name: "19"})
        .addTo(controller);
  var description2 = new ScrollMagic.Scene({triggerElement: "#worktrigger20", offset :8250})
        .setClassToggle("#worktarget20", "fadeInUp")
        .addIndicators({name: "20"})
        .addTo(controller);
  var visitbutton = new ScrollMagic.Scene({triggerElement: "#worktrigger21", offset :8350})
        .setClassToggle("#worktarget21", "fadeInUp")
        .addIndicators({name: "21"})
        .addTo(controller);
}
