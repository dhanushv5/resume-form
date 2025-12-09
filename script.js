// Runs when DOM is ready
$(function () {
  // Set current year in footer
  const year = new Date().getFullYear();
  $("#year").text(year);

  // Simple greeting based on time
  const hour = new Date().getHours();
  let greeting = "Hello";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  $("#greetingText").text(greeting + ",");

  // Mobile nav toggle
  $(".nav-toggle").on("click", function () {
    $(".nav-links").toggleClass("show");
  });

  // Animate skill bars on resume page
  if ($("body").hasClass("page-resume")) {
    $(".skill-bar").each(function () {
      const level = $(this).data("level"); // e.g. 85
      $(this).find(".skill-fill").css("width", level + "%");
    });
  }

  // Set current date on biodata page
  if ($("body").hasClass("page-biodata")) {
    const today = new Date();
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formatted = today.toLocaleDateString("en-IN", options);
    $("#currentDate").text(formatted);
  }
});
