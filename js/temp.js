
$(".fas").click(function () {
    $(this).parent().parent().toggleClass("background");
    $(this).parent().next().toggleClass("hidden");
    $(this).parent().toggleClass("tansformers");
});
