const counter = document.querySelectorAll('.counter');
//counter = [15,260,26]

counter.forEach(myCounter);
function myCounter(Cvalue){
    Cvalue.innerText = '0';

    //function call to show one value by one in 1s
    incrementCounter();
    function incrementCounter(){
        let currentNum =+ Cvalue.innerText;
        let dataCeil = Cvalue.getAttribute('data_ceil'); //15,260,26
        let increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);

        //
        if(currentNum < dataCeil){
            Cvalue.innerText = currentNum;
            setTimeout(incrementCounter, 1000);
        }
        else
        {
            Cvalue.innerText = dataCeil;
        }
    }
}