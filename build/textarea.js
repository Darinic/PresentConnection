"use strict";

function calculateLines() {
  const cols = parseInt(this.getAttribute("cols"), null);
  const text = this.value;
  return Math.ceil(text.length / cols);
}
function regulateRowsAndOverflow({
  rows,
  minRows,
  maxRows
}) {
  const lines = calculateLines.call(this);
  if (rows > maxRows) {
    this.setAttribute("rows", maxRows);
    this.style.overflowY = "scroll";
    this.scrollTop = this.scrollHeight;
  } else if (lines >= minRows && lines <= maxRows) {
    this.setAttribute("rows", lines);
    this.style.overflowY = "hidden";
  }
}
function getRows() {
  return parseInt(this.getAttribute("rows"), null);
}
function setRows(rows) {
  this.setAttribute("rows", rows);
}
function setInitialTextArea(textarea_id, minRows) {
  const textarea = document.getElementById(textarea_id);
  textarea.setAttribute("rows", minRows);
  return textarea;
}
function autosize(textarea_id, minRows, maxRows) {
  const textarea = setInitialTextArea(textarea_id, minRows);
  textarea.addEventListener("keyup", function () {
    let rows = getRows.call(this);
    while (this.scrollHeight > this.clientHeight) {
      if (rows < maxRows) {
        rows++;
      } else {
        ++rows;
      }
      setRows.call(this, rows);
    }
    regulateRowsAndOverflow.call(this, {
      rows,
      minRows,
      maxRows
    });
  });
}
autosize("textarea", 2, 4);