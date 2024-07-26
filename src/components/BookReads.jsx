const BookReads = () => {
    const title = 'Recomended Book Reads'

  return (
    <div className="title">
        <h1>{title}</h1>
    <div className="card-group">
      <div className="card">
        <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Book 1</h5>
          <p className="card-text-center">
            Recomended book1 related to blogs article
          </p>
          <p className="card-text">
          <a href="#" className="btn">
              Go somewhere
            </a>
          </p>
        </div>
      </div>
      <div className="card">
        <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Book 2</h5>
          <p className="card-text-center">
          Recomended book2 related to blogs article
          </p>
          <p className="card-text">
          <a href="#" className="btn">
              Go somewhere
            </a>
          </p>
        </div>
      </div>
      <div className="card">
        <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Book 3</h5>
          <p className="card-text-center">
          Recomended book3 related to blogs article
          </p>
          <p className="card-text">
          <a href="#" className="btn">
              Go somewhere
            </a>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BookReads;
