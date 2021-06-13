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
  // user login status
  const [loginStatus, setLoginStatus] = useState(false);

  // main page data
  const [instrumentType, setInstrumentType] = useState<ModelTypes[] | []>([]);

  // shows upon clicking on model types in main page
  const [instrumentData, setInstrumentData] = useState<ModelData[] | []>([]);

  // title for model data- brand: name
  const [dataTitle, setDataTitle] = useState("");

  // data from DeviceType route
  const [deviceType, setDeviceType] = useState<DeviceTypes[] | []>([]);

  // checking login status and loading main page data upon logging in
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

  // getting device type data upon logging in
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

  // getting data from modeldata route upon clicking on a model type in main page
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

  // adding new model type
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
