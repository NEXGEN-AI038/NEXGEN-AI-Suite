import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function analyzeMedicalReport(reportText) {

  const prompt = `
You are an expert physician.

Read the medical report carefully.

Return ONLY valid JSON.

Extract EVERY laboratory test.

Do NOT skip any test.

Do NOT summarize.

Return EXACTLY this JSON.

{
  "patient":{
    "name":"",
    "age":"",
    "gender":"",
    "lab":"",
    "reportDate":""
  },

  "overallHealth":{
    "status":"",
    "summary":""
  },

  "topFindings":[
    "",
    "",
    ""
  ],

  "tests":[
    {
      "test":"",
      "yourResult":"",
      "normalRange":"",
      "status":"",
      "meaning":""
    }
  ],

  "recommendations":[
    "",
    "",
    ""
  ],

  "doctorAdvice":""
}

Medical Report:

${reportText}
`;

  const result = await model.generateContent(prompt);

  let response = result.response.text();

  response = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const json = JSON.parse(response);

  // *************** DEBUG ****************

  console.log("============== AI RESPONSE ==============");

  console.log(json);

  console.log("Patient:", json.patient);

  console.log("Tests Count:", json.tests.length);

  console.table(json.tests);

  console.log("=========================================");

  // **************************************

  return json;

}