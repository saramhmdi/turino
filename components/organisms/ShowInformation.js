import React from "react";

function ShowInformation({ title, data }) {
  return (
    <div>
      <p>{title}</p>
      <div>
        {data.map((item , index) => (
          <p key={index}>
            {item.label}: {item.data }
          </p>
        ))}
      </div>
      <button>hi</button>
    </div>
  );
}

export default ShowInformation;
