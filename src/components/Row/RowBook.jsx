import './Row.scss';

import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { AiOutlineCloudDownload } from 'react-icons/ai';
const geturl=(uri)=>{
  let str=uri;
  let front="http://res.cloudinary.com/dcgqtiqoh/image/upload"
  let back=str.replace("http://res.cloudinary.com/dcgqtiqoh/image/upload","");
  return front+"/fl_attachment/"+back;
}
const RowBook = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div className="row-item">
      {arr.map((item, index) => (
        <div className="card2">
          <h5> {item.subject}</h5>
          <p>{item.year}</p>
          <p>Semester {item.semester}</p>
          <a download="section name" href={geturl(item.url)}>
            <AiOutlineCloudDownload id='icon'/>
          </a>
          
        </div>
      ))}
    </div>
  </div>
);

export default RowBook;
