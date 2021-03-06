function topNav(){
    var nav = $('.play');
    var line = $('<div />').addClass('line');
    
    line.appendTo(nav);
    
    var active = nav.find('.active');
    var pos = 0;
    var wid = 0;
    
    if(active.length) {
      pos = active.position().left;
      wid = active.width();
      line.css({
        left: pos,
        width: wid
      });
    }
    
    nav.find('ul li a').click(function(e) {
      e.preventDefault();
      if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
        
        nav.addClass('animate');
    
        var _this = $(this);
    
        nav.find('ul li').removeClass('active');
    
        var position = _this.parent().position();
        var width = _this.parent().width();
    
        if(position.left >= pos) {
          line.animate({
            width: ((position.left - pos) + width)
          }, 300, function() {
            line.animate({
              width: width,
              left: position.left
            }, 150, function() {
              nav.removeClass('animate');
            });
            _this.parent().addClass('active');
          });
        } else {
          line.animate({
            left: position.left,
            width: ((pos - position.left) + wid)
          }, 300, function() {
            line.animate({
              width: width
            }, 150, function() {
              nav.removeClass('animate');
            });
            _this.parent().addClass('active');
          });
        }
    
        pos = position.left;
        wid = width;
      }
    });
}
   

function buyPopToreta(){    
    document.getElementById('buyPopToreta').style.display = "block";
}
function buyPopGeorgia(){    
    document.getElementById('buyPopGeorgia').style.display = "block";
}
function buyPopCgram(){    
    document.getElementById('buyPopCgram').style.display = "block";
}
function buyPopCoke(){    
    document.getElementById('buyCoke').style.display = "block";
}
function buyPopSprite(){    
    document.getElementById('buyPopSprite').style.display = "block";
}
function buyPopZero(){    
    document.getElementById('buyPopZero').style.display = "block";
}
function buyPopFanta(){    
    document.getElementById('buyPopFanta').style.display = "block";
}


function dimToreta(){
    document.getElementById('dimBg1').onclick = function(){
        document.getElementById('buyPopToreta').style.display = "none";        
    }
}
function dimGeorgia(){
    document.getElementById('dimBg2').onclick = function(){
        document.getElementById('buyPopGeorgia').style.display = "none";        
    }
}
function dimCgram(){
    document.getElementById('dimBg3').onclick = function(){
        document.getElementById('buyPopCgram').style.display = "none";        
    }
}
function dimCoke(){
    document.getElementById('dimBg4').onclick = function(){
        document.getElementById('buyCoke').style.display = "none";        
    }
}
function dimSprite(){
    document.getElementById('dimBg5').onclick = function(){
        document.getElementById('buyPopSprite').style.display = "none";        
    }
}
function dimZero(){
    document.getElementById('dimBg6').onclick = function(){
        document.getElementById('buyPopZero').style.display = "none";        
    }
}
function dimFanta(){
    document.getElementById('dimBg7').onclick = function(){
        document.getElementById('buyPopFanta').style.display = "none";        
    }
}

function menuOpen(){
  var slide =  document.getElementById('slideSlide');
  slide.classList.add('active');
}

function closeBtn(){
  document.getElementById('slideSlide').classList.remove('active');
}

function counter(){
  var count = 0;
  var countButton = document.getElementById("plusBtn");
  var displayCount = document.getElementById("counter_box");
  var mCount = document.getElementById("minusBtn");
  countButton.onclick = function(){
    count++;
    displayCount.innerHTML = count;
  }
  mCount.onclick = function(){
    count--;
    if(count < 0){
      count = 0;
    }
    displayCount.innerHTML = count;    
  }
}

function counter1(){
  var count = 0;
  var countButton = document.getElementById("plusBtn1");
  var displayCount = document.getElementById("counter_box1");
  var mCount = document.getElementById("minusBtn1");
  countButton.onclick = function(){
    count++;
    displayCount.innerHTML = count;
  }
  mCount.onclick = function(){
    count--;
    if(count < 0){
      count = 0;
    }
    displayCount.innerHTML = count;    
  }
}

function counter2(){
  var count = 0;
  var countButton = document.getElementById("plusBtn2");
  var displayCount = document.getElementById("counter_box2");
  var mCount = document.getElementById("minusBtn2");
  countButton.onclick = function(){
    count++;
    displayCount.innerHTML = count;
  }
  mCount.onclick = function(){
    count--;
    if(count < 0){
      count = 0;
    }
    displayCount.innerHTML = count;    
  }
}

function counter3(){
  var count = 0;
  var countButton = document.getElementById("plusBtn3");
  var displayCount = document.getElementById("counter_box3");
  var mCount = document.getElementById("minusBtn3");
  countButton.onclick = function(){
    count++;
    displayCount.innerHTML = count;
  }
  mCount.onclick = function(){
    count--;
    if(count < 0){
      count = 0;
    }
    displayCount.innerHTML = count;    
  }
}

function counter4(){
  var count = 0;
  var countButton = document.getElementById("plusBtn4");
  var displayCount = document.getElementById("counter_box4");
  var mCount = document.getElementById("minusBtn4");
  countButton.onclick = function(){
    count++;
    displayCount.innerHTML = count;
  }
  mCount.onclick = function(){
    count--;
    if(count < 0){
      count = 0;
    }
    displayCount.innerHTML = count;    
  }
}

function counter5(){
  var count = 0;
  var countButton = document.getElementById("plusBtn5");
  var displayCount = document.getElementById("counter_box5");
  var mCount = document.getElementById("minusBtn5");
  countButton.onclick = function(){
    count++;
    displayCount.innerHTML = count;
  }
  mCount.onclick = function(){
    count--;
    if(count < 0){
      count = 0;
    }
    displayCount.innerHTML = count;    
  }
}

function counter6(){
  var count = 0;
  var countButton = document.getElementById("plusBtn6");
  var displayCount = document.getElementById("counter_box6");
  var mCount = document.getElementById("minusBtn6");
  countButton.onclick = function(){
    count++;
    displayCount.innerHTML = count;
  }
  mCount.onclick = function(){
    count--;
    if(count < 0){
      count = 0;
    }
    displayCount.innerHTML = count;    
  }
}

$(document).ready(function(){
    topNav();
    dimToreta();
    dimGeorgia();
    dimCgram();
    dimCoke();
    dimSprite();
    dimZero();
    dimFanta();
    close();
    counter();
    counter1();
    counter2();
    counter3();
    counter4();
    counter5();
    counter6();
})
