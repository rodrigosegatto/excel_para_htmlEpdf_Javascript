const Reader = require('./Reader');
const Writer = require('./Writer');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const PdfWriter = require('./PdfWriter');

async function main(){
    const content = await Reader.read('./users.csv');
    const contentProcessed = Processor.process(content);
    const table = new Table(contentProcessed);
    const html = await HtmlParser.Parse(table);
    Writer.writer(Date.now()+".html",html);
    PdfWriter.writerPDF(Date.now()+".PDF",html);
}

main();

