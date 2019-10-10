$(document).on('click.bs.dropdown', '.filter__content', function(e) {
    e.stopPropagation();
});
$("#beds .dropdown-menu a").click(function() {

    $(this).parents("#beds").find(".filter--text").text("Phòng ngủ: " + $(this).text());
});
$(function() {

    $('.filterMoreProject input').on('click', function() {

        $('.filterMoreProject .filter--text').text("Thêm: " + $(".filterMoreProject input:checked").length);
    }).triggerHandler("click"); // handle reload and initial counter
});
$("#fileTypeProperties .check").click(function() {
    var text = "";
    $("#fileTypeProperties .check").each(function() {
        if ($(this).is(":checked")) {
            text += $(this).parent().find(".name").text() + ", ";
        }
    });
    $('#fileTypeProperties .filter--text').text(text);
    console.log(text);
});
$("#filterTrans .check").click(function() {
    var text = "";
    $("#filterTrans .check").each(function() {
        if ($(this).is(":checked")) {
            text += $(this).parent().find(".name")[0].outerHTML + ", ";
        }
    });
    if (text != "") {
        $('#filterTrans .filter--text').html(text);
    } else {
        $('#filterTrans .filter--text').html("Loại giao dịch ");

    }
});