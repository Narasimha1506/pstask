num="2237748"
uni="" 
dup=""
s=""
min=""
min1=""
for(i of num){
    if(!s.includes(i))
    s=s+i
}
for(i of s){
    c=0
    for(j of num){
        if (i==j)
        c++
    }
    if(c>1){
    dup=dup+i
    
    }
    else{
        uni=uni+i
    }
}
console.log(dup)
console.log(uni)
max=dup[0]
max1=uni[0]
for (k of dup){
    if(k>max){
        max=k
    }
}
for(p of uni){
    if(p>max1){
        max1=p
    }
}
console.log(Number(max)+Number(max1))