import { useState, useEffect } from 'react'
import './App.css'

import axios from 'axios';
import getImageUrl from './image-utils'



function mouseMove () {

  const [mousePosition, setMousePosition] = useState([null,null]);
  
  useEffect(()=> {

    document.addEventListener("mousemove", function (e) {

      let x = e.pageX;
      let y = e.pageY;
      setMousePosition([x,y]);
    })
  })
  

  return mousePosition;

}



function getCoor(image, element) {
 
  let coor;
  if (element) {
    coor = element.getBoundingClientRect();
    const {x_min, x_max, y_min, y_max} = image.picture;
    const originalHeight = image.picture.height;
    const originalWidth = image.picture.width;
    const {width, height, top, left} = coor;
    const xscale = width/originalWidth;
    const yscale = height/originalHeight;
    const newXmin = left + xscale*x_min;
    const newXmax = left + xscale*x_max;
    const newYmin = top + yscale*y_min;
    const newYmax = top + yscale*y_max;
    return {newXmin,newXmax,newYmin,newYmax};
  }
}

function App() {

  const loadPicApi = async ()=> {
    const data = await axios.get("http://localhost:3000/wally/wally-beach");
    const pic = data.data;
    setPic(pic);
    const imageURL = getImageUrl(data.data.fullPathtest);
    setPicURL(imageURL);
 
    
  }
  const [coor,setCoor] = useState({xmin:null,xmax:null, ymin:null, ymax:null});
  const [pic,setPic] = useState(null);
  const [found, setFound] = useState(false);
  const [picURL, setPicURL] = useState("");
  const [element, setElement]= useState(null);
 
  
  const mousePosition = mouseMove();
  useEffect(()=> {
    
      loadPicApi();
    
   
    
  },[]);

  useEffect(()=> {
      const element = document.getElementById("wally");
      setElement(element);
      const coor = getCoor(pic, element);
      if (coor) {
      setCoor({xmin:coor.newXmin, xmax: coor.newXmax, ymin: coor.newYmin, ymax: coor.newYmax});
      }
  }, [picURL])


  useEffect(()=> {
    function refresh () {
      location.reload();
    }
    
    window.addEventListener("resize", refresh);
    return ()=> {
      window.removeEventListener("resize", refresh);
    }
  }, [])

  function checkCorrect(click) {
    const [x,y] = click;
    if (x >= coor.xmin && x <= coor.xmax && y >= coor.ymin && y<= coor.ymax){
      console.log("wally!!!!!!!!!!");
      setFound(true);
    }
    else {
      console.log("incorrect");
      setFound(false);
    }
  }

  return (<>
  <div id = "container">
  {found? <h1>Congratulations, you have Found Wally!!!!</h1>:<h1>Where's Wally?</h1>}
  {!pic? <p>loading</p>: <img src = {picURL} id = "wally" onClick={(e)=> {e.preventDefault(); checkCorrect(mousePosition)}} alt = {pic.fullPathTest}></img>}
  

  
 
  {pic && <p>{pic.fullPathTest}</p>}
  
  
  </div>
  </>
  )
}

export default App
