import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutStore from "@/layouts/LayoutStore";
import StoreHomePage from "@/pages/store/home/Index";
import Home from "@/pages";
import ProductDetail from "@/features/details/ProductDetail";
import DetailUse from "@/features/filters/DetailUse";
import PrivacityDetail from "@/pages/store/PrivacityDetail";
import AboutPage from "@/pages/store/home/AboutPage";
import ConoceMas from "@/pages/store/home/ConoceMas";
import Psilocibina from "@/pages/store/home/Psilocibina";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/store" replace />
    },
    {
        path: '/voltech',
        element: (
            <Home />
        )
    },
    {
		path: '/store',
		element: <LayoutStore/>,

		children: [
			{
				path: '',
				element: <StoreHomePage />,
			},
			{
				path: 'catalogo',
				element: <DetailUse />,
			},
			{
				path: 'info',
				element: <ConoceMas />,
			},
			{
				path: 'psilocibina',
				element: <Psilocibina />,
			},
			{
				path: 'nosotros',
				element: <AboutPage />,
			},
			{
				path: ':id',
				element: <ProductDetail />,
			  },
			{
				path: 'politicadeprivacidad',
				element: <PrivacityDetail />,
			  },
		],
	}
])