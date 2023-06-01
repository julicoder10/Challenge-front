import './Piece.css'

export const Piece = (props) => {
    const { id, handleClick, imgUrl } = props;

    const pieceSize = 100;
  
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