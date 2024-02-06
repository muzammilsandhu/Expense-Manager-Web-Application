import { Redirect, Route } from "react-router-dom";
import { getFromLocal } from "./utils/getfromlocal";

const PrivateRoutes = ({ children, ...rest }) => {
    const token = getFromLocal("token");
    return (
        <Route
            {...rest}
            render={({ location }) =>
                token==true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoutes;