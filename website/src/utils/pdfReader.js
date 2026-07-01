import * as pdfjsLib from "pdfjs-dist";

// Configure the PDF worker
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export async function extractTextFromPDF(file) {
  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer,
  }).promise;

  let extractedText = "";

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);

    const content = await page.getTextContent();

    const pageText = content.items
      .map((item) => item.str)
      .join(" ");

    extractedText += pageText + "\n\n";
  }

  return extractedText;
}