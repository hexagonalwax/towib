var GoogleSpreadsheet = require("google-spreadsheet");

// spreadsheet key is the long id in the sheets URL
var my_sheet = new GoogleSpreadsheet('1GAAlVhFIORbwNdC93e5kA5lHeJjFHEjL0P9Fe6wRWdY');

// With auth -- read + write
// see below for authentication instructions
var creds = require('./creds.json');

my_sheet.useServiceAccountAuth(creds, function(err){
    // getInfo returns info about the sheet and an array or "worksheet" objects
    my_sheet.getInfo( function( err, sheet_info ){
        // use worksheet object if you want to stop using the # in your calls
        console.log( sheet_info.title + ' is loaded' );
        var sheet1 = sheet_info.worksheets[0];

        sheet1.getRows(function( err, rows ){
            console.log(rows[1].title)
        //     rows[0].colname = 'new val';
        //     rows[0].save(); //async and takes a callback
        //     rows[0].del();  //async and takes a callback
        });
    });

    // column names are set by google and are based
    // on the header row (first row) of your sheet
    // my_sheet.addRow( 2, { colname: 'col value'} );

    // my_sheet.getRows( 2, {
    //     start: 100,          // start index
    //     num: 100,              // number of rows to pull
    //     orderby: 'name'  // column to order results by
    // }, function(err, row_data){
    //     // do something...
    // });
})