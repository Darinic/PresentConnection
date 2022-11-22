function autosize(textarea_id, minRows, maxRows) {
    let textarea = document.getElementById(textarea_id);

    textarea.setAttribute("rows", minRows);

    textarea.addEventListener("input", function () {
        let rows = parseInt(this.getAttribute("rows"), 10);
        while (this.scrollHeight > this.clientHeight) {
            this.setAttribute("rows", rows);
            if (rows < maxRows) {
                textarea.setAttribute("rows", maxRows);
            } else {
                rows = ++rows;
            }
        }

        if (rows > maxRows) {
            this.setAttribute("rows", maxRows);
            this.style.overflowY = "scroll";
        }
    });
}

autosize("textarea", 3, 6);
