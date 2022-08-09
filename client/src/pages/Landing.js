import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby fit food truck dreamcatcher shabby chic raclette vegan.
            Pop-up farm-to-table cloud bread letterpress Brooklyn fanny pack
            vaporware crucifix plaid paleo gentrify. Organic church-key viral
            iceland, farm-to-table tumeric cold-pressed four dollar toast. Umami
            tbh seitan, banjo raclette succulents lo-fi cardigan.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
