let num = 1;

while (num<55) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++){
    if (i == 6) {
        // break; 
        continue; // пропустить 6
    }
    console.log(i);
}