import React from 'react'
import Aboutus from './Aboutus'
import Carouselmain from './Carouselmain'
import Navbar from './Navbar'
import Newlogin from './Newlogin/Newlogin'
import Newregister from './Newregister/Newregister'
import { Routes,Route } from 'react-router-dom'
import Coxoxunan from './Coxoxunan'
import Footer from './Footer'
import BestBooks from './BestBooks/BestBooks'

import Coxsatilankitab from './Coxsatilankitab'
import Book1 from './Readbook/Book1'
import Book2 from './Readbook/Book2'
import Book3 from './Readbook/Book3'
import Book4 from './Readbook/Book4'
import Book5 from './Readbook/Book5'
import FavBooks from './FavBooks'
import FavBookList from './FavBookList'

export default function Defaultpage() {
  return (
    <>
           <Routes>
        <Route path='/' element={
          <>
             <Navbar />
            <Carouselmain />
            <Aboutus />
            <Coxoxunan />
            <BestBooks />
            <Coxsatilankitab />
            <Footer />
          </>} ></Route>
      
          <Route path="/login" element={<Newlogin />} />
          <Route path="/register" element={<Newregister />} />
          <Route path='favbook' element={<FavBooks/>}></Route>
          <Route path='favbooklist' element={<FavBookList/>}></Route>
                <Route path='/book1' element={<Book1/>}/>
                <Route path='/book2' element={<Book2/>}/>
                <Route path='/book3' element={<Book3/>}/>
                <Route path='/book4' element={<Book4/>}/>
                <Route path='/book5' element={<Book5/>}/>

      </Routes>
    </>
  )
}
