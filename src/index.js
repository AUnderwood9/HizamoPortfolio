window.onload = function(){
	initializeDomOperations();
};

(function initializeDomOperations(){
	var mainNavBar = document.getElementById("header-nav");
	var gridBody = document.getElementById("page-body-container");
	var portfolioHeroSection = document.getElementById("portfolio-hero-section");
	var summarySection = document.getElementById("my-summary-section");
	var summarySectionPortfolioImage = document.getElementById("summary-section-portfolio-image");
	var skillOverviewSection = document.getElementById("my-skill-overview-section");
	var skillListing = document.getElementById("skill-listing");
	var contactSection = document.getElementById("contact-me-section");
	var summarySectionNavButton =  document.getElementById("summary-section-nav-button");
	var skillOverviewSectionNavButton = document.getElementById("skill-overview-section-nav-button");
	var contactSectionNavButton = document.getElementById("contact-section-nav-button");
	var contactFormSubmitButton = document.getElementById("contact-form-submit-button");
	// blue -> red (beginner -> advanced)
	var skillList = [
		{
			name: "React",
			elementClass: "devicon-react-plain",
			favor: 1,
			skillLevel: 2,
			element: document.createElement("icon")
		},{
			name: "CSS",
			elementClass: "devicon-css3-plain",
			favor: 2,
			skillLevel: 2,
			element: document.createElement("icon")
		},{
			name: "JavaScript",
			elementClass: "devicon-javascript-plain",
			favor: 3,
			skillLevel: 2,
			element: document.createElement("icon")
		},{
			name: "PHP",
			elementClass: "devicon-php-plain",
			favor: 4,
			skillLevel: 2,
			element: document.createElement("icon")
		},{
			name: "Postgresql",
			elementClass: "devicon-postgresql-plain",
			favor: 5,
			skillLevel: 2,
			element: document.createElement("icon")
		},{
			name: "MySql",
			elementClass: "devicon-mysql-plain",
			favor: 6,
			skillLevel: 1,
			element: document.createElement("icon")
		},{
			name: "Html",
			elementClass: "devicon-html5-plain",
			favor: 7,
			skillLevel: 2,
			element: document.createElement("icon")
		},{
			name: "Java",
			elementClass: "devicon-java-plain",
			favor: 8,
			skillLevel: 2,
			element: document.createElement("icon")
		},{
			name: "C++",
			elementClass: "devicon-cplusplus-plain",
			favor: 9,
			skillLevel: 1,
			element: document.createElement("icon")
		},{
			name: "Python",
			elementClass: "devicon-python-plain",
			favor: 10,
			skillLevel: 1,
			element: document.createElement("icon")
		}
	];

	for(i = 0; i < skillList.length; i++){
		skillList[i].element.className += skillList[i].elementClass + " codeIconFontSize";
	}

	var currentSkillContainerId;

	for(i = 0; i < skillList.length; i++){
		if(i == 0){
			var skillListingSection1 = document.createElement("div");
			skillListingSection1.id = "skill-listing-part-1";
			skillListing.appendChild(skillListingSection1);
			currentSkillContainerId = "skill-listing-part-1"
		} else if ((skillList.length/2) == (i)){
			var skillListingSection2 = document.createElement("div");
			skillListingSection2.id = "skill-listing-part-2";
			skillListing.appendChild(skillListingSection2);
			currentSkillContainerId = "skill-listing-part-2";
		}
		document.getElementById(currentSkillContainerId).appendChild(skillList[i].element);
	}

	// var pageBody = document.getElementById("page-body-container");

	// Assign onclick actions to navigation buttons
	summarySectionNavButton.onclick = function(){scrollToElementId(summarySection)};
	skillOverviewSectionNavButton.onclick = function(){scrollToElementId(skillOverviewSection)};
	contactSectionNavButton.onclick = function(){scrollToElementId(contactSection)};
	contactFormSubmitButton.onclick = function(event){submitContactFormAction(event)}

	function stickyfyNavBar(){
		if (window.pageYOffset >= mainNavBar.offsetHeight) {
			mainNavBar.classList.add("stickyNav");
			gridBody.classList.add("stickyPadding");
		  } else {
			mainNavBar.classList.remove("stickyNav");
			gridBody.classList.remove("stickyPadding");
		  }
	}

	function revealSubHeaderImage(){
		if (window.pageYOffset >= portfolioHeroSection.offsetHeight + 50) {
			summarySectionPortfolioImage.classList.add("displayComponent");
			// gridBody.classList.add("stickyPadding");
		  } else {
			summarySectionPortfolioImage.classList.remove("hideComponent");
			// gridBody.classList.remove("stickyPadding");
		  }
	}

	function submitContactFormAction(event){
		event.preventDefault();
	}

	function scrollToElementId(elementToScrollTo){
		elementToScrollTo.scrollIntoView();
	}

	window.onscroll = function(){stickyfyNavBar(); revealSubHeaderImage();};
	// window.onscroll = function(){revealSubHeaderImage()}
}());