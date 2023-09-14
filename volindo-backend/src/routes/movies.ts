import { getMovie, getMovies, searchMovies } from "../controllers/movies.controller";
import { Router } from "express";

const router: Router = Router();

router.get('/home-list', getMovies);
router.post('/search', searchMovies);
router.post('/search-movie', getMovie);

export default router;