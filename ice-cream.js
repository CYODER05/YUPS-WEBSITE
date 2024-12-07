// Declaring 'base' variables
let $itemInfo = $('');
let $subCategories = $('');

// Changes to html item information & container
function cakeCone() {
  $itemInfo = $('.cake-cone-info');
  $subCategories = $('.cake-cone-categories');
}

function waffleCone() {
  $itemInfo = $('.waffle-cone-info');
  $subCategories = $('.waffle-cone-categories');
}

function sugarCone() {
  $itemInfo = $('.sugar-cone-info');
  $subCategories = $('.sugar-cone-categories');
}

function cup() {
  $itemInfo = $('.cup-info');
  $subCategories = $('.cup-categories');
}

function regularSunday() {
  $itemInfo = $('.regular-sunday-info');
  $subCategories = $('.regular-sunday-categories');
}

function turtleSunday() { 
  $itemInfo = $('.turtle-sunday-info');
  $subCategories = $('.turtle-sunday-categories');
}

function nutDip() {
  $itemInfo = $('.nut-dip-sunday-info');
  $subCategories = $('.nut-dip-sunday-categories');
}

function tinRoof() {
  $itemInfo = $('.tin-roof-sunday-info');
  $subCategories = $('.tin-roof-sunday-categories');
}

function butterPecanSunday() {
  $itemInfo = $('.butter-pecan-sunday-info');
  $subCategories = $('.butter-pecan-sunday-categories');
}

function topsyTurveySmall() {
  $itemInfo = $('.topsy-turvey-small-info');
  $subCategories = $('.topsy-turvey-small-categories');
}

function topsyTurveyMedium() {
  $itemInfo = $('.topsy-turvey-medium-info');
  $subCategories = $('.topsy-turvey-medium-categories');
}

function topsyTurveyLarge() {
  $itemInfo = $('.topsy-turvey-large-info');
  $subCategories = $('.topsy-turvey-large-categories');
}

function bananaSplitSoftServe() {
  $itemInfo = $('.banana-split-soft-serve-info');
  $subCategories = $('.banana-split-soft-serve-categories');
}

function bananaSplitYogurt() {
  $itemInfo = $('.banana-split-yogurt-info');
  $subCategories = $('.banana-split-yogurt-categories');
}

function bananaSplitHandDip() {
  $itemInfo = $('.banana-split-hand-dip-info');
  $subCategories = $('.banana-split-hand-dip-categories');
}

function shakesSoftServe() {
  $itemInfo = $('.shakes-soft-serve-info');
  $subCategories = $('.shakes-soft-serve-categories');
}

function shakesYogurt() {
  $itemInfo = $('.shakes-yogurt-info');
  $subCategories = $('.shakes-yogurt-categories');
}

function maltsSoftServe() {
  $itemInfo = $('.malts-soft-serve-info');
  $subCategories = $('.malts-soft-serve-categories');
}

function maltsYogurt() {
  $itemInfo = $('.malts-yogurt-info');
  $subCategories = $('.malts-yogurt-categories');
}

function freezeSoftServe() {
  $itemInfo = $('.freeze-soft-serve-info');
  $subCategories = $('.freeze-soft-serve-categories');
}

function freezeYogurt() {
  $itemInfo = $('.freeze-yogurt-info');
  $subCategories = $('.freeze-yogurt-categories');
}

function flurrySoftServe() {
  $itemInfo = $('.flurry-soft-serve-info');
  $subCategories = $('.flurry-soft-serve-categories');
}

function flurryYogurt() {
  $itemInfo = $('.flurry-yogurt-info');
  $subCategories = $('.flurry-yogurt-categories');
}

function coolerFloatSoftServe() {
  $itemInfo = $('.cooler-float-soft-serve-info');
  $subCategories = $('.cooler-float-soft-serve-categories');
}

function coolerFloatYogurt() {
  $itemInfo = $('.cooler-float-yogurt-info');
  $subCategories = $('.cooler-float-yogurt-categories');
}

function coolerFloatHandDip() {
  $itemInfo = $('.cooler-float-hand-dip-info');
  $subCategories = $('.cooler-float-hand-dip-categories');
}

function hfbdSscSoftServe() {
  $itemInfo = $('.hfbd-ssc-soft-serve-info');
  $subCategories = $('.hfbd-ssc-soft-serve-categories');
}

function hfbdSscYogurt() {
  $itemInfo = $('.hfbd-ssc-yogurt-info');
  $subCategories = $('.hfbd-ssc-yogurt-categories');
}

function hfbdSscHandDip() {
  $itemInfo = $('.hfbd-ssc-hand-dip-info');
  $subCategories = $('.hfbd-ssc-hand-dip-categories');
}

function babyCone() {
  $itemInfo = $('.baby-cone-info');
  $subCategories = $('.baby-cone-categories');
}

function kidCone() {
  $itemInfo = $('.kid-cone-info');
  $subCategories = $('.kid-cone-categories');
}

$(document).ready(function () {
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