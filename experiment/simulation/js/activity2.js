function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate discharge by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Discharge", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> d1, d2, d3 respectively are connected in series. These pipes are to be replaced by single pipe of length L = (L<sub>1</sub> + L<sub>2</sub> + L<sub>3</sub>)m. Find the diameter of the single pipe.</h5>
        <h5>L<sub>1</sub> = ${L1}m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; L<sub>2</sub> = ${L2}m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; L<sub>3</sub> = ${L3}m</h5>
        <h5>d<sub>1</sub> = ${d1}mm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d<sub>2</sub> = ${d2}mm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d<sub>3</sub> = ${d3}mm</h5>
        <br>
        <div style='text-align: center;'><img style='width: 50%;' src='./images/activity1.png'></div>
        <br>

        <h5></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ \\frac{L}{d^5} = \\frac{L_1}{d_1^5} + \\frac{L_2}{d_2^5} + \\frac{L_3}{d_3^5} $$
            </span>
        </p>

        <h5></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ d = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> m
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify1();'  id='temp-btn-4' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    L = L1 + L2 + L3;
    let demval = (L1 / Math.pow(d1_cal, 5)) + (L2 / Math.pow(d2_cal, 5)) + (L3 / Math.pow(d3_cal, 5));
    d = Math.pow((L / demval), (1 / 5));
}
function verify1() {
    let btn = document.getElementById('temp-btn-4');
    console.log("L = ", L);
    //console.log("demval = ", demval);
    console.log("d = ", d);
    let inp1 = document.getElementById('cal07-inp');
    let sp1 = document.getElementById('cal07-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(d.toFixed(2)))) {
        alert('d is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(d).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    exp_complete();
}
function exp_complete() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('temp-btn-8')
    // );
    // btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity2.js.map