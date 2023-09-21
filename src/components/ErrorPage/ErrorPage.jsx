import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="text-center text-7xl text-red-600 flex flex-col">
            <div>
                <h2>Oops</h2>
                <p>{error.statusText || error.message}</p>
                <p>{error.status === 404 && <div>Page Not Found Please Try Again</div>}</p>
                <Link to={`/`}><button>Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;