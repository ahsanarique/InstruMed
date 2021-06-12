import React, { useState, useEffect } from "react";
import { ModelTypes, ModelData } from "../TypeCheckers/TypeCheckers";
import axios from "axios";

const Context = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

function ContextProvider({ children }: Props) {
  const [loginStatus, setLoginStatus] = useState(false);

  const [instrumentType, setInstrumentType] = useState<ModelTypes[] | []>([]);

  const [instrumentData, setInstrumentData] = useState<ModelData[] | []>([]);

  useEffect(() => {
    const url = "http://163.47.115.230:30000/api/overview/modeltype";

    axios
      .get(url, {
        headers: {
          authorization: sessionStorage.getItem("authorization"),
        },
      })
      .then((res) => {
        setInstrumentType(res.data);
      });
  }, [loginStatus]);

  const getInstrumentData = (item: ModelTypes) => {
    const deviceBrand = item.BrandId;
    const deviceName = item.Name;
    const url = `http://163.47.115.230:30000/api/overview/modeldata/${deviceBrand}/${deviceName}`;

    axios
      .get(url, {
        headers: {
          authorization: sessionStorage.getItem("authorization"),
        },
      })
      .then((res) => setInstrumentData(res.data));
  };

  return (
    <Context.Provider
      value={{
        loginStatus,
        setLoginStatus,
        instrumentType,
        instrumentData,
        setInstrumentData,
        getInstrumentData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
