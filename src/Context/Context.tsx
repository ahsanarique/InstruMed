import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

interface ModelTypes {
  Id: number;
  BrandId: string;
  Name: string;
  TypeId: number;
  Comment: string;
}

interface ModelData {
  Id: number;
  DataType: string;
  Brand: string;
  Model: string;
  DisplayName: string;
  Description: string;
  Status: null | string;
  GroupId: null | number;
  ProtocolOrder: null | number;
}

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
  }, []);

  return (
    <Context.Provider value={{ loginStatus, setLoginStatus, instrumentType }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
