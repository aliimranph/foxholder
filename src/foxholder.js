jQuery.fn.foxholder = function(number) {
  this.addClass('foxholder-form');

  //adding labels with placeholders content. Removing placeholders
  this.find('input,textarea,button').each(function() {
    var placeholderText, formItemId, inputType; 

    if (jQuery(this).is('input')) {
      jQuery(this).addClass('foxholder-form__input foxholder-form__input--effect-'+ number.demo +'');
    } else if (jQuery(this).is('textarea')) {
      jQuery(this).addClass('foxholder-form__textarea foxholder-form__textarea--effect-'+ number.demo +'')
    } else if (jQuery(this).is('button')) {
      jQuery(this).addClass('foxholder-form__button');
    }

    //wrapping form elements in their oun <div> tags
    if (jQuery(this).is('input') || jQuery(this).is('textarea')) {
      jQuery(this).wrap('<div class="foxholder-form__item foxholder-form__item--effect-'+ number.demo +'"></div>'); 
    }

    //creating labels
    inputType = jQuery(this).attr('type');

    if (!(inputType == 'hidden' || jQuery(this).is('button'))) {

      placeholderText = jQuery(this).attr('placeholder');
      formItemId = jQuery(this).attr('id')
      jQuery(this).after('<label class="foxholder-form__label" for="'+ formItemId +'"><span>'+ placeholderText +'</span></label>');
      jQuery(this).removeAttr('placeholder');

    } 
  });

  //adding class on blur
  jQuery(this).find('input,textarea').blur(function(){
    if (jQuery.trim(jQuery(this).val())!="") {
      jQuery(this).addClass("is-active");
    } else {
      jQuery(this).removeClass("is-active");
    }
  });


  //examples scripts

  if (number.demo == 2) {

    //example-2 adding top property for label
    jQuery('.foxholder-form__input--effect-2, .foxholder-form__textarea--effect-2').focus(function() {
      var labelTop;
      labelTop = parseInt(jQuery(this).css('padding-top'));
      jQuery(this).next('label').css({'top': 0 - (labelTop + 7)});
    });

    jQuery('.foxholder-form__input--effect-2, .foxholder-form__textarea--effect-2').blur(function() {
      if (! jQuery(this).hasClass('is-active')) {
        jQuery(this).next('label').css({'top': 0});
      } 
    });
  }

  if (number.demo == 3) {

    //example-3 paddings for inputs
    jQuery('.foxholder-form__input--effect-3, .foxholder-form__textarea--effect-3').focus(function() {
      var labelWidth;
      labelWidth = jQuery(this).siblings('label').width() + 36;
      jQuery(this).css({'padding-left': labelWidth});
    });

    jQuery('.foxholder-form__input--effect-3, .foxholder-form__textarea--effect-3').blur(function() {
      if (! jQuery(this).hasClass('is-active')) {
        jQuery(this).css({'padding-left': 20});
      } 
    });
  }

  if (number.demo == 4) {

    //example-4 moving to the left
    jQuery('.foxholder-form__input--effect-4, .foxholder-form__textarea--effect-4').focus(function() {

      var labelWidth;
      labelWidth = jQuery(this).next('label').width();
      console.log(labelWidth);
      jQuery(this).next('label').css({'left': 0 - (labelWidth + 30)});
    });

    jQuery('.foxholder-form__input--effect-4, .foxholder-form__textarea--effect-4').blur(function() {
      if (! jQuery(this).hasClass('is-active')) {
        jQuery(this).next('label').css({'left': 1});
      } 
    });

  }

  if (number.demo == 7) {

    //example-7 adding icon
    jQuery('.foxholder-form__input--effect-7, .foxholder-form__textarea--effect-7').each(function() {
      jQuery(this).parent().append('<div class="foxholder-form__icon foxholder-form__icon--effect-7"></div>');
    });

  }

  if (number.demo == 9) {

    //example-9 adding background
    jQuery('.foxholder-form__input--effect-9, .foxholder-form__textarea--effect-9').each(function() {
      jQuery(this).parent().append('<div class="foxholder-form__overlay foxholder-form__overlay--effect-9"></div>');

      var labelWidth, labelHeight;
      labelWidth = jQuery(this).siblings('label').width();
      labelHeight = jQuery(this).siblings('label').height();

      if (jQuery(this).is('.foxholder-form__input')) {
        jQuery(this).siblings('.foxholder-form__overlay--effect-9').css({
          'width': labelWidth,
          'height': '100%',
          'left': 0 - (labelWidth + 40),
        });
      } else {
        jQuery(this).siblings('.foxholder-form__overlay--effect-9').css({
          'width': labelWidth, 
          'height' : labelHeight,
          'left': 0 - (labelWidth + 40),
        });
      }

      jQuery(this).focus(function() {
        jQuery(this).css({'padding-left': labelWidth + 20});
      });

      jQuery(this).blur(function() {
        if (!jQuery(this).hasClass('is-active')) {
          jQuery(this).css({'padding-left': 20});
        }
      });
    });

  }

  if (number.demo == 10) {

    //example-10 label top position
    jQuery('.foxholder-form__input--effect-10, .foxholder-form__textarea--effect-10').focus(function() {
      var labelTop;
      labelTop = parseInt(jQuery(this).css('padding-top'));
      jQuery(this).next('label').css({'top': 0 - (labelTop + 12)});
      console.log(labelTop);
    });

    jQuery('.foxholder-form__input--effect-10, .foxholder-form__textarea--effect-10').blur(function() {
      if (! jQuery(this).hasClass('is-active')) {
        jQuery(this).next('label').css({'top': 0});
      }
    });

  }

  if (number.demo == 11) {

    //example-11 adding borders
    jQuery('.foxholder-form__item--effect-11').each(function() {
      jQuery(this).append('<div class="foxholder-form__helper foxholder-form__helper--top"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--bottom"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--left"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--right"></div>');
    });

  }

  if (number.demo == 13) {

    //example-13 elements padding
    jQuery('.foxholder-form__input--effect-13, .foxholder-form__textarea--effect-13').focus(function() {
      var labelWidth;
      labelWidth = jQuery(this).siblings('label').width() + 54;
      
      if (! jQuery(this).hasClass('is-active')) {
        jQuery(this).css({'padding-left': labelWidth});
      }
    });

    jQuery('.foxholder-form__input--effect-13, .foxholder-form__textarea--effect-13').blur(function() {
      if (jQuery(this).hasClass('is-active')) {
        jQuery(this).css({'padding-left': 20});
      } 
    });

  }

  if (number.demo == 14) {

    //example-14 adding borders
    jQuery('.foxholder-form__item--effect-14').each(function() {
      jQuery(this).append('<div class="foxholder-form__helper foxholder-form__helper--top"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--left"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--right"></div>');
    });

    //example-14 elements padding
    jQuery('.foxholder-form__input--effect-14, .foxholder-form__textarea--effect-14').focus(function() {
      var labelWidth;
      labelWidth = jQuery(this).siblings('label').width() + 20;
      jQuery(this).css({'padding-left': labelWidth});
    });

    jQuery('.foxholder-form__input--effect-14, .foxholder-form__textarea--effect-14').blur(function() {
      if (! jQuery(this).hasClass('is-active')) {
        jQuery(this).css({'padding-left': 20});
      } 
    });    

  }


  if (number.demo == 15) {

    //example-15 adding triangle icons
    jQuery('.foxholder-form__input--effect-15, .foxholder-form__textarea--effect-15').each(function() {
      jQuery(this).next('label').append('<div class="foxholder-form__helper foxholder-form__helper--top"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--bottom"></div>');
    });

    //example-15 elements padding
    jQuery('.foxholder-form__input--effect-15, .foxholder-form__textarea--effect-15').focus(function() {
      var labelWidth;
      labelWidth = jQuery(this).siblings('label').width() + 36;
      jQuery(this).css({'padding-left': labelWidth});
    });

    jQuery('.foxholder-form__input--effect-15, .foxholder-form__textarea--effect-15').blur(function() {
      if (! jQuery(this).hasClass('is-active')) {
        jQuery(this).css({'padding-left': 20});
      } 
    });
    
  }

}
