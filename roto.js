'use strict';

(function() {

    $(document).ready(function() {
        tableau.extensions.initializeAsync().then(function() {}, function() { console.log('Error while Initializing: ' + err.toString()); });
    });

    function btnClick() {
        var d = tableau.extensions.dashboardContent.dashboard;
        var ws = d.worksheets;
        var l;
        ws.forEach(function(e) {
            if (e.name.includes('Draft List')) {
                l = e;
            }
        })

        l.getSelectedMarksAsync().then(function(marks) {
                const worksheetData = marks.data[0];
                worksheetData['_data'].forEach(e => {
                    //console.log(worksheetData['_data'][0][0]._value);    
                    console.log(e[0]._value);
                })
            })
            .then(console.log('.'));
    }

    $('#mainBtn').click(btnClick);
})();