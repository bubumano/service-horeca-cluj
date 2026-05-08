import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoImg from "./assets/logo.png";
import aragazImg from "./assets/aragaz.jpg";
import feliatorSirman1 from "./assets/feliator_Sirman_schimbat_rulmenti.jpg";
import gratar from "./assets/gratar.jpg";
import tigaieBasculanta from "./assets/instalatie_electrica_tigaie_basculanta.jpg";
import aragazMareno from "./assets/reconditionat_aragaz_Mareno.jpg";
import aragazMareno2 from "./assets/reconditionat_aragaz_Mareno2.jpg";
import sistemCulisare from "./assets/reparat_sistem_de_culisare_si_schimbat_rezistenta_Salamandra.jpg";
import rulmentiMotor from "./assets/Schimbat_rulmenti_motor_si_curea_feliator_Sirman.jpg";
import simeringMotor from "./assets/schimbat_rulmenti_simeringuri_motor_si_reductor.jpg";
import heroImg from "./assets/reconditionat_aragaz_Mareno2.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("acasa");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            if (id === "servicii" || id === "despre") {
              setActiveSection("acasa");
            } else {
              setActiveSection(id);
            }
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <header className='sticky top-0 z-50 bg-white shadow-sm'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
          <div className='flex items-center'>
            <img
              src={logoImg}
              alt='Service Horeca Cluj'
              className='h-24 w-auto object-contain'
            />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-2xl md:hidden'
          >
            ☰
          </button>

          <nav className='hidden items-center gap-8 md:flex'>
            {[
              { id: "acasa", label: "Acasă" },
              { id: "galerie", label: "Galerie" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative text-lg font-semibold transition
      ${
        activeSection === item.id
          ? "text-orange-500 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-orange-500"
          : "text-slate-800 hover:text-orange-500"
      }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <nav className='flex flex-col gap-3 border-t px-4 py-4 md:hidden'>
            <a href='#acasa' onClick={() => setMenuOpen(false)}>
              Acasă
            </a>
            <a href='#galerie' onClick={() => setMenuOpen(false)}>
              Galerie
            </a>
            <a href='#contact' onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id='acasa' className='bg-slate-50'>
          <div className='mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2'>
            <div>
              <p className='mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600'>
                Service HoReCa în Cluj-Napoca
              </p>

              <h1 className='text-4xl font-extrabold leading-tight md:text-6xl'>
                Reparații echipamente HoReCa în Cluj-Napoca
              </h1>

              <p className='mt-6 text-lg text-slate-600'>
                Intervenții pentru aragazuri profesionale, feliatoare,
                salamandre, grătare, tigăi basculante și alte echipamente
                folosite în restaurante, hoteluri, cafenele și bucătării
                profesionale.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <a
                  href='#contact'
                  className='rounded-xl bg-orange-500 px-6 py-3 text-center font-semibold text-white hover:bg-orange-600'
                >
                  Cere o intervenție
                </a>

                <a
                  href='#galerie'
                  className='rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold hover:bg-slate-100'
                >
                  Vezi lucrări realizate
                </a>
              </div>
            </div>

            <div className='relative'>
              <div className='absolute -inset-4 rounded-3xl bg-orange-200 blur-2xl'></div>

              <img
                src={heroImg}
                alt='Reparații echipamente HoReCa în Cluj-Napoca'
                className='relative h-[420px] w-full rounded-3xl object-cover shadow-xl'
              />
            </div>
          </div>
        </section>
        <section id='servicii' className='bg-white py-16'>
          <div className='mx-auto max-w-6xl px-4'>
            <div className='max-w-2xl'>
              <h2 className='text-3xl font-bold md:text-4xl'>
                Servicii pentru echipamente HoReCa
              </h2>

              <p className='mt-4 text-slate-600'>
                Oferim diagnosticare, reparații și mentenanță pentru echipamente
                profesionale folosite zilnic în bucătării comerciale.
              </p>
            </div>

            <div className='mt-10 grid gap-6 md:grid-cols-3'>
              {[
                "Reparații aragazuri profesionale",
                "Service feliatoare profesionale",
                "Reparații salamandre și grătare",
                "Instalații electrice echipamente HoReCa",
                "Înlocuire rulmenți, curele și rezistențe",
                "Mentenanță preventivă echipamente bucătărie",
              ].map((service) => (
                <div
                  key={service}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm'
                >
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl'>
                    ✓
                  </div>
                  <h3 className='font-bold'>{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id='despre' className='bg-slate-100 py-16'>
          <div className='mx-auto max-w-6xl px-4'>
            <div className='max-w-2xl'>
              <h2 className='text-3xl font-bold md:text-4xl'>
                De ce să alegi Service Horeca Cluj?
              </h2>

              <p className='mt-4 text-slate-600'>
                Lucrăm cu echipamente profesionale HoReCa și știm cât de
                important este ca bucătăria ta să funcționeze fără întreruperi.
              </p>
            </div>

            <div className='mt-10 grid gap-6 md:grid-cols-3'>
              {[
                {
                  title: "Intervenții rapide",
                  text: "Răspundem prompt solicitărilor din Cluj-Napoca și împrejurimi.",
                },
                {
                  title: "Experiență practică",
                  text: "Reparații realizate pe aragazuri, feliatoare, salamandre, grătare și alte echipamente HoReCa.",
                },
                {
                  title: "Diagnosticare corectă",
                  text: "Identificăm problema și propunem soluția potrivită înainte de intervenție.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className='rounded-2xl bg-white p-6 shadow-sm'
                >
                  <h3 className='text-xl font-bold text-orange-500'>
                    {item.title}
                  </h3>
                  <p className='mt-3 text-slate-600'>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id='galerie' className='scroll-mt-24 bg-white py-16'>
          <div className='mx-auto max-w-6xl px-4'>
            <div className='max-w-2xl'>
              <h2 className='text-3xl font-bold md:text-4xl'>
                Galerie lucrări
              </h2>
              <p className='mt-4 text-slate-600'>
                Exemple de echipamente HoReCa pentru care oferim diagnosticare,
                reparații și mentenanță în Cluj-Napoca.
              </p>
            </div>

            <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  title: "Reparație aragaz profesional",
                  text: "Diagnosticare și reglaj pentru arzătoare și instalații de gaz la echipamente HoReCa.",
                  image: aragazImg,
                },

                {
                  title: "Feliator Sirman – schimb rulmenți",
                  text: "Înlocuire rulmenți și mentenanță pentru feliatoare profesionale Sirman.",
                  image: feliatorSirman1,
                },

                {
                  title: "Grătar profesional HoReCa",
                  text: "Service și recondiționare pentru grătare și echipamente profesionale de gătit.",
                  image: gratar,
                },

                {
                  title: "Tigaie basculantă – instalație electrică",
                  text: "Reparații instalații electrice pentru tigăi basculante profesionale.",
                  image: tigaieBasculanta,
                },

                {
                  title: "Recondiționare aragaz Mareno",
                  text: "Curățare, reglaj și reparații pentru aragazuri profesionale Mareno.",
                  image: aragazMareno,
                },

                {
                  title: "Service echipamente Mareno",
                  text: "Intervenții rapide pentru aragazuri și echipamente profesionale HoReCa.",
                  image: aragazMareno2,
                },

                {
                  title: "Salamandră profesională – schimb rezistență",
                  text: "Reparație sistem de culisare și înlocuire rezistență pentru salamandre profesionale.",
                  image: sistemCulisare,
                },

                {
                  title: "Motor feliator Sirman",
                  text: "Schimb curea și rulmenți pentru motoare de feliatoare profesionale.",
                  image: rulmentiMotor,
                },

                {
                  title: "Reparație motor și reductor",
                  text: "Înlocuire rulmenți, simeringuri și reparații reductoare pentru echipamente HoReCa.",
                  image: simeringMotor,
                },
              ].map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md'
                >
                  <img
                    src={item.image}
                    alt={`${item.title} în Cluj-Napoca`}
                    loading='lazy'
                    className='h-56 w-full rounded-xl object-cover'
                  />

                  <h3 className='mt-5 text-xl font-bold'>{item.title}</h3>
                  <p className='mt-3 text-slate-600'>{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id='contact'
          className='scroll-mt-24 bg-slate-900 py-16 text-white'
        >
          <div className='mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2'>
            <div>
              <p className='mt-4 text-slate-300'>
                Ai un echipament HoReCa defect? Sună-ne sau trimite-ne un mesaj,
                iar noi revenim cu detalii pentru diagnosticare și intervenție.
              </p>

              <div className='mt-8 space-y-4'>
                <p>
                  Telefon:{" "}
                  <a
                    href='tel:0785104855'
                    className='font-bold text-orange-400'
                  >
                    0785 104 855
                  </a>
                </p>

                <p>
                  Email:{" "}
                  <a
                    href='mailto:servicehorecacluj@yahoo.com'
                    className='font-bold text-orange-400'
                  >
                    servicehorecacluj@yahoo.com
                  </a>
                </p>

                <p>
                  Zonă acoperită:{" "}
                  <strong className='text-orange-400'>
                    Cluj-Napoca și împrejurimi
                  </strong>
                </p>
              </div>
            </div>

            <div className='rounded-2xl bg-white p-6 text-slate-900 shadow-lg'>
              <h3 className='text-2xl font-bold'>Contact rapid</h3>

              <p className='mt-4 text-slate-600'>
                Trimite-ne poze cu echipamentul direct pe WhatsApp pentru o
                evaluare rapidă.
              </p>

              <div className='mt-8 flex flex-col gap-4'>
                <a
                  href='https://wa.me/40785104855?text=Buna,%20am%20nevoie%20de%20service%20pentru%20un%20echipament%20HoReCa.'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-xl bg-green-500 px-6 py-4 text-center font-bold text-white transition hover:bg-green-600'
                >
                  Trimite mesaj pe WhatsApp
                </a>

                <a
                  href='tel:07xxxxxxxx'
                  className='rounded-xl bg-orange-500 px-6 py-4 text-center font-bold text-white transition hover:bg-orange-600'
                >
                  Sună acum
                </a>
              </div>

              <div className='mt-8 rounded-xl bg-slate-100 p-4'>
                <p className='font-semibold'>Program:</p>

                <p className='mt-2 text-slate-600'>
                  Luni - Vineri: 08:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className='border-t border-slate-800 bg-slate-950 py-8 text-slate-300'>
          <div className='mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3'>
            <div>
              <h3 className='text-xl font-bold text-white'>
                Service Horeca Cluj
              </h3>

              <p className='mt-3 text-sm leading-7 text-slate-400'>
                Reparații echipamente HoReCa în Cluj-Napoca: aragazuri
                profesionale, salamandre, feliatoare, grătare și alte
                echipamente pentru restaurante și bucătării profesionale.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-white'>Contact</h4>

              <div className='mt-3 space-y-2 text-sm text-slate-400'>
                <p>Telefon: 0785 104 855</p>
                <p>Email: servicehorecacluj@yahoo.com</p>
                <p>Cluj-Napoca, România</p>
              </div>
            </div>

            <div>
              <h4 className='font-bold text-white'>Program</h4>

              <div className='mt-3 text-sm text-slate-400'>
                <p>Luni - Vineri</p>
                <p>08:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className='mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500'>
            © {new Date().getFullYear()} Service Horeca Cluj. Toate drepturile
            rezervate.
          </div>
        </footer>
      </main>
      <a
        href='https://wa.me/40785104855?text=Buna,%20am%20nevoie%20de%20service%20pentru%20un%20echipament%20HoReCa'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-green-600'
      >
        <span className='text-2xl'>💬</span>
        WhatsApp
      </a>
    </div>
  );
}

export default App;
