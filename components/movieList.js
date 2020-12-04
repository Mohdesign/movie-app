import React from 'react'

class MovieList extends React.Component {

  shorten = (text) => {
    if( text && text.length > 200) {
      return text.substr(0, 50) + '....'
    }
    else {
      return text.substr(0, 90) + '....'
    }
    return text
  }

  renderMovies () {
    // call movies props to access MOVIE_DATA
    const { movies } = this.props
    // create map loop thrugh the movies list
    return movies.map(movie =>
      (
      <div key ={movie.id} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{movie.name}</a>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">{this.shorten(movie.description)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; {movie.rating}</small>
          </div>
        </div>
      </div>
      )

    )
  }

  render() {

    {/* const { movies } = this.props */}
    return (
      <>

      {/*call the funcation renderMovies()*/}
      {this.renderMovies() }


       {/*
        { movies.map((movie) => {
          return (
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{movie.name}</a>
                  </h4>
                  <h5>$24.99</h5>
              <p className="card-text">{movie.description}</p>
                </div>
                <div className="card-footer">
              <small className="text-muted">&#9733; {movie.rating}</small>
                </div>
              </div>
            </div>
          )
        })

      }
     */}



     </>
    )
  } 
  }
 


export default MovieList