
// Bio JSON object
var bio = {
	"name" : "Jason Taylor",
	"role" : "SF Bay Area Front-end Web Developer",
	"contacts" : {
		"email" : "jtaylor@faultlinemedia.com",
		"mobile" : "650-759-2009",
		"github" : "https://github.com/jastylr",
		"linkedin" : "https://www.linkedin.com/in/jasonetaylor1",
		"location" : "Redwood City, CA"
	},
	"welcomeMessage": "<p>My name is Jason Taylor and I am a web developer living and working in the San Francisco Bay Area.<\/p><p>Feel free to look around my interactive resume and contact me for any open positions.<\/p>",
	"skills": ["HTML", "CSS", "Javascript", "JQuery", "AJAX", "Responsive design", "Photoshop"],
	"biopic": "images/jason-taylor.jpg"
};

// Work JSON object
var work = {
	"jobs": [
		{
			"employer": "Faultline Media Solutions",
			"title": "Web Designer",
			"location": "Redwood City, CA",
			"dates": "2006-Present",
			"description": "<ul><li>Designed websites using hand-coded HTML and Cascading Style sheets (CSS).<\/li><li>Used PHP to create dynamic web pages that access back-end MySQL databases.<\/li><li>Created websites using the Drupal content management system and providing additional functionality through custom-coded PHP modules.<\/li><li>Used Adobe Photoshop and Illustrator to design site UI mockups and web graphics that were then sliced and optimized in preparation to create CSS based site layouts.<\/li><li>Used JQuery, JavaScript to add client-side browser interactivity.<\/li><li>Created graphics for print media such as brochures, flyers and postcards and worked with print houses to ensure quality results.<\/li><\/ul><p>HTML, CSS, PHP, MySQL, JQuery, JavaScript, AJAX, Twitter Bootstrap, Codeigniter, Drupal CMS, ASP.NET/SQL Server, Git, GitHub<\/p><a href=\"http:\/\/www.faultlinemedia.com\" target=\"_blank\">www.faultlinemedia.com<\/a>"
		},
		{
			"employer" : "Coding Dojo",
			"title" : "Instuctor",
			"location" : "Mountain View, CA",
			"dates" : "September, 2014 - December, 2014",
			"description" : "<p>Provided instruction to students at a Full-stack Web Development bootcamp</p>"
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
	]
};

// Education JSON object
var education = {
	"schools": [
		{
			"name" : "The Coding Dojo",
			"location" : "Mountain View, CA",
			"degree" : "N/A",
			"majors" : [],
			"dates" : 2014,
			"url" : ""
		},
		{
			"name": "University of Santa Cruz Extension",
			"location": "Santa Clara, CA",
			"degree" : "N/A",
			"majors" : [],
			"dates": 2001,
			"url" : ""
		},
		{
			"name": "College of San Mateo",
			"location": "San Mateo, CA",
			"degree" : "N/A",
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
			"url" : "http://www.udacity.com"
		}
	]
};

// Projects JSON object - added URL and Technologies properties not in specification
var projects = {
	"project" : [
		{
			"title": "Faultline Media Solutions",
			"dates": "2014",
			"description": "This is my personal website",
			"images": ["images/projects/thumb/faultlinemedia-d.jpg"],
			"details" : {
				"url": "http://www.faultlinemedia.com",
				"image" : "images/projects/large/faultlinemedia.jpg",
				"description" : "This is my personal business website.",
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
				"description" : "This is a PHP site that was fun to build",
				"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "Responsive Design"]
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
				"description" : "This is a PHP site that was fun to build",
				"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "Responsive Design"]
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
				"description" : "This is a PHP site that was fun to build",
				"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "Responsive Design", "Drupal"]
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
				"description" : "This is a PHP site that was fun to build",
				"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "Drupal"]
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
				"description" : "This is a PHP site that was fun to build",
				"technologies": ["HTML", "CSS", "PHP/MySQL", "JQuery", "MindBody API", "Drupal"]
			}
		}
	]
};

// Display method used to output bio information to the screen
bio.display = function() {
	$('#bio-name').append(HTMLheaderName.replace('%data%', bio.name));
	$('#bio-name').append(HTMLheaderRole.replace('%data%', bio.role));
	$('#bio-details').append(HTMLbioPic.replace('%data%', bio.biopic));
	$('#bio-details').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

	var bioMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var bioEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var bioGithub = HTMLgithub.replace('%data%', makeLink(bio.contacts.github));
	var bioLinkedIn = HTMLlinkedIn.replace('%data%', makeLink(bio.contacts.linkedin));
	var bioLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	var formattedContacts = bioMobile + bioEmail + bioGithub + bioLinkedIn + bioLocation;
	$('#topContacts, #footerContacts').append(formattedContacts);

	// Check if the skills array is empty or not and if not, output the skills
	if (bio.skills.length > 0) {
		$('#bio-details .col-md-10').append(HTMLskillsStart);
		for(skill in bio.skills) {
			$('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]));
		}
	}
}

projects.display = function() {
	for (var project in projects.project) {
		$('#projects .inner').append(HTMLprojectStart);

		var projectTitle = HTMLprojectTitle.replace('%data%', projects.project[project].title);
		projectTitle = projectTitle.replace('%id%', project);
		$('.project-entry:last').append(projectTitle);

		var projectDate = HTMLprojectDates.replace('%data%', projects.project[project].dates);
		$('.project-entry:last').append(projectDate);

		var projectDesc = HTMLprojectDescription.replace('%data%', projects.project[project].description);
		$('.project-entry:last').append(projectDesc);

		if (projects.project[project].images.length > 0) {
			for (image in projects.project[project].images) {
				var image = HTMLprojectImage.replace('%data%', projects.project[project].images[image]);
				image = image.replace('%id%', project);
				$('.project-entry:last').append(image);
			}
		}

		var projectView = HTMLprojectView.replace('%data%', project);
		$('.project-entry:last').append(projectView);

		var projectURL = HTMLprojectURL.replace('%data%', projects.project[project].details.url);
		$('.project-entry:last').append(projectURL);

		// Build the project details section
		$('#project-details').append(HTMLprojectDetailStart.replace('%id', 'detail-' + project));
		
		var detailImage = HTMLprojectDetailImage.replace('%data%', projects.project[project].details.image);
		detailImage = detailImage.replace('%name%', projects.project[project].title);
		$('.project-detail .inner:last').append(detailImage);

		var detailDesc = HTMLprojectDetailDesc.replace('%name%', projects.project[project].title);
		detailDesc = detailDesc.replace('%data%', projects.project[project].details.description);
		$('.project-detail .inner:last').append(detailDesc);

		projectURL = HTMLprojectDetailURL.replace(/%data%/g, projects.project[project].details.url);
		$('.project-url:last').append(projectURL);

		if (projects.project[project].details.technologies.length > 0) {
			for (technology in projects.project[project].details.technologies) {
				$('.project-tech:last').append(HTMLprojectDetailTech.replace('%data%', projects.project[project].details.technologies[technology]));
			}
		}
	}
}

work.display = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formatedEmployerTitle = formattedEmployer + formattedTitle;

		$('.work-entry:last').append(formatedEmployerTitle);
		$('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
		$('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
		$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
	}
}

education.display = function() {
	$('#education').append(HTMLschoolStart);
	for (school in education.schools) {
		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$('.education-entry:last').append(formattedName + formattedDegree);
		$('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[school].dates));
		$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[school].location));

		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]));
			}
		}
	}
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

// Call functions to display the various resume sections
bio.display();
work.display();
projects.display();
education.display();

// $('#workExperience').click(function() {
// 	$('.work-entry').slideToggle();
// });

$('#mapDiv .row:first').append(googleMap);

