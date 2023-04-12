import { useEffect, useState } from "react";
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";
import { API } from "aws-amplify";
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";
function App() {
  const [currentTimeZone, setCurrentTimeZone] = useState(null);
  useEffect(() => {
    setCurrentTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);
  const [timeZonesData, setTimeZonesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await API.graphql({ query: queries.listGeoCounts });
      const data = response.data.listGeoCounts.items;
      console.log(data);
      setTimeZonesData(data);
    };
    fetchData();
  }, []);

  const [count, setCount] = useState(0);
  const updateClickCount = async (timeZone, count) => {
    const response = await API.graphql({
      query: mutations.updateGeoCount,
      variables: {
        timezone: timeZone,
        count: count,
      },
    });
    console.log(response.data);
  };
  const handleClick = () => {
    updateClickCount();
  };

  return (
    <div className="App">
      <div>
        <Button onClick={handleClick} />
        <Counter count={count} />
        {timeZonesData.map((timeZone) => {
          return (
            <div>
              <h3>{timeZone.timezone}</h3>
              <h4>{timeZone.count}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
