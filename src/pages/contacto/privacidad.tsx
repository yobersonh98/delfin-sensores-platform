import { MountainIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Privacidad = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-muted dark:text-muted-foreground">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <Link to="/">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="flex gap-4">
          <Link
            to="/login"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Login
          </Link>
          <Link
            to="/contacto"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-muted">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Aviso de Privacidad
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl dark:text-muted-foreground">
                En Acme Inc., nos tomamos muy en serio la privacidad de nuestros
                usuarios. A continuación, te explicamos cómo recopilamos,
                utilizamos y protegemos tus datos personales.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Recopilación de Datos</h2>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Recopilamos información personal como tu nombre, dirección de
                  correo electrónico y número de teléfono cuando te registras en
                  nuestro sitio web o te pones en contacto con nosotros. También
                  recopilamos información sobre cómo utilizas nuestros
                  servicios, como las páginas que visitas y las acciones que
                  realizas.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Uso de Datos</h2>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Utilizamos tus datos personales para brindarte un mejor
                  servicio, como responder a tus consultas, mejorar nuestros
                  productos y servicios, y enviarte información relevante. No
                  compartimos tus datos con terceros sin tu consentimiento, a
                  menos que sea necesario para cumplir con la ley o proteger
                  nuestros derechos.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Seguridad de Datos</h2>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Tomamos medidas de seguridad para proteger tus datos
                  personales de accesos no autorizados, modificaciones,
                  divulgación o destrucción. Utilizamos tecnologías de
                  encriptación y seguimos las mejores prácticas de seguridad
                  para mantener tus datos seguros.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Tus Derechos</h2>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Tienes derecho a acceder, rectificar, cancelar u oponerte al
                  tratamiento de tus datos personales. También puedes solicitar
                  la portabilidad de tus datos. Si tienes alguna pregunta o
                  inquietud sobre el uso de tus datos, no dudes en ponerte en
                  contacto con nosotros.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-muted">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Contacta con nosotros
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl dark:text-muted-foreground">
                Si tienes alguna pregunta o comentario, no dudes en ponerte en
                contacto con nosotros. Estaremos encantados de ayudarte.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Enviar Mensaje
              </Link>
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Ir al Inicio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-6 flex justify-between items-center dark:bg-background dark:text-muted-foreground">
        <p className="text-xs">&copy; 2024 Acme Inc. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link
            to="#"
            className="text-xs hover:underline underline-offset-4 dark:hover:text-muted-foreground"
          >
            Términos de Servicio
          </Link>
          <Link
            to="#"
            className="text-xs hover:underline underline-offset-4 dark:hover:text-muted-foreground"
          >
            Aviso de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Privacidad;
