import NavBar from "./NavBar";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import movieImage from './movieImage.json';
import {useState, useEffect} from 'react';
import { useRef } from "react";

function SubmitReview() {

    const nameRef = useRef();
    const ratingRef = useRef();
    const releaseDateRef = useRef();
    const descriptionRef = useRef();
    const actorsRef = useRef();
    const imageRef = useRef();
    //const [images, setImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(imageRef.current.value);
    
        const newMovie = {
            name: nameRef.current.value,
            rating: ratingRef.current.value,
            releaseDate: releaseDateRef.current.value,
            description: descriptionRef.current.value,
            actors: actorsRef.current.value,
            poster: imageRef.current.value
        }

        handleFormSubmit(newMovie);
    }
    
    const handleFormSubmit = (newMovie) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMovie),
            redirect: "follow"
        };
    
        fetch("http://localhost:8000/api/movieForm", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    // useEffect(() => {
    //     const fetchImageData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:8000/api/movieList");
    //             const data = await response.json();
    //             setImages(data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };
    //     fetchImageData();
    // }, []);
    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])
      console.log(event.target.files[0])
    }

    function handleSubmitImg(event) {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        fetch('http://localhost:8000/api/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <>
        <NavBar />
        <div className="d-flex justify-content-center"><h1>Submit Movie Review</h1></div>
        <br />
        <div className="d-flex justify-content-center">

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" ref={nameRef} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input type="text" className="form-control" id="rating" ref={ratingRef} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="releaseDate">Release Date</label>
                    <input type="text" className="form-control" id="releaseDate" ref={releaseDateRef} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" ref={descriptionRef} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="actors">Actors</label>
                    <input type="text" className="form-control" id="actors" ref={actorsRef} />
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="image">Image</label>

                    <select className="form-control" id="image" ref={imageRef}>
                        {movieImage.movies.map((movie, index) => (
                            <option key={index} value={movie.poster}>{movie.name}</option>
                        ))}
                    </select>

                    <h1>Image Upload</h1>
                    <input type="file" onChange={handleChange}/>
                    <button type="submitImg">Upload</button>

                    {/* <select className="form-control" id="image" ref={imageRef}>
                            {images.map((image) => (
                                <option key={image._id} value={image.poster}>{image.name}</option>
                            ))}
                    </select> */}

                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
    );
}

export default SubmitReview;


/*
import NavBar from "./NavBar";
import moviesReview from './moviesReview.json';
import movieImage from './movieImage.json';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { useRef } from "react";

function SubmitReview() {

    const nameRef = useRef();
    const ratingRef = useRef();
    const releaseDateRef = useRef();
    const descriptionRef = useRef();
    const actorsRef = useRef();
    const imageRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(imageRef.current.value);

        const newMovie = {
            name: nameRef.current.value,
            rating: ratingRef.current.value,
            releaseDate: releaseDateRef.current.value,
            description: descriptionRef.current.value,
            actors: actorsRef.current.value,
            poster: imageRef.current.value
        }
        moviesReview.movies.push(newMovie);
        console.log(moviesReview.movies);
    }

    return (
        <>
        <NavBar />
        <div className="d-flex justify-content-center"><h1>Submit Movie Review</h1></div>
        <br />
        <div className="d-flex justify-content-center">

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" ref={nameRef} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input type="text" className="form-control" id="rating" ref={ratingRef} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="releaseDate">Release Date</label>
                    <input type="text" className="form-control" id="releaseDate" ref={releaseDateRef} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" ref={descriptionRef} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="actors">Actors</label>
                    <input type="text" className="form-control" id="actors" ref={actorsRef} />
                </div>
                <br />
                Image of movie poster - for image, create a drop-down list of images to choose from a list of images in json file.
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <select className="form-control" id="image" ref={imageRef}>
                Poplate the image drop down from the list of images in movieimage.json 
                {movieImage.movies.map((movie, index) => (
                    <option key={index} value={movie.poster}>{movie.name}</option>
                ))}
                    </select>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
    );
}

export default SubmitReview;

*/
