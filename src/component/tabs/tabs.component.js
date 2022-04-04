import { useState } from "react";
import "./tabs.styles.scss";

import TodayUserList from '../Today-user-list/today-user-list.component';
import ThisWeekUserList from "../Thisweek-userlist/thisweek-userlist.component";
import AllUserList from '../Alluser-list/alluser-list.component';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Today
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          This Week
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          All
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <TodayUserList />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <ThisWeekUserList />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <AllUserList />
        </div>
      </div>
    </div>
  );
}

export default Tabs;