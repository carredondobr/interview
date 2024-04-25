const mongoose = require('mongoose');
const { Schema } = mongoose;

const Pokemon = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  soft_delete: {
    type: Boolean,
    required: false,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

Pokemon.statics.CreatePokemon = async function (newPokemon, mongoSession) {
  try {
    const pokemon = new this(newPokemon);
    await pokemon.save({ session: mongoSession, timestamps: { updatedAt: !newPokemon.updated_at }});
    return pokemon.toObject();
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      throw new RequestError(RequestError.badRequest(), err.message);
    }
    if (err && err.code === 11000) {
      throw new RequestError(RequestError.badRequest(), 'Project already in use');
    }
    throw err;
  }
};

function transform(ret) {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
  return ret;
};

if (!Pokemon.options.toObject) {
  Pokemon.options.toObject = {};
}

Pokemon.options.toObject.transform = (doc, ret) => transform(ret);

const PokemonsModel = mongoose.model('Pokemon', Pokemon);
module.exports.Model = PokemonsModel;
module.exports.Schema = Pokemon;
