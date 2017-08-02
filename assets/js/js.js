// =====================================================
// Content width adjustment
// =====================================================
// $(function(){
//   var clientWidth = $(window).width();
//   var contentWidth = $(document).innerWidth();
//   $("body").css('width', contentWidth);
//   $("#home").css('width', clientWidth);
// });

// =====================================================
// horizontal scroll
// =====================================================
//スクロールスピード
$(function(){
    var speed = 0.8;
    //マウスホイールで横移動
    $('html').mousewheel(function(event, mov) {
        //ie firefox
        $(this).scrollLeft($(this).scrollLeft() - mov * speed);
        //webkit
        $('body').scrollLeft($('body').scrollLeft() - mov * speed);
        return false;   //縦スクロール不可
    });
});


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
$('.go-works').click(function(){
  $('.gnav').addClass('gnav-display');
});
$('.go-contact').click(function(){
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
    .addIndicators({name: "1"})
    .addTo(controller);
var myskillsP = new ScrollMagic.Scene({triggerElement: "#trigger2", offset :450})
    .setClassToggle("#target2", "fadeInDown")
    .addIndicators({name: "2"})
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
      $('.donut-chart.js-chart1').removeClass('js-added-scene');
      $('.donut-chart.js-chart1').empty();
    })
    .addIndicators({name: "3"})
    .addTo(controller);
var myskills2 = new ScrollMagic.Scene({triggerElement: "#trigger4", offset :600})
    .setClassToggle("#target4", "fadeInUp")
    .on("enter",function(){
      var tag = $('.donut-chart.js-chart1');
      if(!$('.donut-chart.js-chart2').hasClass('js-added-scene')){
        $('.donut-chart.js-chart2').addClass('js-added-scene');
        $('.donut-chart.js-chart2').cssCharts({type:"donut"});
      }
    })
    .on("leave",function(){
      $('.donut-chart.js-chart2').removeClass('js-added-scene');
      $('.donut-chart.js-chart2').empty();
    })
    .addIndicators({name: "4"})
    .addTo(controller);
var myskills3 = new ScrollMagic.Scene({triggerElement: "#trigger5", offset :700})
    .setClassToggle("#target5", "fadeInUp")
    .on("enter",function(){
      var tag = $('.donut-chart.js-chart3');
      if(!$('.donut-chart.js-chart3').hasClass('js-added-scene')){
        $('.donut-chart.js-chart3').addClass('js-added-scene');
        $('.donut-chart.js-chart3').cssCharts({type:"donut"});
      }
    })
    .on("leave",function(){
      $('.donut-chart.js-chart3').removeClass('js-added-scene');
      $('.donut-chart.js-chart3').empty();
    })
    .addIndicators({name: "5"})
    .addTo(controller);
var myskills4 = new ScrollMagic.Scene({triggerElement: "#trigger6", offset :800})
    .setClassToggle("#target6", "fadeInUp")
    .on("enter",function(){
      var tag = $('.donut-chart.js-chart4');
      if(!$('.donut-chart.js-chart4').hasClass('js-added-scene')){
        $('.donut-chart.js-chart4').addClass('js-added-scene');
        $('.donut-chart.js-chart4').cssCharts({type:"donut"});
      }
    })
    .on("leave",function(){
      $('.donut-chart.js-chart4').removeClass('js-added-scene');
      $('.donut-chart.js-chart4').empty();
    })
    .addIndicators({name: "6"})
    .addTo(controller);
var myskills5 = new ScrollMagic.Scene({triggerElement: "#trigger7", offset :900})
    .setClassToggle("#target7", "fadeInUp")
    .on("enter",function(){
      var tag = $('.donut-chart.js-chart5');
      if(!$('.donut-chart.js-chart5').hasClass('js-added-scene')){
        $('.donut-chart.js-chart5').addClass('js-added-scene');
        $('.donut-chart.js-chart5').cssCharts({type:"donut"});
      }
    })
    .on("leave",function(){
      $('.donut-chart.js-chart5').removeClass('js-added-scene');
      $('.donut-chart.js-chart5').empty();
    })
    .addIndicators({name: "7"})
    .addTo(controller);
var myskills6 = new ScrollMagic.Scene({triggerElement: "#trigger8", offset :1000})
    .setClassToggle("#target8", "fadeInUp")
    .on("enter",function(){
      var tag = $('.donut-chart.js-chart1');
      if(!$('.donut-chart.js-chart6').hasClass('js-added-scene')){
        $('.donut-chart.js-chart6').addClass('js-added-scene');
        $('.donut-chart.js-chart6').cssCharts({type:"donut"});
      }
    })
    .on("leave",function(){
      $('.donut-chart.js-chart6').removeClass('js-added-scene');
      $('.donut-chart.js-chart6').empty();
    })
    .addIndicators({name: "8"})
    .addTo(controller);
var myskills7 = new ScrollMagic.Scene({triggerElement: "#trigger9", offset :500})
    .setClassToggle("#target9", "fadeInDown")
    .addIndicators({name: "9"})
    .addTo(controller);
var myskills8 = new ScrollMagic.Scene({triggerElement: "#trigger10", offset :600})
    .setClassToggle("#target10", "fadeInDown")
    .addIndicators({name: "10"})
    .addTo(controller);
var myskills9 = new ScrollMagic.Scene({triggerElement: "#trigger11", offset :700})
    .setClassToggle("#target11", "fadeInDown")
    .addIndicators({name: "11"})
    .addTo(controller);
var myskills10 = new ScrollMagic.Scene({triggerElement: "#trigger12", offset :800})
    .setClassToggle("#target12", "fadeInDown")
    .addIndicators({name: "12"})
    .addTo(controller);
var myskills11 = new ScrollMagic.Scene({triggerElement: "#trigger13", offset :900})
    .setClassToggle("#target13", "fadeInDown")
    .addIndicators({name: "13"})
    .addTo(controller);
var myskills12 = new ScrollMagic.Scene({triggerElement: "#trigger14", offset :1000})
    .setClassToggle("#target14", "fadeInDown")
    .addIndicators({name: "14"})
    .addTo(controller);

var career = new ScrollMagic.Scene({triggerElement: "#trigger15", offset :1650})
    .setClassToggle("#target15", "fadeIn")
    .addIndicators({name: "15"})
    .addTo(controller);
var education = new ScrollMagic.Scene({triggerElement: "#trigger16", offset :1800})
    .setClassToggle("#target16", "fadeIn")
    .addIndicators({name: "16"})
    .addTo(controller);
var career1 = new ScrollMagic.Scene({triggerElement: "#trigger17", offset :1300})
    .setClassToggle("#target17", "oval-fade-in1")
    .addIndicators({name: "17"})
    .addTo(controller);
var career2 = new ScrollMagic.Scene({triggerElement: "#trigger18", offset :1800})
    .setClassToggle("#target18", "oval-fade-in2")
    .addIndicators({name: "18"})
    .addTo(controller);
var career3 = new ScrollMagic.Scene({triggerElement: "#trigger19", offset :1800})
    .setClassToggle("#target19", "oval-fade-in3")
    .addIndicators({name: "19"})
    .addTo(controller);
var career4 = new ScrollMagic.Scene({triggerElement: "#trigger20", offset :1800})
    .setClassToggle("#target20", "oval-fade-in4")
    .addIndicators({name: "20"})
    .addTo(controller);
var career5 = new ScrollMagic.Scene({triggerElement: "#trigger21", offset :1800})
    .setClassToggle("#target21", "oval-fade-in5")
    .addIndicators({name: "21"})
    .addTo(controller);

var worksH1 = new ScrollMagic.Scene({triggerElement: "#trigger22", offset :2300})
    .setClassToggle("#target22", "fadeInUp")
    .addIndicators({name: "22"})
    .addTo(controller);
var worksP = new ScrollMagic.Scene({triggerElement: "#trigger23", offset :2450})
    .setClassToggle("#target23", "fadeInUp")
    .addIndicators({name: "23"})
    .addTo(controller);
var works1 = new ScrollMagic.Scene({triggerElement: "#trigger24", offset :2500})
    .setClassToggle("#target24", "oval-fade-in1")
    .addIndicators({name: "24"})
    .addTo(controller);
var works_t1 = new ScrollMagic.Scene({triggerElement: "#trigger25", offset :2600})
    .setClassToggle("#target25", "fadeInDown")
    .addIndicators({name: "25"})
    .addTo(controller);
var works_d1 = new ScrollMagic.Scene({triggerElement: "#trigger26", offset :2700})
    .setClassToggle("#target26", "fadeInDown")
    .addIndicators({name: "26"})
    .addTo(controller);
var works2 = new ScrollMagic.Scene({triggerElement: "#trigger27", offset :3100})
    .setClassToggle("#target27", "oval-fade-in2")
    .addIndicators({name: "27"})
    .addTo(controller);
var works_t2 = new ScrollMagic.Scene({triggerElement: "#trigger28", offset :3200})
    .setClassToggle("#target28", "fadeInUp")
    .addIndicators({name: "28"})
    .addTo(controller);
var works_d2 = new ScrollMagic.Scene({triggerElement: "#trigger29", offset :3300})
    .setClassToggle("#target29", "fadeInUp")
    .addIndicators({name: "29"})
    .addTo(controller);
var works3 = new ScrollMagic.Scene({triggerElement: "#trigger30", offset :4300})
    .setClassToggle("#target30", "oval-fade-in3")
    .addIndicators({name: "30"})
    .addTo(controller);
var works_t3 = new ScrollMagic.Scene({triggerElement: "#trigger31", offset :4600})
    .setClassToggle("#target31", "fadeInUp")
    .addIndicators({name: "31"})
    .addTo(controller);
var works_d3 = new ScrollMagic.Scene({triggerElement: "#trigger32", offset :4700})
    .setClassToggle("#target32", "fadeInUp")
    .addIndicators({name: "32"})
    .addTo(controller);
var works4 = new ScrollMagic.Scene({triggerElement: "#trigger33", offset :5500})
    .setClassToggle("#target33", "oval-fade-in1")
    .addIndicators({name: "33"})
    .addTo(controller);
var works_t4 = new ScrollMagic.Scene({triggerElement: "#trigger34", offset :5600})
    .setClassToggle("#target34", "fadeInDown")
    .addIndicators({name: "34"})
    .addTo(controller);
var works_d4 = new ScrollMagic.Scene({triggerElement: "#trigger35", offset :5700})
    .setClassToggle("#target35", "fadeInDown")
    .addIndicators({name: "35"})
    .addTo(controller);
var works5 = new ScrollMagic.Scene({triggerElement: "#trigger36", offset :6000})
    .setClassToggle("#target36", "oval-fade-in2")
    .addIndicators({name: "36"})
    .addTo(controller);
var works_t5 = new ScrollMagic.Scene({triggerElement: "#trigger37", offset :6100})
    .setClassToggle("#target37", "fadeInUp")
    .addIndicators({name: "37"})
    .addTo(controller);
var works_d5 = new ScrollMagic.Scene({triggerElement: "#trigger38", offset :6200})
    .setClassToggle("#target38", "fadeInUp")
    .addIndicators({name: "38"})
    .addTo(controller);
var works6 = new ScrollMagic.Scene({triggerElement: "#trigger39", offset :6500})
    .setClassToggle("#target39", "oval-fade-in3")
    .addIndicators({name: "39"})
    .addTo(controller);
var works_t6 = new ScrollMagic.Scene({triggerElement: "#trigger40", offset :6600})
    .setClassToggle("#target40", "fadeInDown")
    .addIndicators({name: "40"})
    .addTo(controller);
var works_d6 = new ScrollMagic.Scene({triggerElement: "#trigger41", offset :6700})
    .setClassToggle("#target41", "fadeInDown")
    .addIndicators({name: "41"})
    .addTo(controller);

var works_o1 = new ScrollMagic.Scene({triggerElement: "#trigger42", offset :3200})
    .setClassToggle("#target42", "oval-fade-in4")
    .addIndicators({name: "42"})
    .addTo(controller);
var works_o2 = new ScrollMagic.Scene({triggerElement: "#trigger43", offset :3400})
    .setClassToggle("#target43", "oval-fade-in5")
    .addIndicators({name: "43"})
    .addTo(controller);
var works_o3 = new ScrollMagic.Scene({triggerElement: "#trigger44", offset :3800})
    .setClassToggle("#target44", "oval-fade-in1")
    .addIndicators({name: "44"})
    .addTo(controller);
var works_o4 = new ScrollMagic.Scene({triggerElement: "#trigger45", offset :4000})
    .setClassToggle("#target45", "oval-fade-in2")
    .addIndicators({name: "45"})
    .addTo(controller);
var works_o5 = new ScrollMagic.Scene({triggerElement: "#trigger46", offset :5200})
    .setClassToggle("#target46", "oval-fade-in3")
    .addIndicators({name: "46"})
    .addTo(controller);
var works_o6 = new ScrollMagic.Scene({triggerElement: "#trigger47", offset :5800})
    .setClassToggle("#target47", "oval-fade-in4")
    .addIndicators({name: "47"})
    .addTo(controller);
var works_o7 = new ScrollMagic.Scene({triggerElement: "#trigger48", offset :6200})
    .setClassToggle("#target48", "oval-fade-in5")
    .addIndicators({name: "48"})
    .addTo(controller);
var works_o8 = new ScrollMagic.Scene({triggerElement: "#trigger49", offset :6400})
    .setClassToggle("#target49", "oval-fade-in1")
    .addIndicators({name: "49"})
    .addTo(controller);
var works_o9 = new ScrollMagic.Scene({triggerElement: "#trigger50", offset :6800})
    .setClassToggle("#target50", "oval-fade-in2")
    .addIndicators({name: "50"})
    .addTo(controller);

var works_h2 = new ScrollMagic.Scene({triggerElement: "#trigger51", offset :3900})
    .setClassToggle("#target51", "oval-fade-in3")
    .addIndicators({name: "51"})
    .addTo(controller);

var oworksH2 = new ScrollMagic.Scene({triggerElement: "#trigger52", offset :7400})
    .setClassToggle("#target52", "fadeInUp")
    .addIndicators({name: "52"})
    .addTo(controller);

var oworks_1 = new ScrollMagic.Scene({triggerElement: "#trigger54", offset :7700})
    .setClassToggle("#target54", "oval-fade-in1-o")
    .addIndicators({name: "54"})
    .addTo(controller);
var oworks_2 = new ScrollMagic.Scene({triggerElement: "#trigger55", offset :7800})
    .setClassToggle("#target55", "oval-fade-in1-o")
    .addIndicators({name: "55"})
    .addTo(controller);
var oworks_3 = new ScrollMagic.Scene({triggerElement: "#trigger56", offset :7900})
    .setClassToggle("#target56", "oval-fade-in1-o")
    .addIndicators({name: "56"})
    .addTo(controller);
var oworks_4 = new ScrollMagic.Scene({triggerElement: "#trigger57", offset :8000})
    .setClassToggle("#target57", "oval-fade-in1-o")
    .addIndicators({name: "57"})
    .addTo(controller);
var oworks_5 = new ScrollMagic.Scene({triggerElement: "#trigger58", offset :8100})
    .setClassToggle("#target58", "oval-fade-in1-o")
    .addIndicators({name: "58"})
    .addTo(controller);

var oworks_o1 = new ScrollMagic.Scene({triggerElement: "#trigger53", offset :7500})
    .setClassToggle("#target53", "oval-fade-in4")
    .addIndicators({name: "53"})
    .addTo(controller);
var oworks_o2 = new ScrollMagic.Scene({triggerElement: "#trigger61", offset :7550})
    .setClassToggle("#target61", "oval-fade-in5")
    .addIndicators({name: "61"})
    .addTo(controller);
var oworks_o3 = new ScrollMagic.Scene({triggerElement: "#trigger62", offset :7650})
    .setClassToggle("#target62", "oval-fade-in1")
    .addIndicators({name: "62"})
    .addTo(controller);
var oworks_o4 = new ScrollMagic.Scene({triggerElement: "#trigger63", offset :7750})
    .setClassToggle("#target63", "oval-fade-in2")
    .addIndicators({name: "63"})
    .addTo(controller);
var oworks_o5 = new ScrollMagic.Scene({triggerElement: "#trigger64", offset :7850})
    .setClassToggle("#target64", "oval-fade-in3")
    .addIndicators({name: "64"})
    .addTo(controller);
var oworks_o6 = new ScrollMagic.Scene({triggerElement: "#trigger65", offset :7950})
    .setClassToggle("#target65", "oval-fade-in4")
    .addIndicators({name: "65"})
    .addTo(controller);
var oworks_o7 = new ScrollMagic.Scene({triggerElement: "#trigger66", offset :8050})
    .setClassToggle("#target66", "oval-fade-in5")
    .addIndicators({name: "66"})
    .addTo(controller);
var oworks_o8 = new ScrollMagic.Scene({triggerElement: "#trigger67", offset :8150})
    .setClassToggle("#target67", "oval-fade-in1")
    .addIndicators({name: "67"})
    .addTo(controller);
var oworks_o9 = new ScrollMagic.Scene({triggerElement: "#trigger68", offset :8250})
    .setClassToggle("#target68", "oval-fade-in2")
    .addIndicators({name: "68"})
    .addTo(controller);
var oworks_o10 = new ScrollMagic.Scene({triggerElement: "#trigger69", offset :7450})
    .setClassToggle("#target69", "oval-fade-in3")
    .addIndicators({name: "69"})
    .addTo(controller);

var cworks = new ScrollMagic.Scene({triggerElement: "#trigger59", offset :8200})
    .setClassToggle("#target59", "oval-fade-in1")
    .addIndicators({name: "59"})
    .addTo(controller);
var cworksd = new ScrollMagic.Scene({triggerElement: "#trigger60", offset :8200})
    .setClassToggle("#target60", "oval-fade-in1")
    .addIndicators({name: "60"})
    .addTo(controller);

var contact_o1 = new ScrollMagic.Scene({triggerElement: "#trigger70", offset :8800})
    .setClassToggle("#target70", "oval-fade-in3")
    .addIndicators({name: "70"})
    .addTo(controller);
var contact_o2 = new ScrollMagic.Scene({triggerElement: "#trigger71", offset :8900})
    .setClassToggle("#target71", "oval-fade-in3")
    .addIndicators({name: "71"})
    .addTo(controller);
var contact_o3 = new ScrollMagic.Scene({triggerElement: "#trigger72", offset :9000})
    .setClassToggle("#target72", "oval-fade-in3")
    .addIndicators({name: "72"})
    .addTo(controller);
var contact_o4 = new ScrollMagic.Scene({triggerElement: "#trigger73", offset :9100})
    .setClassToggle("#target73", "oval-fade-in3")
    .addIndicators({name: "73"})
    .addTo(controller);
var contact_o5 = new ScrollMagic.Scene({triggerElement: "#trigger74", offset :9200})
    .setClassToggle("#target74", "oval-fade-in3")
    .addIndicators({name: "74"})
    .addTo(controller);

var contact_h1 = new ScrollMagic.Scene({triggerElement: "#trigger75", offset :9150})
    .setClassToggle("#target75", "fadeInDown")
    .addIndicators({name: "75"})
    .addTo(controller);
var contact_linkedin = new ScrollMagic.Scene({triggerElement: "#trigger76", offset :9250})
    .setClassToggle("#target76", "fadeInDown")
    .addIndicators({name: "76"})
    .addTo(controller);
var contact_dribbble = new ScrollMagic.Scene({triggerElement: "#trigger77", offset :9300})
    .setClassToggle("#target77", "fadeInDown")
    .addIndicators({name: "77"})
    .addTo(controller);
var contact_mail = new ScrollMagic.Scene({triggerElement: "#trigger78", offset :9350})
    .setClassToggle("#target78", "fadeInDown")
    .addIndicators({name: "78"})
    .addTo(controller);

//parallax1
var tween1 = new TimelineMax ()
       .add([
           TweenMax.to("#parallaxTarget1", 10, {left: "-500", ease: Linear.easeNone})
       ]);
var parallaxHeaderOval4 = new ScrollMagic.Scene({triggerElement: "#about", duration: $(window).width(),offset :-750})
    .setTween(tween1)
    .setPin("#parallaxTarget1")
    .addIndicators({name: "parallax1"})
    .addTo(controller);
//parallax2
var tween2 = new TimelineMax ()
       .add([
           TweenMax.to("#parallaxTarget2", 1, {left: "-3000", ease: Linear.easeNone})
       ]);
var parallaxHeaderOval1 = new ScrollMagic.Scene({triggerElement: "#home", duration: $(window).width(),offset :730})
    .setTween(tween2)
    .setPin("#parallaxTarget2")
    .addIndicators({name: "parallax2"})
    .addTo(controller);
//parallax3
var tween3 = new TimelineMax ()
       .add([
           TweenMax.to("#parallaxTarget3", 5, {left: "-2000", ease: Linear.easeNone})
       ]);
var parallaxHeaderOval2 = new ScrollMagic.Scene({triggerElement: "#home", duration: $(window).width(),offset :730})
    .setTween(tween3)
    .setPin("#parallaxTarget3")
    .addIndicators({name: "parallax3"})
    .addTo(controller);
//parallax4
var tween4 = new TimelineMax ()
       .add([
           TweenMax.to("#parallaxTarget4", 10, {left: "-1800", ease: Linear.easeNone})
       ]);
var parallaxHeaderOval3 = new ScrollMagic.Scene({triggerElement: "#home", duration: $(window).width(),offset :730})
    .setTween(tween4)
    .setPin("#parallaxTarget4")
    .addIndicators({name: "parallax4"})
    .addTo(controller);
//parallax5
var tween5 = new TimelineMax ()
       .add([
           TweenMax.to("#parallaxTarget5", 10, {left: "-1800", ease: Linear.easeNone})
       ]);
var parallaxHeaderOval5 = new ScrollMagic.Scene({triggerElement: "#home", duration: $(window).width(),offset :830})
    .setTween(tween5)
    .setPin("#parallaxTarget5")
    .addIndicators({name: "parallax5"})
    .addTo(controller);
//parallax6
var tween6 = new TimelineMax ()
       .add([
           TweenMax.to("#parallaxTarget6", 10, {left: "-2800", ease: Linear.easeNone})
       ]);
var parallaxHeaderBgOval = new ScrollMagic.Scene({triggerElement: "#home", duration: $(window).width(),offset :650})
    .setTween(tween6)
    .setPin("#parallaxTarget6")
    .addIndicators({name: "parallax6"})
    .addTo(controller);


// =====================================================
// smooth scroll
// =====================================================


// =====================================================
// header animation
// =====================================================
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
