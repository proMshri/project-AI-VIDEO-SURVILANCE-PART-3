var object=[];


function setup() {
    canvas=createCanvas(500,300)
    canvas.position(400,190);
    video=createCapture(VIDEO);
    video.size(300,250);
    video.hide();
    video.position(400,190)
}

function playVideo() {
    modelStore=ml5.objectDetector('cocossd',modelLoaded);  
    document.getElementById("status").innerHTML="Status : Object Detecting";
}


function draw() {
    image(video,0,0,500,300);
    if(statuss==true){
        modelStore.detect(video,outputt);

  
       
        object=intenational[i].label+percent+"%",intenational[i].x,intenational[i].y-15
        }

        if(object[i].lable==objectName){
            document.getElementById("status").innerHTML="Status : Object Detected";
        }

    }



  