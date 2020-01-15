export async function getAllTransactions() {
    console.log("fired")
        const link = 'https://xlogchain.nl/sawtooth/state?address=a75563';
        return fetch(link, {
            method: 'GET'
        })
            .then(response => {
                if(!response.ok){
                    console.log('error' + response);
                }
                return response.json();
            }).then(json => {
                const itemArray = json.data;
                for(let i = 0; i < itemArray.length; i++){
                    itemArray[i].data = decryptData(itemArray[i].data);
                    const fields = itemArray[i].data.split(',');
                    itemArray[i] = {username: fields[0],logNumber:fields[1],docName:fields[2],timestamp:fields[3], address: itemArray[i].address};
                    if(itemArray[i].timestamp !== undefined) {
                        itemArray[i].timestamp = itemArray[i].timestamp.replace('T', ' @ ');
                    }
                }
                return itemArray;
            })

    }
     export function decryptData(data, key){
        //decryption methods
        //decryptedDate = sha512.decrypt(data, key);
        const decryptedData = atob(data);
        return decryptedData;


}
//get users to fill admin user list
    export async function getAllUsers() {
        const link = 'https://xlogchain.nl:3000/users/all';
        return fetch(link, {
            method: 'GET',
        })
            .then(response => {
                if(!response.ok){
                    console.log('error' + response);
                }
                return response.json();
            }).then(json => {
                const userArray = json;
                console.log(userArray);
                return userArray;
            })

    }


export async function getNetworkInfo() {
        const link = 'https://xlogchain.nl/sawtooth/transactions';
        return fetch(link, {
            method: 'GET',
        })
            .then(response => {
                if(!response.ok){
                    console.log('error' + response);
                }
                return response.json();
            }).then(json => {
                const itemArray = json.data;
                for(let i = 0; i < itemArray.length; i++){
                    console.log(itemArray[i].header);
                    itemArray[i].payload = decryptData(itemArray[i].payload);
                }
                return itemArray;
            })

    }
