import './Row.scss'
import { AiOutlineCloudDownload } from 'react-icons/ai';
const geturl=(uri)=>{
  let str=uri;
  let front="https://res.cloudinary.com/dcgqtiqoh/image/upload"
  let back=str.replace("http://res.cloudinary.com/dcgqtiqoh/image/upload","");
  return front+"/fl_attachment"+back;
}
const Row = ({ title,loading, arr = [] }) => (
  
  <div className="row">
    {
      loading?<h2>{title} Loading...</h2>:<h2>{title}</h2>
    }
    

    <div className='row-item'>
      {arr.map((item, index) => (
        <div className="card3">
       
          <span id='sub'>{item.subject}</span>
          <span>{item.year} {item.branch}</span>
          
          <span>Semester {item.semester}</span>
          <a download={item.url} href={geturl(item.url)}
           target="_blank" rel="noreferrer"
          >
            <AiOutlineCloudDownload id='icon' />
           
          </a>
        </div>
      ))}
    </div>
  </div>
);

 export default Row
