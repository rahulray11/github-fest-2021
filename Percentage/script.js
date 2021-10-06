const convert = () =>{
    let cgp = document.getElementById('cgpa');
    let percentage = document.getElementById('percentage');
    cgp = cgp.value;
    
        let p = parseFloat(cgp * 9.5);
        percentage.textContent = `Percentage : ` +  p + '%';
    }