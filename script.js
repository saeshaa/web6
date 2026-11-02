$(document).ready(function () {

  // Task 0
  console.log("jQuery is ready!");

  // Task 1: selectors (tag, ID, class), .text(), .html(), .css()
  $("h2").css("color", "#1d4ed8");                 // tag selector
  $("#headline").css("text-align", "center");      // ID selector
  $(".intro").css("font-size", "18px");            // class selector

  $("#change-headline").click(function () {
    $("#headline").html("<em>My portfolio</em>!");
    $(".subtitle").text("Saida Khairova");
  });

  $("#dark-btn").click(function () {
    $("body").css({ background: "#1e1e1e", color: "#eee" });
    $("section").css({ background: "#2b2b2b", borderColor: "#444" });
    $("h2").css("color", "#93c5fd");
  });
  $("#light-btn").click(function () {
    $("body").css({ background: "#f4f4f4", color: "#222" });
    $("section").css({ background: "#fff", borderColor: "#ddd" });
    $("h2").css("color", "#1d4ed8");
  });

  // Task 2: hide / show / toggle
  $("#hide-btn").click(function () { $("#status, #facts").hide(); });
  $("#show-btn").click(function () { $("#status, #facts").show(); });
  $("#toggle-btn").click(function () { $("#status, #facts").toggle(); });

  // Task 3: fade
  $("#fade-in").click(function () { $(".gallery img").fadeIn(); });
  $("#fade-out").click(function () { $(".gallery img").fadeOut(); });
  $("#fade-toggle").click(function () { $(".gallery img").fadeToggle(); });

  // Task 4: slide (click a heading to toggle its panel)
  $(".panel-title").click(function () { $(this).next(".panel").slideToggle(); });
  $("#slide-down").click(function () { $(".panel").slideDown(); });
  $("#slide-up").click(function () { $(".panel").slideUp(); });
  $("#slide-toggle").click(function () { $(".panel").slideToggle(); });

  // Task 5: add / prepend / remove (empty skills are blocked)
  function getSkill() {
    var skill = $("#skill-input").val().trim();
    if (skill === "") {
      $("#skill-msg").text("Please enter a skill first.");
      return null;
    }
    $("#skill-msg").text("");
    $("#skill-input").val("");
    return skill;
  }
  $("#add-skill").click(function () {
    var s = getSkill();
    if (s) $("#skill-list").append("<li>" + $("<div>").text(s).html() + "</li>");
  });
  $("#prepend-skill").click(function () {
    var s = getSkill();
    if (s) $("#skill-list").prepend("<li>" + $("<div>").text(s).html() + "</li>");
  });
  $("#remove-skill").click(function () {
    $("#skill-list li:last").remove();
  });

  // Task 6: change link with .attr()
  $("#change-link").click(function () {
    $("#social-link").attr("href", "https://www.linkedin.com").text("My LinkedIn");
  });

  // Task 7: live form output
  $("#name-input").on("input", function () { $("#live-name").text($(this).val()); });
  $("#email-input").on("input", function () { $("#live-email").text($(this).val()); });

  // Task 8: animate skill bars (click again to reset to 0)
  var expanded = false;
  $("#animate-skills").click(function () {
    $(".bar").each(function () {
      var target = expanded ? 0 : $(this).data("level");
      $(this).animate({ width: target + "%" }, 1000);
    });
    expanded = !expanded;
  });

});