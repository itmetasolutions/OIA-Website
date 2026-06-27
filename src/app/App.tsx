import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import WhyChooseUs from "./pages/WhyChooseUs"
import Contact from "./pages/Contact"
import Enroll from "./pages/Enroll"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true,              element: <Home /> },
      { path: "about",            element: <About /> },
      { path: "courses",          element: <Courses /> },
      { path: "courses/:slug",    element: <CourseDetail /> },
      { path: "why-choose-us",    element: <WhyChooseUs /> },
      { path: "contact",          element: <Contact /> },
      { path: "enroll",           element: <Enroll /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
