import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutStore from "@/layouts/LayoutStore";
import StoreHomePage from "@/pages/store/home/Index";
import Home from "@/pages";
import ProductDetail from "@/features/details/ProductDetail";
import DetailUse from "@/features/filters/DetailUse";
import PrivacityDetail from "@/pages/store/PrivacityDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/voltech" replace />
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