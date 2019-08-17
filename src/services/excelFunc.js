import excel4node from 'excel4node';
import fileSaver from 'file-saver';

const workbook = new excel4node.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');

export function excelFunc(rounds) {
  let startPoint = 1;

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
      worksheet.cell(startPoint + 6, j).number(rd.putts[j - 1]);

    } 

    startPoint = startPoint + 8;
    
  }
  
  workbook.writeToBuffer().then(function(buffer){
    var file = new File([buffer], 'rounds.xlsx', { type: 'application/vnd.ms-excel' });
    fileSaver.saveAs(file);
  });
}

