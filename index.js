function documentLoaded() {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('GenerateButton')) {
      const codeContainer = document.querySelector('.CodeContainer');

      Array.from(codeContainer.children).forEach(child => child.remove());
      codes = document.querySelector('.CodeInput').value.split(/,|\s/);
      codes.forEach((code) => {
        const svg =  document.createElementNS('http://www.w3.org/2000/svg','svg')
        svg.classList.add('barcode')
        svg.setAttribute('jsbarcode-value', code);
        codeContainer.appendChild(svg);
      });

      JsBarcode(`.barcode`).init();
    }
  })
}