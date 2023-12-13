import * as reviewDao from "./review_dao.js";

function TestReviewRoutes(app) {
  const findReviewsByMovieId = async (req, res) => {
    const reviews = await reviewDao.findReviewsByMovieId(req.params.movieId);
    res.json(reviews);
  };

  const createReview = async (req, res) => {
    const review = await reviewDao.createReview(req.body);
    res.json(review);
  };

  app.get("/api/testReviews/movie/:movieId", findReviewsByMovieId);
  app.post("/api/testReviews/review", createReview);
}

export default TestReviewRoutes;
