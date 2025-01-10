import Home from "../pages/Home";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import RootLayout from "../components/RootLayout";
import Accreditation from "../pages/Accreditation";
import Application from "../pages/Application";
import Requirements from "../pages/Requirements";
import Activities from "../pages/Activities";
import Organizations from "../pages/Organizations";
import OsaServices from "../pages/OsaServices";
import About from "../pages/About";
import Actions from "../pages/accreditations/Actions";
import AccreditationForm from "../pages/accreditations/AccreditationForm";
import ReAccreditationForm from "../pages/accreditations/ReAccreditationForm";
import Dashboard from "../pages/Dashboard";
import ApprovalApplication from "../pages/accreditations/ApprovalApplication";

const env = import.meta.env;
const serverURL = env.VITE_API_URL;

export {
    serverURL,
    Nav,
    RootLayout,
    Accreditation,
    Application,
    Requirements,
    Footer,
    Home,
    Activities,
    Organizations,
    OsaServices,
    About,
    Actions,
    AccreditationForm,
    ReAccreditationForm,
    Dashboard,
    ApprovalApplication
}