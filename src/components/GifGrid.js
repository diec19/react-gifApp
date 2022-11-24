import React,{useEffect, useState} from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem';



const GifGrid = ({category}) => {

const { data,loading } = useFetchGifs(category);






  return (
    <div className='card-grid'>


      {loading &&<p className='animate__animated animate__flash'>Cargando...</p>}
       {
        
            data.map(img=>(
              <GifGridItem 
                key={img.id}
                {...img}
              />  
            )
            
             
        )
             }
    </div>
  )
}

export default GifGrid