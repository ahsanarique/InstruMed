import React, { useState, useEffect } from "react";
import {
  ModelTypes,
  ModelData,
  DeviceTypes,
} from "../TypeCheckers/TypeCheckers";
import axios from "axios";

const Context = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

function ContextProvider({ children }: Props) {
  const [loginStatus, setLoginStatus] = useState(false);

  const [instrumentType, setInstrumentType] = useState<ModelTypes[] | []>([]);

  const [instrumentData, setInstrumentData] = useState<ModelData[] | []>([]);

  const [dataTitle, setDataTitle] = useState("");

  const [deviceType, setDeviceType] = useState<DeviceTypes[] | []>([]);

  useEffect(() => {
    const url = "http://163.47.115.230:30000/api/overview/modeltype";

    if (loginStatus) {
      axios
        .get(url, {
          headers: {
            authorization: sessionStorage.getItem("authorization"),
          },
        })
        .then((res) => {
          setInstrumentType(res.data);
        })
        .catch((error) => alert(error.message));
    }
  }, [loginStatus]);

  useEffect(() => {
    if (loginStatus) {
      const url = "http://163.47.115.230:30000/api/devicetype";

      axios
        .get(url, {
          headers: {
            authorization: sessionStorage.getItem("authorization"),
          },
        })
        .then((res) => {
          setDeviceType(res.data[0]);
        })
        .catch((error) => alert(error.message));
    }
  }, [loginStatus]);

  const getInstrumentData = (item: ModelTypes) => {
    const deviceBrand = item.BrandId;
    const deviceName = item.Name;
    const url = `http://163.47.115.230:30000/api/overview/modeldata/${deviceBrand}/${deviceName}`;

    setDataTitle(`${deviceBrand}: ${deviceName}`);

    axios
      .get(url, {
        headers: {
          authorization: sessionStorage.getItem("authorization"),
        },
      })
      .then((res) => {
        setInstrumentData(res.data);
      })
      .catch((error) => alert(error.message));
  };

  const addNewModelType = (data: ModelTypes) => {
    const url = "http://163.47.115.230:30000/api/devicemodel";

    const authorization = {
      headers: {
        authorization: sessionStorage.getItem("authorization"),
      },
    };

    axios
      .post(url, data, authorization)
      .then((res) => {
        if (res.statusText === "Created") {
          alert("Data Added Successfully");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
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
        dataTitle,
        deviceType,
        addNewModelType,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
