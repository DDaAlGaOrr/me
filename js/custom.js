(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

    let date = new Date()
    let year = date.getFullYear()
    $('#copyright_year').html(year)

    var frontSkills = [
      { titulo: "JavaScript", imagenURL: "images/skills/js.png" },
      { titulo: "TypeScript", imagenURL: "images/skills/typescript.png" },
      { titulo: "React Js", imagenURL: "images/skills/React-icon.svg.png" },
      { titulo: "HTML", imagenURL: "images/skills/html-5.png" },
      { titulo: "WordPress", imagenURL: "images/skills/wordpress.png" },
      { titulo: "EJS", imagenURL: "images/skills/ejs.png" },
      { titulo: "Jquery", imagenURL: "images/skills/free-jquery-8-1175153.png" },
      { titulo: "Next js", imagenURL: "images/skills/nextjs.png" },
      { titulo: "Ionic", imagenURL: "images/skills/ionic-icon.svg" }
    ];

    var stylesSkills = [
      { titulo: "CSS", imagenURL: "images/skills/css-3.png" },
      { titulo: "Bootstrap", imagenURL: "images/skills/bootstrap.png" },
      { titulo: "Antd", imagenURL: "images/skills/antd.png" },
      { titulo: "chakra UI", imagenURL: "images/skills/chakra-ui.png" },
    ];

    var backendSkills = [
      { titulo: "Node js", imagenURL: "images/skills/nodejs.png" },
      { titulo: "Nest js", imagenURL: "images/skills/nestjs-icon-256x255-r03j160r.png" },
      { titulo: "Firebase", imagenURL: "images/skills/firebase.png" },
      { titulo: "PHP", imagenURL: "images/skills/php.png" },
      { titulo: "Codeigniter", imagenURL: "images/skills/free-codeigniter-4-1175201.png" },
    ];

    var databaseSkills = [
      { titulo: "Mysql", imagenURL: "images/skills/mysql.png" },
      { titulo: "Mongo DB", imagenURL: "images/skills/free-mongodb-5-1175140.png" },
      { titulo: "Oracle", imagenURL: "images/skills/oracle.png" },
      { titulo: "Firebase", imagenURL: "images/skills/firebase.png" },
    ];

    var toolsSkills = [
      { titulo: "Visual Studio Code ", imagenURL: "images/skills/visualcode.png" },
      { titulo: "Visual Studio", imagenURL: "images/skills/Visual_Studio_Icon_2019.svg.png" },
      { titulo: "Postman", imagenURL: "images/skills/postman.png" },
      { titulo: "Github", imagenURL: "images/skills/github.png" },
      { titulo: "NPM", imagenURL: "images/skills/npm.png" },
      { titulo: "Filezilla", imagenURL: "images/skills/filezilla.png" },
    ];

    var recomendations = [
      { name: "Jorge Garcia Cardenas", text: "Altamente recomendable, se destacó por su habilidad para resolver problemas de manera creativa y eficiente. Siempre estaba dispuesto a abordar desafíos complejos y encontrar soluciones innovadoras. Su capacidad para escribir código limpio y bien estructurado fue impresionante, lo que facilitó la colaboración con otros miembros del equipo."},
      { name: "Jorge Garcia Cardenas", text: "Altamente recomendable, se destacó por su habilidad para resolver problemas de manera creativa y eficiente. Siempre estaba dispuesto a abordar desafíos complejos y encontrar soluciones innovadoras. Su capacidad para escribir código limpio y bien estructurado fue impresionante, lo que facilitó la colaboración con otros miembros del equipo."},
     
    ];

    function getFrontSkills(){
      let frontendCards = ""
      frontSkills.forEach(skill=>{
        frontendCards += 
        `
        <div class="col-2" style="text-align:center">
          <div class="card">
            <img
              src=${skill.imagenURL}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${skill.titulo}</h5>
            </div>
          </div>
        </div>
        `
      })

      $('.frontend-skills').html(frontendCards)
    }

    function getStylesSkills(){
      let stylesCards = ""
      stylesSkills.forEach(skill=>{
        stylesCards += 
        `
        <div class="col-2" style="text-align:center">
          <div class="card">
            <img
              src=${skill.imagenURL}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${skill.titulo}</h5>
            </div>
          </div>
        </div>
        `
      })

      $('.styles-skills').html(stylesCards)
    }

    function getBackendSkills(){
      let backendCards = ""
      backendSkills.forEach(skill=>{
        backendCards += 
        `
        <div class="col-2" style="text-align:center">
          <div class="card">
            <img
              src=${skill.imagenURL}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${skill.titulo}</h5>
            </div>
          </div>
        </div>
        `
      })

      $('.backend-skills').html(backendCards)
    }

    function getDatabaseSkills(){
      let databaseCards = ""
      databaseSkills.forEach(skill=>{
        databaseCards += 
        `
        <div class="col-2" style="text-align:center">
          <div class="card">
            <img
              src=${skill.imagenURL}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${skill.titulo}</h5>
            </div>
          </div>
        </div>
        `
      })

      $('.database-skills').html(databaseCards)
    }

    function getToolsSkills(){
      let toolsCards = ""
      toolsSkills.forEach(skill=>{
        toolsCards += 
        `
        <div class="col-2" style="text-align:center">
          <div class="card">
            <img
              src=${skill.imagenURL}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${skill.titulo}</h5>
            </div>
          </div>
        </div>
        `
      })

      $('.tools-skills').html(toolsCards)
    }

    function getRecomendations(){
      let recomendationsCard = ""
      recomendations.forEach(recomendation=>{
        recomendationsCard += 
        `
        <div class="col-4">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${recomendation.name}</h5>
              <p class="card-text">${recomendation.text}</p>
            </div>
          </div>
        </div>
        `
      })

      $('.recommendations-container').html(recomendationsCard)
    }

    getFrontSkills()
    getStylesSkills()
    getBackendSkills()
    getDatabaseSkills()
    getToolsSkills()
    getRecomendations()


})(jQuery);
