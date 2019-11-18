var koin=[20,10,5,1]
var hasil=[]
const pecahan=(jumlah)=>{

var output=0
    for(i=0;i<koin.length;i++){
        output+=koin[i]
        if(jumlah==output){
            hasil.push(koin[i])
        }
        else{

            for(j=0;j<koin.length;j++){
               output+=koin[i]+koin[j] 
    
               if(jumlah==output){
                hasil.push(koin[i],koin[j])
                }
            }
        }
    }

    return hasil.length
}
console.log(pecahan(30))