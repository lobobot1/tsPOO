import axios from 'axios';

(async () => {
    function delay (time:number){
        const promise = new Promise<boolean>((resolve)=>{
            setTimeout(()=>{
                resolve(true);
            }, time)
        })
        return promise;
    }

    async function getProducts() {
        const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
        return promise?.data;
    }

    const result = await delay(1000);
    console.log(result)

})();