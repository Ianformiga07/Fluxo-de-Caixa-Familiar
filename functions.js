
function transformDegree(degree){
    const celsiusExiste = degree.toUpperCase().includes('C');
    const FahrenheitExiste = degree.toUpperCase().includes('F');

    if(!celsiusExiste && !FahrenheitExiste){
        throw new Error('Grau não Identificado!')
    }
    let UpdatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C';

    if(celsiusExiste){
    UpdatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32;
    degreeSign = 'F';
    }

    return formula(UpdatedDegree) + degreeSign
}
try {
    console.log(transformDegree('10C'));
    //transformarGrau('50Z')
} catch(Error){
    console.log(Error.message);
}