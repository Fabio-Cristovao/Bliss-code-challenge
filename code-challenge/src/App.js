import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [dataList, setDataList] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      let res = await fetch("https://private-anon-ff1e37bcc5-blissrecruitmentapi.apiary-mock.com/health");
      if (!res.ok) {
        console.log(res);
        return setError(true);
      }

      const status = await res.json();
      setIsLoading(false);
      console.log(status);
    }
    checkStatus();
  }, []);

  return (
    <div className="App">
      {!error &&
        <h2>O servidor carregou normalme</h2>
      }
    </div>
  );
}

export default App;
