class Processor{
    static process(data){
        var rows = data.split("\r\n");
        var rowsFormated = [];

        rows.forEach(row => {
            var arr = row.split(';');
            rowsFormated.push(arr);
        });

        return rowsFormated;
    }
}

module.exports = Processor;