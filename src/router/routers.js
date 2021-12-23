import { Redirect } from "react-router-dom";
//pages
import { Blog } from "../page/Blog";
import { Contacto } from "../page/Contacto";
import { Educacion } from "../page/Educacion";
import { HistorialLaboral } from "../page/HistorialLaboral";
import { Portafolio } from "../page/portafolio";

export const routerDoom = [
  {
    path: "/portafolio",
    exact: true,
    sidebar: "Portafolio",
    main: () => <Portafolio />
  },
  {
    path: "/blog",
    exact: true,
    sidebar: "Blog",
    main: () => <Blog />
  },
  {
    path: "/Historial-Laboral",
    exact: true,
    sidebar: "Historial Laboral",
    main: () => <HistorialLaboral />
  },
  {
    path: "/educacion",
    exact: true,
    sidebar: "Educacion",
    main: () => <Educacion />
  },
  {
    path: "/contacto",
    exact: true,
    sidebar: "contacto",
    main: () => <Contacto />
  },
  {
    path: "/",
    exact: true,
    main: () => <Redirect from="/" to="/portafolio" />
  }
];
