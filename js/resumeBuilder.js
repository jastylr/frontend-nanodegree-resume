(function($) {
	
	// Bio JSON object
	var bio = {
		"name" : "Jason Taylor",
		"role" : "SF Bay Area Front-end Web Developer",
		"contacts" : {
			"mobile" : "650-759-2009",
			"email" : "jtaylor@faultlinemedia.com",
			"github" : "https://github.com/jastylr",
			"twitter" : "https://twitter.com/faultlinemedia",
			"linkedin" : "https://www.linkedin.com/in/jasonetaylor1",
			"location" : "Redwood City, CA"
		},
		"welcomeMessage": "<p>Hello! My name is Jason Taylor and I am a web developer living and working in the San Francisco Bay Area. I love creating engaging web projects which allow me to use both the left and right sides of my brain to create a visually appealing yet highly functional end-user experience.<\/p><p>Feel free to peruse my resume and contact me if you like what you see. Thanks for stopping by!<\/p>",
		"skills": ["HTML", "CSS", "Javascript", "JQuery", "PHP", "MySQL", "AJAX", "Responsive design"],
		"biopic": "images/jason-taylor.jpg",
		"display" : function() {
			// Display name, role, picture and welcome message
			$('#bio-name').append(HTMLheaderName.replace('%data%', bio.name));
			$('#bio-name').append(HTMLheaderRole.replace('%data%', bio.role));
			$('#bio-details').append(HTMLbioPic.replace('%data%', bio.biopic));
			$('#bio-details').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

			// Display contact information on both the top and bottom of the page
			var bioMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
			var bioEmail = HTMLemail.replace('%data%', bio.contacts.email);
			var bioGithub = HTMLgithub.replace('%data%', makeLink(bio.contacts.github));
			var bioLinkedIn = HTMLlinkedIn.replace('%data%', makeLink(bio.contacts.linkedin));
			var bioLocation = HTMLlocation.replace('%data%', bio.contacts.location);
			var formattedContacts = bioMobile + bioEmail + bioGithub + bioLinkedIn + bioLocation;
			$('#topContacts, #footerContacts').append(formattedContacts);

			// Check if the skills array is empty or not and if not, output the skills
			if (bio.skills.length > 0) {
				$('#skillset').append(HTMLskillsStart);
				for(skill in bio.skills) {
					$('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]));
				}
			}
		}
	};

	// Education JSON object
	var education = {
		"schools": [
			{
				"name" : "The Coding Dojo",
				"location" : "Mountain View, CA",
				"degree" : "",
				"majors" : [],
				"dates" : 2014,
				"url" : ""
			},
			{
				"name": "University of Santa Cruz Extension",
				"location": "Santa Clara, CA",
				"degree" : "",
				"majors" : [],
				"dates": 2001,
				"url" : ""
			},
			{
				"name": "College of San Mateo",
				"location": "San Mateo, CA",
				"degree" : "",
				"majors" : [],
				"dates": 1989,
				"url" : ""
			}
		],
		"onlineCourses" : [
			{
				"title": "Front-end Web Development Nanodegree",
				"school": "Udacity",
				"date": 2015,
				"url" : "https://www.udacity.com/course/nd001"
			}
		],
		"display" : function() {
			$('#education').append(HTMLschoolStart);
			for (school in education.schools) {
				var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
				var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
				$('.education-entry:last').append(formattedName + formattedDegree);
				$('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[school].dates));
				$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[school].location));

				// Loop through the majors array
				if (education.schools[school].majors.length > 0) {
					for (major in education.schools[school].majors) {
						if (education.schools[school].majors[major] > 0) {
							$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]));
						}
					}
				}
			}

			// Display any online courses
			for (course in education.onlineCourses) {
				$('.education-entry:last').append(HTMLonlineClasses);
				var onlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title );
				
				// Added URL into the title link rather than as a separate link
				onlineTitle = onlineTitle.replace('%url%', education.onlineCourses[course].url);
				var onlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
				$('.education-entry:last').append(onlineTitle + onlineSchool);

				$('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[course].date));
			}
		}
	};

	// Work JSON object
	var work = {
		"jobs": [
			{
				"employer": "Faultline Media Solutions",
				"title": "Web Designer",
				"location": "Redwood City, CA",
				"dates": "2006 - Present",
				"description": "<ul><li>Designed websites using hand-coded HTML and Cascading Style sheets (CSS).<\/li><li>Used PHP to create dynamic web pages that access back-end MySQL databases.<\/li><li>Created websites using the Drupal content management system and providing additional functionality through custom-coded PHP modules.<\/li><li>Used Adobe Photoshop and Illustrator to design site UI mockups and web graphics that were then sliced and optimized in preparation to create CSS based site layouts.<\/li><li>Used JQuery, JavaScript to add client-side browser interactivity.<\/li><li>Created graphics for print media such as brochures, flyers and postcards and worked with print houses to ensure quality results.<\/li><\/ul><p>HTML, CSS, PHP, MySQL, JQuery, JavaScript, AJAX, Twitter Bootstrap, Codeigniter, Drupal CMS, ASP.NET/SQL Server, Git, GitHub<\/p><a href=\"http:\/\/www.faultlinemedia.com\" target=\"_blank\">www.faultlinemedia.com<\/a>"
			},
			{
				"employer" : "Coding Dojo",
				"title" : "Instuctor",
				"location" : "Mountain View, CA",
				"dates" : "September, 2014 - December, 2014",
				"description" : "<ul><li>Provided coding instruction to students at a Full-stack Web Development bootcamp<\/li><li>Gave daily lectures on technologies such as HTML, CSS, PHP, MySQL, JQuery, AJAX, Codeigniter and more.<\/li><li>Worked one-on-one with students to provide assistance with coding and debugging.<\/li><li>Developed new course materials as needed.<\/li><\/ul>"
			},
			{
				"employer" : "Excite@Home",
				"title" : "Advanced Software Engineer",
				"location" : "Redwood City, CA",
				"dates" : "August, 2000 - January, 2002",
				"description" : "<ul><li>Used HTML, JAVA, Perl and SQL to create and maintain an application used by the Excite@Home engineering operations group to manage TELNET, IOS and SNMP authentication data on all devices across the @Home network.<\/li><li>Worked on the Network Management Database (NMDB), which consisted of a large-scale Oracle database and many Perl modules used to gather data from the entire Excite@Home network backbone.<\/li><li>Created a shared library written in C utilizing the Oracle OCI (Oracle Call Interface) functions to allow external databases within the organization to write and retrieve specific information to and from the network management database (NMDB).<\/li><li>Used Object Oriented Perl to create packages for various network devices by device type which were used to access the devices via TELNET/IOS or SNMP and retrieve configuration data as well as update authentication information.<\/li><\/ul>"
			},
			{
				"employer" : "Verilink Corporation",
				"title" : "Software Engineer III",
				"location" : "San Jose, CA",
				"dates" : "1997 - 1999",
				"description" : "<ul><li>Responsible for porting existing Windows 3.x network management code to the Win95 platform using C++ and the Microsoft Foundation Classes.<\/li><li>Responsible for the continued development and maintenance of a large-scale network management application for Win95 with emphasis on GUI interface code.<\/li><li>Used object oriented design techniques to create several base class software modules used to provide multiple hardware module support while providing a common user interface look and feel.<\/li><li>Used SQL, ODBC and Oracle 8 Personal and Server versions to provide database support to the current NMS application.<\/li><li>Interfaced with embedded systems’ engineers to develop a common API for the management of multiple hardware modules.<\/li><\/ul>"
			},
			{
				"employer" : "Verilink Corporation",
				"title" : "Software Engineer II",
				"location" : "San Jose, CA",
				"dates" : "1993 - 1995",
				"description" : "<ul><li>Responsible for the design, implementation and debugging of various software modules comprising a large-scale Windows 3.x network management application written in C++ and the Microsoft Foundation Classes.<\/li><li>Utilized graphical skills to create computer images used in the development of the current Windows 3.x management application.<\/li><li>Created a graphical software application (Test System 2000) that worked in conjunction with specific hardware modules to provide T1 test set functionality. The application later received the 1995 International Communications Association (ICA) Award for Innovative Product of the Year.<\/li><\/ul>"
			}
		],
		"display" : function() {
			// Loop through each job in the jobs object and display the output
			for (job in work.jobs) {
				$('#workExperience').append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
				var formatedEmployerTitle = formattedEmployer + formattedTitle;

				$('.work-entry:last').append(formatedEmployerTitle);
				$('.work-entry:last').append(HTMLworkDateLocStart);
				$('.work-entry:last .date-location').append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
				$('.work-entry:last .date-location').append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
				$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
			}
		}
	};

	// Projects JSON object - added URL and Technologies properties not in specification
	var projects = {
		"project" : [
			{
				"title": "NanoFrogger",
				"dates": "2015",
				"description": "A JavaScript/HTML5 Canvas Game.",
				"images": ["images/projects/thumb/nanofrogger-d.jpg"],
				"details" : {
					"url": "http://jastylr.github.io/frontend-nanodegree-arcade-game/",
					"image" : "images/projects/large/nanofrogger.jpg",
					"description" : "<p>This was another project for the Udacity Front-end Web Developer Nanodegree program. It is a take on the classic Frogger arcade game and uses Javascript and the HTML5 Canvas. This was a fun game to work and play!<\/p><p><\/p>",
					"technologies": ["Javascript", "HTML", "CSS"]
				}
			},
			{
				"title": "Online Resume",
				"dates": "2015",
				"description": "My JavaScript Resume.",
				"images": ["images/projects/thumb/jasontaylor-d.jpg"],
				"details" : {
					"url": "http://jastylr.github.io",
					"image" : "images/projects/large/jasontaylor.jpg",
					"description" : "<p>This was a project for the Udacity Front-end Web Developer Nanodegree program. The project involved creating an online resume that utilizes Javascript to handle all the data and display functionality. I added in some Bootstrap to make the site responsive along with some JQuery effects like smooth scrolling menu navigation, lightboxes and image hover effects. <\/p><p>I ended up liking the outcome so I decided to use this as my main resume and portfolio.<\/p>",
					"technologies": ["Javascript", "HTML", "CSS"]
				}
			},
			{
				"title": "Faultline Media Solutions",
				"dates": "2014",
				"description": "This is my personal website portfolio that I use for freelance work.",
				"images": ["images/projects/thumb/faultlinemedia-d.jpg"],
				"details" : {
					"url": "http://www.faultlinemedia.com",
					"image" : "images/projects/large/faultlinemedia.jpg",
					"description" : "<p>I created this site in order to have an online presence for my freelance design work. It is a single page design which uses Bootstrap as well as some JQuery to add some effects to the various project images.<\/p><p><\/p>",
					"technologies": ["HTML", "CSS", "JQuery", "Bootstrap"]
				}
			},
			{
				"title": "NoXcuses Fitness",
				"dates": "2015",
				"description": "A responsive website design that incorporates the MindBody API",
				"images": ["images/projects/thumb/noxcusesfitness-d.jpg"],
				"details" : {
					"url": "http://www.noxcusesfitness.com",
					"image" : "images/projects/large/noxcusesfitness.jpg",
					"description" : "<p>For this site, the client wanted to feel as they were at the club when landing on their home page. I used a fullscreen background with an image of the front of their fitness studio as the focal point. To keep it clean, all of the navigation is in a mobile-style dropdown so as to not clutter the screen.<\/p><p>The site also incorporates functionality from the MindBody API service which the studio uses for managing memberships and classes.<\/p> ",
					"technologies": ["HTML", "CSS", "PHP/MySQL", "Drupal", "MindBody API", "JQuery", "Responsive Design", "Photoshop"]
				}
			},
			{
				"title": "CrisisGuard",
				"dates": "2013",
				"description": "A responsive PHP site with a custom design",
				"images": ["images/projects/thumb/crisisguard-d.jpg"],
				"details" : {
					"url": "http://www.crisisguard.com",
					"image" : "images/projects/large/crisisguard.jpg",
					"description" : "<p>This was a website redesign project and boy did it need it! I tried to come up with a design that was clean and colorful without going too far. I used subtle hints of the site's logo in various places in the design when I was creating the graphics.<\/p><p>The site uses PHP Smarty Templates and has a smattering of JQuery to provide a product slideshow as well as scrolling testimonials.<\/p>",
					"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "Responsive Design", "Photoshop"]
				}
			},
			{
				"title": "Mariette Chocolates",
				"dates": "2014",
				"description": "A responsive e-commerce site using Drupal and custom theme design",
				"images": ["images/projects/thumb/mariettechocolates-d.jpg"],
				"details" : {
					"url": "http://www.mariettechocolates.com",
					"image" : "images/projects/large/mariettechocolates.jpg",
					"description" : "<p>This is a PHP e-commerce website for a local Chocolate shop. The client wanted the ability to sell their chocolates online and wanted to draw customers in with images of their wares.<\/p><p>I started by creating a fullscreen, responsive slideshow with image overlays to showcase some of the many fine chocolates. On the Chocolates page, each item is displayed with the ability to filter results by the category of chocolates available.<\/p><p>It was difficult to design this site without wanting to indulge in some the great looking candies!<\/p>",
					"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "Responsive Design", "Drupal", "Photoshop"]
				}
			},
			{
				"title": "Christian Okoye",
				"dates": "2013",
				"description": "Website of ex-Kansas City Chief and NFL great, Christian Okoye (\"The Nigerian Nightmare\")",
				"images": ["images/projects/thumb/christianokoye-d.jpg"],
				"details" : {
					"url": "http://www.christianokoye.com",
					"image" : "images/projects/large/christianokoye.jpg",
					"description" : "<p>Christian Okoye, ex-NFL running back for the Kansas City Chiefs, contacted me to create a site for his foundation. It's an e-commerce site that allows user to purchase some memorabillia as well as tickets to the annual Ontario Mills 5k/10k Run which Christian hosts.<\/p><p>For ticket purchasing, I came up with a method for allowing a user to fill out information for multiple participants using AJAX and then adding all those users to the cart at one time before proceeding to checkout.<\/p>",
					"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "Drupal", "Photoshop"]
				}
			},
			{
				"title": "Soul Pilates",
				"dates": "2014",
				"description": "Responsive website with a custom design and integrated MindBody API for class schedules",
				"images": ["images/projects/thumb/soulpilates-d.jpg"],
				"details" : {
					"url": "http://www.soulpilates.com",
					"image" : "images/projects/large/soulpilates.jpg",
					"description" : "<p>The owner of Soul Pilates wanted a design that had somewhat of a French Polynesian feel to it so I went to work in Photoshop to see what I could come up with. I used some textures of bamboo, ornate wood and thatch and of course water and tropical flowers.<\/p><p>The site incorporates some custom PHP code to interface with the MindBody API service which is used to display a daily schedule of classes and allow visitors to sign up for them. When the client updates any of the class schedule information in her MindBody account, the results are picked up automatically on the site.<\/p>",
					"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "MindBody API", "Drupal", "Photoshop"]
				}
			},
			{
				"title": "California Sports Hall of Fame",
				"dates": "2013",
				"description": "Responsive website showcasing California sports inductees",
				"images": ["images/projects/thumb/californiasportshalloffame-d.jpg"],
				"details" : {
					"url": "http://www.californiasportshalloffame.org",
					"image" : "images/projects/large/californiasportshalloffame.jpg",
					"description" : "<p>Another site for ex-NFLer, Christian Okoye who put together and runs the California Sports Hall of Fame. This site showcases it's inductees and provides biographies, video montages and image galleries from past and present events.<\/p><p>The site is a responsive design and also provides e-commerce functionality.<\/p>",
					"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "Photoshop"]
				}
			},
			{
				"title": "L'Escape Spa",
				"dates": "2013",
				"description": "An e-commerce website design for a local spa/salon",
				"images": ["images/projects/thumb/lescapespa-d.jpg"],
				"details" : {
					"url": "http://www.lescapespa.com",
					"image" : "images/projects/large/lescapespa.jpg",
					"description" : "<p>For this design, the client wanted a simple e-commerce site that used some subtle, ornate touches hence I used some textures and borders around various elements on the page.<\/p><p>The site was built using Drupal with e-commerce functionality provided by the Ubercart module.<\/p>",
					"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "Drupal", "Photoshop"]
				}
			},
			{
				"title": "Piazzas Fine Foods",
				"dates": "2012",
				"description": "A website design for a local supermarket chain",
				"images": ["images/projects/thumb/piazzasfinefoods-d.jpg"],
				"details" : {
					"url": "http://www.piazzasfinefoods.com",
					"image" : "images/projects/large/piazzasfinefoods.jpg",
					"description" : "<p>This is a simple website design that I created for a local supermarket. I tried to use an eco-friendly color scheme to go along with the client's brand.<\/p><p>The site connects with the client's Constant Contact account to allow users to sign up for their newsletter and weekly specials.<\/p>",
					"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "Drupal", "Photoshop"]
				}
			},
			{
				"title": "Priority 1",
				"dates": "2014",
				"description": "A Drupal site for a public safety equipment company",
				"images": ["images/projects/thumb/priority1pse-d.jpg"],
				"details" : {
					"url": "http://www.priority1pse.com",
					"image" : "images/projects/large/priority1pse.jpg",
					"description" : "<p>For this design, the client wanted an informational site that matched their existing branding. Originally I had also implemented an e-commerce store but the owner decided to remove that functionality after deciding to no longer sell items.<\/p><p>One thing that the site owner really wanted was to have a some images of police cars that they work on and somehow make them flash sirens. I went to work in Photoshop and Flash and came up with a pretty cool looking intro.<\/p>",
					"technologies": ["HTML", "CSS", "PHP/MySQL", "Drupal", "Flash", "Photoshop"]
				}
			}
		],
		"display" : function() {
			for (var project in projects.project) {
				$('#projects .inner').append(HTMLprojectStart.replace('%id%', project));

				var projectTitle = HTMLprojectTitle.replace('%data%', projects.project[project].title);
				projectTitle = projectTitle.replace('%id%', project);
				$('.project-entry:last').append(projectTitle);

				var projectDate = HTMLprojectDates.replace('%data%', projects.project[project].dates);
				$('.project-entry:last').append(projectDate);

				var projectDesc = HTMLprojectDescription.replace('%data%', projects.project[project].description);
				$('.project-entry:last').append(projectDesc);

				$('.project-entry:last').append(HTMLprojectImagesStart);
				
				// Loop through array of images
				if (projects.project[project].images.length > 0) {
					for (image in projects.project[project].images) {
						var image = HTMLprojectImage.replace('%data%', projects.project[project].images[image]);
						image = image.replace('%id%', project);
						$('.project-entry:last .fadein:last').append(image);
					}
				}

				// Create 2 buttons, one to view details of the project and one to launch the live project
				var projectView = HTMLprojectView.replace('%data%', project);
				$('.project-entry:last').append(projectView);

				// Only display the "Launch Site" button if there is a live site to view
				if (projects.project[project].details.url.length > 0) {
					var projectURL = HTMLprojectURL.replace('%data%', projects.project[project].details.url);
					projectURL = projectURL.replace('%title%', projects.project[project].title)
					$('.project-entry:last').append(projectURL);
				}

				// Build the project details section. This section is hidden on the page with CSS and
				// is displayed within a lightbox when the project title, image or view details button
				// are clicked
				$('#project-details').append(HTMLprojectDetailStart.replace('%id', 'detail-' + project));
				
				// Get the image that will be displayed on the details page
				var detailImage = HTMLprojectDetailImage.replace('%data%', projects.project[project].details.image);
				detailImage = detailImage.replace('%name%', projects.project[project].title);
				$('.project-detail .inner:last').append(detailImage);

				// Get the detailed project description
				var detailDesc = HTMLprojectDetailDesc.replace('%name%', projects.project[project].title);
				detailDesc = detailDesc.replace('%data%', projects.project[project].details.description);
				$('.project-detail .inner:last').append(detailDesc);

				// Get the URL of the live project if one exists
				if (projects.project[project].details.url.length > 0) {
					projectURL = HTMLprojectDetailURL.replace(/%data%/g, projects.project[project].details.url);
					$('.project-url:last').append(projectURL);
				}

				// Loop through and create a list of the technologies used on this project
				if (projects.project[project].details.technologies.length > 0) {
					for (technology in projects.project[project].details.technologies) {
						$('.project-tech:last').append(HTMLprojectDetailTech.replace('%data%', projects.project[project].details.technologies[technology]));
					}
				}
			}
		}
	};

	// Simple function to append Google Map to map div
	function displayMap() {
		$('#mapDiv .row:first').append(googleMap);
	}

	// makeLink - Used to take a web address and convert it into a clickable link
	// with optional display text
	function makeLink(address, text, strip_protocol, new_window) {
		
		if (!address) {
			return;
		}

		var regex_prot = /^(.*?):\/\/(www.)?/,
				link = '';
		
		if(text && strip_protocol === true) {
			text = text.replace(regex_prot, '');
		}
		else {
			text = address.replace(regex_prot, '');
		}
		
		// Build the link. If no text was specified, then use the address as the link text
		link = '<a href="' + address + ((new_window === true) ? '" target="_blank">' : '">') + 
						((text !== undefined) ? text : address) + '</a>';
		
		return link;
	}

	/*
	This is the fun part. Here's where we generate the custom Google Map for the website.
	See the documentation below for more details.
	https://developers.google.com/maps/documentation/javascript/reference
	*/
	var map;    // declares a global map variable


	/*
	Start here! initializeMap() is called when page is loaded.
	*/
	function initializeMap() {

	  var locations;

	  var mapOptions = {
	    disableDefaultUI: true
	  };

	  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
	  // <div id="map">, which is appended as part of an exercise late in the course.
	  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


	  /*
	  locationFinder() returns an array of every location string from the JSONs
	  written for bio, education, and work.
	  */
	  function locationFinder() {

	    // initializes an empty array
	    var locations = [];

	    // adds the single location property from bio to the locations array
	    locations.push(bio.contacts.location);

	    // iterates through school locations and appends each location to
	    // the locations array
	    for (var school in education.schools) {
	      locations.push(education.schools[school].location);
	    }

	    // iterates through work locations and appends each location to
	    // the locations array
	    for (var job in work.jobs) {
	      locations.push(work.jobs[job].location);
	    }

	    return locations;
	  }

	  /*
	  createMapMarker(placeData) reads Google Places search results to create map pins.
	  placeData is the object returned from search results containing information
	  about a single location.
	  */
	  function createMapMarker(placeData) {

	    // The next lines save location data from the search result object to local variables
	    var lat = placeData.geometry.location.lat();  // latitude from the place service
	    var lon = placeData.geometry.location.lng();  // longitude from the place service
	    var name = placeData.formatted_address;   // name of the place from the place service
	    var bounds = window.mapBounds;            // current boundaries of the map window

	    // marker is an object with additional data about the pin for a single location
	    var marker = new google.maps.Marker({
	      map: map,
	      position: placeData.geometry.location,
	      title: name
	    });

	    // infoWindows are the little helper windows that open when you click
	    // or hover over a pin on a map. They usually contain more information
	    // about a location.
	    var infoWindow = new google.maps.InfoWindow({
	      content: name
	    });

	    // hmmmm, I wonder what this is about...
	    google.maps.event.addListener(marker, 'click', function() {
	      infoWindow.open(map,marker);
	    });

	    // this is where the pin actually gets added to the map.
	    // bounds.extend() takes in a map location object
	    bounds.extend(new google.maps.LatLng(lat, lon));
	    // fit the map to the new marker
	    map.fitBounds(bounds);
	    // center the map
	    map.setCenter(bounds.getCenter());
	  }

	  /*
	  callback(results, status) makes sure the search returned results for a location.
	  If so, it creates a new map marker for that location.
	  */
	  function callback(results, status) {
	    if (status == google.maps.places.PlacesServiceStatus.OK) {
	      createMapMarker(results[0]);
	    }
	  }

	  /*
	  pinPoster(locations) takes in the array of locations created by locationFinder()
	  and fires off Google place searches for each location
	  */
	  function pinPoster(locations) {

	    // creates a Google place search service object. PlacesService does the work of
	    // actually searching for location data.
	    var service = new google.maps.places.PlacesService(map);

	    // Iterates through the array of locations, creates a search object for each location
	    for (var place in locations) {

	      // the search request object
	      var request = {
	        query: locations[place]
	      };

	      // Actually searches the Google Maps API for location data and runs the callback
	      // function with the search results after each search.
	      service.textSearch(request, callback);
	    }
	  }

	  // Sets the boundaries of the map based on pin locations
	  window.mapBounds = new google.maps.LatLngBounds();

	  // locations is an array of location strings returned from locationFinder()
	  locations = locationFinder();

	  // pinPoster(locations) creates pins on the map for each location in
	  // the locations array
	  pinPoster(locations);

	}


	/*
	Uncomment the code below when you're ready to implement a Google Map!
	*/

	// Calls the initializeMap() function when the page loads
	window.addEventListener('load', initializeMap);

	// Vanilla JS way to listen for resizing of the window
	// and adjust map bounds
	window.addEventListener('resize', function(e) {
	  
	  //Make sure the map bounds get updated on page resize
	  map.fitBounds(mapBounds);
	});

	// Call functions to display the various resume sections
	bio.display();
	work.display();
	projects.display();
	education.display();
	displayMap();


})(jQuery);

