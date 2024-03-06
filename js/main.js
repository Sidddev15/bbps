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

  // ----------------

  // Increase the height after third click 
  // Initialize click counter
  var clickCount = 0;

  // Function to handle button click
  $(".next-btn").click(function() {
    // Increment click counter
    clickCount++;

    // Check if the button has been clicked three times
    if (clickCount === 3) {
      // Change the height of .inner-section-two to 792px
      $(".inner-section-two").css("height", "792px");
    }
  });

  // ACTIVE INPUT
  // Function to add active-input class to input field when clicked
  $(".field1 input").on("click", function () {
    $(this).addClass("active-input");
  });

  // Function to remove active-input class from input field if empty
  $(".field1 input").on("blur", function () {
    if ($(this).val().trim() === "") {
      $(this).removeClass("active-input");
    }
  });

  // --------

  //   Eventprevent Default
  $(".next-btn").on("click", function (event) {
    event.preventDefault();
  });

  // MENU SHOW/HIDE
  $("#service-list-a").click(function () {
    $(".tab-dropdown").slideUp("slow");
  });

  $("#proiority-queue").click(function () {
    $(".tab-dropdown").slideToggle("slow");
  });
  $(".tab-dropdown a").click(function () {
    $(".tab-dropdown").slideUp("slow");
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

  // * DISABLE THE BUTTON IN INPUT FIELD NOT FILLED
     // Disable next button initially
     $(".next-btn").prop("disabled", true);
    
     // Event listener for input field changes
     $(".field1 input[type='text']").on("input", function() {
         // Check if any input fields are filled
         if (checkInputsFilled()) {
             $(".next-btn").prop("disabled", false); // Enable next button
         } else {
             $(".next-btn").prop("disabled", true); // Disable next button
         }
     });
     
     // Event listener for "Next" button click
     $(".next-btn").on("click", function() {
         $(this).prop("disabled", false); // Disable the button when clicked
     });
     
     // Function to check if any input field is filled
     function checkInputsFilled() {
         var anyInputFilled = false;
         $(".field1 input[type='text']").each(function() {
             if ($(this).val().trim() !== "") {
                 anyInputFilled = true;
                 return false; // Exit the loop early if any input is filled
             }
         });
         return anyInputFilled;
     }

  //* TO UPDATE FIELD 2 AND FIELD 3 ON CLICK OF SLIDE MENU
  // 1
  $("#operator, #change-op-btn").on("click", function () {
    hideAllContent();
    $("#content-1").css("display", "block").animate({ right: "0" }, 200);
  });
  $(".next-btn").on("click", function () {
    $("#content-1").fadeOut(200).animate({ right: "-140px" }, 200);
  });
  // 2
  $("#circle, #change-cir-btn").on("click", function () {
    hideAllContent();
    $("#content-2").css("display", "block").animate({ right: "0" }, 200);
  });
  $(".next-btn").on("click", function () {
    $("#content-2").fadeOut(200).animate({ right: "-140px" }, 200);
  });
  // 3
  $("#amount").on("click", function () {
    hideAllContent();
    $("#content-3").css("display", "block").animate({ right: "0" }, 200);
  });
  $(".next-btn").on("click", function () {
    $("#content-3").fadeOut(200).animate({ right: "-140px" }, 200);
  });
  // Function to hide all content sections
  function hideAllContent() {
    $("#content-1, #content-2, #content-3")
      .fadeOut(200)
      .animate({ right: "-140px" }, 200);
  }

  //* UPDATING THE CONTENT ON FIELD
  // ! THIS
  // 1
  $(".op-box").on("click", function () {
    $("#field2 label").addClass("label-up");

    var opImgSrc = $(this).find(".op-img img").attr("src");
    var opText = $(this).find(".op-text span").text();

    // Set the value of the input field to the text
    $("#operator").val(opText);

    // Set the src attribute of the operator image tag to the image source
    $("#operator-img").attr("src", opImgSrc);
  });

  // 2
  $(".location-box").on("click", function () {
    $("#field3 label").addClass("label-up");

    var locImgSrc = $(this).find(".location-img img").attr("src");
    var locText = $(this).find(".location-text span").text();

    // Set the value of the input field to the text
    $("#circle").val(locText);

    // Set the src attribute of the circle image tag to the image source
    $("#circle-img").attr("src", locImgSrc);
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

// Initialize datepicker
$("#datepicker, #datepicker-1").datepicker({
  showButtonPanel: true,
  dateFormat: "dd M yy",
  onSelect: function(dateText, inst) {
      // Update the selected date in the date-selected element
      $("#date-selected, #date-selected-1").text(dateText);
      // Log the selected date to console
      console.log("Selected date:", dateText);

      // Get the selected date in the format "DD M YYYY"
      var selectedDate = $.datepicker.formatDate("dd M yy", new Date(dateText));

      // Loop through each table row
      $(".datetime").each(function() {
          var rowDate = $(this).find("span").text().trim(); // Get the date text in the table row
          if (rowDate === selectedDate) {
              $(this).closest("tr").show(); // Show the row if it matches the selected date
          } else {
              $(this).closest("tr").hide(); // Hide the row if it doesn't match the selected date
          }
      });
  },
});

// Override the click event for the datepicker prev/next buttons
$(document).on("click", ".ui-datepicker-prev, .ui-datepicker-next", function(e) {
  e.stopPropagation(); // Prevent the click event from closing the datepicker
});

// Show datepicker when clicking on the calendar opener
$(".calen-op-cl").click(function() {
  $(".ui-datepicker").slideToggle();
});

// Close datepicker when clicking outside
$(document).click(function(e) {
  if (!$(e.target).closest(".ui-datepicker").length &&
      !$(e.target).closest(".calen-op-cl").length) {
      $(".ui-datepicker").slideUp();
  }
});

// Hide datepicker initially
$(".ui-datepicker").hide();



  // *   Show enteries on page
  // Function to update table based on selected number of entries
  function updateTable() {
    var entriesToShow = parseInt($("#enteries").val());
    var $tableRows = $(".modal-body .table-body tr");

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
    var $tableRows = $(".modal-body .table-body tr");

    $tableRows.hide(); // Hide all rows
    $tableRows.slice(0, entriesToShow).show(); // Show only selected number of rows
  }

  updateTable();

  $("#enteries").on("change", function () {
    updateTable();
  });

  //* Function to filter table rows based on search term
  $("#searchterm, #searchterm-1").on("keyup", function () {
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

  // TAB DROPDOWN
  // Handle click on dropdown menu items
  $(".tab-dropdown .service-list a").click(function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Get the data-tab attribute value
    var target = $(this).data("tab");

    // Hide all tab content
    $(".tab-content .tab-pane").hide();

    // Show the corresponding tab content
    $("#" + target).show();
  });






  //* Below 992PX operator, circle, amount POPUP
  $("#operator, #change-op-btn").on("click", function () {
    // Check if screen width is below 992px
    if ($(window).width() < 992) {
      // Show the offcanvas modal
      $("#operator-offcanvas").offcanvas("show");
    }
  });
  $("#circle, #change-cir-btn").on("click", function () {
    // Check if screen width is below 992px
    if ($(window).width() < 992) {
      // Show the offcanvas modal
      $("#circle-offcanvas").offcanvas("show");
    }
  });
  $("#amount").on("click", function () {
    // Check if screen width is below 992px
    if ($(window).width() < 992) {
      // Show the offcanvas modal
      $("#amount-offcanvas").offcanvas("show");
    }
  });

  // IMAGE SHOW/HIDE OFFCANVAS CLICK
  // 1
  $(".op-box").on("click", function () {
    // Show the image inside .field1
    $(".field1 img").css("display", "block");

    // Get the src attribute of the clicked op-box's image
    var opImgSrc = $(this).find(".op-img img").attr("src");

    // Set the src attribute of the image inside .field1 to opImgSrc
    $(".field1 img").attr("src", opImgSrc);
  });
  // 2
  $(".location-box").on("click", function () {
    // Show the image inside .field1
    $(".field1 img").css("display", "block");

    // Get the src attribute of the clicked op-box's image
    var opImgSrc = $(this).find(".location-box img").attr("src");

    // Set the src attribute of the image inside .field1 to opImgSrc
    $(".field1 img").attr("src", opImgSrc);
  });

  // HIDE BILLING DETAIL
  // Hide the billing-next-button initially

  // Show the billing-next-button when clicked
  $(".billing-next-button").on("click", function () {
    $(".billing-close-button").show();
  });
  // Add click event listener to .billing-next-button
  $(".billing-next-button").on("click", function () {
    // Hide the billing-next-button
    $(this).hide();

    // Hide the .modal-header-bill element
    $(".billing-detail-popup .modal-header-bill").hide();
  });

  // TO HIDE THE RECENT HISTORY BUTTON
  $(".next-btn").click(function () {
    $(".recent-payment-tab").hide();
  });

  // CHANGING THE TAB COLOR  ON CLICK OF NEXT AND PRE
  $(".inner-main-tab").click(function () {
    $(".inner-main-tab a").removeClass("active-table-tab");
    $(this).find("a").addClass("active-table-tab");
  });

  // TO SHOW DATA TABLES
  // Hide all tab-pane-inner divs except for the one corresponding to the active tab
  $(".tab-pane-inner").hide();
  $(".active-table-tab").each(function () {
    var targetId = $(this).data("target");
    $("#" + targetId).show();
  });

  $(".inner-main-tab a").click(function () {
    // Hide all tab-pane-inner divs
    $(".tab-pane-inner").hide();

    // Get the target tab-pane-inner id from data-target attribute
    var targetId = $(this).data("target");

    // Show the target tab-pane-inner div
    $("#" + targetId).show();
  });

  // SHOW/HIDE change operator
  $(".op-box").click(function () {
    // Hide all 'Change' buttons
    $("#change-op-btn").hide();
    // Show only the 'Change Operator' button
    $("#change-op-btn").show();
  });

  $(".location-box").click(function () {
    // Hide all 'Change' buttons
    $("#change-cir-btn").hide();
    // Show only the 'Change Circle' button
    $("#change-cir-btn").show();
  });

});
