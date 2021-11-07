//1.JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona 
//gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

function primeNumbers(...numbers) {
    for(let i=0;i<numbers.length;i++){

        let isPrime=true;
        if(numbers[i]<=1){
            console.log(`${numbers[i]} Asal bir sayı degildir.`)
            continue
        }

        for(let j=2;j<numbers[i];j++){
            if(numbers[i] % j == 0){
                isPrime=false
                break
            }
        }
        if(isPrime){
            console.log(`${numbers[i]} Asal bir sayıdır.`)   
        }

        else{
            console.log(`${numbers[i]} Asal bir sayı degildir.`)
        }
    }
}

//primeNumbers(1)
//primeNumbers(2,3)
//primeNumbers(4,5,6,7,8,9)

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

function friendlyNumbers(num1,num2) {
    let divsum1=0;
    let divsum2=0

    for(let i=0;i<num1;i++){
        if(num1%i==0){
            divsum1=divsum1+i
        }
    }

    for(let j=0;j<num2;j++){
        if(num2%j==0){
            divsum2=divsum2+j
        }
    }

    if(divsum1==num2 && divsum2==num1){
        console.log(num1+ 've '+ num2+ ' arkadaş sayılardır')
    }
    else{
        console.log(num1+ 've '+ num2+ ' arkadaş sayı değildir.')
    }
}
//friendlyNumbers(220,284)

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function perfectNumbers(number) {
for(let i=1 ; i<number ;i++){
    let summary=0;
    for(let j=1; j<i ;j++){
        if(i%j==0){
            summary=summary+j
        }
    }

    if(summary==i)
    {
        console.log(`${i} Bir Mükemmel Sayıdır.`)
    }

}
}
//perfectNumbers(1000)

// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function primeNumber(numbers) {
    for(let i=2;i<=numbers;i++){

        let isPrime=true;
        if(i==2){
            console.log(`${i} Asal Bir Sayıdır.`)
            continue
        }
        for(let j=2;j<i;j++){
            if(i%j==0){
                isPrime=false;
                break
            }
        }
        if(isPrime){
            console.log(`${i} Asal bir sayıdır.`)   
        }
    }
}
primeNumber(1000)
