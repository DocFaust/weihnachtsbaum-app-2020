const dotenv = require("dotenv").config();
const mongooose = require("mongoose");

const mongourl=process.env.MONGO_URL
mongooose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
console.log("connected");

const presentSchema = new mongooose.Schema({
    title: {type : String, required: true},
    description: {type : String, required: true},
    pictureURL: {type : String, required: true},
});

const Present = mongooose.model("Present", presentSchema);

PresentProvider = function (){};

PresentProvider.prototype.findAll = async () => {
    const presents = await Present.find();
    console.log(presents);
    return presents;
}

PresentProvider.prototype.create = (title, description, pictureURL) => {
    const present = new Present({
        title: title,
        description: description,
        pictureURL: pictureURL
    });

    present.save();
}

exports.PresentProvider = PresentProvider;