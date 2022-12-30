function starClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pVNYCTyWF/model.json', modelReady);
}
function modelReady(){
    classifier.classify( gotResults);
}
function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML= 'Precisión - '+ (results[0].confidence*100).toFixed(2)+"%";
        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        if (results[0].label == "aplausos") {
            img.classList.remove("girar");
            void img.offsetWidth;
            img.classList.add("girar");
            img1.src = 'alien2.png'
            img2.src = 'alien3.png'
        } else if (results[0].label == "agua") {
            img.src = 'alien1.png'
            img1.classList.remove("girar");
            void img1.offsetWidth;
            img1.classList.add("girar");
            img2.src = 'alien3.png'
        } else{
            img.src = 'alien1.png'
            img1.src = 'alien2.png'
            img2.src = 'alien3.gif'
        }
    }
}
