const pdf = require('html-pdf');

class PdfWriter {
    static writerPDF(filename, html){
        pdf.create(html,{}).toFile(filename,(err) => {});
    }
}

module.exports = PdfWriter;