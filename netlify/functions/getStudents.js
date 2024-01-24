// getStudents.js
exports.handler = async function (event, context) {
  try {
    // Fetch the hosted JSON file using the actual URL
    const response = await fetch("https://imp-dashboard.netlify.app/src/data/student_list.json");
    const students = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(students),
    };
  } catch (error) {
    console.error("Error fetching student data:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
