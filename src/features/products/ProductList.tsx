
'use client'

import { useGetAllProductQuery } from '@/service/ecommerce';
import React from 'react'

export default function ProductList() {
    const {data, error, isLoading} = useGetAllProductQuery([]);
    console.log(`check error status: ${error}`);
    console.log(`Loading: ${isLoading}`);
    console.log(`All Product: ${data}`);

  return (
    <div>
      
    </div>
  )
}




