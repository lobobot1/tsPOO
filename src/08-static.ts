class MyMath {
    static readonly PI = 3.14;

    static max(...numbers: number[]) {
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
    } 
}

console.log(MyMath.PI); // 3.14