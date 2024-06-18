function getElementWidth(content, padding, border) {
    const res1 = Number.parseFloat(content);
    const res2 = Number.parseFloat(padding);
    const res3 = Number.parseFloat(border);
    const message = `${res1 + 2*res2 + 2*res3}`;
    return message
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));