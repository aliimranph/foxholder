jQuery.fn.foxholder = function(number) {
  this.addClass('foxholder-form');

  //adding labels with placeholders content. Removing placeholders
  this.find('input,textarea,button').each(function() {
    var placeholderText, formItemId, inputType; 

    if (jQuery(this).is('input:not([type="submit"])')) {
      jQuery(this).addClass('foxholder-form__input foxholder-form__input--effect-'+ number.placeholderDemo +'');
    } else if (jQuery(this).is('textarea')) {
      jQuery(this).addClass('foxholder-form__textarea foxholder-form__textarea--effect-'+ number.placeholderDemo +'')
    } else if (jQuery(this).is('button') || jQuery(this).is('input[type="submit"]')) {
      jQuery(this).addClass('foxholder-form__button');

      //button sizes
      var btnSize = jQuery(this).attr('data-size');

      if (btnSize == 'sm') {
        jQuery(this).addClass('foxholder-form__button--small');
      } else if (btnSize == 'md') {
        jQuery(this).addClass('foxholder-form__button--medium');
      } else if (btnSize == 'bg') {
        jQuery(this).addClass('foxholder-form__button--big');
      }

      //button filled status
      if(jQuery(this).attr('data-filled') == 'filled') {
        jQuery(this).addClass('foxholder-form__button--filled');
      }

      //button effect number
      if(! isNaN(number.buttonDemo)) {
        jQuery(this).addClass('foxholder-form__button--effect-' + number.buttonDemo);
      }
    }

    //wrapping form elements in their oun <div> tags
    if (jQuery(this).is('input:not([type="submit"])') || jQuery(this).is('textarea')) {
      jQuery(this).wrap('<div class="foxholder-form__item foxholder-form__item--effect-'+ number.placeholderDemo +'"></div>'); 
    }

    //creating labels
    inputType = jQuery(this).attr('type');

    if (!(inputType == 'hidden' || inputType == 'submit' || jQuery(this).is('button'))) {

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


  //Placeholder scripts

  if (number.placeholderDemo == 3) {

    //example-3 paddings for inputs
    jQuery('.foxholder-form__input--effect-3, .foxholder-form__textarea--effect-3').each(function() {
      var labelWidth, initPadding;
      labelWidth = jQuery(this).siblings('label').width() + 36;
      initPadding = jQuery(this).css('padding-left');

      jQuery(this).focus(function() {
        jQuery(this).css({'padding-left': labelWidth});
      });

      jQuery(this).blur(function() {
        if (! jQuery(this).hasClass('is-active')) {
          jQuery(this).css({'padding-left': initPadding});
        } 
      });
      
    });
  }

  if (number.placeholderDemo == 4) {

    //example-4 moving to the left
    jQuery('.foxholder-form__input--effect-4, .foxholder-form__textarea--effect-4').each(function() {

      var labelWidth, initLeft;
      labelWidth = jQuery(this).next('label').width();
      initLeft = jQuery(this).next('label').css('left');
      console.log(initLeft);
      
      jQuery(this).focus(function() {
        jQuery(this).next('label').css({'left': - (labelWidth + 30)});
      });

      jQuery(this).blur(function() {
        if (! jQuery(this).hasClass('is-active')) {
          jQuery(this).next('label').css({'left': initLeft});
        } 
      });
    });
  }

  if (number.placeholderDemo == 7) {

    //example-7 adding icon
    jQuery('.foxholder-form__input--effect-7, .foxholder-form__textarea--effect-7').each(function() {
      jQuery(this).parent().append('<div class="foxholder-form__icon foxholder-form__icon--effect-7"></div>');
    });

  }

  if (number.placeholderDemo == 9) {

    //example-9 adding background
    jQuery('.foxholder-form__input--effect-9, .foxholder-form__textarea--effect-9').each(function() {
      jQuery(this).parent().append('<div class="foxholder-form__overlay foxholder-form__overlay--effect-9"></div>');

      var labelWidth, labelHeight, initPadding;
      labelWidth = jQuery(this).siblings('label').width();
      labelHeight = jQuery(this).siblings('label').height();
      initPadding = jQuery(this).css('padding-left');

      if (jQuery(this).is('.foxholder-form__input')) {
        jQuery(this).siblings('.foxholder-form__overlay--effect-9').css({
          'width': labelWidth,
          'height': '100%',
          'left': -(labelWidth + 40),
        });
      } else {
        jQuery(this).siblings('.foxholder-form__overlay--effect-9').css({
          'width': labelWidth, 
          'height' : labelHeight,
          'left': - (labelWidth + 40),
        });
      }

      jQuery(this).focus(function() {
        jQuery(this).css({'padding-left': labelWidth + 20});
      });

      jQuery(this).blur(function() {
        if (!jQuery(this).hasClass('is-active')) {
          jQuery(this).css({'padding-left': initPadding});
        }
      });
    });

  }

  if (number.placeholderDemo == 10) {

    //example-10 label top position
    jQuery('.foxholder-form__input--effect-10, .foxholder-form__textarea--effect-10').each(function() {
      var labelTop, initTop;
      labelTop = parseInt(jQuery(this).css('padding-top'));
      initTop = parseInt(jQuery(this).siblings('label').css('top'));
      
      jQuery(this).focus(function() {
        jQuery(this).next('label').css({'top': - (labelTop + 12)});
      });

      jQuery(this).blur(function() {
        if (! jQuery(this).hasClass('is-active')) {
          jQuery(this).next('label').css({'top': initTop});
        }
      });
    });
  }

  if (number.placeholderDemo == 11) {

    //example-11 adding borders
    jQuery('.foxholder-form__item--effect-11').each(function() {
      jQuery(this).append('<div class="foxholder-form__helper foxholder-form__helper--top"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--bottom"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--left"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--right"></div>');
    });

  }

  if (number.placeholderDemo == 13) {

    //example-13 elements padding
    jQuery('.foxholder-form__input--effect-13, .foxholder-form__textarea--effect-13').each(function() {
      var labelWidth, initPadding;
      labelWidth = jQuery(this).siblings('label').width() + 54;
      initPadding = jQuery(this).css('padding-left');
      
      jQuery(this).focus(function() {
        if (! jQuery(this).hasClass('is-active')) {
          jQuery(this).css({'padding-left': labelWidth});
        } 
      });

      jQuery(this).blur(function() {
        if (! jQuery(this).hasClass('is-active')) {
          jQuery(this).css({'padding-left': initPadding});
        } 
      });
    });
  }

  if (number.placeholderDemo == 14) {

    //example-14 adding borders
    jQuery('.foxholder-form__item--effect-14').each(function() {
      jQuery(this).append('<div class="foxholder-form__helper foxholder-form__helper--top"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--left"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--right"></div>');
    });

    //example-14 elements padding
    jQuery('.foxholder-form__input--effect-14, .foxholder-form__textarea--effect-14').each(function() {
      var labelWidth, initPadding;
      labelWidth = jQuery(this).siblings('label').width() + 20;
      initPadding = jQuery(this).css('padding-left');
      
      jQuery(this).focus(function() {
        jQuery(this).css({'padding-left': labelWidth});
      });

      jQuery(this).blur(function() {
        if (! jQuery(this).hasClass('is-active')) {
          jQuery(this).css({'padding-left': initPadding});
        } 
      });

    });    

  }

  if (number.placeholderDemo == 15) {

    //example-15 elements padding
    jQuery('.foxholder-form__input--effect-15, .foxholder-form__textarea--effect-15').each(function() {
      var labelWidth, initPadding;
      labelWidth = jQuery(this).siblings('label').width() + 36;
      initPadding = jQuery(this).css('padding-left');
      
      jQuery(this).focus(function() {
        jQuery(this).css({'padding-left': labelWidth});
      });

      jQuery(this).blur(function() {
        if (! jQuery(this).hasClass('is-active')) {
          jQuery(this).css({'padding-left': initPadding});
        } 
      });
    });
    
  }

  //Button scripts

  //buttons demo #2
  if (number.buttonDemo == 2) {

    //add classes for directions
    jQuery('.foxholder-form__button--effect-2').each(function() {
      btnDirection = jQuery(this).attr('data-direction');

      if(btnDirection == 'left' || btnDirection == undefined) {
        jQuery(this).addClass('foxholder-form__button--effect-2-left');
      } else if (btnDirection == 'right') {
        jQuery(this).addClass('foxholder-form__button--effect-2-right');
      } else if (btnDirection == 'top') {
        jQuery(this).addClass('foxholder-form__button--effect-2-top');
      } else if (btnDirection == 'bottom') {
        jQuery(this).addClass('foxholder-form__button--effect-2-bottom');
      }
    });
  };

  //buttons demo #3
  if (number.buttonDemo == 3) {

    //add classes for directions
    jQuery('.foxholder-form__button--effect-3').each(function() {
      btnDirection = jQuery(this).attr('data-direction');

      if(btnDirection == 'vertical' || btnDirection == undefined) {
        jQuery(this).addClass('foxholder-form__button--effect-3-vert');
       } else if (btnDirection == 'horizontal') {
         jQuery(this).addClass('foxholder-form__button--effect-3-horz');
       } else if (btnDirection == 'horz-vert') {
         jQuery(this).addClass('foxholder-form__button--effect-3-horzVert');
       } else if (btnDirection == 'diagonal') {
        jQuery(this).addClass('foxholder-form__button--effect-3-diagonal');
      }
    });
  };

}
