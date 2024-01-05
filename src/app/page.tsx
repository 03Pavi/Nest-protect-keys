// pages/index.js
"use client";
import {addProducts } from "@/lib/feature/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
const Home = () => {
  const dispatch = useAppDispatch();
  const router = useRouter()
 
  useEffect(() => {
    const fetchHello = async () => {
      try {
        const res = await axios.get(`/api/data`);
        dispatch(addProducts(res.data.products));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHello();
  }, []);

  const products = useAppSelector((state) => state.reducer.productReducer.products);

  return (
    <div>
      {products?.map((item:any,index:number)=>{
        return <div key={index}><img src={item?.thumbnail} alt={item.thumbnail} onClick={()=>{
          router.push(`/groups/${item?.id}`, { scroll: false })
        }}/>
        <br/>{item?.description}</div>
      })}
    </div>
  );
};

export default Home;
