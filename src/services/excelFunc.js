import excel4node from 'excel4node';
import fileSaver from 'file-saver';

const workbook = new excel4node.Workbook();

var boldStyleCenter = workbook.createStyle({
  font: {
    bold: true
  },
  alignment: {
    horizontal: 'center',
  }
});

const headerFill = workbook.createStyle({
  fill:{
    type: 'pattern',
    patternType: 'solid',
    bgColor: 'white',
    fgColor: '9BC2E6'
  }
});

const rdTitle = workbook.createStyle({
  alignment:{
    horizontal: 'center'
  },
  font: {
    bold: true
  }
})

const rightAlignBold = workbook.createStyle({
  alignment:{
    horizontal: 'right'
  },
  font: {
    bold: true
  }
});

const leftAlign = workbook.createStyle({
  alignment:{
    horizontal: 'left'
  }
});

const centerAlign = workbook.createStyle({
  alignment:{
    horizontal: 'center'
  }
});



export function excelFunc(rounds) {
  const worksheet = workbook.addWorksheet(`${rounds[1].player}'s rounds`);
  let startPoint = 1;

  for(let i = 0; i < rounds.length; i++){
    const rd = rounds[i];
    //cell arguments -> cell(row, column)
    worksheet.cell(startPoint, 10).string(rd.course).style(centerAlign).style(rdTitle);
    worksheet.cell(startPoint, 1, startPoint + 2, 19).style(headerFill); //fills background of header of each card

    worksheet.cell(startPoint + 1, 10).string(`Date: ${rd.date} Tee: ${rd.tee}`).style(centerAlign);
    worksheet.cell(startPoint, 19).string(rd.player);

    worksheet.cell(startPoint + 2, 5).string('Score').style(rightAlignBold);
    worksheet.cell(startPoint + 2, 6).number(rd.totalScore).style(leftAlign);
    worksheet.cell(startPoint + 2, 8).string('FIR').style(rightAlignBold);
    worksheet.cell(startPoint + 2, 9).number(rd.totalFir).style(leftAlign);
    worksheet.cell(startPoint + 2, 11).string('GIR').style(rightAlignBold);
    worksheet.cell(startPoint + 2, 12).number(rd.totalGir).style(leftAlign);
    worksheet.cell(startPoint + 2, 14). string('Putts').style(rightAlignBold);
    worksheet.cell(startPoint + 2, 15).number(rd.totalPutts).style(leftAlign);

    worksheet.cell(startPoint + 3, 1).string('Hole');
    worksheet.cell(startPoint + 4, 1).string('Score');
    worksheet.cell(startPoint + 5, 1).string('FIR');
    worksheet.cell(startPoint + 6, 1).string('GIR');
    worksheet.cell(startPoint + 7, 1).string('Putts');

    for(let j = 1; j < rd.holesScore.length + 1; j++){
      worksheet.column(j).setWidth(8);
      worksheet.cell(startPoint + 3, j + 1).number(j);
      worksheet.cell(startPoint + 4, j + 1).number(rd.holesScore[j - 1]);
      let fir = rd.fir[j - 1].toString();
      worksheet.cell(startPoint + 5, j + 1).string(fir);
      let gir = rd.gir[j - 1 ].toString();
      worksheet.cell(startPoint + 6, j + 1).string(gir);
      worksheet.cell(startPoint + 7, j + 1).number(rd.putts[j - 1]);

    } 

    startPoint = startPoint + 9;
    
  }
  
  workbook.writeToBuffer().then(function(buffer){
    var file = new File([buffer], `${rounds[1].player}.xlsx`, { type: 'application/vnd.ms-excel' });
    fileSaver.saveAs(file);
  });
}

