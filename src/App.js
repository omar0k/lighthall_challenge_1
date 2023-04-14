import { useEffect, useState } from "react";
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";
import { API } from "aws-amplify";
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";
import "./App.css";
function App() {
  const [currentTimeZone, setCurrentTimeZone] = useState(null);
  const [currentTimeZoneId, setCurrentTimeZoneId] = useState(null);
  const [count, setCount] = useState(0);
  const [timeZonesData, setTimeZonesData] = useState([]);
  const fetchData = async () => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setCurrentTimeZone(userTimeZone);
    const response = await API.graphql({ query: queries.listGeoCounts });
    const data = response.data.listGeoCounts.items;
    setTimeZonesData(data);
    const currentTimeZoneData = data.find(
      (entry) => entry.timezone === userTimeZone
    );
    if (!currentTimeZoneData) {
      createGeoCount();
    }
    if (currentTimeZoneData) {
      setCount(currentTimeZoneData.count);
      setCurrentTimeZoneId(currentTimeZoneData.id);
    }
  };
 
  const createGeoCount = async () => {
    const response = await API.graphql({
      query: mutations.createGeoCount,
      variables: {
        input: {
          count: 0,
          timezone: currentTimeZone,
        },
      },
    });
    console.log(response);
  };
  useEffect(() => {
    fetchData();
  }, [currentTimeZone]);
  const updateClickCount = async (id, count) => {
    await API.graphql({
      query: mutations.updateGeoCount,
      variables: {
        input: {
          id: id,
          count: count,
        },
      },
    });
  };
  const useDebounceValue = (value, time = 250) => {
    const [debounceVal, setDebounceVal] = useState(value);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setDebounceVal(value);
      }, time);
      return () => {
        clearTimeout(timeout);
      };
    }, [value, time]);
    return debounceVal;
  };
  const debounceCount = useDebounceValue(count);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (currentTimeZoneId) {
      updateClickCount(currentTimeZoneId, debounceCount);
    }
  }, [debounceCount, currentTimeZoneId]);
  return (
    <div className="App">
      <div className="container">
        <Button onClick={handleClick} />
        {timeZonesData.map((timeZone) => {
          return (
            <div key={timeZone.id}>
              <h3>{timeZone.timezone}</h3>
              {timeZone.timezone === currentTimeZone ? (
                <Counter count={count} />
              ) : (
                <Counter count={timeZone.count} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
