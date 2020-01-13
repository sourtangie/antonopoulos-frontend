class ItemService {
    async getAllTransactions(key) {
        console.log(key);
        const link = 'https://xlogchain.nl/sawtooth/state?address='+key;
        return fetch(link)
            .then(response => {
                if(!response.ok){
                    console.log('error' + response);
                }
                return response.json();
            }).then(json => {
                const itemArray = json.data;
                for(let i = 0; i < itemArray.length; i++){
                    itemArray[i].data = this.decryptData(itemArray[i].data);
                    const fields = itemArray[i].data.split(',');
                    itemArray[i] = {username: fields[0],logNumber:fields[1],docName:fields[2],timestamp:fields[3], address: itemArray[i].address};
                    console.log(itemArray[i].username)
                    itemArray[i].timestamp = itemArray[i].timestamp.replace('T',' @ ');
                }
                return itemArray;
            })

    }
     decryptData(data, key){
        //decryption methods
        //decryptedDate = sha512.decrypt(data, key);
        const decryptedData = atob(data);
        return decryptedData;


}
//get users to fill admin user list
    async getAllUsers(key) {
        const link = 'https://xlogchain.nl/sawtooth/state?address=';
        return fetch(link)
            .then(response => {
                if(!response.ok){
                    console.log('error' + response);
                }
                return response.json();
            }).then(json => {
                const userArray = json.data;
                for(let i = 0; i < userArray.length; i++){
                    console.log(userArray[i].username)

                }
                return userArray;
            })

    }

    //generate keys and add new user
     async addUser(email){
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json; charset=utf-8');
        const link = 'https://xlogchain.nl:3000/user/';
        fetch(link, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({requester: email})
        }).then(response => {
            console.log('response' + response);
            return response.json();
            }).catch((err)=> console.log(err))
    }
    async getNetworkInfo() {
        const link = 'https://xlogchain.nl/sawtooth/transactions';
        return fetch(link)
            .then(response => {
                if(!response.ok){
                    console.log('error' + response);
                }
                return response.json();
            }).then(json => {
                const itemArray = json.data;
                for(let i = 0; i < itemArray.length; i++){
                    console.log(itemArray[i].header);
                    itemArray[i].payload = this.decryptData(itemArray[i].payload);
                }
                return itemArray;
            })

    }
}
export default ItemService;