import React from "react";

class ErrorHandler extends React.Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError(err) {
        console.log("err=>", err);
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <div
                        style={{
                            padding: "2%",
                            display: "flex",
                            flexDirection: "column",
                            width: "fit-content",
                            textAlign: "center",
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                            color: "red",
                        }}
                    >
                        <i
                            className="fa fa-exclamation-circle"
                            aria-hidden="true"
                            style={{ fontSize: "30px" }}
                        />
                        <p style={{ margin: "0px" }}>
                            Something went wrong. Try refreshing the browser!
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
export default ErrorHandler;
