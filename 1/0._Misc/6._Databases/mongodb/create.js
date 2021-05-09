const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "movies";

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw new Error(error);
    }

    const db = client.db(dbName);
    const actors = db.collection("actors");

    actors.insertOne({name: "Rupert Grint"}, (error, result) => {
        if(error) {
            throw new Error(error);
        }
        console.log(result);
        client.close();
    })
    /*
    actors.insertMany([{name: "Daniel Radcliffe", height: "187"}, {name: "Mads Mikkelsen", height: "190"}], function(err, result){
        assert.equal(err, null);
        assert.equal(2, result.result.n);
        assert.equal(2, result.ops.length);
        console.log("inserted asdf");
        callback(result);
        client.close();
        
    })
*/
});
