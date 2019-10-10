import Homepage from '../page/HomePage';
import RouterResult from '../routers/RouterResult';
import NewsModal from '../components/modals/productModals/NewsModal';

var indexRoute = [
    {
        path: "/",
        exact: true,
        component: Homepage
    },
    {
        path: "/result",
        exact: false,
        component: RouterResult
    },
    {
        path: "/test",
        exact: false,
        component: NewsModal
    }
]

export default indexRoute;