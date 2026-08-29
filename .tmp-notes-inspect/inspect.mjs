import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const path = "C:/Users/pirbeN/Desktop/Objets_colis.xlsx";
const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(path));
const overview = await wb.inspect({ kind: "sheet", include: "id,name", maxChars: 4000 });
console.log(overview.ndjson);
const table = await wb.inspect({ kind: "table", range: "'Feuille 10'!A1:H120", include: "values,formulas", tableMaxRows: 120, tableMaxCols: 8, tableMaxCellChars: 500, maxChars: 50000 });
console.log(table.ndjson);
