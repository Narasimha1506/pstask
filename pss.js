num="351886761"
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
min=dup[0]
min1=uni[0]
for (k of dup){
    if(k<min){
        min=k
    }
}
for(p of uni){
    if(p<min1){
        min1=p
    }
}
console.log(Number(min)+Number(min1))