import { useSelector } from "react-redux";

export default function NoSSR() {
  const fetchData = useSelector((s) => s.fetchData);

  return (
    <div>
      {fetchData.data.map((d) => (
        <div>{d.amount}</div>
      ))}
    </div>
  );
}
