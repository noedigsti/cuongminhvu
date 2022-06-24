import React from "react";
import Layout from "../layouts/Layout";

export default function Query() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const data = await fetch("/api");
  //     // convert data to json
  //     // const json = await data.json();
  //     // console.log(json);
  //     // setData(JSON.stringify(json, null, 2));
  //     // console.log(data);
  //   };
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, []);
  return (
    <>
      <Layout title={"Query"}>
      </Layout>
      <pre style={{textAlign: 'none', color: 'white'}}>{!data ? "Loading..." : data}</pre>
    </>
  );
}
