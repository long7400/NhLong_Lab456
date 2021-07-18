var CoursesController = function () {
    var button;
    var init = function () {
        $(".js-toggle-attendace").click(toggleAttendance);
    };
    var toggleAttendance = function (e) {
        button = $(e.target);
        if (button.hasClass("btn-default")) {
            createAttendace();
        }
        else {
            deleteAttendance();
        }
    };

    var createAttendace = function () {
        $.post("/api/attendances/", { courseId: button.attr("data-course-id") })
            .done(done)
            .fail(fail);
    };

    var deleteAttendance = function () {
        $.ajax({
            url: "/api/attendances/" + button.attr("data-course-id"),
            method: "DETELE"
        })
            .done(done)
            .fail(fail);
    };

    var done = function () {
        var text = (button.text() == "Going") ? "Going?" : "Going";
        button.toggleClass("btn-info").toggleClass("btn-default").text(text);
    };

    var fail = function () {
        alert("Some thing failed")
    };

    return {
        init: init
    }
}