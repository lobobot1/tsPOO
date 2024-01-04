export class MyDate {
    
    constructor(
        private year: number = new Date().getFullYear(), 
        private month: number = new Date().getMonth() + 1, 
        private day: number = new Date().getDate()
    ){}

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

    get Year(){
        return this.year;
    }

    get Month(){
        return this.month;
    }

    get Day(){
        return this.day;
    }

    set Year(year: number){
        this.year = year;
    }

    set Month(month: number){
        this.month = month;
    }

    set Day(day: number){
        this.day = day;
    }
}

