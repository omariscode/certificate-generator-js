/*Aqui comecei por criar a variavel mãe, que nesse caso recebe todas as funções*/

const generatePDF = async(name) => {
    const {PDFDocument, rgb} = PDFLib;
    const exBytes = await fetch("./White Gold Elegant Modern Certificate of Participation.pdf").then((res) => {
        return res.arrayBuffer();
    });

    const pdfDoc = await PDFDocument.load(exBytes);

    const page = pdfDoc.getPages();
    const firstPg = page[0]

    firstPg.drawText(name,{
        x: 200,
        y: 300,
        size: 50,
        color: rgb(0, 0, 0),
    }

    )

    const uri = await pdfDoc.saveAsBase64({dataUri: true});
    window.open(uri)

    document.querySelector('#mypdf').src = uri;

};

generatePDF('Alfredo Capitia')