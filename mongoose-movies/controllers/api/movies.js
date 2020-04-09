const Movie = require('../../models/movie');

//     //fetch all movies 
//     //then show them in JSON
const index = (req, res) => {
        Movie.find({}).then( (movies) => {
            res.status(200).json(movies)
            });
      };
const show = (req, res) => {
    Movie.findById(req.params.id).populate('performer').then( (movie) => {
        console.log(movie)
        res.status(200).json(movie)
      }).catch(err => console.log(err)) ;
}
const create = (req, res) => {
    Movie.create(req.body).then( (movie) => { 
        res.status(201).json(movie);  
      });
    };

const update = (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('cast').then( (movie) => {
        res.status(200).json(movie);
      });
};


const deleteOne = (req, res) => {
    Movie.findByIdAndDelete(req.params.id).then( (movie) => {
        res.status(200).json(movie);
      });
};

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteOne
};