<<<<<<< HEAD
//dummy excelFunc just to use what is already set up 
//using it to write to file.
// const fs = require('fs');

// export function excelFunc(rounds){
//   fs.writeFile('test', 'this is a test', (err) => {
//     if(err) throw err;
//     console.log('lyric saved');
//   })
// }

// import { storage } from '../services/firebase';
import excel4node from 'excel4node';

// let storageRef = storage.ref();
// let golfRd = storageRef.child('golfRd.xlsx');
=======
import excel4node from 'excel4node';
import fileSaver from 'file-saver';
>>>>>>> master

const workbook = new excel4node.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');

export function excelFunc(rounds) {
  let startPoint = 1;
<<<<<<< HEAD
   
=======

>>>>>>> master
  for(let i = 0; i < rounds.length; i++){
    const rd = rounds[i];
    worksheet.cell(startPoint, 1).string(rd.player);
    worksheet.cell(startPoint, 2).string(rd.course);
    worksheet.cell(startPoint, 3).string(rd.date);
    worksheet.cell(startPoint, 4).string(rd.tee);
    worksheet.cell(startPoint, 5).number(rd.totalScore);
    worksheet.cell(startPoint, 6).number(rd.totalFir);
    worksheet.cell(startPoint, 7).number(rd.totalGir);
    worksheet.cell(startPoint, 8).number(rd.totalPutts);

    for(let j = 1; j < rd.holesScore.length + 1; j++){
      worksheet.cell(startPoint + 2, j).number(j);
      worksheet.cell(startPoint + 3, j).number(rd.holesScore[j - 1]);
      worksheet.cell(startPoint + 4, j).bool(rd.fir[j - 1]);
      worksheet.cell(startPoint + 5, j).bool(rd.gir[j - 1]);
<<<<<<< HEAD
      worksheet.cell(startPoint + 6, j).number(rd.putts[j-1]);
=======
      worksheet.cell(startPoint + 6, j).number(rd.putts[j - 1]);
>>>>>>> master

    } 

    startPoint = startPoint + 8;
    
  }
<<<<<<< HEAD
  workbook.write('golfRd.xlsx');
}
//   function(err, stats){
//     if(err){
//       console.log(err)
//     } else {
//       console.log(stats);
//     }
//   });
// }
=======
  
  workbook.writeToBuffer().then(function(buffer){
    var file = new File([buffer], 'rounds.xlsx', { type: 'application/vnd.ms-excel' });
    fileSaver.saveAs(file);
  });
}
>>>>>>> master

