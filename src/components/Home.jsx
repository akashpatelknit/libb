import React,{useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Home = () => {
const [image,setImage]=useState("")


const submit=async ()=>{

  const data=new FormData();
  data.append('file',image)
  data.append('upload_preset','Library')
  data.append('cloud_name','dcgqtiqoh')
 await fetch('https://api.cloudinary.com/v1_1/dcgqtiqoh/image/upload',{
  method:'post',
  body:data
  })
  .then(res=>res.json())
  .then(data=>console.log(data.url))
  .catch((err)=>{
  console.log(err);
  })

}
  return (
    <div class="row">

  <div class="col-sm">
    <input type="file" class="form-control" placeholder="Upload File" aria-label="" onChange={(e)=>setImage(e.target.files[0])}/>
  </div>
  <div class="col-sm">
    <button type="button" class="btn btn-primary" onClick={submit}>Submit</button>
  </div>
 
</div>
  );
};

export default Home;
