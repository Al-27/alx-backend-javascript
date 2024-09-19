const { error } = require('node:console');
const fs = require('node:fs');
const {argv} = require('node:process');

try {

    let fields = {};
  const data = fs.readFileSync(argv[2], 'utf8').split('\n').slice(1)
  .map(row=>{
    row = row.split(',');
        let fld = row.slice(3);
        if (fields[fld] == undefined) {
            fields[fld] = {count: 0, fn: []};
        }
        fields[fld].count++;
        fields[fld].fn.push(row[0]);
        return row;
    });
    
    console.log('Number of students: %d', data.length );
    
    for (const fld in fields) {
    console.log('Number of students in %s: %d. List: %s', fld, fields[fld].count, fields[fld].fn.join(', ') );
    }
} 
catch (err) {

    console.error('Cannot load the database');

}