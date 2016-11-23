angular.module("personalSite")
.controller("ResumeCtrl", function($scope,$http) {
	
	$scope.technologies = ["HTML","CSS","JavaScript","AngularJS","Node.js","MySQL","Python"];

	$scope.education = { 
		cornell: {
			universityName:"Cornell University",
			collegeName:"College of Agriculture and Life Sciences",
			degree:"Bachelor of Science in Biological Sciences, ",
			minor: "Business minor",
			gpa:3.54, 
			timeFrame:"2013-2016", 
			award:"Graduated cum laude with distinction in research",
			graduationDate:"May 2016"
		},
		NYU: {
			universityName:"New York University",
			collegeName:"College of Arts and Sciences",
			gpa:3.36, 
			timeFrame:"2012-2013"
		}
	};

	$scope.softwareExperiences = {
		Queens: {
			jobTitle:"Project Manager",
			location: "Psychology department, Queens, NY",
			timeFrame: "June 2016-November 2016",
			details: [
				"Managed team to develop an app for data entry",
				"Used HTML, Bootstrap, and AngularJs for the front end",
				"Used Node.js and MySQL for the back end"
				]
		}
	};

	$scope.otherExperiences = {
		cornellRA: {
			jobTitle:"Research Assistant",
			location: "Entomology department, Cornell University, Ithaca, NY",
			timeFrame: "Spring 2015 – Spring 2016",
			details: [
				"Studied population dynamics of Musca Domesica",
				"DNA extraction, PCR, Gel electrophoresis, DNA cloning"
			]
		},
		broaderView: {
			jobTitle:"A Broader View",
			location: "La Ceiba, Honduras",
			timeFrame: "Winter 2015",
			details: [
				"Assisted dentists in a dental clinic",
				"Organize patient files"
			]
		},
		queensRA: {
			jobTitle:"Research Assistant",
			location: "Psychology department, Queens College, Queens, NY",
			timeFrame: "Summers 2012/2013",
			details: [
				"Studied effects of stress on children of pregnant women for longitudinal birth cohort study",
				"Patient recruitment, tissue powderization and DNA extraction "
			]
		}
	};


	$scope.activities = {
		redCross: {
			organization: "Red Cross club",
			location: "Cornell University, Ithaca, NY",
			details: [
				"Secretary Sept. 2013-May 2016",
				"Blood drives, Disaster Action Team, community work"
			],
			timeFrame: "Sept. 2013-May 2016"
		},
		Taekwondo: {
			location: "Cornell University, Ithaca, NY",
			timeFrame: "Sept. 2013-May 2016"
		}
	}

/*
Activities

Red Cross club	 Sept. 2013-May 2016
Cornell University, Ithaca, NY
•	Secretary Sept. 2015 – May 2016
•	Blood drives, Disaster Action Team, community work

Taekwondo club Sept. 2013-May 2016
Cornell University, Ithaca, NY

About Me
I switched to web development from pre-med, because I enjoy coding more than anything I’ve done previously. Since I began programming, I have been very excited about the work that I am doing and will continue to do. People say that I am both a quick learner and highly motivated to improve. 

Software Experience


Project Manager		           Summer/Fall 2016
Psychology department, Queens College, Queens, NY
•	Managed a team to develop an app for a longitudinal birth cohort study’s data entry
•	Used HTML, Bootstrap, and AngularJS for the front end
•	Used NodeJS, and MySQL for the back end

Other Experience

Research Assistant		  Spring 2015 – Spring 2016
Entomology Department, Cornell University, Ithaca, NY
•	Studied population dynamics of Musca Domesica
•	DNA extraction, PCR, Gel electrophoresis, DNA cloning

A Broader View			                 	Winter 2015
La Ceiba, Honduras
•	Assisted dentists in a dental clinic
•	Organize patient files

Research Assistant		        Summers 2012/2013
Psychology department, Queens College, Queens, NY
•	Studied effects of stress on children of pregnant women for longitudinal birth cohort study
•	Patient recruitment
•	Tissue powderization and DNA extraction 

Publications
Meisel et al. 2016. Is Multifactorial Sex Determination in the House Fly, Musca domestica (L.), Stable Over Time? Journal of Heredity 107 (7): 615-625 


*/
});