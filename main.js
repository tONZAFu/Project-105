Webcam.set ({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

Camera = document.getElementById("Camera");
Webcam.attach('#Camera');

function Capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    })
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AjgJyqV1F/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function Check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}