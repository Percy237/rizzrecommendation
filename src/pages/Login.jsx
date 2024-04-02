import Form from "../components/Form";
const Login = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="hidden md:block xl:block lg:block">
        <iframe
          src="https://giphy.com/embed/zhh9ivpOs0vtKc3Q0i"
          width="480"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/rizz-benjammins-rizzler-zhh9ivpOs0vtKc3Q0i">
            via GIPHY
          </a>
        </p>
      </div>
      <div className="pt-[4rem]">
        <Form route="/api/token/" method="login" />
      </div>
    </div>
  );
};

export default Login;
