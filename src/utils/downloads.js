import * as d3 from "d3";
import { saveAs } from 'file-saver';

export const downloadData = (buttonID, data, filename) => {

    var a = document.getElementById(buttonID);
    a.addEventListener('click', function (e) {

        var blob = new Blob([d3.csvFormat(data)],
            { type: "text/csv;charset=utf-8" });
        saveAs(blob, filename);
    })
}