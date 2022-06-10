import React from 'react'
import { Route, Routes } from 'react-router'
import '../css/libro.css'
import '../css/new-card.css'
import book1 from '../images/bookcardimg/davinci.jpg'
import book2 from '../images/bookcardimg/10negro.jpg'
import book3 from '../images/bookcardimg/animal.jpg'
import book4 from '../images/bookcardimg/fat.jpg'
import book5 from '../images/bookcardimg/cingiz.jpg'

import '../pages/96e2a8f2-0045-42df-9c31-b9e6b70737b2.jpg'
import BookCard from './Books/BookCard'
export default function Coxoxunan() {
  return (
    < div id='bestreading' style={{ marginLeft: '38px',marginRight: '38px'}}>
         <div className="section-padding">
            <h2 className="title nav-link-style text-capitalize d-flex fs-1 justify-content-center">  Ən çox oxunulan və bəyənilən kitablar</h2>
            <span className="nav-link-style d-flex fs-4 fw-bold justify-content-center">
              
            </span>
        </div>
        <div className="cardsdisplay" >
        <Routes>
            <Route path='/' element={
            <>
            <BookCard id='1' author=' Dan Brown' bookname='Code Da Vinci' image={book1} aboutbook='While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. Solving the enigmatic riddle'/>
            <BookCard id='2' author=' Agatha Christie' bookname='Ten Little Niggers' image={book2} aboutbook='Ten Little Niggers, later re-titled And Then There Were None, and also titled Ten Little Indians, is considered author Agatha Christies best and most ambitious work. The mystery novel has been adapted for both theatre  and cinema and has remained highly ' />
            <BookCard id='3' author=' George Orwell' bookname='Animal Farm' image={book3} aboutbook='Animal Farm is a satirical allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals '/>
            <BookCard id='4' author=' Gi De Mopassan' bookname='Gonbul' image={book4} aboutbook='When the war between Prussia and France broke out in 1870, 19-year-old law student Guy de Maupassant enlisted as a private in the French army. He served in Normandy with a regiment that was badly equipped and rather futile. '/>
            <BookCard id='5' author=' Çingiz Abdullayev' bookname='Vicdan' image={book5} aboutbook='"İstəyirdim ki, onlar ölməmişdən əvvəl əzab çəksinlər. Hər şeyi bilsinlər və hiss etsinlər. Bilirəm ki, indi səsimi yazırlar, sonra hamısından mənə qarşı istifadə edəcəklər, amma cəhənnəm olsun, qoy yazsınlar... Onların bağ evinə girdim, ikisinin də əl-qolunu bağladım '/>
            </>}>

            </Route>
        </Routes>
        </div>
   
    </div>
  )
}
