import { CardMovieProps } from "../CardMovie/Index";
import { ModalCard } from "../ModalCard/Index";

export const ModalMovie: React.FC<CardMovieProps> = ({ MovieData, Size }) => {
  const { poster_path } = MovieData;
  const image_url = `https://image.tmdb.org/t/p/w${Size}${poster_path}`;
  return (
    <>
      
        <button
          type="button"
          className="btn p-0 border-0"
          data-bs-toggle="modal"
          data-bs-target={`#Modal-${MovieData.id}`}
        >
          <img src={image_url} alt="" className="d-block rounded" />
        </button>
      

      <div
        className="modal fade"
        id={`Modal-${MovieData.id}`}
        tabIndex={-1}
        aria-labelledby={`ModalLabel-${MovieData.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-bg-dark">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="d-flex modal-body justify-content-center p-0 bg-dark rounded">
              <ModalCard MovieData={MovieData} Size={500} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
