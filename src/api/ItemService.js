class ItemService {
    async getAll() {
        return fetch('http://165.22.205.204/sawtooth/state?address=a75563')
            .then(response => {
                if(!response.ok){
                    console.log('error' + response);
                }
                return response.json();
            }).then(json => {
                const itemArray = json.data;
                console.log(itemArray);
                for(let i = 0; i < itemArray.length; i++){
                    const charsBeforeDate = 15;
                    const dateLength = 10;
                    const charsBeforeTime = 26;
                    const timeLength = 15;
                    itemArray[i].data = atob(itemArray[i].data);
                    const timestampIndex  = itemArray[i].data.lastIndexOf("timestamp");
                    if (itemArray[i].data.includes("timestamp")){
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