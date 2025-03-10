import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../shared/destinations';

export default function Home() {
  const[itemsPerPage, setItemsPerPage] = useState(5)
  
  //state za pracenje trenutne stranice
  const [currentPage, setCurrentPage] = useState(1);

  //setuje vrednost iz FilterCountry komponente 
  const [filterCountry, setFilterCountry] = useState('All');

  //setuje onu vrednost koju smo odabrali na dugmicima
  const handleChangeFilter = (value) => {
    setFilterCountry(value)
    setCurrentPage(1)
  }

  //ona ih filterise tj. prikazuje ih
  const filteredVacations = filterCountry === 'All' ? DESTINATIONS : DESTINATIONS.filter(({country}) => country === filterCountry)
  const totalPages = Math.ceil(filteredVacations.length / itemsPerPage);
  const currentVacations = filteredVacations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // * PAGINATION LOGIC

  const handleChangePaginate = (value) => {
    setCurrentPage(value);
  }

  const handleChangeItemsPerPage = (value) => {
    setItemsPerPage(value)
  }

  return (
    <section className='section py-12'>
      <div className='container'>
        <h1 className='h1'>SUMMER VACATION</h1>

        <FilterCountry data={DESTINATIONS} handleChangeFilter={handleChangeFilter} />

        <DestinationLists data={currentVacations} />

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          itemsPerPage={itemsPerPage}
          handleChangeItemsPerPage={handleChangeItemsPerPage} 
          handleChangePaginate={handleChangePaginate} 
          />
      </div>
    </section>
  )
}

function DestinationLists({ data }) {
  return (
    <div className='grid grid-cols-2 gap-8 my-4'>
      {data.map((destination) => {
        return <DestinationCard key={destination._id} {...destination} />
      })}
    </div>
  )
}

function DestinationCard({ image: { src }, link: { label, href } }) {
  return (
    <div className='card'>
      <img src={src} alt={label} className='responsive-img' />

      <div className='card-caption'>
        <Link to={href} className='card-link'>{label}</Link>
      </div>
    </div>
  )
}

function Pagination({ currentPage, totalPages, itemsPerPage, handleChangeItemsPerPage, handleChangePaginate }) {
  return (
    <div className='flex gap-2 items-center'>
      <select value={itemsPerPage} onChange={(event) => handleChangeItemsPerPage(event.target.value)}>
        {[3, 5, 10].map((item) => {
          return <option key={item} value={item}>{item}</option>
        })}
      </select>

      <button className='btn' onClick={() => handleChangePaginate((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Previous</button>
      <span>{currentPage} / {totalPages}</span>
      <button className='btn' onClick={() => handleChangePaginate((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
    </div>
  )
}

function FilterCountry({data, handleChangeFilter}) {
  const getUniqueCountries = () => {
    return ['All', ...new Set(data.map(({country}) => country))]
  }

  const countries = getUniqueCountries();

  return (
    <div className='flex gap-2 justify-center'>
      {countries.map((country) => {
        return (
          <button type='button' className='btn' key={country} onClick={ () => handleChangeFilter(country)}>{country}</button> 
        )
      })}
    </div>
  )
}