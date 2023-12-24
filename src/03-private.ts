export class MyDate {
    private year: number;
    private month: number;
    private day: number;

    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat():string{
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`
    }

    private addPadding(value:number):string{
        return value < 10 ? `0${value}` : `${value}`;
    }

    add(amount: number, type: "days" | "months" | "years"){
        switch(type){
            case "days":
                this.day += amount;
                break;
            case "months":
                this.month += amount;
                break;
            case "years":
                this.year += amount;
                break;
        }
    }

    getYear(){
        return this.year;
    }

    getMonth(){
        return this.month;
    }

    getDay(){
        return this.day;
    }

    setYear(year: number){
        this.year = year;
    }

    setMonth(month: number){
        this.month = month;
    }

    setDay(day: number){
        this.day = day;
    }
    
}

const myDate = new MyDate(2020, 1, 1);

console.log(myDate)