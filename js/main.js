$(document).ready(function () {
  // LABEL UP
  $(".field1 input").on("focus", function () {
    $(this).prev("label").addClass("label-up");
  });
  $(".field1 input").on("blur", function () {
    if ($(this).val() === "") {
      $(this).prev("label").removeClass("label-up");
    }
  });
  // --------

  //   Eventprevent Default
  $(".next-btn").on("click", function (event) {
    event.preventDefault();
  });

  // MENU SHOW/HIDE
  $(".tab-dropdown").hide();
  $("#proiority-queue").click(function () {
    $(".tab-dropdown").slideToggle("slow");
  });
  // -------

  //* FORM FIELD HIDE/SHOW
  // Hide all fields except the first one initially
  $(".sf-1").hide();
  $(".sf-2").hide();
  $(".sf-3").hide();
  $(".sf-4").hide();

  // Show first field initially
  $(".sf-1:first").show(); // Show the first element with class "sf-1"

  // Function to show next field and hide current field
  function showNextField(currentField, nextField) {
    $(currentField).hide();
    $(nextField).show();
  }

  // Function to handle "Next" button click
  $(".next-btn").click(function () {
    if ($(".sf-1:visible").length) {
      // Show field 2
      showNextField(".sf-1", ".sf-2");
    } else if ($(".sf-2:visible").length) {
      // Show field 3
      showNextField(".sf-2", ".sf-3");
    } else if ($(".sf-3:visible").length) {
      // Show field 4 and update container height
      $(".form-container").css("height", "560px");
      $(".next-btn").text("Proceed To Payment");
      $(".next-btn").attr({
        "data-bs-toggle": "modal",
        "data-bs-target": "#billingmodal",
      });
      showNextField(".sf-3", ".sf-4");
      // Show all fields when field 4 is shown
      $(".sf-1").show();
      $(".sf-2").show();
      $(".sf-3").show();
      $(".sf-4").show();
    }
  });

  //* TO UPDATE FIELD 2 AND FIELD 3 ON CLICK OF SLIDE MENU
  // 1
  $("#operator").on("click", function () {
    hideAllContent();
    $("#content-1").css("display", "block").animate({ right: "0" }, "slow");
  });
  $(".next-btn").on("click", function () {
    $("#content-1").fadeOut("slow").animate({ right: "-140px" }, "slow");
  });
  // 2
  $("#circle").on("click", function () {
    hideAllContent();
    $("#content-2").css("display", "block").animate({ right: "0" }, "slow");
  });
  $(".next-btn").on("click", function () {
    $("#content-2").fadeOut("slow").animate({ right: "-140px" }, "slow");
  });
  // 3
  $("#amount").on("click", function () {
    hideAllContent();
    $("#content-3").css("display", "block").animate({ right: "0" }, "slow");
  });
  $(".next-btn").on("click", function () {
    $("#content-3").fadeOut("slow").animate({ right: "-140px" }, "slow");
  });
  // Function to hide all content sections
  function hideAllContent() {
    $("#content-1, #content-2, #content-3")
      .fadeOut("slow")
      .animate({ right: "-140px" }, "slow");
  }

  //* UPDATING THE CONTENT ON FIELD
  // 1
  $(".op-box").on("click", function () {
    // Add label-up class to the label of #field2
    $("#field2 label").addClass("label-up");

    var opImgSrc = $(this).find(".op-img img").attr("src");
    var opText = $(this).find(".op-text span").text();

    // Set the value of the input field to the combination of image and text
    $("#operator").val(opImgSrc + " " + opText);
  });
  // 2
  $(".location-box").on("click", function () {
    // Add label-up class to the label of #field3
    $("#field3 label").addClass("label-up");

    var locationImgSrc = $(this).find(".location-img img").attr("src");
    var locationText = $(this).find(".location-text span").text();

    // Set the value of the input field to the text
    $("#circle").val(locationImgSrc + " " + locationText);
  });
  // 3
  $(".plan-box-button button").on("click", function () {
    // Add label-up class to the label of #field4
    $("#field4 label").addClass("label-up");

    // Find the button text
    var buttonText = $(this).text().trim();

    // Set the value of the input field to the button text
    $("#amount").val(buttonText);
  });

  // NAVBAR WIDTH ADJUSTMENT
  function adjustElements() {
    var screenWidth = $(window).width();
    // Show all tabs if screen size is above 1800
    if (screenWidth > 1800) {
      $(".nav-tab-main").css("display", "flex");
    } else {
      // Hide tabs one by one as screen size decreases
      if (screenWidth <= 1800) {
        $(".h9").css("display", "none");
      } else {
        $(".h9").css("display", "flex");
      }
      if (screenWidth <= 1648) {
        $(".h8").css("display", "none");
      } else {
        $(".h8").css("display", "flex");
      }
      if (screenWidth <= 1475) {
        $(".h7").css("display", "none");
      } else {
        $(".h7").css("display", "flex");
      }
      if (screenWidth <= 1315) {
        $(".h6").css("display", "none");
      } else {
        $(".h6").css("display", "flex");
      }
      if (screenWidth <= 1155) {
        $(".h5").css("display", "none");
      } else {
        $(".h5").css("display", "flex");
      }
      if (screenWidth <= 995) {
        $(".h4").css("display", "none");
      } else {
        $(".h4").css("display", "flex");
      }
      if (screenWidth <= 992) {
        $(".nav-tab-main").not(".h10").css("display", "flex");
        $(".h10").css("display", "none");
      }
    }
  }

  // Call the adjustment function on document ready, window resize, and scroll
  adjustElements();
  $(window).on("resize scroll", function () {
    adjustElements();
  });

  //* Calendar
  $(".calen-op-cl").click(function () {
    var datepicker = $(".ui-datepicker");
    if (datepicker.is(":visible")) {
      datepicker.slideUp();
    } else {
      datepicker.slideDown();
    }
  });
  $("#datepicker").datepicker({
    showButtonPanel: true,
    dateFormat: "dd M yy",
    onSelect: function (dateText, inst) {
      // Update the selected date in the date-selected element
      $("#date-selected").text(dateText);
      // Log the selected date to console
      console.log("Selected date:", dateText);

      // Get the selected date in the format "DD M YYYY"
      var selectedDate = $.datepicker.formatDate("dd M yy", new Date(dateText));

      // Loop through each table row
      $(".datetime").each(function () {
        var rowDate = $(this).find("span").text().trim(); // Get the date text in the table row
        if (rowDate === selectedDate) {
          $(this).closest("tr").show(); // Show the row if it matches the selected date
        } else {
          $(this).closest("tr").hide(); // Hide the row if it doesn't match the selected date
        }
      });
    },
  });

  // Hide datepicker initially
  $(".ui-datepicker").hide();

  // *   Show enteries on page
  // Function to update table based on selected number of entries
  function updateTable() {
    var entriesToShow = parseInt($("#enteries").val());
    var $tableRows = $(".table-body tr");

    $tableRows.hide(); // Hide all rows
    $tableRows.slice(0, entriesToShow).show(); // Show only selected number of rows
  }

  // Call updateTable function when page loads
  updateTable();

  $("#enteries").on("change", function () {
    // Call updateTable function when 'Show Entries' dropdown changes
    updateTable();
  });

  function updateTable() {
    // Function to update table based on selected number of entries
    var entriesToShow = parseInt($("#enteries").val());
    var $tableRows = $(".table-body tr");

    $tableRows.hide(); // Hide all rows
    $tableRows.slice(0, entriesToShow).show(); // Show only selected number of rows
  }

  updateTable();

  $("#enteries").on("change", function () {
    updateTable();
  });

  //* Function to filter table rows based on search term
  $("#searchterm").on("keyup", function () {
    var searchTerm = $(this).val().toLowerCase();
    $(".search-transaction").each(function () {
      var textToMatch = $(this).text().toLowerCase();
      if (textToMatch.includes(searchTerm)) {
        $(this).closest("tr").show();
      } else {
        $(this).closest("tr").hide();
      }
    });
  });

  //* PAGINATION FUNCTIONALITY
  // Initialize the active page
  var currentPage = 1;

  // Function to update pagination links based on current page
  function updatePagination() {
    // Remove active class from all pagination links
    $(".pagination-container a").removeClass("active-pagination");

    // Add active class to the current page link
    $(".pagination-container a").eq(currentPage).addClass("active-pagination");
  }

  // Function to navigate to the next page
  function nextPage() {
    if (currentPage < $(".pagination-container a").length - 2) {
      currentPage++;
      updatePagination();
      // Implement logic to display next page content
    }
  }

  // Function to navigate to the previous page
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
      // Implement logic to display previous page content
    }
  }

  // Event listener for clicking on pagination links
  $(".pagination-container a").on("click", function () {
    var clickedPage = $(this).index();
    if (clickedPage === 0) {
      // Back button
      prevPage();
    } else if (clickedPage === $(".pagination-container a").length - 1) {
      // Next button
      nextPage();
    } else {
      // Numbered pagination link
      currentPage = clickedPage;
      updatePagination();
      // Implement logic to display clicked page content
    }
  });

  // HIDE/SHOW THE BILLING MODAL CONTENT
  $(".billing-next-button").click(function () {
    // Hide billing-content-1
    $(".billing-content-1").hide();

    // Show billing-content-2
    $(".billing-content-2").show();

    // Increase the height of modal content
    $(".billing-detail-popup .modal-content").css("height", "855px");
  });

  // HANDLE TAB
  $(".nav-tab-main").click(function () {
    var target = $(this).data("tab");

    // Remove active class from all tab items
    $(".nav-tab-main").removeClass("active active-tab");

    // Add active class to the clicked tab item
    $(this).addClass("active active-tab");

    // Hide all tab content except for the clicked tab
    $(".tab-content .tab-pane")
      .not("#" + target)
      .removeClass("active");

    // Show the content of the clicked tab
    $("#" + target).addClass("active");
  });
});
