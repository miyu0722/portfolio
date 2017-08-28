// =====================================================
// Bodyに幅を指定するjQuery用スクリプト
// =====================================================
function bodySizeAdjustment(){
    var windowSize = $(window).innerWidth();
    var mainWidth = $('main').innerWidth();
    $('body').css('width', windowSize + mainWidth);
}

$(window).on('load', function(){
    //サイトのデータを全て読み込んだ後に実行
    bodySizeAdjustment();
});
// =====================================================
// horizontal scroll
// =====================================================
$(function(){
  $(window).on('resize',function(){
       //ウィンドウのサイズが変わったら実行
       bodySizeAdjustment();
  });

// =====================================================
// Horizon scroll
// =====================================================
var controller = null; //コントローラーをNullで初期化

if($(window).width() <= 800){
  //Tablet以下
  controller = new ScrollMagic.Controller({vertical: true});
  seans2();
} else {
  //PC
  controller = new ScrollMagic.Controller({vertical: false});
  seans();
}

// ウインドウがリサイズされたら発火
$(window).on('resize',function(){
  if($(window).width() <= 800){
    if(controller){
      //ウインドウサイズが800px以下で且つコントローラーが存在した場合、それを削除。
      //その後新しいコントローラーをインスタンス化
      controller = controller.destroy(true);
      controller = new ScrollMagic.Controller({vertical: true});
      //縦用シーン
      seans2();
    }
  } else {
    if(controller){
      //強引にページの一番上に戻す。
      $("html,body").animate({scrollTop:0},0);
      //ウインドウサイズが800px以下で且つコントローラーが存在した場合、それを削除。
      //その後新しいコントローラーをインスタンス化
      controller = controller.destroy(true);
      controller = new ScrollMagic.Controller({vertical: false});
      // 横用シーン
      seans();
    }
  }
});

function seans(){
  // トリガーになる位置を指定してアニメーションを設定する
  // Sceneクラスが名前が変更されています。
  var skilsOvalA = new ScrollMagic.Scene({triggerElement: "#triggerA", offset :50, reverse:true})
        .setClassToggle("#targetA", "oval-fade-in1")
        .addIndicators({name: "A"})
        .addTo(controller);
  var skilsOvalB = new ScrollMagic.Scene({triggerElement: "#triggerB", offset :100, reverse:true})
        .setClassToggle("#targetB", "oval-fade-in1")
        .addIndicators({name: "B"})
        .addTo(controller);

  var myskillsH1 = new ScrollMagic.Scene({triggerElement: "#trigger1", offset :100, reverse:true})
      .setClassToggle("#target1", "fadeInDown")
      .addIndicators({name: "1"})
      .addTo(controller);
  var myskillsP = new ScrollMagic.Scene({triggerElement: "#trigger2", offset :200, reverse:true})
      .setClassToggle("#target2", "fadeInDown")
      .addIndicators({name: "2"})
      .addTo(controller);

  var myskills1 = new ScrollMagic.Scene({triggerElement: "#trigger3", offset :300, reverse:true})
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
  var myskills2 = new ScrollMagic.Scene({triggerElement: "#trigger4", offset :400, reverse:true})
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
  var myskills3 = new ScrollMagic.Scene({triggerElement: "#trigger5", offset :500, reverse:true})
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
  var myskills4 = new ScrollMagic.Scene({triggerElement: "#trigger6", offset :600, reverse:true})
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
  var myskills5 = new ScrollMagic.Scene({triggerElement: "#trigger7", offset :700, reverse:true})
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
  var myskills6 = new ScrollMagic.Scene({triggerElement: "#trigger8", offset :800, reverse:true})
      .setClassToggle("#target8", "fadeInUp")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart6');
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
  var myskills7 = new ScrollMagic.Scene({triggerElement: "#trigger9", offset :300, reverse:true})
      .setClassToggle("#target9", "fadeInDown")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart7');
        if(!$('.donut-chart.js-chart7').hasClass('js-added-scene')){
          $('.donut-chart.js-chart7').addClass('js-added-scene');
          $('.donut-chart.js-chart7').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart7').removeClass('js-added-scene');
        $('.donut-chart.js-chart7').empty();
      })
      .addIndicators({name: "9"})
      .addTo(controller);
  var myskills8 = new ScrollMagic.Scene({triggerElement: "#trigger10", offset :400, reverse:true})
      .setClassToggle("#target10", "fadeInDown")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart8');
        if(!$('.donut-chart.js-chart8').hasClass('js-added-scene')){
          $('.donut-chart.js-chart8').addClass('js-added-scene');
          $('.donut-chart.js-chart8').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart8').removeClass('js-added-scene');
        $('.donut-chart.js-chart8').empty();
      })
      .addIndicators({name: "10"})
      .addTo(controller);
  var myskills9 = new ScrollMagic.Scene({triggerElement: "#trigger11", offset :500, reverse:true})
      .setClassToggle("#target11", "fadeInDown")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart9');
        if(!$('.donut-chart.js-chart9').hasClass('js-added-scene')){
          $('.donut-chart.js-chart9').addClass('js-added-scene');
          $('.donut-chart.js-chart9').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart9').removeClass('js-added-scene');
        $('.donut-chart.js-chart9').empty();
      })
      .addIndicators({name: "11"})
      .addTo(controller);
  var myskills10 = new ScrollMagic.Scene({triggerElement: "#trigger12", offset :600, reverse:true})
      .setClassToggle("#target12", "fadeInDown")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart10');
        if(!$('.donut-chart.js-chart10').hasClass('js-added-scene')){
          $('.donut-chart.js-chart10').addClass('js-added-scene');
          $('.donut-chart.js-chart10').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart10').removeClass('js-added-scene');
        $('.donut-chart.js-chart10').empty();
      })
      .addIndicators({name: "12"})
      .addTo(controller);
  var myskills11 = new ScrollMagic.Scene({triggerElement: "#trigger13", offset :700, reverse:true})
      .setClassToggle("#target13", "fadeInDown")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart11');
        if(!$('.donut-chart.js-chart11').hasClass('js-added-scene')){
          $('.donut-chart.js-chart11').addClass('js-added-scene');
          $('.donut-chart.js-chart11').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart11').removeClass('js-added-scene');
        $('.donut-chart.js-chart11').empty();
      })
      .addIndicators({name: "13"})
      .addTo(controller);
  var myskills12 = new ScrollMagic.Scene({triggerElement: "#trigger14", offset :800, reverse:true})
      .setClassToggle("#target14", "fadeInDown")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart12');
        if(!$('.donut-chart.js-chart12').hasClass('js-added-scene')){
          $('.donut-chart.js-chart12').addClass('js-added-scene');
          $('.donut-chart.js-chart12').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart12').removeClass('js-added-scene');
        $('.donut-chart.js-chart12').empty();
      })
      .addIndicators({name: "14"})
      .addTo(controller);

  var career = new ScrollMagic.Scene({triggerElement: "#trigger15", offset :1200, reverse:true})
      .setClassToggle("#target15", "fadeIn")
      .addIndicators({name: "15"})
      .addTo(controller);
  var education = new ScrollMagic.Scene({triggerElement: "#trigger16", offset :1300, reverse:true})
      .setClassToggle("#target16", "fadeIn")
      .addIndicators({name: "16"})
      .addTo(controller);
  var career1 = new ScrollMagic.Scene({triggerElement: "#trigger17", offset :1000, reverse:true})
      .setClassToggle("#target17", "oval-fade-in1")
      .addIndicators({name: "17"})
      .addTo(controller);
  var career2 = new ScrollMagic.Scene({triggerElement: "#trigger18", offset :1100, reverse:true})
      .setClassToggle("#target18", "oval-fade-in2")
      .addIndicators({name: "18"})
      .addTo(controller);
  var career3 = new ScrollMagic.Scene({triggerElement: "#trigger19", offset :1200, reverse:true})
      .setClassToggle("#target19", "oval-fade-in3")
      .addIndicators({name: "19"})
      .addTo(controller);
  var career4 = new ScrollMagic.Scene({triggerElement: "#trigger20", offset :1300, reverse:true})
      .setClassToggle("#target20", "oval-fade-in4")
      .addIndicators({name: "20"})
      .addTo(controller);
  var career5 = new ScrollMagic.Scene({triggerElement: "#trigger21", offset :1400, reverse:true})
      .setClassToggle("#target21", "oval-fade-in5")
      .addIndicators({name: "21"})
      .addTo(controller);

  var worksH1 = new ScrollMagic.Scene({triggerElement: "#trigger22", offset :2000, reverse:true})
      .setClassToggle("#target22", "fadeInUp")
      .addIndicators({name: "22"})
      .addTo(controller);
  var worksP = new ScrollMagic.Scene({triggerElement: "#trigger23", offset :2100, reverse:true})
      .setClassToggle("#target23", "fadeInUp")
      .addIndicators({name: "23"})
      .addTo(controller);
  var works1 = new ScrollMagic.Scene({triggerElement: "#trigger24", offset :2200, reverse:true})
      .setClassToggle("#target24", "oval-fade-in1")
      .addIndicators({name: "24"})
      .addTo(controller);
  var works_t1 = new ScrollMagic.Scene({triggerElement: "#trigger25", offset :2300, reverse:true})
      .setClassToggle("#target25", "fadeInDown")
      .addIndicators({name: "25"})
      .addTo(controller);
  var works_d1 = new ScrollMagic.Scene({triggerElement: "#trigger26", offset :2400, reverse:true})
      .setClassToggle("#target26", "fadeInDown")
      .addIndicators({name: "26"})
      .addTo(controller);
  var works2 = new ScrollMagic.Scene({triggerElement: "#trigger27", offset :2700, reverse:true})
      .setClassToggle("#target27", "oval-fade-in2")
      .addIndicators({name: "27"})
      .addTo(controller);
  var works_t2 = new ScrollMagic.Scene({triggerElement: "#trigger28", offset :2800, reverse:true})
      .setClassToggle("#target28", "fadeInUp")
      .addIndicators({name: "28"})
      .addTo(controller);
  var works_d2 = new ScrollMagic.Scene({triggerElement: "#trigger29", offset :2900, reverse:true})
      .setClassToggle("#target29", "fadeInUp")
      .addIndicators({name: "29"})
      .addTo(controller);
  var works3 = new ScrollMagic.Scene({triggerElement: "#trigger30", offset :4000, reverse:true})
      .setClassToggle("#target30", "oval-fade-in3")
      .addIndicators({name: "30"})
      .addTo(controller);
  var works_t3 = new ScrollMagic.Scene({triggerElement: "#trigger31", offset :4600, reverse:true})
      .setClassToggle("#target31", "fadeInUp")
      .addIndicators({name: "31"})
      .addTo(controller);
  var works_d3 = new ScrollMagic.Scene({triggerElement: "#trigger32", offset :4700, reverse:true})
      .setClassToggle("#target32", "fadeInUp")
      .addIndicators({name: "32"})
      .addTo(controller);
  var works4 = new ScrollMagic.Scene({triggerElement: "#trigger33", offset :5000, reverse:true})
      .setClassToggle("#target33", "oval-fade-in1")
      .addIndicators({name: "33"})
      .addTo(controller);
  var works_t4 = new ScrollMagic.Scene({triggerElement: "#trigger34", offset :5200, reverse:true})
      .setClassToggle("#target34", "fadeInDown")
      .addIndicators({name: "34"})
      .addTo(controller);
  var works_d4 = new ScrollMagic.Scene({triggerElement: "#trigger35", offset :5300, reverse:true})
      .setClassToggle("#target35", "fadeInDown")
      .addIndicators({name: "35"})
      .addTo(controller);
  var works5 = new ScrollMagic.Scene({triggerElement: "#trigger36", offset :5500, reverse:true})
      .setClassToggle("#target36", "oval-fade-in2")
      .addIndicators({name: "36"})
      .addTo(controller);
  var works_t5 = new ScrollMagic.Scene({triggerElement: "#trigger37", offset :5700, reverse:true})
      .setClassToggle("#target37", "fadeInUp")
      .addIndicators({name: "37"})
      .addTo(controller);
  var works_d5 = new ScrollMagic.Scene({triggerElement: "#trigger38", offset :5800, reverse:true})
      .setClassToggle("#target38", "fadeInUp")
      .addIndicators({name: "38"})
      .addTo(controller);
  var works6 = new ScrollMagic.Scene({triggerElement: "#trigger39", offset :6400, reverse:true})
      .setClassToggle("#target39", "oval-fade-in3")
      .addIndicators({name: "39"})
      .addTo(controller);
  var works_t6 = new ScrollMagic.Scene({triggerElement: "#trigger40", offset :6600, reverse:true})
      .setClassToggle("#target40", "fadeInDown")
      .addIndicators({name: "40"})
      .addTo(controller);
  var works_d6 = new ScrollMagic.Scene({triggerElement: "#trigger41", offset :6700, reverse:true})
      .setClassToggle("#target41", "fadeInDown")
      .addIndicators({name: "41"})
      .addTo(controller);

  var works_o1 = new ScrollMagic.Scene({triggerElement: "#trigger42", offset :3000, reverse:true})
      .setClassToggle("#target42", "oval-fade-in4")
      .addIndicators({name: "42"})
      .addTo(controller);
  var works_o2 = new ScrollMagic.Scene({triggerElement: "#trigger43", offset :3400, reverse:true})
      .setClassToggle("#target43", "oval-fade-in5")
      .addIndicators({name: "43"})
      .addTo(controller);
  var works_o3 = new ScrollMagic.Scene({triggerElement: "#trigger44", offset :3800, reverse:true})
      .setClassToggle("#target44", "oval-fade-in1")
      .addIndicators({name: "44"})
      .addTo(controller);
  var works_o4 = new ScrollMagic.Scene({triggerElement: "#trigger45", offset :4000, reverse:true})
      .setClassToggle("#target45", "oval-fade-in2")
      .addIndicators({name: "45"})
      .addTo(controller);
  var works_o5 = new ScrollMagic.Scene({triggerElement: "#trigger46", offset :5100, reverse:true})
      .setClassToggle("#target46", "oval-fade-in3")
      .addIndicators({name: "46"})
      .addTo(controller);
  var works_o6 = new ScrollMagic.Scene({triggerElement: "#trigger47", offset :5800, reverse:true})
      .setClassToggle("#target47", "oval-fade-in4")
      .addIndicators({name: "47"})
      .addTo(controller);
  var works_o7 = new ScrollMagic.Scene({triggerElement: "#trigger48", offset :6200, reverse:true})
      .setClassToggle("#target48", "oval-fade-in5")
      .addIndicators({name: "48"})
      .addTo(controller);
  var works_o8 = new ScrollMagic.Scene({triggerElement: "#trigger49", offset :6400, reverse:true})
      .setClassToggle("#target49", "oval-fade-in1")
      .addIndicators({name: "49"})
      .addTo(controller);
  var works_o9 = new ScrollMagic.Scene({triggerElement: "#trigger50", offset :6800, reverse:true})
      .setClassToggle("#target50", "oval-fade-in2")
      .addIndicators({name: "50"})
      .addTo(controller);

  var works_h2 = new ScrollMagic.Scene({triggerElement: "#trigger51", offset :3500, reverse:true})
      .setClassToggle("#target51", "oval-fade-in3")
      .addIndicators({name: "51"})
      .addTo(controller);

  var oworksH2 = new ScrollMagic.Scene({triggerElement: "#trigger52", offset :7400, reverse:true})
      .setClassToggle("#target52", "fadeInUp")
      .addIndicators({name: "52"})
      .addTo(controller);

  var oworks_1 = new ScrollMagic.Scene({triggerElement: "#trigger54", offset :7700, reverse:true})
      .setClassToggle("#target54", "oval-fade-in1-o")
      .addIndicators({name: "54"})
      .addTo(controller);
  var oworks_2 = new ScrollMagic.Scene({triggerElement: "#trigger55", offset :7800, reverse:true})
      .setClassToggle("#target55", "oval-fade-in1-o")
      .addIndicators({name: "55"})
      .addTo(controller);
  var oworks_3 = new ScrollMagic.Scene({triggerElement: "#trigger56", offset :7900, reverse:true})
      .setClassToggle("#target56", "oval-fade-in1-o")
      .addIndicators({name: "56"})
      .addTo(controller);
  var oworks_4 = new ScrollMagic.Scene({triggerElement: "#trigger57", offset :8000, reverse:true})
      .setClassToggle("#target57", "oval-fade-in1-o")
      .addIndicators({name: "57"})
      .addTo(controller);
  var oworks_5 = new ScrollMagic.Scene({triggerElement: "#trigger58", offset :8100, reverse:true})
      .setClassToggle("#target58", "oval-fade-in1-o")
      .addIndicators({name: "58"})
      .addTo(controller);

  var oworks_o1 = new ScrollMagic.Scene({triggerElement: "#trigger53", offset :7500, reverse:true})
      .setClassToggle("#target53", "oval-fade-in4")
      .addIndicators({name: "53"})
      .addTo(controller);
  var oworks_o2 = new ScrollMagic.Scene({triggerElement: "#trigger61", offset :7550, reverse:true})
      .setClassToggle("#target61", "oval-fade-in5")
      .addIndicators({name: "61"})
      .addTo(controller);
  var oworks_o3 = new ScrollMagic.Scene({triggerElement: "#trigger62", offset :7650, reverse:true})
      .setClassToggle("#target62", "oval-fade-in1")
      .addIndicators({name: "62"})
      .addTo(controller);
  var oworks_o4 = new ScrollMagic.Scene({triggerElement: "#trigger63", offset :7750, reverse:true})
      .setClassToggle("#target63", "oval-fade-in2")
      .addIndicators({name: "63"})
      .addTo(controller);
  var oworks_o5 = new ScrollMagic.Scene({triggerElement: "#trigger64", offset :7850, reverse:true})
      .setClassToggle("#target64", "oval-fade-in3")
      .addIndicators({name: "64"})
      .addTo(controller);
  var oworks_o6 = new ScrollMagic.Scene({triggerElement: "#trigger65", offset :7950, reverse:true})
      .setClassToggle("#target65", "oval-fade-in4")
      .addIndicators({name: "65"})
      .addTo(controller);
  var oworks_o7 = new ScrollMagic.Scene({triggerElement: "#trigger66", offset :8050, reverse:true})
      .setClassToggle("#target66", "oval-fade-in5")
      .addIndicators({name: "66"})
      .addTo(controller);
  var oworks_o8 = new ScrollMagic.Scene({triggerElement: "#trigger67", offset :8150, reverse:true})
      .setClassToggle("#target67", "oval-fade-in1")
      .addIndicators({name: "67"})
      .addTo(controller);
  var oworks_o9 = new ScrollMagic.Scene({triggerElement: "#trigger68", offset :8250, reverse:true})
      .setClassToggle("#target68", "oval-fade-in2")
      .addIndicators({name: "68"})
      .addTo(controller);
  var oworks_o10 = new ScrollMagic.Scene({triggerElement: "#trigger69", offset :7450, reverse:true})
      .setClassToggle("#target69", "oval-fade-in3")
      .addIndicators({name: "69"})
      .addTo(controller);

  var cworks = new ScrollMagic.Scene({triggerElement: "#trigger59", offset :8200, reverse:true})
      .setClassToggle("#target59", "oval-fade-in1")
      .addIndicators({name: "59"})
      .addTo(controller);
  var cworksd = new ScrollMagic.Scene({triggerElement: "#trigger60", offset :8200, reverse:true})
      .setClassToggle("#target60", "oval-fade-in1")
      .addIndicators({name: "60"})
      .addTo(controller);

  var contact_o1 = new ScrollMagic.Scene({triggerElement: "#trigger70", offset :8800, reverse:true})
      .setClassToggle("#target70", "oval-fade-in3")
      .addIndicators({name: "70"})
      .addTo(controller);
  var contact_o2 = new ScrollMagic.Scene({triggerElement: "#trigger71", offset :8900, reverse:true})
      .setClassToggle("#target71", "oval-fade-in4")
      .addIndicators({name: "71"})
      .addTo(controller);
  var contact_o3 = new ScrollMagic.Scene({triggerElement: "#trigger72", offset :9000, reverse:true})
      .setClassToggle("#target72", "oval-fade-in5")
      .addIndicators({name: "72"})
      .addTo(controller);
  var contact_o4 = new ScrollMagic.Scene({triggerElement: "#trigger73", offset :9100, reverse:true})
      .setClassToggle("#target73", "oval-fade-in1")
      .addIndicators({name: "73"})
      .addTo(controller);
  var contact_o5 = new ScrollMagic.Scene({triggerElement: "#trigger74", offset :9200, reverse:true})
      .setClassToggle("#target74", "oval-fade-in2")
      .addIndicators({name: "74"})
      .addTo(controller);

  var contact_h1 = new ScrollMagic.Scene({triggerElement: "#trigger75", offset :9150, reverse:true})
      .setClassToggle("#target75", "fadeInUp")
      .addIndicators({name: "75"})
      .addTo(controller);
  var contact_linkedin = new ScrollMagic.Scene({triggerElement: "#trigger76", offset :9250, reverse:true})
      .setClassToggle("#target76", "fadeInUp")
      .addIndicators({name: "76"})
      .addTo(controller);
  var contact_dribbble = new ScrollMagic.Scene({triggerElement: "#trigger77", offset :9300, reverse:true})
      .setClassToggle("#target77", "fadeInUp")
      .addIndicators({name: "77"})
      .addTo(controller);
  var contact_mail = new ScrollMagic.Scene({triggerElement: "#trigger78", offset :9350, reverse:true})
      .setClassToggle("#target78", "fadeInUp")
      .addIndicators({name: "78"})
      .addTo(controller);
}

function seans2(){
  var skilsOvalA = new ScrollMagic.Scene({triggerElement: "#triggerA", offset :200, reverse:true})
        .setClassToggle("#targetA", "oval-fade-in1")
        .addIndicators({name: "A"})
        .addTo(controller);
  var skilsOvalB = new ScrollMagic.Scene({triggerElement: "#triggerB", offset :300, reverse:true})
        .setClassToggle("#targetB", "oval-fade-in1")
        .addIndicators({name: "B"})
        .addTo(controller);

  var myskillsH1 = new ScrollMagic.Scene({triggerElement: "#trigger1", offset :250, reverse:true})
      .setClassToggle("#target1", "fadeInUp")
      .addIndicators({name: "1"})
      .addTo(controller);
  var myskillsP = new ScrollMagic.Scene({triggerElement: "#trigger2", offset :450, reverse:true})
      .setClassToggle("#target2", "fadeInUp")
      .addIndicators({name: "2"})
      .addTo(controller);
  var myskills1 = new ScrollMagic.Scene({triggerElement: "#trigger3", offset :500, reverse:true})
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
  var myskills2 = new ScrollMagic.Scene({triggerElement: "#trigger4", offset :550, reverse:true})
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
  var myskills3 = new ScrollMagic.Scene({triggerElement: "#trigger5", offset :600, reverse:true})
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
  var myskills4 = new ScrollMagic.Scene({triggerElement: "#trigger6", offset :650, reverse:true})
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
  var myskills5 = new ScrollMagic.Scene({triggerElement: "#trigger7", offset :700, reverse:true})
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
  var myskills6 = new ScrollMagic.Scene({triggerElement: "#trigger8", offset :750, reverse:true})
      .setClassToggle("#target8", "fadeInUp")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart6');
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
  var myskills7 = new ScrollMagic.Scene({triggerElement: "#trigger9", offset :800, reverse:true})
      .setClassToggle("#target9", "fadeInUp")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart7');
        if(!$('.donut-chart.js-chart7').hasClass('js-added-scene')){
          $('.donut-chart.js-chart7').addClass('js-added-scene');
          $('.donut-chart.js-chart7').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart7').removeClass('js-added-scene');
        $('.donut-chart.js-chart7').empty();
      })
      .addIndicators({name: "9"})
      .addTo(controller);
  var myskills8 = new ScrollMagic.Scene({triggerElement: "#trigger10", offset :850, reverse:true})
      .setClassToggle("#target10", "fadeInUp")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart8');
        if(!$('.donut-chart.js-chart8').hasClass('js-added-scene')){
          $('.donut-chart.js-chart8').addClass('js-added-scene');
          $('.donut-chart.js-chart8').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart8').removeClass('js-added-scene');
        $('.donut-chart.js-chart8').empty();
      })
      .addIndicators({name: "10"})
      .addTo(controller);
  var myskills9 = new ScrollMagic.Scene({triggerElement: "#trigger11", offset :900, reverse:true})
      .setClassToggle("#target11", "fadeInUp")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart9');
        if(!$('.donut-chart.js-chart9').hasClass('js-added-scene')){
          $('.donut-chart.js-chart9').addClass('js-added-scene');
          $('.donut-chart.js-chart9').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart9').removeClass('js-added-scene');
        $('.donut-chart.js-chart9').empty();
      })
      .addIndicators({name: "11"})
      .addTo(controller);
  var myskills10 = new ScrollMagic.Scene({triggerElement: "#trigger12", offset :950, reverse:true})
      .setClassToggle("#target12", "fadeInUp")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart10');
        if(!$('.donut-chart.js-chart10').hasClass('js-added-scene')){
          $('.donut-chart.js-chart10').addClass('js-added-scene');
          $('.donut-chart.js-chart10').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart10').removeClass('js-added-scene');
        $('.donut-chart.js-chart10').empty();
      })
      .addIndicators({name: "12"})
      .addTo(controller);
  var myskills11 = new ScrollMagic.Scene({triggerElement: "#trigger13", offset :1000, reverse:true})
      .setClassToggle("#target13", "fadeInUp")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart11');
        if(!$('.donut-chart.js-chart11').hasClass('js-added-scene')){
          $('.donut-chart.js-chart11').addClass('js-added-scene');
          $('.donut-chart.js-chart11').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart11').removeClass('js-added-scene');
        $('.donut-chart.js-chart11').empty();
      })
      .addIndicators({name: "13"})
      .addTo(controller);
  var myskills12 = new ScrollMagic.Scene({triggerElement: "#trigger14", offset :1050, reverse:true})
      .setClassToggle("#target14", "fadeInUp")
      .on("enter",function(){
        var tag = $('.donut-chart.js-chart12');
        if(!$('.donut-chart.js-chart12').hasClass('js-added-scene')){
          $('.donut-chart.js-chart12').addClass('js-added-scene');
          $('.donut-chart.js-chart12').cssCharts({type:"donut"});
        }
      })
      .on("leave",function(){
        $('.donut-chart.js-chart12').removeClass('js-added-scene');
        $('.donut-chart.js-chart12').empty();
      })
      .addIndicators({name: "14"})
      .addTo(controller);

  var career = new ScrollMagic.Scene({triggerElement: "#trigger15", offset :1200, reverse:true})
      .setClassToggle("#target15", "fadeIn")
      .addIndicators({name: "15"})
      .addTo(controller);
  var education = new ScrollMagic.Scene({triggerElement: "#trigger16", offset :1300, reverse:true})
      .setClassToggle("#target16", "fadeIn")
      .addIndicators({name: "16"})
      .addTo(controller);
  var career1 = new ScrollMagic.Scene({triggerElement: "#trigger17", offset :1100, reverse:true})
      .setClassToggle("#target17", "oval-fade-in1")
      .addIndicators({name: "17"})
      .addTo(controller);
  var career2 = new ScrollMagic.Scene({triggerElement: "#trigger18", offset :1100, reverse:true})
      .setClassToggle("#target18", "oval-fade-in2")
      .addIndicators({name: "18"})
      .addTo(controller);
  var career3 = new ScrollMagic.Scene({triggerElement: "#trigger19", offset :1300, reverse:true})
      .setClassToggle("#target19", "oval-fade-in3")
      .addIndicators({name: "19"})
      .addTo(controller);
  var career4 = new ScrollMagic.Scene({triggerElement: "#trigger20", offset :1300, reverse:true})
      .setClassToggle("#target20", "oval-fade-in4")
      .addIndicators({name: "20"})
      .addTo(controller);
  var career5 = new ScrollMagic.Scene({triggerElement: "#trigger21", offset :1300, reverse:true})
      .setClassToggle("#target21", "oval-fade-in5")
      .addIndicators({name: "21"})
      .addTo(controller);

  var worksH1 = new ScrollMagic.Scene({triggerElement: "#trigger22", offset :2000, reverse:true})
      .setClassToggle("#target22", "fadeInUp")
      .addIndicators({name: "22"})
      .addTo(controller);
  var worksP = new ScrollMagic.Scene({triggerElement: "#trigger23", offset :2150, reverse:true})
      .setClassToggle("#target23", "fadeInUp")
      .addIndicators({name: "23"})
      .addTo(controller);
  var works1 = new ScrollMagic.Scene({triggerElement: "#trigger24", offset :2200, reverse:true})
      .setClassToggle("#target24", "oval-fade-in1")
      .addIndicators({name: "24"})
      .addTo(controller);
  var works_t1 = new ScrollMagic.Scene({triggerElement: "#trigger25", offset :2300, reverse:true})
      .setClassToggle("#target25", "fadeInUp")
      .addIndicators({name: "25"})
      .addTo(controller);
  var works_d1 = new ScrollMagic.Scene({triggerElement: "#trigger26", offset :2400, reverse:true})
      .setClassToggle("#target26", "fadeInUp")
      .addIndicators({name: "26"})
      .addTo(controller);
  var works2 = new ScrollMagic.Scene({triggerElement: "#trigger27", offset :2700, reverse:true})
      .setClassToggle("#target27", "oval-fade-in2")
      .addIndicators({name: "27"})
      .addTo(controller);
  var works_t2 = new ScrollMagic.Scene({triggerElement: "#trigger28", offset :2900, reverse:true})
      .setClassToggle("#target28", "fadeInUp")
      .addIndicators({name: "28"})
      .addTo(controller);
  var works_d2 = new ScrollMagic.Scene({triggerElement: "#trigger29", offset :3000, reverse:true})
      .setClassToggle("#target29", "fadeInUp")
      .addIndicators({name: "29"})
      .addTo(controller);
  var works3 = new ScrollMagic.Scene({triggerElement: "#trigger30", offset :3300, reverse:true})
      .setClassToggle("#target30", "oval-fade-in3")
      .addIndicators({name: "30"})
      .addTo(controller);
  var works_t3 = new ScrollMagic.Scene({triggerElement: "#trigger31", offset :3400, reverse:true})
      .setClassToggle("#target31", "fadeInUp")
      .addIndicators({name: "31"})
      .addTo(controller);
  var works_d3 = new ScrollMagic.Scene({triggerElement: "#trigger32", offset :3500, reverse:true})
      .setClassToggle("#target32", "fadeInUp")
      .addIndicators({name: "32"})
      .addTo(controller);
  var works4 = new ScrollMagic.Scene({triggerElement: "#trigger33", offset :3800, reverse:true})
      .setClassToggle("#target33", "oval-fade-in1")
      .addIndicators({name: "33"})
      .addTo(controller);
  var works_t4 = new ScrollMagic.Scene({triggerElement: "#trigger34", offset :3900, reverse:true})
      .setClassToggle("#target34", "fadeInUp")
      .addIndicators({name: "34"})
      .addTo(controller);
  var works_d4 = new ScrollMagic.Scene({triggerElement: "#trigger35", offset :4000, reverse:true})
      .setClassToggle("#target35", "fadeInUp")
      .addIndicators({name: "35"})
      .addTo(controller);
  var works5 = new ScrollMagic.Scene({triggerElement: "#trigger36", offset :4300, reverse:true})
      .setClassToggle("#target36", "oval-fade-in2")
      .addIndicators({name: "36"})
      .addTo(controller);
  var works_t5 = new ScrollMagic.Scene({triggerElement: "#trigger37", offset :4400, reverse:true})
      .setClassToggle("#target37", "fadeInUp")
      .addIndicators({name: "37"})
      .addTo(controller);
  var works_d5 = new ScrollMagic.Scene({triggerElement: "#trigger38", offset :4500, reverse:true})
      .setClassToggle("#target38", "fadeInUp")
      .addIndicators({name: "38"})
      .addTo(controller);
  var works6 = new ScrollMagic.Scene({triggerElement: "#trigger39", offset :4700, reverse:true})
      .setClassToggle("#target39", "oval-fade-in3")
      .addIndicators({name: "39"})
      .addTo(controller);
  var works_t6 = new ScrollMagic.Scene({triggerElement: "#trigger40", offset :4800, reverse:true})
      .setClassToggle("#target40", "fadeInUp")
      .addIndicators({name: "40"})
      .addTo(controller);
  var works_d6 = new ScrollMagic.Scene({triggerElement: "#trigger41", offset :4900, reverse:true})
      .setClassToggle("#target41", "fadeInUp")
      .addIndicators({name: "41"})
      .addTo(controller);

  var works_o1 = new ScrollMagic.Scene({triggerElement: "#trigger42", offset :2250, reverse:true})
      .setClassToggle("#target42", "oval-fade-in4")
      .addIndicators({name: "42"})
      .addTo(controller);
  var works_o2 = new ScrollMagic.Scene({triggerElement: "#trigger43", offset :2400, reverse:true})
      .setClassToggle("#target43", "oval-fade-in5")
      .addIndicators({name: "43"})
      .addTo(controller);
  var works_o3 = new ScrollMagic.Scene({triggerElement: "#trigger44", offset :2800, reverse:true})
      .setClassToggle("#target44", "oval-fade-in1")
      .addIndicators({name: "44"})
      .addTo(controller);
  var works_o4 = new ScrollMagic.Scene({triggerElement: "#trigger45", offset :3000, reverse:true})
      .setClassToggle("#target45", "oval-fade-in2")
      .addIndicators({name: "45"})
      .addTo(controller);
  var works_o5 = new ScrollMagic.Scene({triggerElement: "#trigger46", offset :3200, reverse:true})
      .setClassToggle("#target46", "oval-fade-in3")
      .addIndicators({name: "46"})
      .addTo(controller);
  var works_o6 = new ScrollMagic.Scene({triggerElement: "#trigger47", offset :3800, reverse:true})
      .setClassToggle("#target47", "oval-fade-in4")
      .addIndicators({name: "47"})
      .addTo(controller);
  var works_o7 = new ScrollMagic.Scene({triggerElement: "#trigger48", offset :4200, reverse:true})
      .setClassToggle("#target48", "oval-fade-in5")
      .addIndicators({name: "48"})
      .addTo(controller);
  var works_o8 = new ScrollMagic.Scene({triggerElement: "#trigger49", offset :4400, reverse:true})
      .setClassToggle("#target49", "oval-fade-in1")
      .addIndicators({name: "49"})
      .addTo(controller);
  var works_o9 = new ScrollMagic.Scene({triggerElement: "#trigger50", offset :4500, reverse:true})
      .setClassToggle("#target50", "oval-fade-in2")
      .addIndicators({name: "50"})
      .addTo(controller);
  var works_o10 = new ScrollMagic.Scene({triggerElement: "#trigger69", offset :4600, reverse:true})
      .setClassToggle("#target69", "oval-fade-in3")
      .addIndicators({name: "69"})
      .addTo(controller);

  var contact_o1 = new ScrollMagic.Scene({triggerElement: "#trigger70", offset :5500, reverse:true})
      .setClassToggle("#target70", "oval-fade-in3")
      .addIndicators({name: "70"})
      .addTo(controller);
  var contact_o2 = new ScrollMagic.Scene({triggerElement: "#trigger71", offset :5525, reverse:true})
      .setClassToggle("#target71", "oval-fade-in4")
      .addIndicators({name: "71"})
      .addTo(controller);
  var contact_o3 = new ScrollMagic.Scene({triggerElement: "#trigger72", offset :5550, reverse:true})
      .setClassToggle("#target72", "oval-fade-in5")
      .addIndicators({name: "72"})
      .addTo(controller);
  var contact_o4 = new ScrollMagic.Scene({triggerElement: "#trigger73", offset :5575, reverse:true})
      .setClassToggle("#target73", "oval-fade-in1")
      .addIndicators({name: "73"})
      .addTo(controller);
  var contact_o5 = new ScrollMagic.Scene({triggerElement: "#trigger74", offset :5580, reverse:true})
      .setClassToggle("#target74", "oval-fade-in2")
      .addIndicators({name: "74"})
      .addTo(controller);

  var contact_h1 = new ScrollMagic.Scene({triggerElement: "#trigger75", offset :5525, reverse:true})
      .setClassToggle("#target75", "fadeInUp")
      .addIndicators({name: "75"})
      .addTo(controller);
  var contact_linkedin = new ScrollMagic.Scene({triggerElement: "#trigger76", offset :5550, reverse:true})
      .setClassToggle("#target76", "fadeInUp")
      .addIndicators({name: "76"})
      .addTo(controller);
  var contact_dribbble = new ScrollMagic.Scene({triggerElement: "#trigger77", offset :5575, reverse:true})
      .setClassToggle("#target77", "fadeInUp")
      .addIndicators({name: "77"})
      .addTo(controller);
  var contact_mail = new ScrollMagic.Scene({triggerElement: "#trigger78", offset :5600, reverse:true})
      .setClassToggle("#target78", "fadeInUp")
      .addIndicators({name: "78"})
      .addTo(controller);
}
});
