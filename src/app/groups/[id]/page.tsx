"use client"
import { addProducts } from '@/lib/feature/products/productSlice';
import { useAppDispatch } from '@/lib/hooks';
import axios from 'axios';
import React, { useEffect } from 'react'

const page = ({params}:any) => {
    const dispatch=useAppDispatch()

  return (
    <div>
      {params.id}
    </div>
  )
}

export default page
