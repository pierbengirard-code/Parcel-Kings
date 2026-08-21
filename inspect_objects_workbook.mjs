import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "C:/Users/pirbeN/Desktop/Objets_colis (1).xlsx";
const previewDir = "C:/Users/pirbeN/Documents/ChatGPT/Jeux/outputs/objects_workbook_preview_2";
const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(inputPath));
console.log((await workbook.inspect({kind:"workbook,sheet,table", maxChars:8000, tableMaxRows:20, tableMaxCols:12, tableMaxCellChars:160})).ndjson);
const sheets = JSON.parse((await workbook.inspect({kind:"sheet", include:"id,name", maxChars:4000})).ndjson.split("\n")[0]);
await fs.mkdir(previewDir, {recursive:true});
for (const sheet of workbook.worksheets.items) {
  const used = sheet.getUsedRange();
  console.log(`SHEET=${sheet.name} USED=${used?.address ?? "none"}`);
  if (!used) continue;
  const blob = await workbook.render({sheetName:sheet.name, autoCrop:"all", scale:1.5, format:"png"});
  await fs.writeFile(`${previewDir}/${sheet.name.replace(/[^a-z0-9_-]/gi,"_")}.png`, new Uint8Array(await blob.arrayBuffer()));
}
