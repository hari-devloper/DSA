function pattern1(num){

 for(let i =0 ; i<num;i++){

    let row = ''
    for(let j =0 ; j<num;j++){

    row+="*"
    }
    console.log(row)
 }

}

function pattern2(num){

    for(let i =0 ; i<num;i++){
   
       let row = ''
       for(let j =0 ; j<=i;j++){
   
       row+="*"
       }
       console.log(row)
    }
   
   }

function pattern3(num){

    for(let i =1 ; i<=num;i++){
   
       let row = ''
       for(let j =1 ; j<=i;j++){
   
       row+=j
       }
       console.log(row)
    }
   
   }

function pattern4(num){

    for(let i =0 ; i<num;i++){
   
       let row = ''
       for(let j =0 ; j<num-i;j++){
   
       row+="*"
       }
       console.log(row)
    }
   
   }

function pattern5(num){

     for(let i=0;i<num;i++){

    let row =''

     for(let j=0;j<num-i-1;j++){

        row+=' ' 

     }
     for(let j=0;j<2*i+1;j++){
       row+="*"
     }
     for(let j=0;j<num-i-1;j++){
 
        row+=' '
        
     }
     console.log(row)


     }


   }

function pattern6(num){

    for(let i=0;i<num;i++){

   let row =''

    for(let j=0;j<i;j++){

       row+=' ' 

    }
    for(let j=0;j<2*num-(2*i+1);j++){
      row+="*"
    }
    for(let j=0;j<i;j++){

       row+=' '
       
    }
    console.log(row)


    }


  }
function pattern7(num){

    for(let i =0 ; i<2*num;i++){
   
       let row = ''
       let stars = i
       if(i>num){
        stars = 2 * num -i-1
       }
       for(let j =0 ; j<=stars;j++){
   
       row+="*"
       }
       console.log(row)
    }
   
   }

  



//pattern1(4)
//pattern2(4)
//pattern3(4)
//pattern4(4)
//pattern5(4)
//pattern6(4)
pattern7(4)