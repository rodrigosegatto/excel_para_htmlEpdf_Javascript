class Table {
    constructor(contentProcessed){
        this.header = contentProcessed[0];
        contentProcessed.shift();
        this.rows = contentProcessed;
    }

    //Campo virtual com esse "GET"
    get RowCount(){
        return this.rows.length;
    }

    get columnCount(){
        return this.header.length;
    }
}

module.exports = Table;