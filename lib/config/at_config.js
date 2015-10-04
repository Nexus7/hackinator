let myLogoutFunc = ((error, state) =>
    { console.log('user has logged out') });

/*
var myLogoutFunc = function(error, state) {
    console.log('user has logged out');
}
*/

let mySubmitFunc = ((error, state) =>
    { console.log('user has submitted form') });

/*
var mySubmitFunc = function(error, state) {
    console.log('user has submitted form');
}
*/

let myPreSubmitFunc = ((error, state) =>
    { console.log('user has pre-submitted form') });

/*
var myPreSubmitFunc = function(error, state) {
    console.log('user has pre-submitted form');
}
*/

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc,
    preSignUpHook: myPreSubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});
