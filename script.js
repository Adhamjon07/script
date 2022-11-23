var Adham = +prompt("Son kiriting Biz uni toq yoki juftligini aniqlaymiz")
while(isNaN(Adham)){
    alert("Son kiriting harf emas " )

}
 if (Adham%2==0){
     alert("siz juft son kiritdingiz " + Adham)
 }else if (Adham%4==1){
    alert("siz toq son kiritdingiz " +Adham)
 }while(isNaN(Adham)){
    alert( " Harf kiritildi, iltimos son kiriting " )
}