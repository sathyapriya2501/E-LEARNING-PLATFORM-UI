// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Course Details</title>
//   <style>
//     body { font-family: Arial; padding: 20px; }
//     video { width: 100%; max-width: 600px; }
//   </style>
// </head>
// <body>

//   <h1 id="course-title">Course Title</h1>
//   <p id="course-desc">Course Description</p>

//   <video id="course-video" controls>
//     <source id="video-source" src="" type="video/mp4">
//     Your browser does not support the video tag.
//   </video>

//   <script>
//     const params = new URLSearchParams(window.location.search);
//     const courseId = params.get("course");

//     const courses = {
//       html: {
//         title: "HTML Basics",
//         desc: "Learn the structure and syntax of HTML.",
//         video: "assets/videos/html-intro.mp4"
//       },
//       js: {
//         title: "JavaScript Essentials",
//         desc: "Master the fundamentals of JavaScript.",
//         video: "assets/videos/js-intro.mp4"
//       }
//     };

//     const course = courses[courseId];

//     if (course) {
//       document.getElementById("course-title").textContent = course.title;
//       document.getElementById("course-desc").textContent = course.desc;
//       document.getElementById("video-source").src = course.video;
//       document.getElementById("course-video").load();
//     } else {
//       document.body.innerHTML = "<h2>Course not found</h2>";
//     }
//   </script>

// </body>
// </html>

