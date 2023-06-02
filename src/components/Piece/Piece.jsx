import './Piece.css'

export const Piece = (props) => {
    const { id, handleClick, imgUrl } = props;

    // REVIEW why make this a variable? Even if it is a variable, the value should be a constant
    // coming from another file or a prop so you can change in someway. If not it should go in the css.
    const pieceSize = 100;
  
    // REVIEW backgroundSize and cursor should go in the css.
    const pieceStyle = {
        width: `${pieceSize}px`,
        height: `${pieceSize}px`,
        cursor: 'pointer',
        backgroundImage: imgUrl ? `url(${imgUrl})` : 'none',
        backgroundSize: 'cover',
      };

    const handleClickPiece = () => {
        handleClick(id);
      };

    return (
      <div
        className="piece"
        style={pieceStyle}
        onClick={handleClickPiece}
      >
        <span>{id}</span>
      </div>
    );
  };