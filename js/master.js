// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
        completionResponseMessaging: true,
        backButtonText: '< Back',
        nextQuestionText: 'Next >',
        preventUnanswered: true
    });
});