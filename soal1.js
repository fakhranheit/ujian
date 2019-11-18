const lelang=(a)=>{
    var hargaAwal=10000
    var menit=a
    var total=0

    if (menit<=3){
        
         total+=Math.ceil(hargaAwal + hargaAwal * (( 20 * a)/ 100 ) ) 

    }

    else{

         total+=(hargaAwal+(hargaAwal * ((20 * 3) / 100 ))) + (hargaAwal + (hargaAwal * (( 10 * a )/ 100 )))-hargaAwal

    }
if(total<30000000){
    return `barang sudah dibeli`
}

    return total
}


console.log(lelang(50))
