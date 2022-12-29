function starClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pVNYCTyWF/model.json', modelReady);
}
function modelReady(){
    classifier.classify( gotResults);
}