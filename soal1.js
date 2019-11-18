const lelang=(a)=>{
    var hargaAwal = 10000
    var menit = 0
    do {
            menit++
            if(menit%4==0){
            hargaAwal+=Math.ceil(hargaAwal*0.10)  
            }else{
                hargaAwal+= Math.ceil(hargaAwal*0.20)
            }
            if(hargaAwal>=30000000){
                return `the items were sold`
            }  
    } while (menit<a);
    return basicprice
}
console.log(lelang(2))
console.log(lelang(50))
console.log(lelang(49))