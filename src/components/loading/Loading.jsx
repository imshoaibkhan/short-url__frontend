import { lineSpinner } from "ldrs";

const Loading = () => {
    lineSpinner.register()
  return (
      <l-line-spinner
        size="55"
        stroke="3"
        speed="1"
        color="black"
      ></l-line-spinner>
  );
};

export default Loading;
