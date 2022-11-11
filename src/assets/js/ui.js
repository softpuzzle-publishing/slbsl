let Common = {
  init: function () {
    this.common();
  },
  common: function () {
    //datepicker
    $('[data-picker="date"]').each(function () {
      $(this).datepicker({
        monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        showMonthAfterYear: true,
        showOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd",
      });
    });
  },
};

let Aside = {
  init: function () {
    this.nav();
  },
  nav: function () {
    $(".sidebar-nav > li > a").on("click", function (e) {
      let $target = $(this).parent();
      if ($target.hasClass("has-treeview")) {
        e.preventDefault();
        if (!$target.hasClass("active")) {
          $target.addClass("active");
        } else {
          $target.removeClass("active");
        }
      }
    });
  },
};

Common.init();
Aside.init();
