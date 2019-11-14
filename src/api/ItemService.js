class ItemService {
    async getAll() {
        return fetch('http://165.22.205.204/sawtooth/transactions')
            .then(response => {
                if(!response.ok){
                    console.log('error' + response);
                }
                return response.json();
            }).then(json => {
                //const items = [];
                const itemArray = json.data;
                console.log(itemArray);
                for(let i = 0; i < itemArray.length; i++){
                    const charsBeforeDate = 15;
                    const dateLength = 10;
                    const charsBeforeTime = 26;
                    const timeLength = 15;
                    itemArray[i].payload = atob(itemArray[i].payload);
                    const timestampIndex  = itemArray[i].payload.lastIndexOf("timestamp");
                    if (itemArray[i].payload.includes("timestamp")){
                    itemArray[i].date =
                        itemArray[i].payload.substr(
                            timestampIndex+charsBeforeDate,
                            dateLength
                        );
                    itemArray[i].timestamp =
                        itemArray[i].payload.substr(
                            timestampIndex + charsBeforeTime,
                            timeLength
                        );

                }else{
                        itemArray[i].timestamp = "undef";
                        itemArray[i].date = "undef";
                      //  itemArray.splice(i,1);
                    }}
                return itemArray.reverse();
            })

    }
}
export default ItemService;