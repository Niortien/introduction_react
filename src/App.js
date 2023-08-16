import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="" method="post">
        <div>
        <label for="nom">Votre nom</label>
        <input type="text" id="nom" name="nom" placeholder="votre nom" require/>
        </div>
        <div>
        <label for="email">Votre e-mail</label>
        <input type="email" id="email" name="email" placeholder="Email@mail.com" required />
        </div>
        <div>
        <label for="sujet">Quel est le sujet de votre message ?</label>
        <select name="sujet" id="sujet" required>
        <option value="" >Choisissez le sujet de votre message</option>
        <option value="probleme-compte">Problème avec mon compte</option>
        <option value="question-produit">Question à propos d’un produit</option>
        <option value="suivi-commande">Suivi de ma commande</option>
        <option value="autre">Autre...</option>
        </select>
        </div>
        <div>
        <label for="message">Votre message</label>
        <textarea id="message" name="message" placeholder="votre message" required></textarea>
        </div>
        <div>
        <button type="submit">Envoyer mon message</button>
        </div>
        </form>
    </div>
  );
}

export default App;
