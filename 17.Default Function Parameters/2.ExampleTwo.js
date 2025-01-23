function ratings(rate){
    if(rate === 5){
        console.log('Excellent');
    }else if(rate === 4){
        console.log('Good');
    }else if(rate === 3){
        console.log('Average');
    }else if(rate === 2){
        console.log('Poor');
    }else if(rate === 1){
        console.log('Bad');
    }else{
        console.log('Invalid rating');
        
    }
}

ratings(5);
let rate = 4;
ratings(rate);