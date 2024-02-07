import { useEffect, useState } from "react";
import { HashRouter, Route, useLocation } from "react-router-dom";
import { Paths, PathsPages } from "./config/paths/path";
import { Home } from "./pages/home/home";
import { Sebrae } from "./pages/sebrae";
import { ContentPage } from "./components/content-page";
import { LoginCase } from "./pages/login-case";

export const Routers = () => {
    const location = useLocation();
    const currentPath = location.hash.substring(1);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, [currentPath]);

    return (
        <>
            <HashRouter>
                <Route exact path={[Paths.HOME, Paths.HOME_REDIRECT]} component={Home} />
                <Route path={PathsPages.SEBRAE}>
                    <ContentPage>
                        <Sebrae />
                    </ContentPage>
                </Route>
                <Route path={PathsPages.LOGIN_CASE}>
                    <ContentPage>
                        <LoginCase />
                    </ContentPage>
                </Route>
            </HashRouter>
        </>
    );
};
