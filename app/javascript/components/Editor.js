import React, { useEffect, useState } from 'react';
import Header from './Header';
import EventList from './EventList';

const Editor = () => {
  const [events, setEvents] = React.useState([]);
  const [isLoding, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resonse = await window.fetch('/api/events');
        if (!resonse.ok) throw Error(resonse.statusText);
        const data = await resonse.json();
        setEvents(data);
      } catch (error) {
        setIsError(true);
        console.erroe(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isError && <p>Someting went wrong...</p>}
      {isLoding ? (
        <p>Loading...</p>) : (
        <>
          <EventList events={events} />

          <Ruoters>
            <Route path=":id" element={<Event events={events} />} />
          </Ruoters>
        </>
      )};
    </>
  );
};

export default Editor;
