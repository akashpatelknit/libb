import './Row.scss'

import {BsFileEarmarkPdfFill} from 'react-icons/bs'

const RowBook = ({ title, arr = [] }) => (
  
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <div className="card2"> 
         
         <a download="section name" href={item.url}>
        <BsFileEarmarkPdfFill className='pdf' style={{ color: 'blue' }}/>
        </a> 
        <h5>{item.subject} || {item.year}</h5>
      
        </div>
      ))}
    </div>
  </div>
);

 export default RowBook