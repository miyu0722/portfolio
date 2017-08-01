$(function(){
// =====================================================
// skills charts
// =====================================================
// $('.donut-chart').cssCharts({type:"donut"});


// =====================================================
// navigation
// =====================================================
// show navigation menu
$('.logo').click(function(){
  $('.gnav').toggleClass('gnav-display');
});
$('.go-home').click(function(){
  $('.gnav').addClass('gnav-display');
});
$('.go-skils').click(function(){
  $('.gnav').addClass('gnav-display');
});

// =====================================================
// Horizon scroll
// =====================================================
// 全体を制御するコントローラをつくります
var controller = new ScrollMagic.Controller({vertical: false});
// トリガーになる位置を指定してアニメーションを設定する
// Sceneクラスが名前が変更されています。
var myskillsH1 = new ScrollMagic.Scene({triggerElement: "#trigger1", offset :250})
    .setClassToggle("#target1", "fadeInDown")
    .addIndicators({name: "1 (duration: 300)"})
    .addTo(controller);
var myskillsP = new ScrollMagic.Scene({triggerElement: "#trigger2", offset :450})
    .setClassToggle("#target2", "fadeInDown")
    .addIndicators({name: "2 (duration: 300)"})
    .addTo(controller);

var myskills1 = new ScrollMagic.Scene({triggerElement: "#trigger3", offset :500})
    .setClassToggle("#target3", "fadeInUp")
    .on("enter",function(){
      var tag = $('.donut-chart.js-chart1');
      if(!$('.donut-chart.js-chart1').hasClass('js-added-scene')){
        $('.donut-chart.js-chart1').addClass('js-added-scene');
        $('.donut-chart.js-chart1').cssCharts({type:"donut"});
      }
    })
    .on("leave",function(){
      console.log('here');
      $('.donut-chart.js-chart1').removeClass('js-added-scene');
      $('.donut-chart.js-chart1').empty();
    })
    .addIndicators({name: "3 (duration: 200)"})
    .addTo(controller);
var myskills2 = new ScrollMagic.Scene({triggerElement: "#trigger4", offset :600})
    .setClassToggle("#target4", "fadeInUp")
    .on("enter",function(){
      $('.donut-chart.js-chart2').cssCharts({type:"donut"});
    })
    .addIndicators({name: "4 (duration: 200)"})
    .addTo(controller);
var myskills3 = new ScrollMagic.Scene({triggerElement: "#trigger5", offset :700})
    .setClassToggle("#target5", "fadeInUp")
    .on("enter",function(){
      $('.donut-chart.js-chart3').cssCharts({type:"donut"});
    })
    .addIndicators({name: "5 (duration: 200)"})
    .addTo(controller);
var myskills4 = new ScrollMagic.Scene({triggerElement: "#trigger6", offset :800})
    .setClassToggle("#target6", "fadeInUp")
    .on("enter",function(){
      $('.donut-chart.js-chart4').cssCharts({type:"donut"});
    })
    .addIndicators({name: "6 (duration: 200)"})
    .addTo(controller);
var myskills5 = new ScrollMagic.Scene({triggerElement: "#trigger7", offset :900})
    .setClassToggle("#target7", "fadeInUp")
    .on("enter",function(){
      $('.donut-chart.js-chart5').cssCharts({type:"donut"});
    })
    .addIndicators({name: "7(duration: 200)"})
    .addTo(controller);
var myskills6 = new ScrollMagic.Scene({triggerElement: "#trigger8", offset :1000})
    .setClassToggle("#target8", "fadeInUp")
    .on("enter",function(){
      $('.donut-chart.js-chart6').cssCharts({type:"donut"});
    })
    .addIndicators({name: "8 (duration: 200)"})
    .addTo(controller);
var myskills7 = new ScrollMagic.Scene({triggerElement: "#trigger9", offset :500})
    .setClassToggle("#target9", "fadeInDown")
    .addIndicators({name: "9 (duration: 200)"})
    .addTo(controller);
var myskills8 = new ScrollMagic.Scene({triggerElement: "#trigger10", offset :600})
    .setClassToggle("#target10", "fadeInDown")
    .on("enter",function(){
      $('.donut-chart.js-chart2').cssCharts({type:"donut"});
    })
    .addIndicators({name: "10 (duration: 200)"})
    .addTo(controller);
var myskills9 = new ScrollMagic.Scene({triggerElement: "#trigger11", offset :700})
    .setClassToggle("#target11", "fadeInDown")
    .on("enter",function(){
      $('.donut-chart.js-chart3').cssCharts({type:"donut"});
    })
    .addIndicators({name: "11 (duration: 200)"})
    .addTo(controller);
var myskills10 = new ScrollMagic.Scene({triggerElement: "#trigger12", offset :800})
    .setClassToggle("#target12", "fadeInDown")
    .on("enter",function(){
      $('.donut-chart.js-chart4').cssCharts({type:"donut"});
    })
    .addIndicators({name: "12 (duration: 200)"})
    .addTo(controller);
var myskills11 = new ScrollMagic.Scene({triggerElement: "#trigger13", offset :900})
    .setClassToggle("#target13", "fadeInDown")
    .on("enter",function(){
      $('.donut-chart.js-chart5').cssCharts({type:"donut"});
    })
    .addIndicators({name: "13(duration: 200)"})
    .addTo(controller);
var myskills12 = new ScrollMagic.Scene({triggerElement: "#trigger14", offset :1000})
    .setClassToggle("#target14", "fadeInDown")
    .on("enter",function(){
      $('.donut-chart.js-chart6').cssCharts({type:"donut"});
    })
    .addIndicators({name: "14 (duration: 200)"})
    .addTo(controller);

var career = new ScrollMagic.Scene({triggerElement: "#trigger15", offset :1600})
    .setClassToggle("#target15", "fadeIn")
    .addIndicators({name: "15 (duration: 300)"})
    .addTo(controller);
var education = new ScrollMagic.Scene({triggerElement: "#trigger16", offset :1750})
    .setClassToggle("#target16", "fadeIn")
    .addIndicators({name: "16 (duration: 300)"})
    .addTo(controller);
var career1 = new ScrollMagic.Scene({triggerElement: "#trigger17", offset :1500})
    .setClassToggle("#target17", "fadeIn")
    .addIndicators({name: "17 (duration: 300)"})
    .addTo(controller);

// =====================================================
// smooth scroll
// =====================================================
});

// =====================================================
// huwahuwa
// =====================================================
// $(function(){
//   var initialLocationX = [];
//   var initialLocationY = [];
//
//   initialLocationX.push(parseFloat($(".header-oval1").css("left").replace(/px/g,"")));
//   initialLocationY.push(parseFloat($(".header-oval1").css("top").replace(/px/g,"")));
//   initialLocationX.push(parseFloat($(".header-oval2").css("left").replace(/px/g,"")));
//   initialLocationY.push(parseFloat($(".header-oval2").css("top").replace(/px/g,"")));
//
//   var rnd = function(){
//     var rnd = {};
//     var sw = Math.floor(Math.random() * 2) === 0 ? 1 : -1;
//     rnd.x = Math.floor( Math.random() * 20 )+20 * sw;
//     rnd.y = Math.floor( Math.random() * 20 )+20 * sw;
//     return rnd;
//   };
//
//   setInterval(function(){
//       $(".header-oval1").animate({
//       	"left": (rnd().x + initialLocationX[0]) + "px",
//       	"top": (rnd().y + initialLocationY[0]) + "px"
//       },5000);
//       $(".header-oval2").animate({
//         "left": (rnd().x + initialLocationX[1]) + "px",
//       	"top": (rnd().y + initialLocationY[1]) + "px"
//       },5000);
//   },500);
// });

// =====================================================
// header animation
// =====================================================
$(function(){
  //Title
  var optionsTitle1 = {
  duration: 1000,
  delay: 300,
  direction: 'alternate',
  fill: 'both',
  id: 'myAnimation'
  };
  var optionsTitle2 = {
  duration: 1500,
  delay: 200,
  direction: 'alternate',
  fill: 'both',
  id: 'myAnimation'
  };
  var optionsTitle3 = {
  duration: 2100,
  delay: 200,
  direction: 'alternate',
  fill: 'both',
  id: 'myAnimation'
  };
  var optionsTitle4 = {
  duration: 2100,
  delay: 2000,
  direction: 'alternate',
  fill: 'both',
  id: 'myAnimation'
  };
  var optionsTitle5 = {
  duration: 1500,
  delay: 2500,
  direction: 'alternate',
  fill: 'both',
  id: 'myAnimation'
  };
  var optionsTitle6 = {
  duration: 1500,
  delay: 3000,
  direction: 'alternate',
  fill: 'both',
  id: 'myAnimation'
  };
  window.animatelo.fadeInUpBig('#title1',optionsTitle1);
  window.animatelo.fadeInDownBig('#title2',optionsTitle2);
  window.animatelo.fadeInUpBig('#title3',optionsTitle3);
  window.animatelo.fadeIn('#title4',optionsTitle4);
  window.animatelo.fadeIn('#title5',optionsTitle5);
  window.animatelo.fadeIn('#title6',optionsTitle6);
});
