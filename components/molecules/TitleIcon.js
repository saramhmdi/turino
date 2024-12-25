import React from "react";

function TitleIcon({ iconName: Icon, title, classNameIcon, classNameTitle }) {
  return (
    <div className="flex">
      <Icon className={classNameIcon} />
      <p className={classNameTitle}>{title}</p>
    </div>
  );
}

export default TitleIcon;
