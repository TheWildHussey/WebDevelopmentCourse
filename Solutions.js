console.log("Connected !!");

function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

printReverse([3,6,2,5]);

//*** isUniform() ***/

function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
}

function sumArray(arr){
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
}

function myForEach(arr, func) {
    for(var i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}

var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

var movies = [
        {movieName: "Brave Heart", hasWatched: true, rating: 5},
        {movieName: "Shawshank Redemption", hasWatched: false, rating: 4.5},
        {movieName: "Batman Returns", hasWatched: true, rating: 3.5},
        {movieName: "Platoon", hasWatched: true, rating: 4.2}
    ]
