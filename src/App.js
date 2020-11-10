import './App.css';
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';

const App = () => {
  const onButtonClick = () => {
    let domElement = document.getElementById('my-node');
    htmlToImage.toPng(domElement)
      .then(function (dataUrl) {
        console.log(dataUrl);
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, 'PNG', 10, 20, 300, 200);
        pdf.save("download.pdf");
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };
  return (
    <div className="App" >
      <img id="my-node" src="https://pspdfkit.com/images/blog/2018/render-pdfs-in-the-browser-with-pdf-js/article-header-08575afc.png"></img>
      <button onClick={onButtonClick}>Download PDF</button>
    </div>
  );
}

export default App;
