import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div class="flex flex-col gap-5 justify-center items-center min-h-screen">
            <h1 class="text-5xl font-bold"> Oops!!!!!!</h1>
            <h2 class="text-xl">404 Page not found 😒.</h2>
            <Link to='/' class="btn btn-ghost">Go back Home</Link>
        </div>
    );
};

export default Error;