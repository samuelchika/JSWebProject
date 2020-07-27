  //working on projects
  $("#projectModal").text("We have gotten here with JQuery");
  let person;
  $.getJSON("./js/data.json", function(data) {
    console.log(data);
    award(data.award);
  });

  //console.log(person);
  function award(awards) {
    console.log(awards);
    awards.forEach(award => {
      console.log(`${award.title}  ${award.of == null ? `` : `under `+ award.of} `);
    });
  }