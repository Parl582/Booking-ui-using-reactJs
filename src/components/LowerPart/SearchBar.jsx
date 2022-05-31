import React, { useState } from "react";
import "./Lower.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import format from "date-fns/format";

const SearchBar = () => {
  const [open, setOpen] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptiion, setOpenOptiion] = useState(false);

  const [option, setOption] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });

  const handleClick = (name, opertion) => {

      setOption(prev=>{return{
          ...prev, 
          [name] : opertion === 'i' ? option[name] + 1 : option[name] - 1,
      }})

  }

  return (
    <>
      <div className="SearchContainer">
        <div className="search_bar_container">
          <div className="searchItem">
            <div className="icons"></div>
            <input type="text" placeholder="where are you going" />
          </div>
          <div className="searchItem" onClick={""}>
            <div className="icons"></div>
            <span
              type="text"
              placeholder="where are you going"
              onClick={() => setOpen(!open)}
            >
              {`${format(date[0].startDate, "dd/MM/yyy")} To ${format(
                date[0].endDate,
                "dd/MM/yyy"
              )} `}
            </span>
            {open && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>

          <div
            className="searchItem"
          
          >
            <div className="icons"></div>
            <span type="text"   onClick={() => setOpenOptiion(!openOptiion)}  >       
              {`${option.adult} Adult - ${option.child} Child - ${option.room} Room`}{" "}
            </span>

            {openOptiion && (
              <div className="option">
                <div className="OPTIONmENU">
                  <span>Adult</span>
                  <div className="optionClick">
                    <button onClick={()=>handleClick("adult","d")} disabled={option.adult<=1} > - </button>
                    <span>{option.adult} </span>
                    <button onClick={()=>handleClick("adult","i")}> + </button>
                  </div>
                </div>

                <div className="OPTIONmENU">
                  <span>Children</span>

                  <div className="optionClick">
                    <button onClick={()=>handleClick("child","d")}disabled={option.child<=0}  > - </button>
                    <span >{option.child} </span>
                    <button onClick={()=>handleClick("child","i")}  disabled={option.adult>=5} > + </button>
                  </div>
                </div>
                <div className="OPTIONmENU">
                  <span>Room</span>
                  <div className="optionClick">
                    <button onClick={()=>handleClick("room","d")} disabled={option.room<=1}> - </button>
                    <span>{option.room}</span>
                    <button onClick={()=>handleClick("room","i")} > + </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="buttons">Search</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
