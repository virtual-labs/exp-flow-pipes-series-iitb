let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Flow through pipes in series</h5>
        <p>Learning Objective: Calculate the discharge rate</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate Discharge", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 1</p> <br>
        <h5> The difference in water levels of two tanks is ${H}m which are connected by three pipes in series.</h5>
        <h5>L<sub>1</sub> = ${L1}m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; L<sub>2</sub> = ${L2}m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; L<sub>3</sub> = ${L3}m</h5>
        <h5>d<sub>1</sub> = ${d1}mm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d<sub>2</sub> = ${d2}mm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d<sub>3</sub> = ${d3}mm</h5>
        <h5> Take f = 0.005</h5>
        <h5> Find the discharge considering the minor loss.</h5>
        <br>
        <div style='text-align: center;'><img style='width: 50%;' src='./images/activity1.png'></div>
        <br>

        <h5></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_1 = \\frac{\\pi}{4} d_1^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp'> <span id='cal01-val-sp'></span> m<sup>2</sup>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_2 = \\frac{\\pi}{4} d_2^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp'> <span id='cal02-val-sp'></span> m<sup>2</sup>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_3 = \\frac{\\pi}{4} d_3^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span> m<sup>2</sup>
        </p>

        <h5>Using continuity equation</h5>
        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ v_2= \\frac{A_1 v_1}{A_2},\\ \\ \\ \\ v_3 = \\frac{A_1 v_1}{A_3} $$
            </span>
        </p>

        <h5>Now</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ H = \\frac{0.5 v_1^2}{2g} + \\frac{4 f L_1 v_1^2}{2 g d_1} + \\frac{0.5(\\frac{A_1}{A_2} v_1)^2}{2g} + \\frac{4 f L_2(\\frac{A_1}{A_2} v_1)^2}{2 g d_2} + \\frac{[(\\frac{A_1 v_1}{A_2}) - (\\frac{A_1 v_1}{A_3})]^2}{2g} + \\frac{4 f L_3(\\frac{A_1 v_1}{A_3})^2}{2 g d_3} + \\frac{(\\frac{A_1}{A_3} v_1)^2}{2 g} $$
            </span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v_1 = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span> m/s
        </p>

        <h5>Discharge is given by</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = A_1 v_1 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> m<sup>3</sup>/s = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> litre/s
        </p>
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify0();'  id='temp-btn-2' >Verify</button></div>
    </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    A1 = (Math.PI / 4) * Math.pow(d1_cal, 2);
    A2 = (Math.PI / 4) * Math.pow(d2_cal, 2);
    A3 = (Math.PI / 4) * Math.pow(d3_cal, 2);
    r1 = A1 / A2;
    r2 = A1 / A3;
    z = (0.5 / 2 * g) + ((4 * f * L1) / (2 * g * d1_cal)) + ((0.5 * Math.pow(r1, 2)) / (2 * g)) + ((4 * f * L2 * Math.pow(r1, 2)) / (2 * g * d2_cal)) + (Math.pow((r1 - r2), 2)) / (2 * g) + ((4 * f * L3 * Math.pow(r2, 2)) / (2 * g * d3_cal)) + Math.pow(r2, 2) / (2 * g);
    v1 = Math.sqrt(H / z);
    Q = A1 * v1;
    Q_lit = Q * 1000;
}
function verify0() {
    let btn = document.getElementById('temp-btn-2');
    console.log("A1 = ", A1);
    console.log("A2 = ", A2);
    console.log("A3 = ", A3);
    console.log("r1 = ", r1);
    console.log("r2 = ", r2);
    console.log("z = ", z);
    console.log("v1 = ", v1);
    console.log("Q = ", Q);
    console.log("Q in litre = ", Q_lit);
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    let inp3 = document.getElementById('cal03-inp');
    let sp3 = document.getElementById('cal03-val-sp');
    let inp4 = document.getElementById('cal04-inp');
    let sp4 = document.getElementById('cal04-val-sp');
    let inp5 = document.getElementById('cal05-inp');
    let sp5 = document.getElementById('cal05-val-sp');
    let inp6 = document.getElementById('cal06-inp');
    let sp6 = document.getElementById('cal06-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(A1.toFixed(2)))) {
        alert('A1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(A2.toFixed(2)))) {
        alert('A2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(A3.toFixed(2)))) {
        alert('A3 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(v1.toFixed(2)))) {
        alert('v1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(Q.toFixed(2)))) {
        alert('Discharge is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(2)), parseFloat(Q_lit.toFixed(2)))) {
        alert('Discharge in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(A1).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(A2).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(A3).toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${(v1).toFixed(4)}`;
    inp5.remove();
    sp5.innerText = `${(Q).toFixed(4)}`;
    inp6.remove();
    sp6.innerText = `${(Q_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map