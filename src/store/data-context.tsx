import React, { useEffect, useState, useMemo } from "react";

const DataContext = React.createContext<any>({
  vehicles: {},
  loading: false,
  error: "",
  makesArray: [],
  allAvailableYears: [],
  searchedData: {},
  highestPrice: 0,
  lowestPrice: 0,
  medianPrice: 0,
  onSearch: (url: any) => {},
});

export const DataContextProvider = ({ children }: any) => {
  const [vehicles, setVehicles] = useState({
    loading: false,
    error: "",
    vehicles: [],
  });
  const [searchedData, setSearchedData] = useState({
    loading: false,
    error: "",
    searchedData: [],
  });

  const allMakesData = useMemo(() => {
    return getAllMakes(vehicles.vehicles);
  }, [vehicles]);

  const allAvailableYears = useMemo(() => {
    return getAllYears(vehicles.vehicles);
  }, [vehicles]);

  useEffect(() => {
    getData();
  }, []);

  /**
   * This function is to get all the vehicles data
   * Method type: GET
   * Route: Public
   * @url: http:localhost:5000/vehicles
   */
  const getData = () => {
    fetch("/vehicles")
      .then((res) => {
        setVehicles({ ...vehicles, loading: true });
        return res.json();
      })
      .then((data) => {
        setVehicles({ ...vehicles, loading: false, vehicles: data });
      })
      .catch((err) => {
        setVehicles({ ...vehicles, loading: false, error: err });
      });
  };

  //funtion to populate dropdown for makes
  function getAllMakes(vehicles: any) {
    let makes: any[] = vehicles?.reduce((pre: any, cur: any) => {
      if (!pre.includes(cur.make)) {
        pre?.push(cur?.make);
      }
      return pre;
    }, []);

    return makes;
  }

  //function to poulate dropdown for years
  function getAllYears(vehicles: any) {
    let years: any[] = vehicles?.reduce((pre: any, cur: any) => {
      if (!pre.includes(cur.year)) {
        pre.push(cur.year);
      }
      return pre;
    }, []);

    return years;
  }

  /*
   * Fetching data accoriding to query params
   * Method type: GET
   * Route: Public
   * @url: dynamic
   * default url: http:localhost:5000/vehicles
   */
  const onSearch = (url: any) => {
    fetch(url)
      .then((res) => {
        setSearchedData({ ...searchedData, loading: true });
        return res.json();
      })
      .then((data) => {
        setSearchedData({
          ...searchedData,
          loading: false,
          searchedData: data,
          error: "",
        });
      })
      .catch((err) => {
        setSearchedData({
          ...searchedData,
          loading: false,
          searchedData: [],
          error: "",
        });
      });
  };

  /* Getting Lowest Price, Median Pricce and Highest Price */
  /* Need to get price array as well to find median price */
  /* using price array finding median price */
  const { highestPrice, lowestPrice, medianPrice }: any = useMemo(() => {
    const findMedian = (values: number[]) => {
      if (values.length === 0) {
        return 0;
      }
      values.sort(function (a, b) {
        return a - b;
      });
      let half = Math.floor(values.length / 2);
      if (values.length % 2) return values[half];
      return (values[half - 1] + values[half]) / 2.0;
    };

    let priceArray: any[] = searchedData.searchedData?.map((vehicle: any) => {
      return vehicle.price;
    });

    let highestPrice: number = Math.max(...priceArray);
    let lowestPrice: number = Math.min(...priceArray);
    let medianPrice: number = findMedian(priceArray);

    return {
      highestPrice,
      lowestPrice,
      medianPrice,
    };
  }, [searchedData]);

  return (
    <DataContext.Provider
      value={{
        vehicles,
        makesArray: allMakesData,
        allAvailableYears,
        searchedData,
        highestPrice,
        lowestPrice,
        medianPrice,
        onSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
