let Common = {
  init: function () {
    this.common();
  },
  common: function () {
    //datepicker
    /* $('[data-picker="date"]').each(function () {
      $(this).datepicker({
        monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        showMonthAfterYear: true,
        showOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy.mm.dd",
      });
    }); */
    var datePickerInputs = [];
    $('[data-picker="date"]').each(function (i) {
      // eslint-disable-next-line no-undef
      datePickerInputs[i] = new tempusDominus.TempusDominus($(this)[0], {
        display: {
          theme: "dark",
          viewMode: "calendar",
        },
      });
      // eslint-disable-next-line no-undef
      datePickerInputs[i].dates.formatInput = (date) => moment(date).format("YYYY.MM.DD");
    });

    //datetimepicker
    var dateTimePickerInputs = [];
    $('[data-picker="datetime"]').each(function (i) {
      // eslint-disable-next-line no-undef
      dateTimePickerInputs[i] = new tempusDominus.TempusDominus($(this)[0], {
        display: {
          sideBySide: true,
          theme: "dark",
        },
      });
      // eslint-disable-next-line no-undef
      dateTimePickerInputs[i].dates.formatInput = (date) => moment(date).format("YYYY.MM.DD HH:mm");
    });

    //timepicker
    $('[data-picker="color"]').each(function (i) {
      $(this).spectrum({
        type: "component",
        showPalette: true,
        togglePaletteOnly: true,
      });
    });
  },
};

let Aside = {
  init: function () {
    //this.nav();
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
