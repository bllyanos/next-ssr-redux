import { initializeStore } from "../store";
import { useSelector } from "react-redux";

export default function Home() {
  const message = useSelector((store) => store.message);
  return (
    <div>
      <div>Hello {message}</div>
    </div>
  );
}

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  const message = "HOLLAAA";

  dispatch({
    type: "TICK",
    payload: message,
  });

  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
  };
}
