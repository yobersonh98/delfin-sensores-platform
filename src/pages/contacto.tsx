import React from "react";
import { MountainIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contacto = () => {
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
                Contacta con nosotros
              </h1>
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
                to="/contacto/privacidad"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Aviso de Privacidad
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-background">
          <div className="container px-4 md:px-6">
            <img src="/public/assets/hero-bg.png" alt="image" />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-muted">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">
                Envíanos un mensaje
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl dark:text-muted-foreground">
                Rellena el formulario a continuación y nos pondremos en contacto
                contigo lo antes posible.
              </p>
            </div>
            <form className="w-full max-w-md mt-8 space-y-4 bg-white p-6 rounded-lg shadow-lg dark:bg-card dark:text-card-foreground">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-muted-foreground">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    className="border border-input rounded-md py-2 px-4 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu email"
                    className="border border-input rounded-md py-2 px-4 text-sm"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="text-muted-foreground">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Escribe tu mensaje"
                  className="border border-input rounded-md py-2 px-4 text-sm"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Enviar Mensaje
              </Button>
            </form>
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

export default Contacto;
