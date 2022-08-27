window.infoCapricornio = function () {
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
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title text-dark text-start">Capricornio</h3>
                <p class="card-text text-start">
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
  infoSigno.innerHTML += textCapricornio;
  console.log(infoSigno.children[0]);
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoAcuario = function () {
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
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title text-dark text-start">Acuario</h3>
                <p class="card-text text-start">
                Acuario es un signo fijo y de aire, y sin duda, es el signo con mayor capacidad para la invención de toda la rueda zodiacal. Simpático, original y brillante, Acuario también es un signo muy humanitario, al mismo tiempo que independiente e intelectual. Sus puntos negativos se encuentran en su inestabilidad e imprecisión y en su tendencia a llevar la contraria casi por sistema.
                </p>
              </div>
            </div>
          </div>
        </div>
<button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
</div>`;
  infoSigno.innerHTML += textAcuario;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoPiscis = function () {
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
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title text-dark text-start">Piscis</h3>
                  <p class="card-text text-start">
                  Piscis es un signo mutable y de agua, también es el último signo del zodiaco, precisamente por eso, es el más rico y complejo de todos. Sensible ante el sufrimiento de los demás, responde con buena voluntad y ganas de ayudar. No le gusta sentirse preso y ni respeta las convenciones, así, por las buenas, aunque tampoco tiende a luchar contra lo establecido, sencillamente, discurre por otro lado
                  </p>
                </div>
              </div>
            </div>
          </div>
  <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
  </div>`;
  infoSigno.innerHTML += textPiscis;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoAries = function () {
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
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title text-dark text-start">Aries</h3>
                  <p class="card-text text-start">
                  Aries forma parte de los signos cardinales y al mismo tiempo es un signo de fuego; también es el primer signo del zodíaco, precisamente por eso, simboliza el inicio, la creación. Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas.Los Aries son de acción rápida y confían en su poder, por ello no pierden su tiempo
                  </p>
                </div>
              </div>
            </div>
          </div>
  <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
  </div>`;
  infoSigno.innerHTML += textAries;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoTauro = function () {
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
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title text-dark text-start">Tauro</h3>
                    <p class="card-text text-start">
                    Tauro pertenece a los signos fijos y simultáneamente es un signo de tierra. La proyección del Sol en su nacimiento suele influir para que sean personas firmes, decididas y constantes en varios sentidos. También adoran sentir seguridad, por eso la buscan tanto, es como una necesidad constante en sus vidas. Un Tauro es un ser decidido, pragmático y tiene una enorme fuerza de voluntad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
    </div>`;
  infoSigno.innerHTML += textTauro;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoGeminis = function () {
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
                  <div class="col-md-8">
                    <div class="card-body">
                      <h3 class="card-title text-dark text-start">Geminis</h3>
                      <p class="card-text text-start">
                      Géminis es un signo mutable que forma parte del elemento aire; como signo de los gemelos, su carácter es doble y bastante contradictorio por complejo. Por una parte es capaz de adaptarse con facilidad y rapidez a todo, pero por otra puede resultar hipócrita. Su distintivo común es la comunicación y el ingenio.Los Géminis son personas inquietas que empiezan nuevos proyectos y retos con mucho entusiasmo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
      </div>`;
  infoSigno.innerHTML += textGeminis;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoCancer = function () {
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
                  <div class="col-md-8">
                    <div class="card-body">
                      <h3 class="card-title text-dark text-start">Cancer</h3>
                      <p class="card-text text-start">
                      Cáncer es un signo cardinal y comprendido dentro de los signos de agua. De los signos zodiacales, su carácter es el menos claro; puede ser desde retraído, insociable y pelma, hasta deslumbrante, atractivo y admirado por los demás. A veces es demasiado soñador, por eso equivoca el mundo real con la utopía que ha construido en su cabeza: el refugio de las fantasías que adora.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
      </div>`;
  infoSigno.innerHTML += textCancer;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoLeo = function () {
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
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title text-dark text-start">Leo</h3>
                    <p class="card-text text-start">
                    El signo de Leo es fijo y de fuego, también el signo más dominante del zodíaco. Creativo y abierto, tiene ambición, valor, fuerza, autonomía y total seguridad en sí mismo: sabe dónde quiere llegar y nada ni nadie podrá evitarlo. En contrapartida, sus puntos negativos pueden ser tantos como las virtudes que tiene: vanidad, egocentrismo, arrogancia, impostura y un genio de mil demonios, entre otros defectos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
    </div>`;
  infoSigno.innerHTML += textLeo;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoVirgo = function () {
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
                  <div class="col-md-8">
                    <div class="card-body">
                      <h3 class="card-title text-dark text-start">Virgo</h3>
                      <p class="card-text text-start">
                      Virgo es un signo mutable y de tierra; representado por una virgen, es un signo caracterizado por su espíritu crítico, precisión, reserva, paciencia y convencionalismo. También es lógico, metódico y aplicado, le gusta aprender y es capaz de analizar las situaciones más complejas con una claridad pasmosa. Como es el perfeccionista del zodíaco, de vez en cuando cae en obsesiones de todo tipo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
      </div>`;
  infoSigno.innerHTML += textVirgo;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoLibra = function () {
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
                  <div class="col-md-8">
                    <div class="card-body">
                      <h3 class="card-title text-dark text-start">Libra</h3>
                      <p class="card-text text-start">
                      Libra es un signo cardinal y de aire, se encuentra además entre los signos más refinados del zodíaco; tiene elegancia, encanto, diplomacia y buen gusto, ama la belleza, es muy curioso por naturaleza y odia los conflictos. Sus puntos negativos a veces son la frivolidad y un carácter voluble. Arquetipo: la balanza, símbolo de justicia, presentan un sentido de la ecuanimidad y la tolerancia muy desarrollado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
      </div>`;
  infoSigno.innerHTML += textLibra;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoEscorpio = function () {
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
                    <div class="col-md-8">
                      <div class="card-body">
                        <h3 class="card-title text-dark text-start">Escorpio</h3>
                        <p class="card-text text-start">
                        Escorpio es un signo fijo y de agua; su potencia y energía emocional son únicas en todo el zodíaco. Tiene mucha imaginación e intuición, además de una gran capacidad para el análisis, fuerza de voluntad y firmeza, aunque también es muy sensible y emocional consigo mismo y con el entorno.nEscorpio desea ejercer el control, acumulando poder; suele tener una profunda inteligencia fruto de su concentración.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
        <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
        </div>`;
  infoSigno.innerHTML += textEscorpio;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};

window.infoSagitario = function () {
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
                      <div class="col-md-8">
                        <div class="card-body">
                          <h3 class="card-title text-dark text-start">Sagitario</h3>
                          <p class="card-text text-start">
                          Sagitario pertenece a los signos mutables y su elemento es el fuego; es uno de los signos más resplandecientes y positivos del zodíaco. También es versátil, adora las aventuras y buscar nuevos horizontes, ya que tiene una mente abierta a nuevas ideas y experiencias y mantiene una actitud decidida ante la adversidad; además, frecuentemente la suerte le acompaña.
                        </div>
                      </div>
                    </div>
                  </div>
          <button class="btn btn-danger" onclick="ocultar()">Ocultar</button>
          </div>`;
  infoSigno.innerHTML += textSagitario;
  window.ocultar = function () {
    infoSigno.removeChild(infoSigno.children[0]);
  };
};
