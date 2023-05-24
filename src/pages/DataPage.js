import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CategoryScale, LinearScale } from 'chart.js';
import Chart from 'chart.js/auto';
import Api from '../helper/Api';
import ShowChart from '../helper/ShowChart';
import '../css/DatePicker.css';
import '../css/Chart.css';


Chart.register(CategoryScale, LinearScale);

function DataPage() {
  const [data, setData] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    Api.getAvailableDates()
      .then((res) => {
        const datesWithAvailableData = res.data.map((d) => d.Tanggal);
        setAvailableDates(datesWithAvailableData);
        if (datesWithAvailableData.length > 0) {
          setSelectedDate(new Date(datesWithAvailableData[0]));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedDate) {
      Api.getDataByDate(selectedDate.toISOString().slice(0, 10))
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [selectedDate]);

  const filterDate = (date) => {
    const dateString = date.toISOString().slice(0, 10);
    const result = availableDates.includes(dateString);
    console.log(dateString, result);
    return result;
  };

  return (
    <div className="container">
      <div className="chart-container">
        <div className="datepicker-container">
          <label htmlFor="datepicker">Date: </label>
          {availableDates.length > 0 && (
            <DatePicker
              id="datepicker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              filterDate={filterDate}
              dateFormat="yyyy-MM-dd"
            />
          )}
        </div>
        <ShowChart data={data} scale={"Suhu"} mode={"Avg"}/><br /><br />
        <ShowChart data={data} scale={"RH"} mode={"Avg"}/><br /><br />
        {/* <ShowChart data={data} scale={"Suhu"} mode={"Spot"}/><br /><br />
        <ShowChart data={data} scale={"RH"} mode={"Spot"}/><br /><br /> */}
      </div>
    </div>
  );
}

export default DataPage;
