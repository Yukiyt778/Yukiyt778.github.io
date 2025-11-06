// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects ranging from Robotics, Computer Vision, Software Development, Data Analysis and Innovation and Entrepreneurship.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-the-imapcts-of-narratives-in-giving-directions",
          title: 'The Imapcts of Narratives in Giving Directions',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-understanding-the-prices-of-used-sailboats-through-factors-correlation-determination-and-characteristic-price-theory",
          title: 'Understanding the Prices of Used Sailboats through Factors Correlation Determination and Characteristic Price...',
          description: "the MCM/ICM 2023 Problem C Contest Submission",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-flight-check-in-system",
          title: 'Flight Check-in System',
          description: "Java based flight check-in system with GUI using Swing framework. Implemented features include flight search, seat selection, and booking confirmation, enhancing user experience and operational efficiency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-weaving-green-of-the-ocean-a-seagrass-bed-integrated-restoration-system",
          title: 'Weaving Green of the Ocean – a seagrass bed integrated restoration system',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-slam-project-using-orb-slam2-and-colmap",
          title: 'SLAM project using ORB-SLAM2 and COLMAP',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_project/";
            },},{id: "projects-underwater-octopus-inspired-soft-gripper",
          title: 'Underwater Octopus-Inspired Soft Gripper',
          description: "Designed and built an octopus-inspired underwater soft gripper using 3D printing and embedded electronics as part of my soft robotics module at the UCL Innovation Lab. The gripper has been tested in an underwater scenario with various shapes and weights of objects, including an orange, keys, a tennis ball, and bottles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-mechanical-design-of-a-robotic-waste-collection-mechanism",
          title: 'Mechanical Design of a Robotic Waste Collection Mechanism',
          description: "Designed and developed a robotic waste collection mechanism for train carriages using the Leo Rover platform. Utilised CAD design, 3D printing, and laser cutting to fabricate the structure, and integrated motors with brushes and electronics for actuation control from the GRID lab at Heriot-Watt University. Implemented autonomous navigation using ROS 1 and a trained waste detection model(SSD MobileNet v2) run on a Raspberry Pi 4B. Co-authored(2nd) the paper “Development of a Waste Collection Robot for Train Carriages Interior”, accepted at IEEE ARM 2025.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-the-goblin-s-challenge",
          title: 'The Goblin’s Challenge',
          description: "Implemented an interactive game set in a D&amp;D background on the Misty robot at The National Robotarium, focusing on gesture recognition using ResNet-50 and built-in storytelling functionality to enhance human-robot interaction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-the-imapcts-of-narratives-in-giving-directions",
          title: 'The Imapcts of Narratives in Giving Directions',
          description: "An interactive dialogue system on a Furhat robot that uses narratives to assist with direction-giving and can answer follow-up questions from the user in a conversational manner with GPT-3 API. Using this system, the investigation would place users in Minecraft environment to determine whether allowing follow-up questions improves various aspects of the interaction, such as recall and usefulness. The paper acknoledging me, named Follow the Yellow or Red Brick Road? Investigating the Impact of Narratives in a Guided Navigation Task, was then published in HAI 2024.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-book-returning-robot-in-library",
          title: 'Book Returning Robot in Library',
          description: "Designed and developed a book-return robot for OUC Library using DJI Robomaster and MechArm, and independently built the bookshelves from scratch using wooden pieces. Programmed the software to implement line-following and obstacle-avoidance functionalities, ensuring efficient robot navigation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-robotic-car-challenge",
          title: 'Robotic Car Challenge',
          description: "This is my first-year course project in the joint programme of the Ocean University of China and Heriot-Watt University. The project is about building a robotic car that can follow lines(both curves and straight lines) and avoid obstacles, with testing the speed and accuracy of the car which is controlled by an Arduino board.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-moving-object-detection-and-segmentation-in-urban-scenes",
          title: 'Moving Object Detection and Segmentation in Urban Scenes',
          description: "Implemented a full pipeline for dynamic object detection in urban driving scenes. Converted semantic segmentation masks into bounding boxes and trained a custom Mask R-CNN architecture for instance segmentation on the CamVid dataset.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-binary-classification-and-point-cloud-segmentation",
          title: 'Binary Classification and Point Cloud Segmentation',
          description: "Built deep learning pipelines combining PointNet++ and Depth Anything V2 for 3D indoor scene understanding. Developed methods for binary scene classification and point-level segmentation to identify tables in 3D point clouds derived from depth maps.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-computer-vision-techniques-on-astronomical-object",
          title: 'Computer Vision Techniques on Astronomical Object',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%75%63%61%62%75%61%76@%75%63%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuting-yuki-huang-38b738331", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-3853-6852", "_blank");
        },
      },];
