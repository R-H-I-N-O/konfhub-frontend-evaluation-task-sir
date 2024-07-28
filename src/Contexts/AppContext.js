import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const data = useContext(AppContext);
  return data;
};

export { useAppContext };
export default AppContextProvider;
