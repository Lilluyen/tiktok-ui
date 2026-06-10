import configRoutes from '@/config/routes';

//Layout
import { HeaderOnly } from "@/components/Layouts";

import Following from "@/pages/Following";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";
import Search from "@/pages/Search";

const publicRoutes = [
    { path: configRoutes.home, component: Home },
    { path: configRoutes.following, component: Following },
    { path: configRoutes.profile, component: Profile },
    { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
    { path: configRoutes.search, component: Search, layout: null }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }