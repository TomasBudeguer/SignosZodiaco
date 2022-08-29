import { validarElemento, validarFecha } from "./helpers.js";

window.infoCapricornio = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textCapricornio = `<div class="mt-3">
<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="./img/horoscopo-capricornio.jpg"
                class="img-fluid rounded-start"
                alt="capricornio"
              />
            </div>
            <div class="col-md-8 backgroundDiv">
              <div class="card-body">
                <h3 class="card-title text-dark text-justify">Capricornio</h3>
                <p class="card-text ">
                  Capricornio es un signo cardinal y de tierra, y uno de los
                  signos del zodíaco más constante, sólido y apacible. También
                  se caracteriza por ser prudente y práctico en todos los
                  asuntos que le conciernen. Sus aspectos más negativos tienden
                  hacia el pesimismo, la fijeza y la melancolía. En general, son
                  personas trabajadoras, responsables y dispuestas a persistir
                  lo que haga falta para conseguir su objetivo.
                </p>
              </div>
            </div>
          </div>
        </div>
<button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
</div>`;
  contenedor.innerHTML += textCapricornio;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoAcuario = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textAcuario = `<div class="mt-3">
<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="./img/horoscopo-Acuario.jpg"
                class="img-fluid rounded-start"
                alt="Acuario"
              />
            </div>
            <div class="col-md-8 backgroundDiv">
              <div class="card-body text-justify">
                <h3 class="card-title text-dark ">Acuario</h3>
                <p class="card-text">
                Acuario es un signo fijo y de aire, y sin duda, es el signo con mayor capacidad para la invención de toda la rueda zodiacal. Simpático, original y brillante, Acuario también es un signo muy humanitario, al mismo tiempo que independiente e intelectual. Sus puntos negativos se encuentran en su inestabilidad e imprecisión y en su tendencia a llevar la contraria casi por sistema.
                </p>
              </div>
            </div>
          </div>
        </div>
<button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
</div>`;
  contenedor.innerHTML += textAcuario;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoPiscis = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textPiscis = `<div class="mt-3">
  <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="./img/horoscopo-Piscis.jpg"
                  class="img-fluid rounded-start"
                  alt="Piscis"
                />
              </div>
              <div class="col-md-8 backgroundDiv">
                <div class="card-body text-justify">
                  <h3 class="card-title text-dark">Piscis</h3>
                  <p class="card-text ">
                  Piscis es un signo mutable y de agua, también es el último signo del zodiaco, precisamente por eso, es el más rico y complejo de todos. Sensible ante el sufrimiento de los demás, responde con buena voluntad y ganas de ayudar. No le gusta sentirse preso y ni respeta las convenciones, así, por las buenas, aunque tampoco tiende a luchar contra lo establecido, sencillamente, discurre por otro lado
                  </p>
                </div>
              </div>
            </div>
          </div>
  <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
  </div>`;
  contenedor.innerHTML += textPiscis;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoAries = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textAries = `<div class="mt-3">
  <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="./img/horoscopo-Aries.jpg"
                  class="img-fluid rounded-start"
                  alt="Aries"
                />
              </div>
              <div class="col-md-8 backgroundDiv">
                <div class="card-body text-justify">
                  <h3 class="card-title text-dark ">Aries</h3>
                  <p class="card-text ">
                  Aries forma parte de los signos cardinales y al mismo tiempo es un signo de fuego; también es el primer signo del zodíaco, precisamente por eso, simboliza el inicio, la creación. Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas.Los Aries son de acción rápida y confían en su poder, por ello no pierden su tiempo
                  </p>
                </div>
              </div>
            </div>
          </div>
  <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
  </div>`;
  contenedor.innerHTML += textAries;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoTauro = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textTauro = `<div class="mt-3">
    <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="/img/Tauro-horoscopo.jpeg"
                    class="img-fluid rounded-start"
                    alt="Tauro"
                  />
                </div>
                <div class="col-md-8 backgroundDiv">
                  <div class="card-body text-justify">
                    <h3 class="card-title text-dark ">Tauro</h3>
                    <p class="card-text ">
                    Tauro pertenece a los signos fijos y simultáneamente es un signo de tierra. La proyección del Sol en su nacimiento suele influir para que sean personas firmes, decididas y constantes en varios sentidos. También adoran sentir seguridad, por eso la buscan tanto, es como una necesidad constante en sus vidas. Un Tauro es un ser decidido, pragmático y tiene una enorme fuerza de voluntad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
    </div>`;
  contenedor.innerHTML += textTauro;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoGeminis = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textGeminis = `<div class="mt-3">
      <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="./img/horoscopo-Geminis.jpg"
                      class="img-fluid rounded-start"
                      alt="Geminis"
                    />
                  </div>
                  <div class="col-md-8 backgroundDiv">
                    <div class="card-body text-justify">
                      <h3 class="card-title text-dark ">Geminis</h3>
                      <p class="card-text ">
                      Géminis es un signo mutable que forma parte del elemento aire; como signo de los gemelos, su carácter es doble y bastante contradictorio por complejo. Por una parte es capaz de adaptarse con facilidad y rapidez a todo, pero por otra puede resultar hipócrita. Su distintivo común es la comunicación y el ingenio.Los Géminis son personas inquietas que empiezan nuevos proyectos y retos con mucho entusiasmo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
      </div>`;
  contenedor.innerHTML += textGeminis;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoCancer = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textCancer = `<div class="mt-3">
      <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="/img/horoscopo-cancerpng.webp"
                      class="img-fluid rounded-start"
                      alt="Cancer"
                    />
                  </div>
                  <div class="col-md-8 backgroundDiv">
                    <div class="card-body">
                      <h3 class="card-title text-dark text-start">Cancer</h3>
                      <p class="card-text ">
                      Cáncer es un signo cardinal y comprendido dentro de los signos de agua. De los signos zodiacales, su carácter es el menos claro; puede ser desde retraído, insociable y pelma, hasta deslumbrante, atractivo y admirado por los demás. A veces es demasiado soñador, por eso equivoca el mundo real con la utopía que ha construido en su cabeza: el refugio de las fantasías que adora.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
      </div>`;
  contenedor.innerHTML += textCancer;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoLeo = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textLeo = `<div class="mt-3">
    <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="./img/horoscopo-Leo.jpg"
                    class="img-fluid rounded-start"
                    alt="Leo"
                  />
                </div>
                <div class="col-md-8 backgroundDiv">
                  <div class="card-body text-justify">
                    <h3 class="card-title text-dark ">Leo</h3>
                    <p class="card-text ">
                    El signo de Leo es fijo y de fuego, también el signo más dominante del zodíaco. Creativo y abierto, tiene ambición, valor, fuerza, autonomía y total seguridad en sí mismo: sabe dónde quiere llegar y nada ni nadie podrá evitarlo. En contrapartida, sus puntos negativos pueden ser tantos como las virtudes que tiene: vanidad, egocentrismo, arrogancia, impostura y un genio de mil demonios, entre otros defectos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
    </div>`;
  contenedor.innerHTML += textLeo;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoVirgo = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textVirgo = `<div class="mt-3">
      <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="./img/horoscopo-Virgo.jpg"
                      class="img-fluid rounded-start"
                      alt="Virgo"
                    />
                  </div>
                  <div class="col-md-8 backgroundDiv">
                    <div class="card-body text-justify">
                      <h3 class="card-title text-dark ">Virgo</h3>
                      <p class="card-text ">
                      Virgo es un signo mutable y de tierra; representado por una virgen, es un signo caracterizado por su espíritu crítico, precisión, reserva, paciencia y convencionalismo. También es lógico, metódico y aplicado, le gusta aprender y es capaz de analizar las situaciones más complejas con una claridad pasmosa. Como es el perfeccionista del zodíaco, de vez en cuando cae en obsesiones de todo tipo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
      </div>`;
  contenedor.innerHTML += textVirgo;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoLibra = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textLibra = `<div class="mt-3">
      <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="./img/horoscopo-Libra.jpg"
                      class="img-fluid rounded-start"
                      alt="Libra"
                    />
                  </div>
                  <div class="col-md-8 backgroundDiv">
                    <div class="card-body text-justify">
                      <h3 class="card-title text-dark ">Libra</h3>
                      <p class="card-text ">
                      Libra es un signo cardinal y de aire, se encuentra además entre los signos más refinados del zodíaco; tiene elegancia, encanto, diplomacia y buen gusto, ama la belleza, es muy curioso por naturaleza y odia los conflictos. Sus puntos negativos a veces son la frivolidad y un carácter voluble. Arquetipo: la balanza, símbolo de justicia, presentan un sentido de la ecuanimidad y la tolerancia muy desarrollado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
      </div>`;
  contenedor.innerHTML += textLibra;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoEscorpio = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textEscorpio = `<div class="mt-3">
        <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="./img/horoscopo-Escorpio.jpg"
                        class="img-fluid rounded-start"
                        alt="Escorpio"
                      />
                    </div>
                    <div class="col-md-8 backgroundDiv">
                      <div class="card-body text-justify">
                        <h3 class="card-title text-dark ">Escorpio</h3>
                        <p class="card-text ">
                        Escorpio es un signo fijo y de agua; su potencia y energía emocional son únicas en todo el zodíaco. Tiene mucha imaginación e intuición, además de una gran capacidad para el análisis, fuerza de voluntad y firmeza, aunque también es muy sensible y emocional consigo mismo y con el entorno.nEscorpio desea ejercer el control, acumulando poder; suele tener una profunda inteligencia fruto de su concentración.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
        <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
        </div>`;
  contenedor.innerHTML += textEscorpio;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

window.infoSagitario = function (contenedor) {
  let infoSigno = document.querySelector("#infoSigno");
  let textSagitario = `<div class="mt-3">
          <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src="./img/horoscopo-Sagitario.jpg"
                          class="img-fluid rounded-start"
                          alt="Sagitario"
                        />
                      </div>
                      <div class="col-md-8 backgroundDiv">
                        <div class="card-body text-justify ">
                          <h3 class="card-title text-dark ">Sagitario</h3>
                          <p class="card-text ">
                          Sagitario pertenece a los signos mutables y su elemento es el fuego; es uno de los signos más resplandecientes y positivos del zodíaco. También es versátil, adora las aventuras y buscar nuevos horizontes, ya que tiene una mente abierta a nuevas ideas y experiencias y mantiene una actitud decidida ante la adversidad; además, frecuentemente la suerte le acompaña.
                        </div>
                      </div>
                    </div>
                  </div>
          <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
          </div>`;
  contenedor.innerHTML += textSagitario;
  window.ocultar = function () {
    contenedor.removeChild(contenedor.children[0]);
  };
};

let fechaNacimiento = document.querySelector("#fechaNacimiento");
let selectElemento = document.querySelector("#selectElemento");

let formFecha = document.querySelector("#formFecha");
let selectFecha = document.querySelector("#fechaNacimiento");
let infoFecha = document.querySelector("#infoFecha");

let formElemento = document.querySelector("#formElemento");
let infoElemento = document.querySelector("#infoElemento");

formFecha.addEventListener("submit", mostrarSigno);

formElemento.addEventListener("submit", mostrarElemento);

fechaNacimiento.addEventListener("blur", () => {
  validarFecha(fechaNacimiento);
});

selectElemento.addEventListener("blur", () => {
  validarElemento(selectElemento);
});

function mostrarSigno(e) {
  e.preventDefault();
  if (validarFecha(fechaNacimiento)) {
    if (selectFecha.value == 1) {
      infoCapricornio(infoFecha);
    } else if (selectFecha.value == 2) {
      infoAcuario(infoFecha);
    } else if (selectFecha.value == 3) {
      infoPiscis(infoFecha);
    } else if (selectFecha.value == 4) {
      infoAries(infoFecha);
    } else if (selectFecha.value == 5) {
      infoTauro(infoFecha);
    } else if (selectFecha.value == 6) {
      infoGeminis(infoFecha);
    } else if (selectFecha.value == 7) {
      infoCancer(infoFecha);
    } else if (selectFecha.value == 8) {
      infoLeo(infoFecha);
    } else if (selectFecha.value == 9) {
      infoVirgo(infoFecha);
    } else if (selectFecha.value == 10) {
      infoLibra(infoFecha);
    } else if (selectFecha.value == 11) {
      infoEscorpio(infoFecha);
    } else if (selectFecha.value == 12) {
      infoSagitario(infoFecha);
    }
    limpiarFormFecha()
  } else {
    Swal.fire({
      icon: "error",
      title: "Seleccione una fecha!",
      text: "Ninguna fecha seleccionada",
    });
  }
}

function mostrarElemento(e) {
  e.preventDefault();
  if (validarElemento(selectElemento)) {
    if (selectElemento.value == "agua") {
      let textAgua = `<div class="row">
            <aside class="col-sm-12 col-md-4 col-lg-4">
                <img src="img/elementos/agua.png" alt="Agua" class="w-100">
            </aside>
            <aside class="col-sm-12 col-md-4 col-lg-4 text-center"><ul>
                <li class="mt-5"><h3>Cancer</h3></li>
                <li class="my-4"><h3>Escorpio</h3></li>
                <li><h3>Piscis</h3></li>
            </ul></aside>
            <aside class="col-sm-12 col-md-4 col-lg-4"><h4>Los empáticos: Las personas agua se caracterizan por aportar amor, protección, vida, sensibilidad y empatía. Además, el agua se caracteriza por purificar, limpiar, dar vida y devolver la paz. También son intuitivos, compasivos y resonantes. Se comprometen en sus relaciones personales y en sus proyectos. Sin embargo, son personas influenciables y apegados.</h4></aside>
            <div><button class="btn btn-danger" onclick="ocultar()">Ocultar</button></div>
            </div>`;
      infoElemento.innerHTML += textAgua;
      window.ocultar = function () {
        infoElemento.removeChild(infoElemento.children[0]);
      };
    } else if (selectElemento.value == "fuego") {
      let textFuego = `<div class="row">
            <aside class="col-sm-12 col-md-4 col-lg-4">
                <img src="img/elementos/fuego.png" alt="fuego" class="w-100">
            </aside>
            <aside class="col-sm-12 col-md-4 col-lg-4 text-center"><ul>
                <li class="mt-5"><h3>Aries</h3></li>
                <li class="my-3"><h3>Leo</h3></li>
                <li><h3>Sagitario</h3></li>
            </ul></aside>
            <aside class="col-sm-12 col-md-4 col-lg-4"><h4>Los pasionales: Las personas fuego se caracterizan por ser fuente de luz. Siempre están activos y vitales. Aportan pasión y, además, alegría. Asimismo, tienen un estilo histriónico lo cual llama la atención de las demás personas. También son creativos, expresivos, sinceros y son capaces de mostrar el camino correcto.</h4></aside>
            <div><button class="btn btn-danger" onclick="ocultar()">Ocultar</button></div>
            </div>`;
      infoElemento.innerHTML += textFuego;
      window.ocultar = function () {
        infoElemento.removeChild(infoElemento.children[0]);
      };
    } else if (selectElemento.value == "tierra") {
      let textTierra = `<div class="row">
            <aside class="col-sm-12 col-md-4 col-lg-4">
                <img src="img/elementos/tierra.png" alt="tierra" class="w-100">
            </aside>
            <aside class="col-sm-12 col-md-4 col-lg-4 text-center"><ul>
                <li class="mt-5"><h3>Tauro</h3></li>
                <li class="my-3"><h3>Virgo</h3></li>
                <li><h3>Capricornio</h3></li>
            </ul></aside>
            <aside class="col-sm-12 col-md-4 col-lg-4"><h4>Los sensatos: Las persona tierra se caracterizan por ser estables y seguros. Estas personas aportan estabilidad y compromiso. Su ser es completo y le permite el crecimiento en cualquier ámbito. Además, son realistas, organizados, perseverantes y sensatos. Sin embargo, son personas muy reservadas, observadoras y calladas por lo que les cuesta mucho expresar lo que sienten.</h4></aside>
            <div><button class="btn btn-danger" onclick="ocultar()">Ocultar</button></div>
            </div>`;
      infoElemento.innerHTML += textTierra;
      window.ocultar = function () {
        infoElemento.removeChild(infoElemento.children[0]);
      };
    } else if (selectElemento.value == "aire") {
      let textAire = `<div class="row">
            <aside class="col-sm-12 col-md-4 col-lg-4">
                <img src="img/elementos/aire.png" alt="aire" class="w-100">
            </aside>
            <aside class="col-sm-12 col-md-4 col-lg-4 text-center"><ul>
                <li class="mt-5"><h3>Geminis</h3></li>
                <li class="my-4"><h3>Libra</h3></li>
                <li><h3>Acuario</h3></li>
            </ul></aside>
            <aside class="col-sm-12 col-md-4 col-lg-4"><h4>Los visionarios: Las personas aire se identifican por ser ligeros, sutiles, sociales y ágiles. Tienen una mirada impactante. Son comunicativos y la sabiduría, los sonidos y las palabras de alientos son sus fortalezas. Valoran el equipo en trabajo y son visionarios. Tienen una mente abierta lo cual les permite analizar con mayor claridad las diferentes situaciones que deben vivir.</h4></aside>
            <div><button class="btn btn-danger" onclick="ocultar()">Ocultar</button></div>
            </div>`;
      infoElemento.innerHTML += textAire;
      window.ocultar = function () {
        infoElemento.removeChild(infoElemento.children[0]);
      };
    }
    limpiarFormElemento()
  } else {
    Swal.fire({
      icon: "error",
      title: "Seleccione un elemento!",
      text: "Ningun elemento seleccionado",
    });
  }
}

function limpiarFormFecha(){
  formFecha.reset();
  selectFecha.className = 'form-control'
}

function limpiarFormElemento(){
  formElemento.reset();
  selectElemento.className = 'form-control'
}
