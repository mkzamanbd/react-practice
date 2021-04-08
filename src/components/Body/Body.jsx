import React from "react";
import IceCreamBuilder from "../../containers/IceCreamBuilder/IceCreamBuilder";
import styles from "./Body.module.css";

const Body = () => {
  return (
	<div className={styles.mainBody}>
		<IceCreamBuilder/>
	</div>
  );
};

export default Body;
