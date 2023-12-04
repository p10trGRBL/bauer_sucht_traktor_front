import { Button, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";

function Home() {
  let navigate = useNavigate();
  const handleClick = () => navigate("/tractors");
  const handleRegister = () => navigate("/register");
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <div>
      <div className="bg-[url('/bb_4tractors.jpg')] bg-cover bg-center bg-no-repeat min-h-[50vh] flex flex-col place-items-center justify-center ">
        <div className="backdrop-blur-md rounded-md  border-[1px] text-gray-300 p-10 w-5/6 md:w-2/3  md:p-20 text-center mb-16">
          <h1>Bauer sucht Traktor </h1>
          <h2>Dein AirBnB für Landmaschinen </h2>
          <h3>Miete und Vermiete Trecker, Technik und mehr...</h3>
        </div>
        <div className="relative">
          <Button
            className="hover:scale-125"
            content="Angebote anschauen"
            color="yellow"
            onClick={handleClick}
          />
          <div className="text-white text-xl md:text-2xl absolute my-5 p-0 top-8 start-20 animate-ping">
            <Icon name="hand point up" />
          </div>
        </div>
      </div>
      <div className="m-20 text-center text-lg text-md sm:text-xl md:text-2xl">
        <h2 className="mb-8">Miete und vermiete Landmaschinen mühelos </h2>
        <div className="md:w-1/2 m-auto">
          Revolutioniere deine Landwirtschaftsbedürfnisse – Unsere Plattform
          bietet eine bequeme Möglichkeit, Traktoren zu mieten oder deine
          eigenen Maschinen zu vermieten. Entdecke die Landwirtschaft 2.0 noch
          heute!
        </div>

        <h2 className="mt-8">Probiere es jetzt aus!</h2>
        {isLoggedIn ? (
          ""
        ) : (
          <Button
            className="hover:scale-125"
            content="Jetzt Registrieren"
            color="olive"
            onClick={handleRegister}
          />
        )}
      </div>

      <div className="bg-[url('/bb_harvest.jpeg')] bg-cover bg-no-repeat min-h-screen bg-center bg-fixed flex flex-col justify-center">
        <div className="m-5 md:m-20 md:p-20 text-center backdrop-blur-md rounded-md border-[1px] text-gray-800">
          <h2 className="p-10 md:p-0 md:mb-16">Vorteile für Mieter</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="text-sm md:text-md lg:text-lg mt-10">
              <Icon name="euro" size="big" />
              <h3>Kosteneffizienz:</h3>
              <div className="md:w-1/2 m-auto">
                {" "}
                Durch die Miete anstelle des Kaufs von Landmaschinen können
                Landwirte kurzfristige Bedürfnisse decken, ohne hohe
                Anschaffungskosten tragen zu müssen. Dies ermöglicht eine
                bessere Budgetplanung und Ressourcennutzung.{" "}
              </div>
            </div>
            <div className="text-sm md:text-md lg:text-lg mt-10">
              <Icon name="options" size="big" />
              <h3>Vielfalt an Optionen:</h3>
              <div className="md:w-1/2 m-auto">
                Unsere Plattform bietet eine breite Palette von Traktoren und
                Landmaschinen verschiedener Modelle und Größen. Landwirte können
                somit genau die Maschine wählen, die ihren spezifischen
                Anforderungen am besten entspricht, sei es für bestimmte
                Feldarbeiten oder Projekte.{" "}
              </div>
            </div>
            <div className="text-sm md:text-md lg:text-lg mt-10">
              <Icon name="clipboard check" size="big" />
              <h3>Flexibilität und Aktualität:</h3>
              <div className="md:w-1/2 m-auto">
                Durch die Miete haben Landwirte Zugang zu modernster Technologie
                und können ihre Maschinen je nach Bedarf aktualisieren. Dies
                ermöglicht eine effizientere und produktivere Landwirtschaft, da
                stets auf die neuesten Innovationen zugegriffen werden kann,
                ohne eine langfristige Investition zu tätigen.
              </div>
            </div>
          </div>

          <h2 className="p-10 md:p-0 md:mb-16">Vorteile für Vermieter</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="text-sm md:text-md lg:text-lg mt-10">
              <Icon name="money" size="big" />
              <h3>Zusätzliche Einnahmen generieren:</h3>
              <div className="md:w-1/2 m-auto">
                {" "}
                Als Trecker-Vermieter haben Landmaschinenbesitzer die
                Möglichkeit, zusätzliche Einnahmen zu erzielen, indem sie ihre
                Maschinen vermieten. Dies kann dazu beitragen, die
                Betriebskosten zu decken oder sogar einen Gewinn zu erzielen,
                insbesondere wenn die Maschinen nicht ständig in Gebrauch sind.{" "}
              </div>
            </div>
            <div className="text-sm md:text-md lg:text-lg mt-10">
              <Icon name="calendar check" size="big" />
              <h3>Optimale Auslastung der Ausrüstung:</h3>
              <div className="md:w-1/2 m-auto">
                Die Vermietung ermöglicht es Landmaschinenbesitzern, ihre
                Ausrüstung optimal auszulasten. Wenn eine Maschine nicht für den
                eigenen Betrieb benötigt wird, kann sie an andere Landwirte
                vermietet werden, was dazu beiträgt, die Kosten für den
                Maschinenbesitzer zu minimieren.{" "}
              </div>
            </div>
            <div className="text-sm md:text-md lg:text-lg mt-10">
              <Icon name="handshake" size="big" />
              <h3>Gemeinschaftsaufbau und Netzwerken:</h3>

              <div className="md:w-1/2 m-auto pb-5">
                Durch die Vermietung von Traktoren können Landmaschinenbesitzer
                ihre lokale landwirtschaftliche Gemeinschaft stärken. Das Teilen
                von Ausrüstung fördert nicht nur den Zusammenhalt, sondern
                ermöglicht es Vermietern auch, neue Kontakte zu knüpfen und ihre
                Präsenz in der Landwirtschaftsbranche zu erweitern.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-16">
        <Button
          className="hover:scale-125"
          content="Angebote anschauen"
          color="yellow"
          onClick={handleClick}
        />
      </div>
      <div className="text-center">
        <h2 className="pb-5 mb-10">Das sagen unsere Kunden: </h2>
        <div className="lg:grid lg:grid-cols-1 flex flex-col">
          <div className="lg:flex lg:flex-row-reverse flex flex-col m-auto w-full sm:w-auto">
            <span className="max-w-[640px] max-h-[480px] my-8 md:my-16 lg:my-auto px-5 md:px-10 lg:text-2xl text-xl italic ">
              "Dank dieser Plattform konnte ich genau den Traktor finden, den
              ich für meine speziellen Anforderungen suchte. Die transparenten
              Preise und die unkomplizierte Abwicklung haben mich überzeugt.
              Absolut empfehlenswert!"
              <p className="not-italic font-bold p-5">
                - Markus, begeisterter Landwirt und Trecker-Mieter
              </p>
            </span>
            <img
              src="/bb_GetStoredImage.jpeg"
              alt="Fendt tractor"
              className="max-w-[640px] max-h-[480px]"
            />
          </div>
          <div className="lg:flex lg:flex-row flex flex-col m-auto w-full sm:w-auto">
            <span className="max-w-[640px] max-h-[480px] my-8 md:my-16 lg:my-auto px-5 md:px-10 lg:text-2xl text-xl italic ">
              "Die einfache Buchung und die Vielfalt an verfügbaren Traktoren
              haben meine saisonalen Landwirtschaftsprojekte erheblich
              erleichtert. Top-Service, ich werde definitiv wiederkommen!"
              <p className="not-italic font-bold p-5">
                - Lisa, zufriedene Trecker-Mieterin
              </p>
            </span>
            <img
              src="/bb_nikola.jpeg"
              alt="nikola"
              className="max-w-[640px] max-h-[480px]"
            />
          </div>
          <div className="lg:flex lg:flex-row-reverse flex flex-col m-auto w-full sm:w-auto">
            <span className="max-w-[640px] max-h-[480px] my-8 md:my-16 lg:my-auto px-5 md:px-10 lg:text-2xl text-xl italic ">
              "Als Landmaschinenbesitzer hat die Vermietung meiner Traktoren
              über diese Plattform nicht nur meine Einnahmen gesteigert, sondern
              mir auch geholfen, meine Ausrüstung optimal auszulasten. Die
              Zusammenarbeit mit anderen Landwirten in der Community war äußerst
              bereichernd."{" "}
              <p className="not-italic font-bold p-5">
                - Thomas, zufriedener Trecker-Vermieter
              </p>
            </span>
            <img
              src="/bb_farmer.jpeg"
              alt="Farmer with tractor"
              className="lg:ml-10 max-w-[640px] max-h-[480px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
