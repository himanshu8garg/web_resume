// var name= "Himanshu Garg";
// var role= "Student";
// formattedName=HTMLheaderName.replace("%data%",name);
// formattedRole=HTMLheaderRole.replace("%data%",role);
//
// $("#header").append(formattedName);
// $("#header").append(formattedRole);

var bio = {
  "name": "Himanshu Garg",
  "role": "Student",
  "contacts": {
    "mobile": "",
    "email": "hgarg@sfu.ca",
    "github": "himanshu8garg",
    "twitter": "himanshu8garg",
    "location": "Vancouver"
  },
  "welcomeMessage": "Hello!",
  "skills": ["HTML", "CSS", "Javascript", "C", "C++","Python", "Assembly Programming", "Perl","Bash Scripting", "jQuery", "Windows", "Linux", "Verilog", "VHDL"],
  "bioPic": "images/me.jpg"
}
var work={
  "jobs": [
    {
      "employer": "Simon Fraser University",
      "title": "IT Technician",
      "location": "Burnaby, BC",
      "dates" : "Sep 2015 - Dec 2016",
      "description": "<ul><li>Provided front desk support in the IT"+
                      " office regarding problems with wireless connectivity,"+
                      " printer issues and also resolving tickets submitted by"+
                      " students, staff and professors</li><li>Resolved"+
                      " technical problems though phone with strong verbal skills</li></ul>"
    },
    {
      "employer": "SAP Canada Inc.",
      "title": "Systems Administrator",
      "location": "Vancouver, BC",
      "dates" : "Jan 2015 - Aug 2015",
      "description": "<ul><li>Provisioned and deployed Linux and Windows virtual systems on vSphere 6.0 as per customer requests and also troubleshooting those systems to keep them up and running</li>"+
                        "<li>Wrote scripts in Bash, Perl to automate common tasks and cleanup of the storage systems and managed the scripts through Github </li>"+
                        "<li>Managed the datacenter, involves inventory check, ensured the servers were running in healthy condition which improved efficiency of the datacenter</li></ul>"

    }
    ]

}

var projects={
  "projects": [
    
    {
      "title": "Projects, Self-Directed",
      "dates" : "Sep 2015 - Present",
      "description": "<ul><li>Developed a Tribute page and a personal portfolio page using HTML/CSS combined with BootStrap and also worked on a Telephone directory and a Virtual Cash Register project in Javascript</li>"+
                        "<li>Worked with Raspberry-Pi to integrate Amazon’s Alexa personal voice assistant and developed a script which goes to the website and orders a pizza, executed through a specific voice command</li></ul>",
      "images": []
    },
    {
      "title": "Multi-Face Shuffle, Multimedia Communications Engineering, SFU",
      "dates" : "Jan - Apr 2016",
      "description": "<ul><li>Implemented a face swapping application in Python using OpenCV and OpenFace deep learning algorithms which detected faces in an image and randomly swapped them with other faces in the image</li>"+
                        "<li>Used various image processing techniques such as Inpainting to perfect our results and compiled a final project report and demonstrated our project to the class </li></ul>",
      "images": []
    },
    {
      "title": "AM and FM Modulation, Simon Fraser University",
      "dates" : "Jan - Apr 2016",
      "description": "<ul><li>Studied AM and FM Modulation and Demodulation using RF filter, function generators and compared the theoretical and experimented values and documented the results in form of a formal lab report </li>"+
                        "<li>Learnt to operate different lab equipment such as Direct FM Multiplex Generator (Model 9413) and TEK-2712 Spectrum Analyzer, TDS 1012 oscilloscope</li></ul>",
      "images": []
    },
    {
      "title": "DMA-based BUS system, Digital System Design, SFU",
      "dates" : "Jan - Apr 2016",
      "description": "<ul><li>Worked with 2 other students in development of a VHDL based DMA BUS system consisting of IDECODE, ALU, DMA, DMEM, IMEM, RFILE components</li>"+
                        "<li>Synthesized and compiled it on the Terasic DE2-115 board using Quartus and displayed our results on the 7 segment HEX display using Switches as inputs </li>"+
                        "<li>Designed an Audio monitoring system which samples audio in and controls the volume at which the audio is output</li></ul>",
      "images": []
    },
    {
      "title": "AFX iPhone app, Software Development, SFU",
      "dates" : "Sep - Dec 2014 ",
      "description": "<ul><li>Collaborated with 4 other students in the designing and development of a health based iPhone app in Xcode using Objective C which connects with a physical exercising gear</li>"+
                        "<li>Worked on sprite animation of the exercises using Photoshop and Adobe Flash to create the animation and embedding it into the app to guide the user on how to perform an exercise using the gear</li>"+
                        "<li>Maintaining optimum quality of the app being on the role of Quality Assurance involved with unit testing of the app, writing test cases, performing automated testing</li></ul>",
      "images": []
    },
    {
      "title": "UART Performance Monitor, Real Time System Software, SFU ",
      "dates" : "Sep - Dec 2014 ",
      "description": "<ul><li>Implement a kernel Timer Driver including an interrupt servicing routine in a group of 4 students in a PetaLinux environment and testing the driver on a Zedboard with provided test file</li>"+
                        "<li>Writing a C code to create a test file framework for displaying text to a screen by controlling individual pixels through a VGA driver code</li></ul>",
      "images": []
    },
    {
      "title": "CPU Data Path, Introduction to Computer Architecture, SFU ",
      "dates" : "Jan - Apr 2014",
      "description": "<ul><li>Designed a virtual machine to perform basic arithmetic operations in VHDL which helped in basic understanding of working of CPU</li>"+
                        "<li>Programmed the components required to implement the design such as ROM, Multiplexers, Registers files and connected them in a digital circuit using DesignWorks5 </li></ul>",
      "images": []
    },
    {
      "title": "Telephone Directory, Data Structures and Programming, SFU",
      "dates" : "Sep - Dec 2014 ",
      "description": "<ul><li>Designed a program in C++ to simulates a telephone directory using algorithms such as trees, hash tables and linked lists allowing the user to add, edit and delete contact numbers</li>"+
                        "<li>Debugged the code using different inputs, identified errors and fixed them which resulted in improved coding script with no memory loss</li>"+
                        "<li>Allowed the user to save data to text file which improved the flexibility of the program</li></ul>",
      "images": []
    }
    ]
}
var communityEngagement={
  "community": [
    {
      "title": "Peer Educator, Fraser International College, Burnaby, BC",
      "dates" : "Sep 2013 - Apr 2014",
      "description": "<ul><li>Taught peers to achieve success in their studies by explaining the basic concepts of subjects; Physics, Math, Economics, Python and C++</li></ul>",
    },
    {
      "title": "IT Support, Fraser International College, Burnaby, BC",
      "dates" : "Sep 2014 - Dec 2014",
      "description": "<ul><li>Provided support to professors regarding technical issues in the classroom such as connecting projectors to their laptops, wireless connectivity on their mobile devices  </li></ul>",
    }
  ]
  }
var education={
  "schools": [
    {
      "name": "Simon Fraser University",
      "location":"Burnaby, BC",
      "degree": "Bachelors of Applied Sciences ",
      "majors": ["Computer Engineering"],
      "dates": "2012-Present"
    }
  ]

};

var displayBio = function(){
	var formattedName=HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);
	var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);

	//var formattedMobile=HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	//$("#footerContacts").append(formattedMobile);
	var formattedemail=HTMLemail.replace("%data%", bio.contacts["email"]);
	$("#footerContacts").append(formattedemail);
	var formattedtwitter=HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
	$("#footerContacts").append(formattedtwitter);
	var formattedgithub=HTMLgithub.replace("%data%", bio.contacts["github"]);
	$("#footerContacts").append(formattedgithub);


	if (bio.skills.length > 0){
	    //  $("#header").append(HTMLskillsStart);

	      for (skill in bio.skills){
	         var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	          $("#skills-add").append(formattedSkill);
	}
	}
}
displayBio();
var displayWork = function(){
	for (job in work.jobs){
  $("#workExperience").append(HTMLworkStart);

   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
   var formattedEmployerTitle=formattedEmployer+formattedTitle;

   $(".work-entry:last").append(formattedEmployerTitle);

   var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
   $(".work-entry:last").append(formattedDates);

   var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
   $(".work-entry:last").append(formattedDescription);

	}

}
displayWork();
var displayProjects =function(){
  for (project in projects.projects){
  $("#projects").append(HTMLprojectStart);


   var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

   var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
   $(".project-entry:last").append(formattedDates);

   var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
   $(".project-entry:last").append(formattedDescription);

   if (projects.projects[project].images.length > 0){
	   for (image in projects.projects[project].images){
		   var formattedImage=HTMLProjectDates.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
	   }
   }

  }

}
displayProjects();

var displayCommunityEngagement =function(){
  for (community in communityEngagement.community){
  $("#community").append(HTMLcommunityStart);


   var formattedTitle = HTMLcommunityTitle.replace("%data%", communityEngagement.community[community].title);
	$(".community-entry:last").append(formattedTitle);

   var formattedDates=HTMLcommunityDates.replace("%data%",communityEngagement.community[community].dates);
   $(".community-entry:last").append(formattedDates);

   var formattedDescription=HTMLcommunityDescription.replace("%data%",communityEngagement.community[community].description);
   $(".community-entry:last").append(formattedDescription);

  }

}
 displayCommunityEngagement();

var displayEducation = function(){
  	for (school in education.schools){
  $("#education").append(HTMLschoolStart);

   var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
   $(".education-entry:last").append(formattedName);

   var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
   $(".education-entry:last").append(formattedDates);
   var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
   $(".education-entry:last").append(formattedLocation);
   var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
   $(".education-entry:last").append(formattedDegree);
   for (major in education.schools[school].majors){
     var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
     $(".education-entry:last").append(formattedMajor);
   }
	}

}
displayEducation();
