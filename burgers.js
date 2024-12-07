jQuery('.patty-button').click(function() {
    if(!jQuery(this).hasClass('active')) {
        jQuery('.patty-button').removeClass('active');
        jQuery(this).toggleClass('active');
  } else {
      jQuery(this).toggleClass('active');
    }
});

jQuery('.option-button').click(function() {

    if(!jQuery(this).hasClass('active')) {
        jQuery(this).removeClass('active');
        jQuery(this).toggleClass('active');
  } else {
      jQuery(this).toggleClass('active');
    }
});

jQuery('.add-n-btn').click(function() {
    let icon0 = jQuery('.check-icon0');
    let plus0 = jQuery('.plus-icon0');
    if(jQuery(this).hasClass('active')) {
        icon0.css('display', 'block');
        plus0.css('display', 'none');
  } else {
        icon0.css('display', 'none');
        plus0.css('display', 'block');
    }
});

jQuery('.add-n-btn-bol').click(function() {
    let icon0true = jQuery('.check-icon0true');
    let plus0false = jQuery('.plus-icon0false');
    if(jQuery(this).hasClass('active')) {
        icon0true.css('display', 'block');
        plus0false.css('display', 'none');
  } else {
        icon0true.css('display', 'none');
        plus0false.css('display', 'block');
    }
});

jQuery('.inc-btn1').click(function() {
    let icon1 = jQuery('.check-icon1');
    let plus1 = jQuery('.plus-icon1');
    if(jQuery(this).hasClass('active')) {
        icon1.css('display', 'block');
        plus1.css('display', 'none');
  } else {
        icon1.css('display', 'none');
        plus1.css('display', 'block');
    }
});

jQuery('.inc-btn2').click(function() {
    let icon2 = jQuery('.check-icon2');
    let plus2 = jQuery('.plus-icon2');
    if(jQuery(this).hasClass('active')) {
        icon2.css('display', 'block');
        plus2.css('display', 'none');
  } else {
        icon2.css('display', 'none');
        plus2.css('display', 'block');
    }
});

jQuery('.inc-btn3').click(function() {
    let icon3 = jQuery('.check-icon3');
    let plus3 = jQuery('.plus-icon3');
    if(jQuery(this).hasClass('active')) {
        icon3.css('display', 'block');
        plus3.css('display', 'none');
  } else {
        icon3.css('display', 'none');
        plus3.css('display', 'block');
    }
});

jQuery('.cond-btn1').click(function() {
    let icon4 = jQuery('.check-icon4');
    let plus4 = jQuery('.plus-icon4');
    if(jQuery(this).hasClass('active')) {
        icon4.css('display', 'block');
        plus4.css('display', 'none');
  } else {
        icon4.css('display', 'none');
        plus4.css('display', 'block');
    }
});

jQuery('.cond-btn2').click(function() {
    let icon5 = jQuery('.check-icon5');
    let plus5 = jQuery('.plus-icon5');
    if(jQuery(this).hasClass('active')) {
        icon5.css('display', 'block');
        plus5.css('display', 'none');
  } else {
        icon5.css('display', 'none');
        plus5.css('display', 'block');
    }
});

jQuery('.cond-btn3').click(function() {
    let icon6 = jQuery('.check-icon6');
    let plus6 = jQuery('.plus-icon6');
    if(jQuery(this).hasClass('active')) {
        icon6.css('display', 'block');
        plus6.css('display', 'none');
  } else {
        icon6.css('display', 'none');
        plus6.css('display', 'block');
    }
});

jQuery('.cond-btn4').click(function() {
    let icon7 = jQuery('.check-icon7');
    let plus7 = jQuery('.plus-icon7');
    if(jQuery(this).hasClass('active')) {
        icon7.css('display', 'block');
        plus7.css('display', 'none');
  } else {
        icon7.css('display', 'none');
        plus7.css('display', 'block');
    }
});

jQuery('.cond-btn5').click(function() {
    let icon8 = jQuery('.check-icon8');
    let plus8 = jQuery('.plus-icon8');
    if(jQuery(this).hasClass('active')) {
        icon8.css('display', 'block');
        plus8.css('display', 'none');
  } else {
        icon8.css('display', 'none');
        plus8.css('display', 'block');
    }
});

jQuery('.cond-btn6').click(function() {
    let icon9 = jQuery('.check-icon9');
    let plus9 = jQuery('.plus-icon9');
    if(jQuery(this).hasClass('active')) {
        icon9.css('display', 'block');
        plus9.css('display', 'none');
  } else {
        icon9.css('display', 'none');
        plus9.css('display', 'block');
    }
});

function hamburger() {
    $itemInfo = $('.hamburger-info');
    $subCategories = $('.hamburger-categories');
}
  
function doubleHamburger() {
    $itemInfo = $('.doubleHamburger-info');
    $subCategories = $('.doubleHamburger-categories');
}  

function cheeseburger() {
    $itemInfo = $('.cheeseburger-info');
    $subCategories = $('.cheeseburger-categories');
}
  
function doubleCheeseburger() {
    $itemInfo = $('.doubleCheeseburger-info');
    $subCategories = $('.doubleCheeseburger-categories');
}

function baconCheeseburger() {
    $itemInfo = $('.baconCheeseburger-info');
    $subCategories = $('.baconCheeseburger-categories');
}
  
function doubleBaconCheeseburger() {
    $itemInfo = $('.doubleBaconCheeseburger-info');
    $subCategories = $('.doubleBaconCheeseburger-categories');
}

  $(document).ready(function () {

    jQuery('.plus-icon1, .plus-icon2, .plus-icon3, .plus-icon4, .plus-icon5, .plus-icon6, .plus-icon9, .check-icon0, .plus-icon0false, .check-icon7, .check-icon8').css('display', 'none');

    let offsetY = window.scrollY,
        $body = $('body'),
        $win = $(window),
        $open = $('.open'),
        $close = $('.close'),
        $container = $('.escape-container'),
        $closebtn = $('.info-close-btn');
    // Close with 'esc' key
    $(document).keyup(function (e) {
        if (e.keyCode == 27) $close.trigger('click');
    });
    $open.click(function () {
        offsetY = window.scrollY;
        // Block scrolling
        $body.css({
            'position': 'fixed',
                'color': '#000000',
                'backgroundColor': '#FFFFFF',
                'top': -offsetY + 'px'
        });
        // Show popup
        $container.css('display', 'block');
  
        $itemInfo.css('display', 'flex');
        
        $subCategories.css('display', 'flex');
  
        $closebtn.css('display', 'flex')
    });
    $close.click(function () {
        // Allow scrolling again
        $body.css({
            'position': 'static',
                'color': '',
                'backgroundColor': ''
        });
        /**
         * Remove the following scrollTop()'s if you want.
         * just a UI tweak that the user would expect.
         **/
        // Make the page stay at the position it was at before the overlay
        $win.scrollTop(offsetY);
        // Reset the overlay scroll position to the top
        $subCategories.scrollTop(0);
        // Hide popup
        $itemInfo.css('display', 'none');
        
        $container.css('display', 'none');
  
        $closebtn.css('display', 'none')
    });
  });