import { initializeStore } from "../../store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function MerchantCatalog() {
  const fetchData = useSelector((s) => s.fetchData);

  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/nossr")}>NO_SSR</button>
      <div>Hello </div>
      {fetchData.data ? fetchData.data.map((d) => <div>{d.name}</div>) : null}
    </div>
  );
}

export async function getServerSideProps(props) {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  const { params } = props;
  const { merch, cat } = params;

  const res = await fetch(
    `https://instapay-id-catalog.github.io/${merch}/${cat}.json`
  ).then((d) => d.json());

  dispatch({
    type: "FETCH",
    payload: res,
  });

  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
  };
}
