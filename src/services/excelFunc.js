import excel4node from 'excel4node';
import fileSaver from 'file-saver';

const workbook = new excel4node.Workbook();

var boldStyleCenter = workbook.createStyle({
  font: {
    bold: true
  },
  alignment: {
    horizontal: 'center',
  },
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: 'white',
    fgColor: 'aqua'
  }
});

export function excelFunc(rounds) {
  const worksheet = workbook.addWorksheet(`${rounds[1].player}'s rounds`);
  let startPoint = 1;

  for(let i = 0; i < rounds.length; i++){
    const rd = rounds[i];
    //cell arguments -> cell(row, column)
    worksheet.cell(startPoint, 1).string(rd.player).style(boldStyleCenter);
    worksheet.cell(startPoint, 2).string(rd.course).style(boldStyleCenter);
    worksheet.cell(startPoint, 3).string(rd.date).style(boldStyleCenter);
    worksheet.cell(startPoint, 4).string(rd.tee).style(boldStyleCenter);
    worksheet.cell(startPoint, 5).number(rd.totalScore).style(boldStyleCenter);
    worksheet.cell(startPoint, 6).number(rd.totalFir).style(boldStyleCenter);
    worksheet.cell(startPoint, 7).number(rd.totalGir).style(boldStyleCenter);
    worksheet.cell(startPoint, 8).number(rd.totalPutts).style(boldStyleCenter);
    worksheet.cell(startPoint + 2, 1).string('Hole').style(boldStyleCenter);
    worksheet.cell(startPoint + 3, 1).string('Score').style(boldStyleCenter);
    worksheet.cell(startPoint + 4, 1).string('FIR').style(boldStyleCenter);
    worksheet.cell(startPoint + 5, 1).string('GIR').style(boldStyleCenter);
    worksheet.cell(startPoint + 6, 1).string('Putts').style(boldStyleCenter);

    for(let j = 1; j < rd.holesScore.length + 1; j++){
      worksheet.cell(startPoint + 2, j + 1).number(j);
      worksheet.cell(startPoint + 3, j + 1).number(rd.holesScore[j - 1]);
      worksheet.cell(startPoint + 4, j + 1).bool(rd.fir[j - 1]);
      worksheet.cell(startPoint + 5, j + 1).bool(rd.gir[j - 1]);
      worksheet.cell(startPoint + 6, j + 1).number(rd.putts[j - 1]);

    } 

    startPoint = startPoint + 8;
    
  }
  
  workbook.writeToBuffer().then(function(buffer){
    var file = new File([buffer], `${rounds[1].player}.xlsx`, { type: 'application/vnd.ms-excel' });
    fileSaver.saveAs(file);
  });
}

