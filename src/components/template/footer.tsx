export const Footer = () => {
  return (
    <footer className="border-border bg-background/80 text-foreground w-full border-t backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-14 md:flex-row md:justify-between">
        {/* LOGO E DESCRIÇÃO */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h2 className="text-primary text-2xl font-bold tracking-tight">
            Finance AI
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Sua plataforma inteligente para controle financeiro pessoal e
            profissional. Acompanhe receitas, gastos e investimentos com
            relatórios inteligentes e automação.
          </p>
        </div>

        {/* LINKS DE NAVEGAÇÃO */}
        <nav
          aria-label="Links do rodapé"
          className="grid grid-cols-2 gap-10 md:w-1/3 md:grid-cols-3"
        >
          <div>
            <h3 className="text-muted mb-3 text-xs font-semibold tracking-wider uppercase">
              Produto
            </h3>
            <ul className="space-y-2 text-sm">
              {["Visão Geral", "Recursos", "Preços", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-muted mb-3 text-xs font-semibold tracking-wider uppercase">
              Empresa
            </h3>
            <ul className="space-y-2 text-sm">
              {["Sobre Nós", "Carreiras", "Blog", "Contato"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-muted mb-3 text-xs font-semibold tracking-wider uppercase">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              {["Termos de Uso", "Privacidade", "Cookies"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* CONTATO E REDES SOCIAIS */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h3 className="text-muted text-xs font-semibold tracking-wider uppercase">
            Contato
          </h3>

          <div className="text-muted space-y-1 text-sm">
            <p>
              <strong className="text-foreground">Email:</strong>{" "}
              <a
                href="mailto:contato@financeai.com"
                className="hover:text-primary transition-colors"
              >
                contato@financeai.com
              </a>
            </p>
            <p>
              <strong className="text-foreground">Telefone:</strong>{" "}
              <a
                href="tel:+5585999999999"
                className="hover:text-primary transition-colors"
              >
                (85) 9 9999-9999
              </a>
            </p>
          </div>

          <div className="flex gap-5 pt-4 text-xl" aria-hidden>
            {[
              { icon: "ri-linkedin-box-fill", href: "#" },
              { icon: "ri-instagram-fill", href: "#" },
              { icon: "ri-twitter-x-fill", href: "#" },
              { icon: "ri-github-fill", href: "#" },
            ].map(({ icon, href }) => (
              <a
                key={icon}
                href={href}
                className="hover:text-primary transition-colors"
                aria-label={icon.replace("ri-", "").replace("-fill", "")}
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-border text-muted border-t py-6 text-center text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">Finance AI</span>. Todos os
        direitos reservados.
      </div>
    </footer>
  );
};
