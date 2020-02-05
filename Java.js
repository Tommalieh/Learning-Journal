'stric js'

var name = prompt ("Please enter your name");
alert("Welcome " + name);


var place = prompt ( name + " how many hiking places in jordan do you know?!");
for (var i = 0; i < place; i++){
    prompt("Enter the " + place +" places you know");
}

alert ("Wow those are some nice places to be!");

function validNum(){
var ques = 12;
while (ques > 10){
ques = prompt("How much do you enjoy hiking out of 10?!");
if (ques >= 0 && ques <= 10){
    if (ques <= 4){
        alert ("I would suggest Ajloun hike as it's more fun and less of a chellange you'll it'll make your hiking experience more remarkable");
    }

    else if (ques <= 8){
        alert ("I hope you are looking for some challenge as we offer the right amount of it in our Jerash hike but you'll still get a good amount of fun to balance things for you!");
    }

    else {
        alert ("A vetaren like you should try to challenge him/her self on our Petra hike you'll get that rewarding feel after such a tough exciting hike");
    }
}
}
while (ques < 0){
    ques = prompt("How much do you enjou hiking of of 10?!");
    if (ques >= 0 && ques <= 10){
        if (ques <= 4){
            alert ("I would suggest Ajloun hike as it's more fun and less of a chellange you'll it'll make your hiking experience more remarkable");
        }
    
        else if (ques <= 8){
            alert ("I hope you are looking for some challenge as we offer the right amount of it in our Jerash hike but you'll still get a good amount of fun to balance things for you!");
        }
    
        else {
            alert ("A vetaren like you should try to challenge him/her self on our Petra hike you'll get that rewarding feel after such a tough exciting hike");
        }
    }
    }
}

validNum();
