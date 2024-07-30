import React from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import {
  Database,
  Home,
  LineChart,
  MapPinned,
  Satellite,
  Search,
  Settings,
  Users2,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PanelAdmin = () => {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const excludedPaths = ["gestion"]; // Lista de rutas intermedias a excluir

    return (
      <BreadcrumbList>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const isExcluded = excludedPaths.includes(value);

          return (
            <React.Fragment key={to}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{value}</BreadcrumbPage>
                ) : isExcluded ? (
                  <BreadcrumbPage>{value}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={to}>{value}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    );
  };

  const isActive = (path:string) => location.pathname.includes(path);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 dark:bg-gray-900">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background dark:bg-gray-800 sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Inicio</span>
              </Link>
            </TooltipTrigger>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/panelAdmin/gestion/gestionEstadisticas"
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/panelAdmin/gestion/gestionEstadisticas")
                    ? "bg-primary text-secondary"
                    : ""
                }`}
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Panel Admin</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Panel Admin</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/panelAdmin/gestion/gestionUsuarios"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/panelAdmin/gestion/gestionUsuarios")
                    ? "bg-primary text-secondary"
                    : "text-muted-foreground"
                }`}
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Gestión de Usuarios</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Gestión de Usuarios</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/panelAdmin/gestion/gestionNodos"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/panelAdmin/gestion/gestionNodos")
                    ? "bg-primary text-secondary"
                    : "text-muted-foreground"
                }`}
              >
                <Satellite className="h-5 w-5" />
                <span className="sr-only">Gestión de Nodos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Gestión de Nodos</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/panelAdmin/gestion/gestionDatos"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/panelAdmin/gestion/gestionDatos")
                    ? "bg-primary text-secondary"
                    : "text-muted-foreground"
                }`}
              >
                <Database className="h-5 w-5" />
                <span className="sr-only">Gestión de Datos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Gestión de Datos</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/panelAdmin/gestion/gestionUbicaciones"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/panelAdmin/gestion/gestionUbicaciones")
                    ? "bg-primary text-secondary"
                    : "text-muted-foreground"
                }`}
              >
                <MapPinned className="h-5 w-5" />
                <span className="sr-only">Gestión de Ubicaciones</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Gestión de Ubicaciones</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("#") ? "bg-primary text-secondary" : "text-muted-foreground"
                }`}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background dark:bg-gray-800 px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">{generateBreadcrumbs()}</Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuItem>Soporte</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PanelAdmin;
