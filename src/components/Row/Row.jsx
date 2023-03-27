import './Row.scss'
const Card = ({ img }) => <img className="card" src={img} alt="cover" />;
const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <div className="card2">
          <Card key={index} img={`${item.url}`} />
          <a href={item.url} key={index+1} download target="_blank" rel="noreferrer">
            Download
          </a>
        </div>
      ))}
    </div>
  </div>
);

 export default Row