import React from "react";
import Dif_useState from "./Dif_useState";

const Stats = () => {
  return (
    <footer className="stats">
      <em>1.What is the purpose of useState in React?</em>
      <p>In react, there is issue of autorendering. So if we want to display things over UI. we have to manually re-render the page. one of the hooks is useState for re-rendering. useState is a hook which consist of initial value and updater function. So if any changes happens, useState takes initial value as 1st parameter and change it according to the given functionality and render it on the display.</p>
<hr /><hr />
      <em>2.How do you initialize state in a functional component using useState?</em>
      <p>As functional components are <b>stateless</b>which means that they don't render/refresh automatically. we requires hooks. For initializing, we have to import it first and then use it's two parameters</p>
<hr /><hr />
      <em>3.Explain the difference between using useState in functional components vs. using this.setState in class components.</em>
      <p style={{maxWidth:"100%" }}><Dif_useState /></p>
    </footer>
  );
};

export default Stats;
