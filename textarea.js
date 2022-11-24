function autosize(textarea_id, minRows, maxRows) {
    let textarea = document.getElementById(textarea_id);

    textarea.setAttribute("rows", minRows);

    textarea.addEventListener("input", function () {
        let rows = parseInt(this.getAttribute("rows"), 10);
        while (this.scrollHeight > this.clientHeight) {
            if (rows < maxRows) {
                rows++;
            } else {
                ++rows;
            }
            this.setAttribute("rows", rows);
        }

        if (rows > maxRows) {
            this.setAttribute("rows", maxRows);
            this.style.overflowY = "scroll";
        }
    });
}

autosize("textarea", 2, 5);
