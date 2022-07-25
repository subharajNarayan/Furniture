// $("#memberLogin").click(function() {
//     var parent = $(this).parents(".checkout-first-step");
//     var grandParent = $(parent).parents(".checkout-section");
//     console.log(parent);
//     $(parent).css('display','none');
//     $(grandParent).find('.cart__body').css('display','flex');
//     $(grandParent).find('.checkout-first-form').css('display','block');
//     $(grandParent).find(".change_email").css('display','none');
//     $(grandParent).find(".shipping-delivery-section").css('display','none');
// });

$(".checkout-success-btn").click(function() {
    var parent = $(this).parents(".checkout-first-form");
    var grandParent = $(parent).parents(".checkout-section");
    console.log(parent);
    $(parent).css('display','none');
    $(grandParent).find('.cart__body').find('.small').css('display','none');
    $(grandParent).find(".signup-text-check").css('display','none');
    $(grandParent).find('.checkout-login-section').css('display','none');
    $(grandParent).find(".change_email").css('display','flex');
    $(grandParent).find(".shipping-delivery-section").css('display','block');
});

// $("#change-email-button").click(function() {
//     var parent = $(this).parents(".text-section");
//     var grandParent = $(parent).parents(".change_email");
//     var mainCheckoutSec = $(grandParent).parents(".checkout-section");
//     console.log(mainCheckoutSec);
//     console.log(grandParent);
//     console.log(parent);
//     $(grandParent).css('display','none');
//     $(mainCheckoutSec).find('.checkout-first-form').css('display','block');
// });

$(".shipping-del-btn").click(function() {
    var parent = $(this).parents(".shipping-delivery-section");
    var grandParent = $(parent).parents(".checkout-section");
    $(parent).css('display','none');
    $(grandParent).find(".change_address").css('display','flex');
    $(grandParent).find(".payment").css('display','block');
});

$("#change-address-button").click(function() {
    var parent = $(this).parents(".text-section-address");
    var grandParent = $(parent).parents(".change_address");
    var mainCheckoutSec = $(grandParent).parents(".checkout-section");
    console.log(mainCheckoutSec);
    console.log(grandParent);
    console.log(parent);
    $(grandParent).css('display','none');
    $(mainCheckoutSec).find('.shipping-delivery-section').css('display','block');
    $(mainCheckoutSec).find('.payment').css('display','none');
});

// $(".go-back-ship").click(function() {
//     $(".payment").css('display','none');
//     $(".shipping-delivery-section").css('display','block');
//     $(".cart__title.active").attr('class','cart__title default-third');
//     $(".default-sec").attr('class','cart__title active'); 
// });

// $(".go-back-check").click(function() {
//     $(".payment").css('display','none');
//     $(".shipping-delivery-section").css('display','none');
//     $(".checkout-section").css('display','block');
//     $(".checkout-instruct").css('display','block');
//     $(".checkout-first-form").css('display','flex');
//     $(".signup-text-check").css('display','block');
//     $(".cart__title.active").attr('class','cart__title default-sec');
//     $(".default").attr('class','cart__title active');    
// });