const btnGenerate = document.querySelector("#generatePdf");

btnGenerate.addEventListener("click", () => {

    const content = document.querySelector("#content");

    const options = {

        margin: [0, 0, 0, 2],
        filename: "certficado.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", putOnlyUsedFonts:true, orientation: "landscape" },
    };

    html2pdf().set(options).from(content).save();

    console.log("OK");
    return;
});