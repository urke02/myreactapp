import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  

  //niz sa objektima, tj. niz koji sadrzi razlicite lokacije u razlicitim drzavama
  const vacations = [
    {
      _id: '1',
      image: {
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/561382832.jpg?k=a9d2305434886d793077316503553e9da4d732c8631a3cbcdbc6f1a97f8a5ada&o=&hp=1'
      },
      link: {
        href: '/',
        label: 'Hanioti'
      },
      country: 'Greece'
    },

    {
      _id: '2',
      image: {
        src: 'https://centralmacedoniablob.blob.core.windows.net/portal-content/%CE%A0%CE%BF%CE%BB%CF%8D%CF%87%CF%81%CE%BF%CE%BD%CE%BF_Polixrono%20%284%29.jpeg'
      },
      link: {
        href: '/',
        label: 'Polihrono'
      },
      country: 'Greece'
    },

    {
      _id: '3',
      image: {
        src: 'https://content.tui.co.uk/adamtui/2023_4/28_12/6be9dcfa-6476-41aa-92e4-aff200d366f5/LOC_000856_shutterstock_1404298556WebOriginalCompressed.jpg?i10c=img.resize(width:1080);img.crop(width:1080%2Cheight:608)'
      },
      link: {
        href: '/',
        label: 'Beograd'
      },
      country: 'Serbia'
    },

    {
      _id: '4',
      image: {
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/561382832.jpg?k=a9d2305434886d793077316503553e9da4d732c8631a3cbcdbc6f1a97f8a5ada&o=&hp=1'
      },
      link: {
        href: '/',
        label: 'Istanbul'
      },
      country: 'Turkey'
    },
  ]

  //setuje vrednost iz FilterCountry komponente 
  const [filterCountry, setFilterCountry] = useState('All');

  //setuje onu vrednost koju smo odabrali na dugmicima
  const handleChangeFilter = (value) => {
    setFilterCountry(value)
  }

  //ona ih filterise tj. prikazuje ih
  const filteredVacations = filterCountry === 'All' ? vacations : vacations.filter(({country}) => country === filterCountry)

  return (
    <div>
      <div>
        <h1 className='headingText'>SUMMER VACATION</h1>
        <hr/>
      </div>

      <FilterCountry data={vacations} handleChangeFilter={handleChangeFilter} />

      <div className='displayF'>
        {filteredVacations.map((vacation) => {
          return <VacationCard key={vacation._id} {...vacation} />
        })}
      </div>
    </div>
  )
}


function VacationCard(vacation) {
  return (
    <div className='img'>
      <img src={vacation.image.src} />
      <Link to={vacation.link.href}> {vacation.link.label} </Link>
    </div>
  )
}

function FilterCountry({data, handleChangeFilter}) {

  //prikazuje button-e
  const getUniqueCountries = () => {
    return ['All', ...new Set(data.map(({country}) => country))]
  }

  const countries = getUniqueCountries();

  return (
    <div>
      {countries.map((country) => {
        return (
          <button type='button' key={country} onClick={ () => handleChangeFilter(country)}>{country}</button> 
        )
      })}
    </div>
  )
}


//paginaciju dodati jedna stavka po jednoj strani