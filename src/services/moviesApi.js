import { addGetRequestWithParams } from '../helpers/httpDefaultsHelper';
import mockedMovies from './mockedMovies';
import HttpStatus from 'http-status-codes';

export const fetchMovies = () => {
    let address = "http://localhost:4000/movies";
  
    return fetch(address, addGetRequestWithParams({})).then(response => {
        switch (response.status) {
            case HttpStatus.INTERNAL_SERVER_ERROR:
            case HttpStatus.SERVICE_UNAVAILABLE:
            case HttpStatus.FORBIDDEN:
            case HttpStatus.LOCKED:
            case HttpStatus.UNAUTHORIZED:
            case HttpStatus.NOT_FOUND:
                console.error("Cannot fetch movies data, error " + response.status);
                return response;
            default:
                break;
        }
  
      return response.json();
  
    }).catch(exception => {
        console.error("Cannot fetch movies data", exception);
        console.warn("Using mock data for movies")
        return mockedMovies;
    });
  };