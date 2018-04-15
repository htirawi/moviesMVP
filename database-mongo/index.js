var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  title : String,
  year : Number,
  type:String

});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

let save = (data,callback) =>{
  console.log("data",data)
  let item = new Item(data)
  console.log(data.length);
  item.save(function(err,data){
    if(err){
      callback(err)
    }else{
      callback(null,data)
    }
  })
}
module.exports.selectAll = selectAll;
module.exports.save = save;
module.exports.Item = Item;