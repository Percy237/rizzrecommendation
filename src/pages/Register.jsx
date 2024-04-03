import Form from "../components/Form";
const Register = () => {
  return (
    <div className="flex justify-center items-center w-[90%] flex-wrap-reverse gap-x-20 pt-10">
      <div className="">
        <iframe
          src="https://giphy.com/embed/zhh9ivpOs0vtKc3Q0i"
          width="320"
          height="280"
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
      <div className="flex justify-center items-center">
        <Form route="/api/user/register/" method="register" />
      </div>
    </div>
  );
};

export default Register;
