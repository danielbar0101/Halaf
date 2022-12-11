let reports = [];
    const addReport = (ev)=>{
        ev.preventDefault();  //to stop the form submitting
        let report = {
            id: Date.now(),
            LineNumber: document.getElementById('LineNumber').value,
            stationNumber: document.getElementById('station').value
            timedate: document.getElementById('timedate').value
            email: document.getElementById('email').value
            Company: document.getElementById('dropdown').value
            message: document.getElementById('message').value
        }
        reports.push(report);
        document.forms[0].reset(); // to clear the form for the next entries
        //document.querySelector('form').reset();

        //for display purposes only
        console.warn('added' , {reports} );
        let pre = document.querySelector('#msg pre');
        pre.textContent = '\n' + JSON.stringify(reports, '\t', 2);

        //saving to localStorage
        localStorage.setItem('ReportsList', JSON.stringify(reports) );
    }
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('submit').addEventListener('click', addReport);
    });
