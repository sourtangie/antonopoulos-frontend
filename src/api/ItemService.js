class ItemService {
    async getAll(key) {
        const link = 'http://165.22.205.204/sawtooth/state?address='+key;
        return fetch(link)
            .then(response => {
                if(!response.ok){
                    console.log('error' + response);
                }
                return response.json();
            }).then(json => {
                const itemArray = json.data;
                for(let i = 0; i < itemArray.length; i++){
                    const charsBeforeDate = 11;
                    const dateLength = 10;
                    const charsBeforeTime = 26;
                    const timeLength = 10;
                    itemArray[i].data = this.decryptData(itemArray[i].data);
                    const timestampIndex  = itemArray[i].data.lastIndexOf("timestamp");
                    if (itemArray[i].data.includes("timestamp")){
                    itemArray[i].date =
                        itemArray[i].data.substr(
                            timestampIndex+charsBeforeDate,
                            dateLength
                        );
                    itemArray[i].timestamp =
                        itemArray[i].data.substr(
                            timestampIndex + charsBeforeTime,
                            timeLength
                        );

                }else{
                        itemArray[i].timestamp = "undef";
                        itemArray[i].date = "undef";
                      //  itemArray.splice(i,1);
                    }}
                return itemArray;
            })

    }
     decryptData(data, key){
        //decryption methods
        //decryptedDate = sha512.decrypt(data, key);
        const decryptedData = atob(data);
        return decryptedData;


}
}
export default ItemService;