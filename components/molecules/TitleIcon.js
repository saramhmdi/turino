import React from "react";

function TitleIcon({ iconName: Icon, title, classNameIcon, classNameTitle , containerClassName ="flex"}) {
  return (
    <div className={containerClassName}>
      <Icon className={classNameIcon} />
      <p className={classNameTitle}>{title}</p>
    </div>
  );
}

export default TitleIcon;
