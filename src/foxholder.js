//main foxholder function
jQuery.fn.foxholder = function(parameter) {

    //adding class to the form with effects
    this.addClass('foxholder-form');

    //adding effect classes to foxholder elements
    _elementClasses(this, parameter.placeholderDemo, parameter.buttonDemo);

    //wrap all elements with labels in their own <div> tags
    _wrapElements(this, parameter.placeholderDemo);

    //adding labels to all elements with labels animation
    _creatingLabels(this);

    //blur classes (active and non-active)
    _blurClasses(this);

    //onload classes
    _onloadClasses(this);

    //buttons script (size and effect direction applied)
    _buttons(this, parameter.buttonDemo);

    //single demo scripts
    _singleLabeledScripts();
};

//foxholder elements effect classes
function _elementClasses (form, placeholderParameter, buttonParameter) {

    var formChildren = [];

    form.find('input').each(function () {

        formChildren.push(jQuery(this));

    });

    form.find('textarea').each(function () {

        formChildren.push(jQuery(this));

    });

    form.find('button').each(function () {

        formChildren.push(jQuery(this));

    });

    formChildren.forEach(function (item) {

        //for inputs with animated labels
        if (jQuery(item).is('input')) {

            var inputType = jQuery(item).attr('type'),
                validTypes = ['email', 'password', 'search', 'tel', 'text', 'url'];

            if(validTypes.indexOf(inputType) !== -1) {
                jQuery(item).addClass('foxholder-form__labeled foxholder-form__input foxholder-form__input--effect-'+ placeholderParameter +' foxholder-form__wrapped');
            }

        }

        //for textareas
        if (jQuery(item).is('textarea')) {
            jQuery(item).addClass('foxholder-form__labeled foxholder-form__textarea foxholder-form__textarea--effect-'+ placeholderParameter +' foxholder-form__wrapped')
        }

        //for buttons
        if (jQuery(item).is('button') || jQuery(item).is('input[type="submit"]')) {
            jQuery(item).addClass('foxholder-form__button foxholder-form__button--effect-' + buttonParameter);
        }

    });
    
  }

//wrapping all elements, except btns, in their own <div> tags

function _wrapElements(form, placeholderDemo) {

    var elementsToWrap = form.find('.foxholder-form__wrapped');

    elementsToWrap.each(function () {

        jQuery(this).wrap('<div class="foxholder-form__item foxholder-form__item--effect-'+ placeholderDemo +'"></div>');

    });

}

//adding labels to all elements with labels animation
function _creatingLabels(form) {

    var elementsLabeled = form.find('.foxholder-form__labeled');

    elementsLabeled.each(function () {
        var placeholderText, formItemId;

        placeholderText = jQuery(this).attr('placeholder');
        formItemId = jQuery(this).attr('id');
        jQuery(this).after('<label class="foxholder-form__label" for="'+ formItemId +'"><span class="foxholder-form__label-text">'+ placeholderText +'</span></label>');
        jQuery(this).removeAttr('placeholder');
    });

}

//blur classes
function _blurClasses(form) {

    var elementsLabeled = form.find('.foxholder-form__labeled');

    elementsLabeled.blur(function(){
        if (jQuery.trim(jQuery(this).val()) !== "") {
            jQuery(this).addClass("is-active");
        } else {
            jQuery(this).removeClass("is-active");
        }
    });

}

//onload classes (if input is not empty onload - it must have is-active class)
function _onloadClasses(form) {

    var elementsLabeled = form.find('.foxholder-form__labeled');

    elementsLabeled.each(function () {

        if (jQuery.trim(jQuery(this).val()) !== "") {
            jQuery(this).addClass("is-active");
        }

    });
}

//buttons script (size and effect direction applied)
function _buttons(form, buttonParameter) {
    var buttons = form.find('.foxholder-form__button');

    buttons.each(function () {

        var currentBtn = jQuery(this),
            currentBthSize = currentBtn.attr('data-size'),
            currentBtnEffParameter = currentBtn.attr('data-effect-parameter');

        //button size
        if (currentBthSize === 'sm') {
            currentBtn.addClass('foxholder-form__button--small');
        } else if (currentBthSize === 'lg') {
            currentBtn.addClass('foxholder-form__button--large');
        } else {
            currentBtn.addClass('foxholder-form__button--medium');
        }

        //effect parameter
        if (currentBtnEffParameter !== undefined) {
            currentBtn.addClass('foxholder-form__button--effect-' + buttonParameter + '-' + currentBtnEffParameter);
        } else {
            currentBtn.addClass('foxholder-form__button--effect-' + buttonParameter + '-default');
        }

    });
}

//single labeled demo scripts
function _singleLabeledScripts() {

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

    //example-4 moving to the left
    jQuery('.foxholder-form__input--effect-4, .foxholder-form__textarea--effect-4').each(function() {

        var labelWidth, initLeft;
        labelWidth = jQuery(this).next('label').width();
        initLeft = jQuery(this).next('label').css('left');

        jQuery(this).focus(function() {
            jQuery(this).next('label').css({'left': - (labelWidth + 30)});
        });

        jQuery(this).blur(function() {
            if (! jQuery(this).hasClass('is-active')) {
                jQuery(this).next('label').css({'left': initLeft});
            }
        });
    });

    //example-7 adding icon
    jQuery('.foxholder-form__input--effect-7, .foxholder-form__textarea--effect-7').each(function() {
        jQuery(this).parent().append('<div class="foxholder-form__icon foxholder-form__icon--effect-7"></div>');
    });

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

    //example-11 adding borders
    jQuery('.foxholder-form__item--effect-11').each(function() {
        jQuery(this).append('<div class="foxholder-form__helper foxholder-form__helper--top"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--bottom"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--left"></div>').append('<div class="foxholder-form__helper foxholder-form__helper--right"></div>');
    });

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

