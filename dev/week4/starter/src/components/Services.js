
import Title from './Title'
import Service from './Service'
import React, {useEffect, useState} from 'react';

const apiUrl = 'http://localhost:5001/api/services';

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getServices();
  }, []);
  

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData && servicesData.map((service) => {
          return <Service {...service} key={service._id} />
        })}
      </div>
    </section>
  )
}
export default Services;