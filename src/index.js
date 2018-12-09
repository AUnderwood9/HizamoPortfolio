	window.onload = function(){
		initializeDomOperations();
	};

	function initializeDomOperations(){
		var mainNavBar = document.getElementById("header-nav");
		var gridBody = document.getElementById("page-body-container");
		var portfolioHeroSection = document.getElementById("portfolio-hero-section");
		var portfolioHeroSectionHeader = document.getElementById("portfolio-hero-section-header")
		var heroSectionPortfolioImage = document.getElementById("hero-portfolio-image");
		var summarySection = document.getElementById("my-summary-section");
		var summarySectionPortfolioImage = document.getElementById("summary-section-portfolio-image");
		var skillOverviewSection = document.getElementById("my-skill-overview-section");
		var skillListing = document.getElementById("skill-listing");
		var skillListingSelectionOption = document.getElementById("order-skills-by-dropdown");
		var contactSection = document.getElementById("contact-me-section");
		var summarySectionNavButton =  document.getElementById("summary-section-nav-button");
		var skillOverviewSectionNavButton = document.getElementById("skill-overview-section-nav-button");
		var contactSectionNavButton = document.getElementById("contact-section-nav-button");
		var contactFormSubmitButton = document.getElementById("contact-form-submit-button");

		var defaultStickyNavBarBackgroundColor = mainNavBar.style.backgroundColor;
		var scrollingStickyNavBarBackgroundColor = portfolioHeroSection.style.backgroundColor;

		heroSectionPortfolioImage.classList.remove("hideEaseComponent");
		heroSectionPortfolioImage.classList.add("inviewEaseComponent");

		// Prepare skill listing
		// blue -> red (beginner -> advanced)
		var skillList = [
			{
				name: "React",
				elementClass: "devicon-react-plain",
				favor: 1,
				skillLevel: 1.5,
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
				skillLevel: 2.2,
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
				skillLevel: 2.4,
				element: document.createElement("icon")
			},{
				name: "Java",
				elementClass: "devicon-java-plain",
				favor: 8,
				skillLevel: 2.3,
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

		skillList.sort(sortByExperience);

		addElementListingToElement(skillListing, skillList);

		skillListingSelectionOption.onchange = skillSortEventHandler;

		// End Prepare skill listing

		// Add section coordinates to coordinate objects after everything has been attatched to the DOM
		var sectionCoordinates = {
			heroSectionPortfolioImage: elementOffset(heroSectionPortfolioImage).top,
			summarySection: elementOffset(summarySection).top,
			skillOverviewSection: elementOffset(skillListing).top,
			contactSection: elementOffset(contactSection).top
		};

		// Assign onclick actions to navigation buttons
		summarySectionNavButton.onclick = function(){scrollToElementId(summarySection)};
		skillOverviewSectionNavButton.onclick = function(){scrollToElementId(skillOverviewSection)};
		contactSectionNavButton.onclick = function(){scrollToElementId(contactSection)};
		contactFormSubmitButton.onclick = function(event){submitContactFormAction(event)}

		console.log("Offsets: Hero Image: " + sectionCoordinates.heroSectionPortfolioImage + " Summary: " + sectionCoordinates.summarySection + " Skills: " + sectionCoordinates.skillOverviewSection);

		function stickyfyNavBar(){
			// console.log("Page offset: " + window.pageYOffset);
			if(window.pageYOffset >= sectionCoordinates.heroSectionPortfolioImage && window.pageYOffset <= sectionCoordinates.summarySection){
				mainNavBar.classList.add("stickyNav");
				replaceClassBySubString(mainNavBar, "Color", "primaryBackgroundColor");
			} else if(window.pageYOffset >= sectionCoordinates.summarySection && window.pageYOffset <= sectionCoordinates.skillOverviewSection){
				// replaceClassBySubString(mainNavBar, "Color", "quaternaryBackgroundColor");
			} else if(window.pageYOffset >= sectionCoordinates.skillOverviewSection && window.pageYOffset <= sectionCoordinates.contactSection){
				replaceClassBySubString(mainNavBar, "Color", "quaternaryBackgroundColor");
			} else if(window.pageYOffset >= sectionCoordinates.contactSection){
				// replaceClassBySubString(mainNavBar, "Color", "quaternaryBackgroundColor");
			} else if(window.pageYOffset < sectionCoordinates.heroSectionPortfolioImage){
				mainNavBar.classList.remove("stickyNav");
				replaceClassBySubString(mainNavBar, "Color", "secondaryBackgroundColor");
			}
		}

		function replaceClassBySubString(element, subStringToSearch, classToAdd){
			element.classList.replace(element.classList.value.match("\\w*(" + subStringToSearch + ")")[0], classToAdd);
		}

		function revealSubHeaderImage(){
			
			if(window.pageYOffset >= elementOffset(portfolioHeroSection).top + 100){
				// Show portfolio image in the summary
				summarySectionPortfolioImage.classList.remove("hideEaseComponent");
				summarySectionPortfolioImage.classList.add("inviewEaseComponent");

				// Hide portfolio image in the hero section
				heroSectionPortfolioImage.classList.remove("inviewEaseComponent");
				heroSectionPortfolioImage.classList.add("hideEaseComponent");
			} else {
				// Hide portfolio image in the summary
				summarySectionPortfolioImage.classList.remove("inviewEaseComponent");
				summarySectionPortfolioImage.classList.add("hideEaseComponent");

				// Show portfolio image in the hero section
				heroSectionPortfolioImage.classList.remove("hideEaseComponent");
				heroSectionPortfolioImage.classList.add("inviewEaseComponent");
			}
		}

		function sortByExperience(element1, element2){
			if (element1.skillLevel < element2.skillLevel)
				return 1;
			if (element1.skillLevel > element2.skillLevel)
				return -1;
			return 0;
		}

		function sortByFavor(element1, element2){
			if (element1.favor < element2.favor)
				return -1;
			if (element1.favor > element2.favor)
				return 1;
			return 0;
		}

		function submitContactFormAction(event){
			event.preventDefault();
		}

		function scrollToElementId(elementToScrollTo){
			elementToScrollTo.scrollIntoView();
		}

		function addElementListingToElement(elementToAddTo, listingToAdd){
			var currentContainerId;

			for(i = 0; i < listingToAdd.length; i++){
				if(i == 0){
					var listingSection1 = document.createElement("div");
					listingSection1.id = "new-listing-part-1";
					elementToAddTo.appendChild(listingSection1);
					currentContainerId = "new-listing-part-1"
				} else if ((listingToAdd.length/2) == (i)){
					var listingSection2 = document.createElement("div");
					listingSection2.id = "new-listing-part-2";
					elementToAddTo.appendChild(listingSection2);
					currentContainerId = "new-listing-part-2";
				}
				document.getElementById(currentContainerId).appendChild(listingToAdd[i].element);
			}
		}

		function skillSortEventHandler(){
			var transitionEvent = whichTransitionEvent();
			console.log("Click");
			skillListing.addEventListener(transitionEvent, transitionFollowthroughRemoveElements(event, transitionEvent, skillListing));
			skillListing.classList.remove("inviewEaseComponent");
			skillListing.classList.add("hideEaseComponent");
			removeAllChildNodes(skillListing);
			switch(event.target.value){
				case "orderByFavor" : 
						skillList.sort(sortByFavor)
					break;
				case "orderByExperience" : 
						skillList.sort(sortByExperience);
					break;
			}

			addElementListingToElement(skillListing, skillList);

			skillListing.classList.add("inviewEaseComponent");
			skillListing.classList.remove("hideEaseComponent");
		}

		window.onscroll = function(){stickyfyNavBar(); revealSubHeaderImage();};
	}

	function elementOffset(element) {
		var rect = element.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	
	function whichTransitionEvent(){
		var t,
			el = document.createElement("fakeelement");
	  
		var transitions = {
		  "transition"      : "transitionend",
		  "OTransition"     : "oTransitionEnd",
		  "MozTransition"   : "transitionend",
		  "WebkitTransition": "webkitTransitionEnd"
		}
	  
		for (t in transitions){
		  if (el.style[t] !== undefined){
			return transitions[t];
		  }
		}
	  }

	  function removeAllChildNodes(elementToclean){
			while (elementToclean.firstChild) {
				elementToclean.removeChild(elementToclean.firstChild);
			}
		}

	  function transitionFollowthroughRemoveElements(event, listener, nodesToRemove){
		  event.target.removeEventListener(listener, transitionFollowthroughRemoveElements);

		  console.log("followthrough");
		  removeAllChildNodes(nodesToRemove);
	  }