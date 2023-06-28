import "./Button.css";
import { useState } from "react";

const Botton = () => {
  const [showInfo, setShowInfo] = useState(false);
  const branch = {
    creazioneBranch: {
      category: "Creazione branch",
      commands: ["git branch <nome_branch>", "git checkout -b <nome_branch>"],
      description:
        "Questi comandi vengono utilizzati per creare un nuovo branch nel repository Git.",
    },
    visualizzazioneBranch: {
      category: "Visualizzazione branch",
      commands: ["git branch", "git branch -a"],
      description:
        "Questi comandi vengono utilizzati per visualizzare l'elenco dei branch nel repository Git.",
    },
    cambioBranch: {
      category: "Cambio branch",
      commands: ["git checkout <nome_branch>"],
      description:
        "Questo comando permette di passare al branch specificato nel repository Git.",
    },
  };

  const showValue = () => {
    setShowInfo(true);
  };
  return (
    <div className="Botton">
      <button onClick={showValue} className="button_branch">
        branch
      </button>
      {showInfo && (
        <div className="Card">
          {Object.values(branch).map((item) => (
            <div key={item.category}>
              <h2>{item.category}</h2>
              <ul>
                {item.commands.map((command, index) => (
                  <li key={index}>{command}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Botton;
