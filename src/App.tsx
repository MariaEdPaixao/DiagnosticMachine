import { Outlet, useLocation } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";

function App() {
  const location = useLocation();

  // Rotas onde o Cabecalho e Rodape devem ser escondidos
  const hiddenHeaderFooterRoutes = ["/", "/login"];

  // Verificando se a rota atual está em hiddenHeaderFooterRoutes
  const shouldHideHeaderFooter = hiddenHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {/* Renderizando o Cabecalho apenas se a rota não estiver em hiddenHeaderFooterRoutes */}
      {!shouldHideHeaderFooter && <Cabecalho />}

      <Outlet />

      {/* Renderizando o Rodape apenas se a rota não estiver em hiddenHeaderFooterRoutes */}
      {!shouldHideHeaderFooter && <Rodape />}
    </>
  );
}

export default App;
